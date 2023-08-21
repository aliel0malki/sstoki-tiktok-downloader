<svelte:head>
  <title>Downloading Page</title>
  <meta name="description" content="Here you find your video for download." />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3003009940487682"
     crossorigin="anonymous"></script>
     </svelte:head>

<script lang="ts">
 /** @type {import('./$types').ActionData} */
 export let form;
 export let data;
// console.log("FROM DOWNLOAD ",form)
 import "$lib/css/download.css"
  console.log(form?.data)
  const downloadVideo = async () => {
  const randSelect = Math.floor(Math.random() * (2 - 0)) + 0;
  const randName = Math.floor(Math.random() * 100000);
  try {
      const response = await fetch(form.data.result.video[randSelect]);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${randName}.mp4`;
      link.click();

      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      alert('Error downloading video:\n'+ error);
    }
  };
  const downloadMusic = async () => {
      const randName = Math.floor(Math.random() * 100000);
  try {
      const response = await fetch(form.data.result.music[0]);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${randName}.mp3`;
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert('Error downloading music:\n' +error);
    }
  };
</script>

<div class="container">
{#if form?.success}

<div style="align-items: center; text-align: center;">


<div class="download">

	<div class="in-download">
		<div>
			
		<div class="overlay"></div>
	<img class="img-download" src={form?.data?.result?.cover} alt="tiktok video cover" />
		</div>
<div class="info">
	<h3 style="font-size: 16px; margin-bottom: 5px">Creator ~ {form?.data?.result?.author.username}</h3>
	<span style="font-size: 12px; ">{form?.data?.result?.description}</span>
<hr/>
<div class="sub-info">
	<div>
<span><span style="font-size: 18px">{form?.data?.result?.statistics?.likeCount}</span> ~ Like</span>
<br/>
<span><span style="font-size: 18px">{form?.data?.result?.statistics?.commentCount}</span> ~ Comment</span>
	</div>
	<a href={form?.data?.result?.video[0]}>Watch Video<a>
</div>
</div>
	</div>
	

</div>
<div style="margin-top:3rem">
	
  <button on:click={downloadVideo} style="margin-top:10px"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5H9m6 4v3h4l-7 7l-7-7h4V9h6z"/></svg> Download Video <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5H9m6 4v3h4l-7 7l-7-7h4V9h6z"/></svg></button> <!-- Add the download button -->

  {#if data.user}
  <button on:click={downloadMusic}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5H9m6 4v3h4l-7 7l-7-7h4V9h6z"/></svg> Download Music <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5H9m6 4v3h4l-7 7l-7-7h4V9h6z"/></svg></button> <!-- Add the download button -->
  {:else}
  <a href="/login">Login to can download music</a>
  {/if}
</div>


</div>
{:else}
<h3>No Data here - Go to /</h3>
<a href="/">Home</a>
{/if}
</div>
