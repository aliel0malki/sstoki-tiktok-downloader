<script lang="ts">
	import '@picocss/pico/css/pico.min.css';
  import Analytics from '$lib/analytics.svelte'
</script>


<Analytics />

<nav style="align-items: center; padding: 10px">
	<a href="/">sstiktik</a><span style="text-transform: uppercase; font-size: 13px"
		>in development</span
	>
	<a href="/">none</a>
</nav>
<slot />
