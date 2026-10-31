<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { themeState } from '$lib/theme.svelte';
</script>

<button
	onclick={() => themeState.toggle()}
	class="border-[3px] border-black bg-white dark:bg-black dark:border-white px-3 sm:px-4 py-2 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] cursor-pointer transition-all flex items-center justify-center"
	aria-label="Toggle theme"
>
	{#if themeState.theme === 'dark'}
		<Sun size={22} class="text-white" strokeWidth={2.5} />
	{:else}
		<Moon size={22} class="text-black" strokeWidth={2.5} />
	{/if}
</button>
