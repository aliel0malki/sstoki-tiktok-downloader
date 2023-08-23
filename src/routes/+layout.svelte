<script lang="ts">
	import '@picocss/pico';
	import Analytics from '$lib/analytics.svelte';
	import '../app.postcss';
	import { browser } from '$app/environment';

	if (browser) {
		window.localStorage.clear();
	}
	export let data;

	import { onMount } from 'svelte';
</script>

<Analytics />

<nav style="align-items: center; padding: 10px">
	<ul>
		<li>
			<a style="font-size: 2rem" class="text-primary hover:text-gray-300" href="/">ssTikTok</a>
			<span style="text-transform: uppercase; font-size: 13px">v1.0</span>
		</li>
	</ul>
	{#if data.user}<a href="/profile">PROFILE</a>{:else}<a role="button" href="/login">LOGIN</a>{/if}
</nav>
<slot />
