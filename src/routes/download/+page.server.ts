import { fail } from "@sveltejs/kit";
import { TiktokDL } from "@tobyg74/tiktok-api-dl";

/**
 * @type {import('./$types').Actions}
 */
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries([...formData]);
    const tiktok_url = data.url;
    try {
      const vid_data = await TiktokDL(tiktok_url);
      const video = vid_data;
      return { success: true, data: video };
    } catch (e) {
      console.error(e);
      return fail(403, {success:false ,ERORR: e});
    }
  },
};
