<script lang="ts">
	import { onMount } from 'svelte';

	const RETRO_COLORS = [
		'#ff3b30', // Red
		'#f8e71c', // Yellow
		'#50e3c2', // Cyan
		'#4a90e2', // Blue
		'#ff79c6' // Magenta
	];

	interface TrailParticle {
		id: number;
		x: number;
		y: number;
		color: string;
	}

	let particles = $state<TrailParticle[]>([]);

	onMount(() => {
		if (window.matchMedia('(pointer: coarse)').matches) return;

		let particleId = 0;
		let lastPos = { x: 0, y: 0 };

		const handleMouseMove = (e: MouseEvent) => {
			const distance = Math.hypot(e.clientX - lastPos.x, e.clientY - lastPos.y);
			if (distance < 15) return;

			lastPos = { x: e.clientX, y: e.clientY };

			const newParticle: TrailParticle = {
				id: particleId++,
				x: e.clientX,
				y: e.clientY,
				color: RETRO_COLORS[Math.floor(Math.random() * RETRO_COLORS.length)]
			};

			particles = [...particles, newParticle];

			setTimeout(() => {
				particles = particles.filter((p) => p.id !== newParticle.id);
			}, 200);
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	});
</script>

{#if particles.length > 0}
	<div class="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
		{#each particles as particle (particle.id)}
			<div
				class="absolute animate-trail-fade border-2 border-black dark:border-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff]"
				style="left: {particle.x}px; top: {particle.y}px; background-color: {particle.color}; width: 12px; height: 12px; transform: translate(-50%, -50%);"
			></div>
		{/each}
	</div>
{/if}
