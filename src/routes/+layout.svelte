<script lang="ts">
	import '@picocss/pico/css/pico.min.css';
  import Analytics from '$lib/analytics.svelte'
export let data</script>


<Analytics />

<nav style="align-items: center; padding: 10px; background-color: #111">
	<a href="/">ssTikTok</a><span style="text-transform: uppercase; font-size: 13px"
		>v78.0</span
	>
	{#if data.user}<a href="/profile" >PROFILE</a>{:else}<a href="/login">LOGIN</a>{/if}
</nav>
<slot />
