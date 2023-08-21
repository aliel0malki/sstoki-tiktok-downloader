import { fail, redirect } from '@sveltejs/kit';

/**
 * @type {import('./$types').RequestHandler}
 */
export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);
		// console.log("user data ======", data);
		try {
			const { token, user } = await locals.db
				.collection('users')
				.authWithPassword(data.email, data.password);
			// locals.user = locals.db.authStore.model;
			} catch (_) {
			console.error(_);
		}
		throw redirect(303, '/');
	}
};
