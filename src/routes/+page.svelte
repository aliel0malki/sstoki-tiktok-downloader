<script lang="ts">
		import { credits } from '$lib/storage';
	let cred: number | string = $credits;
	// handle changes and change value in localstorage
	const handleCredits = () => {
		if (cred.remaining >= 1) {
			credits.set({ remaining: cred.remaining - 1 }); // update value
			cred = $credits;
			console.log('credits updated!');
		}
		if ($credits.remaining === 0) {
			console.log("0 left credits")
		}
	};
	
	
</script>

<svelte:head>
	<title>ssTikTok - TikTok Downloader</title>
	<meta
		name="description"
		content="Downloading TikTok video and music with HD quality and no watermark!"
	/>
</svelte:head>
<div class="container">
	<div style="margin-top:100px; text-align: center">
	<h1 style="font-size: 18px">
			<span>{$credits.remaining}</span> Remaining Credit
		</h1>
	</div>

	<form method="POST" action="/download/?">

		
<input style="background-color: #222" name="url" type="url" placeholder="Past tiktok video link" required />
		
				<button on:click={handleCredits} type="submit">Generate</button>
</form>
</div>
