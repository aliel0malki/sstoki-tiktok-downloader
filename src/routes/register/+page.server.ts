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
			const newUser = await locals.db.collection('users').create(data);
			await locals.db.collection('users').requestVerification(data.email);
					} catch (e) {
			console.error(e);
		}
		throw redirect(303, '/login');
		// locals.user = locals.db.authStore.model
	}
};
