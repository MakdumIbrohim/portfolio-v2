<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		let audioCtx: AudioContext | null = null;

		const initAudio = () => {
			if (!audioCtx) {
				const AudioCtx =
					window.AudioContext ||
					(window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
				audioCtx = new AudioCtx();
			}
			if (audioCtx.state === 'suspended') {
				audioCtx.resume();
			}
		};

		const playHoverSound = () => {
			if (!audioCtx) return;
			const osc = audioCtx.createOscillator();
			const gain = audioCtx.createGain();

			osc.type = 'square';
			osc.frequency.setValueAtTime(800, audioCtx.currentTime);
			osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.05);

			gain.gain.setValueAtTime(1.0, audioCtx.currentTime);
			gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

			osc.connect(gain);
			gain.connect(audioCtx.destination);

			osc.start();
			osc.stop(audioCtx.currentTime + 0.05);
		};

		const playClickSound = () => {
			if (!audioCtx) return;
			const osc = audioCtx.createOscillator();
			const gain = audioCtx.createGain();

			osc.type = 'triangle';
			osc.frequency.setValueAtTime(400, audioCtx.currentTime);
			osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.1);

			gain.gain.setValueAtTime(1.0, audioCtx.currentTime);
			gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

			osc.connect(gain);
			gain.connect(audioCtx.destination);

			osc.start();
			osc.stop(audioCtx.currentTime + 0.1);
		};

		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (mediaQuery.matches) return;

		const handleInteraction = () => initAudio();

		const handleMouseOver = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (target?.closest('a') || target?.closest('button')) {
				playHoverSound();
			}
		};

		const handleMouseDown = (e: MouseEvent) => {
			initAudio();
			const target = e.target as HTMLElement;
			if (target?.closest('a') || target?.closest('button')) {
				playClickSound();
			}
		};

		document.addEventListener('click', handleInteraction, { once: true });
		document.addEventListener('mouseover', handleMouseOver);
		document.addEventListener('mousedown', handleMouseDown);

		return () => {
			document.removeEventListener('click', handleInteraction);
			document.removeEventListener('mouseover', handleMouseOver);
			document.removeEventListener('mousedown', handleMouseDown);
			if (audioCtx) {
				audioCtx.close().catch(() => {});
				audioCtx = null;
			}
		};
	});
</script>
