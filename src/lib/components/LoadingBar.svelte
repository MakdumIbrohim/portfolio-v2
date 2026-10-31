<script lang="ts">
	import { onMount } from 'svelte';

	let progress = $state(0);

	onMount(() => {
		const interval = setInterval(() => {
			if (progress >= 100) {
				setTimeout(() => {
					progress = 0;
				}, 1000);
			} else {
				const increment = Math.floor(Math.random() * 15) + 5;
				progress = Math.min(progress + increment, 100);
			}
		}, 800);

		return () => clearInterval(interval);
	});

	const totalBlocks = 10;
	let filledBlocks = $derived(Math.floor((progress / 100) * totalBlocks));
	let emptyBlocks = $derived(totalBlocks - filledBlocks);
	let bar = $derived('[' + '■'.repeat(filledBlocks) + '□'.repeat(emptyBlocks) + ']');
</script>

<div
	class="flex-1 flex flex-col justify-start items-center relative z-0 hidden lg:flex mt-3 opacity-80 hover:opacity-100 transition-opacity"
>
	<div
		class="border-[3px] border-black dark:border-white bg-[#fff9db] dark:bg-[#1f1a00] text-black dark:text-white font-mono font-bold px-3 py-2 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] flex flex-col items-center gap-1.5 text-xs sm:text-sm"
	>
		<span class="font-press-start text-[8px] text-[#4a90e2]">LOADING...</span>
		<span class="tracking-widest flex items-center gap-2">
			{bar} <span class="w-8 text-right">{progress}%</span>
		</span>
	</div>
	<!-- Connecting line that stretches to the bottom -->
	<div
		class="flex-1 border-l-[3px] border-dashed border-black dark:border-white opacity-40 mt-2 min-h-[10px]"
	></div>
</div>
