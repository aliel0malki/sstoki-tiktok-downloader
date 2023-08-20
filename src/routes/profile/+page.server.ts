import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ locals }) => {
		try {
			await locals.db.authStore.clear();
		} catch (e) {
			console.error(e);
		}
		throw redirect(303, '/login');
	}
};
