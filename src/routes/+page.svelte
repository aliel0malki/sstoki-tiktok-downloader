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
		if ($credits.remaining === 'nothing') {
			console.log("0 left credits")
		}
		if ($credits.remaining == 0) {
			credits.set({ remaining: 'nothing' }); // update value
		}
	};
	
	
</script>

<svelte:head>
	<title>ssTikTok - TikTok Downloader</title>
	<meta
		name="description"
		content="Downloading TikTok video and music with HD quality In less than 10 seconds!"
	/>
</svelte:head>
<div class="container">
	<div style="margin-top:150px; text-align: center">
	<h1 style="font-size: 18px">
			<span>{$credits.remaining} ~</span> Remaining Credit
		</h1>
	</div>
	<center>for download music you must be logged in</center>

	<form method="POST" action="/download/?">
		<input name="url" type="url" placeholder="Past tiktok video link" required />
		<button on:click={handleCredits} type="submit">Generate</button>
	</form>
</div>
