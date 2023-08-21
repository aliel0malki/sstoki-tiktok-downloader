import PocketBase from "pocketbase";
import { env } from '$env/dynamic/public';
import { redirect } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  event.locals.db = new PocketBase(env.PUBLIC_API_KEY);
	
  // load the store data from the request cookie string
  event.locals.db.authStore.loadFromCookie(
    event.request.headers.get("cookie") || ""
  );

  if (event.locals.db.authStore.isValid) {
    event.locals.user = structuredClone(event.locals.db.authStore.model);
  } else {
    event.locals.user = undefined;
  }

  // Routes Protecting
  if (event.url.pathname.startsWith("/profile")) {
    if (!event.locals.user) {
      throw redirect(303, "/login");
    }
  }

  const response = await resolve(event);

  // send back the default 'db_auth' cookie to the client with the latest store state
  response.headers.append(
    "set-cookie",
    event.locals.db.authStore.exportToCookie()
  );

  return response;
}
