<svelte:head>
  <title>Downloading Page</title>
  <meta name="description" content="Here you can download your video." />
</svelte:head>
<script lang="ts">
  // import { onMount } from 'svelte';

  export let form;

  console.log(form?.res)

  const downloadVideo = async () => {
    const randSelect = Math.floor(Math.random() * 1);
    const randName = Math.floor(Math.random() * 100000);
  try {
      const response = await fetch(form.res.result.video[randSelect]);
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
      const response = await fetch(form.res.result.music[0]);
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

{#if form.res.result}
<div style="align-items: center; text-align: center">
  <h4>Video Information</h4>
  <img width="150px" src={form?.res?.result?.cover} alt="tiktok video cover" />

  <h4 style="margin-top:10px;">Download from here ⬇️<h4>

  <button style="margin-top:10px" on:click={downloadVideo}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5H9m6 4v3h4l-7 7l-7-7h4V9h6z"/></svg> Download Video <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5H9m6 4v3h4l-7 7l-7-7h4V9h6z"/></svg></button> <!-- Add the download button -->

  <button on:click={downloadMusic}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5H9m6 4v3h4l-7 7l-7-7h4V9h6z"/></svg> Download Music <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5H9m6 4v3h4l-7 7l-7-7h4V9h6z"/></svg></button> <!-- Add the download button -->
  <hr />
  <div style="margin-top: 30px">
    <h6>Description<br/><span>{form?.res?.result?.description}</span></h6>
    <hr/><h6>Author<br/><span>{form?.res?.result?.author.username}</span></h6>
  </div>
</div>
{/if}
{#if !form.res.result}
<h3>No Data here - Go to /</h3>
<a href="/">Home</a>
{/if}
</div>
