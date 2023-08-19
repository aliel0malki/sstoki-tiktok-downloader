import { fail, redirect } from "@sveltejs/kit";
import { credits } from "$lib/storage";
import { get } from "svelte/store";
// import { goto } from '$app/navigation';

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
      const newUser = await locals.db.collection("users").create(data);
      await locals.db.collection("users").requestVerification(data.email);
      credits.set({ remaining: cred + 10 }); // update value
    } catch (e) {
      console.error(e);
    }
    throw redirect(303, "/login");
    // locals.user = locals.db.authStore.model
  },
};
