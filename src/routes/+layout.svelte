<script lang="ts">
	import '../app.css';
	import RetroCursor from '$lib/components/RetroCursor.svelte';
	import UISounds from '$lib/components/UISounds.svelte';
	import { themeState } from '$lib/theme.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Makdum Ibrohim | Portfolio</title>
	<meta name="description" content="Personal portfolio of Makdum Ibrohim." />
</svelte:head>

<RetroCursor />
<UISounds />

<div class="animate-page-enter">
	{@render children()}
</div>
