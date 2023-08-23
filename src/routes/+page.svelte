<svelte:head>
	<title>ssTikTok - TikTok Downloader</title>
	<meta
		name="description"
		content="Downloading TikTok video and music with HD quality and no watermark!"
	/>
</svelte:head>
<script lang="ts">
import Features from "$lib/components/features/features.svelte" 
import Faq from "$lib/components/faq/faq.svelte" 
</script>
<div class="container md:px-24">
	<div style="margin-top:80px; text-align: center">
	<h1 style="font-size: 19px;text-transform:uppercase;padding:20px 0px 20px 0px">
		Download unlimited tiktok videos and Music
		</h1>
	</div>

	<form method="POST" action="/download/?">

		
<input style="background-color: #222" name="url" type="url" placeholder="Past tiktok video link" required />
		
				<button class="bg-[#1d6b26] text-center flex justify-center p-2" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 2v8m4-4l-4 4l-4-4"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h.01M10 18h.01"/></g></svg></button>
</form>

</div>
<Features/>
<Faq/>
<div class="w-full text-center mt-[3rem] p-4 bg-[#222]">
	<h1 class="text-primary font-black"><a href="github">GITHUB</a></h1>
</div>