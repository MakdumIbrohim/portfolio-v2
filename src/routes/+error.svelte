<script lang="ts">
	import { Terminal, AlertTriangle, Home } from 'lucide-svelte';
	import { page } from '$app/stores';
</script>

<div
	class="min-h-screen bg-[#ff3b30] text-white p-6 sm:p-12 md:p-16 font-sans selection:bg-white selection:text-black flex flex-col items-center justify-center relative overflow-hidden"
>
	<!-- Main Content -->
	<div class="w-full max-w-3xl flex flex-col relative z-10">
		<!-- Warning Header -->
		<div class="border-b-[4px] border-dashed border-white pb-4 mb-6 flex items-center justify-between">
			<div
				class="flex items-center gap-3 font-press-start text-xs sm:text-sm md:text-base tracking-wider uppercase"
			>
				<AlertTriangle class="animate-pulse" size={24} strokeWidth={3} />
				FATAL ERROR
			</div>
			<div class="font-mono font-bold bg-black text-white px-2 py-1 text-xs">
				ERR_{$page.status || 404}
			</div>
		</div>

		<!-- Glitch Text Area -->
		<div class="mb-8 text-center sm:text-left">
			<h1
				class="text-[12vw] sm:text-6xl md:text-8xl font-press-start leading-none tracking-tighter mb-4 text-black drop-shadow-[4px_4px_0_rgba(255,255,255,1)]"
			>
				{$page.status || 404}
			</h1>
			<h2
				class="font-press-start text-sm sm:text-lg md:text-xl uppercase tracking-widest text-black bg-white inline-block px-3 py-1 border-[3px] border-black transform -rotate-2"
			>
				PAGE NOT FOUND
			</h2>
		</div>

		<!-- Terminal/Context Box -->
		<div
			class="bg-black text-[#50e3c2] p-4 sm:p-6 border-[3px] border-white font-mono text-xs md:text-sm mb-8 relative"
		>
			<div class="flex items-center gap-2 mb-2 opacity-70">
				<Terminal size={14} />
				<span class="uppercase tracking-widest text-[10px]">System Log</span>
			</div>
			<p class="mb-2">&gt; Locating requested directory...</p>
			<p class="mb-2 text-[#ff3b30] animate-pulse">
				&gt; Error: Directory does not exist in current memory bank.
			</p>
			<p class="mb-2">&gt; Possible reasons:</p>
			<ul class="list-disc leading-relaxed ml-6 mb-4 text-white">
				<li>The URL is incorrect.</li>
				<li>The file was deleted during a system purge.</li>
				<li>The developer broke something again.</li>
			</ul>
		</div>

		<!-- Action Button -->
		<div class="flex justify-center sm:justify-start">
			<a
				href="/"
				class="group border-[3px] border-black bg-[#f8e71c] text-black font-press-start text-[10px] sm:text-xs md:text-sm px-6 py-4 flex items-center justify-center gap-3 shadow-[4px_4px_0_0_#000] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all uppercase w-full sm:w-auto cursor-pointer"
			>
				<Home
					size={18}
					strokeWidth={2.5}
					class="group-hover:-translate-y-1 transition-transform"
				/>
				RETURN TO ROOT
			</a>
		</div>
	</div>
</div>
