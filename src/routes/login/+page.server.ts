import { fail, redirect } from "@sveltejs/kit";
import { credits } from "$lib/storage";
import { get } from "svelte/store";
/**
 * @type {import('./$types').RequestHandler}
 */

let cred: any = get(credits);

export const actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    const data = Object.fromEntries([...formData]);
    // console.log("user data ======", data);
    try {
      const { token, user } = await locals.db
        .collection("users")
        .authWithPassword(data.email, data.password);
      // locals.user = locals.db.authStore.model;
      credits.set({ remaining: cred + 5 }); // update value
    } catch (_) {
      alert(_);
    }
    throw redirect(303, "/");
  },
};
