<script lang="ts">
	import { onMount } from 'svelte';
	import { BugOff } from 'lucide-svelte';

	let logs = $state<string[]>([]);
	let showButton = $state(false);
	let score = $state(0);
	let bugPos = $state({ x: 50, y: 50 });

	onMount(() => {
		const sequence = [
			'INITIATING BREACH PROTOCOL...',
			'BYPASSING FIREWALL [████████░░] 80%',
			'ACCESS GRANTED.',
			'DOWNLOADING TOP SECRET FILES...',
			'WARNING: UNAUTHORIZED USER DETECTED!',
			'SYSTEM LOCKDOWN IMMINENT.',
			'Just kidding! 👾 Welcome to the hidden zone.'
		];

		let currentIndex = 0;

		const interval = setInterval(() => {
			if (currentIndex < sequence.length) {
				logs = [...logs, sequence[currentIndex]];
				currentIndex++;
			} else {
				clearInterval(interval);
				setTimeout(() => {
					showButton = true;
				}, 1000);
			}
		}, 800);

		return () => clearInterval(interval);
	});

	// Bug movement logic
	$effect(() => {
		if (!showButton) return;

		// Track score dependency to reset timer on catch
		const _currentScore = score;

		const moveBug = () => {
			const newX = Math.floor(Math.random() * 80) + 10;
			const newY = Math.floor(Math.random() * 80) + 10;
			bugPos = { x: newX, y: newY };
		};

		const bugInterval = setInterval(moveBug, 1000);
		return () => clearInterval(bugInterval);
	});

	const catchBug = (e: MouseEvent) => {
		e.stopPropagation();
		score += 1;
		bugPos = {
			x: Math.floor(Math.random() * 80) + 10,
			y: Math.floor(Math.random() * 80) + 10
		};
	};
</script>

<div
	class="min-h-screen bg-black text-[#50e3c2] p-4 sm:p-8 font-mono flex flex-col items-center justify-center relative overflow-hidden selection:bg-[#ff3b30] selection:text-white"
>
	<!-- Scanline Effect Overlay -->
	<div
		class="absolute inset-0 pointer-events-none opacity-20"
		style="background-image: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.8) 50%); background-size: 100% 4px;"
	></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] pointer-events-none opacity-80"
	></div>

	<div
		class="w-full max-w-2xl bg-[#111] border-[4px] border-[#ff3b30] p-6 sm:p-10 shadow-[8px_8px_0_0_#ff3b30] relative z-10 flex flex-col min-h-[500px]"
	>
		<div class="border-b-[4px] border-[#ff3b30] pb-4 mb-6 flex justify-between items-center">
			<h1
				class="text-xl sm:text-2xl font-black text-[#ff3b30] tracking-widest uppercase animate-pulse"
			>
				☠ CLASSIFIED TERMINAL ☠
			</h1>
			<div class="flex items-center gap-4">
				{#if showButton}
					<div
						class="text-[#f8e71c] font-bold border-[2px] border-[#f8e71c] px-3 py-1 shadow-[2px_2px_0_0_#f8e71c]"
					>
						BUGS SQUASHED: {score}
					</div>
				{/if}
				<div class="text-[#ff3b30] text-xs animate-bounce">[ REC ]</div>
			</div>
		</div>

		<div class="space-y-3 flex-1 flex flex-col relative">
			{#each logs as log, index}
				<div class="text-sm sm:text-lg">
					<span class="text-[#f8e71c] mr-3">admin@system:~#</span>
					<span
						class={index >= 4 && index <= 5
							? 'text-[#ff3b30] font-bold'
							: index === 6
								? 'text-white font-bold'
								: ''}>{log}</span
					>
				</div>
			{/each}
			{#if !showButton}
				<div class="text-sm sm:text-lg animate-pulse mt-1">
					<span class="text-[#f8e71c] mr-3">admin@system:~#</span>
					<span class="w-3 h-5 bg-[#50e3c2] inline-block align-middle"></span>
				</div>
			{/if}

			{#if showButton}
				<div
					class="mt-8 pt-4 flex flex-col items-center animate-fade-in-up border-t-[2px] border-dashed border-[#50e3c2] relative"
				>
					<p class="mb-2 text-center text-sm sm:text-base font-bold text-[#f8e71c]">
						&gt; INCOMING THREAT: PRODUCTION BUGS DETECTED!
					</p>
					<p class="text-white mb-8 text-center text-xs sm:text-sm">
						Squash as many bugs as you can before you leave. They're fast.
					</p>

					<!-- The clickable bug -->
					<button
						onclick={catchBug}
						style="left: {bugPos.x}%; top: {Math.max(20, bugPos.y)}%;"
						class="absolute z-50 text-[#ff3b30] hover:scale-125 transition-transform cursor-crosshair focus:outline-none"
						aria-label="Squash bug"
					>
						<BugOff
							size={32}
							strokeWidth={2.5}
							class="drop-shadow-[0_0_8px_rgba(255,59,48,0.8)]"
						/>
					</button>

					<a
						href="/"
						class="mt-4 border-[3px] border-[#50e3c2] bg-transparent hover:bg-[#50e3c2] text-[#50e3c2] hover:text-black font-black px-6 py-3 uppercase tracking-widest transition-all shadow-[4px_4px_0_0_#50e3c2] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#50e3c2] active:translate-y-[4px] active:shadow-none z-10 bg-[#111] cursor-pointer"
					>
						RETURN TO SAFETY
					</a>
				</div>
			{/if}
		</div>
	</div>
</div>
