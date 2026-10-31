<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Play,
		Pause,
		SkipForward,
		SkipBack,
		Volume2,
		VolumeX,
		Repeat,
		Repeat1,
		Shuffle
	} from 'lucide-svelte';
	import { audioTracks } from '$lib/audio-tracks';

	let selectedArtist = $state('All');
	let currentTrackIndex = $state(0);
	let isPlaying = $state(false);
	let isMuted = $state(false);
	let progress = $state(0);
	let currentTime = $state(0);
	let duration = $state(0);
	let isShuffle = $state(false);
	let repeatMode = $state<'none' | 'all' | 'one'>('none');

	let audioEl: HTMLAudioElement | null = null;

	const allArtists = ['All', ...Array.from(new Set(audioTracks.map((t) => t.artist)))];

	let filteredTracks = $derived(
		selectedArtist === 'All'
			? audioTracks
			: audioTracks.filter((t) => t.artist === selectedArtist)
	);

	let validCurrentIndex = $derived(
		currentTrackIndex >= filteredTracks.length ? 0 : currentTrackIndex
	);

	let currentTrack = $derived(filteredTracks[validCurrentIndex] || audioTracks[0]);

	const formatTime = (time: number) => {
		if (isNaN(time)) return '0:00';
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	};

	const playNext = () => {
		if (isShuffle) {
			if (filteredTracks.length <= 1) return;
			let nextIndex: number;
			do {
				nextIndex = Math.floor(Math.random() * filteredTracks.length);
			} while (nextIndex === validCurrentIndex);
			currentTrackIndex = nextIndex;
		} else {
			if (repeatMode === 'none' && validCurrentIndex === filteredTracks.length - 1) {
				isPlaying = false;
				progress = 0;
				currentTime = 0;
				return;
			}
			currentTrackIndex = (validCurrentIndex + 1) % filteredTracks.length;
		}
		progress = 0;
		currentTime = 0;
	};

	const playPrev = () => {
		if (isShuffle) {
			if (filteredTracks.length <= 1) return;
			let prevIndex: number;
			do {
				prevIndex = Math.floor(Math.random() * filteredTracks.length);
			} while (prevIndex === validCurrentIndex);
			currentTrackIndex = prevIndex;
		} else {
			currentTrackIndex = (validCurrentIndex - 1 + filteredTracks.length) % filteredTracks.length;
		}
		progress = 0;
		currentTime = 0;
	};

	const togglePlay = () => {
		if (!audioEl) return;
		if (isPlaying) {
			audioEl.pause();
			isPlaying = false;
		} else {
			audioEl.play().catch(() => {
				isPlaying = false;
			});
			isPlaying = true;
		}
	};

	const toggleMute = () => {
		if (!audioEl) return;
		audioEl.muted = !isMuted;
		isMuted = !isMuted;
	};

	const toggleRepeat = () => {
		if (repeatMode === 'none') repeatMode = 'all';
		else if (repeatMode === 'all') repeatMode = 'one';
		else repeatMode = 'none';
	};

	const toggleShuffle = () => {
		isShuffle = !isShuffle;
	};

	const handleArtistChange = (e: Event) => {
		const target = e.target as HTMLSelectElement;
		selectedArtist = target.value;
		currentTrackIndex = 0;
		if (isPlaying && audioEl) {
			setTimeout(() => {
				audioEl?.play().catch(() => {});
			}, 100);
		}
	};

	$effect(() => {
		// When track changes, update audio src
		if (audioEl && currentTrack) {
			const wasPlaying = isPlaying;
			audioEl.src = currentTrack.audioUrl;
			audioEl.muted = isMuted;
			if (wasPlaying) {
				audioEl.play().catch(() => {
					isPlaying = false;
				});
			}
		}
	});

	onMount(() => {
		audioEl = new Audio(currentTrack.audioUrl);
		audioEl.muted = isMuted;

		const updateProgress = () => {
			if (audioEl) {
				currentTime = audioEl.currentTime;
				if (audioEl.duration) {
					progress = (audioEl.currentTime / audioEl.duration) * 100;
				}
			}
		};

		const handleLoadedMetadata = () => {
			if (audioEl) {
				duration = audioEl.duration;
			}
		};

		const handleEnded = () => {
			if (repeatMode === 'one') {
				if (audioEl) {
					audioEl.currentTime = 0;
					audioEl.play().catch(() => {});
				}
			} else {
				playNext();
			}
		};

		audioEl.addEventListener('timeupdate', updateProgress);
		audioEl.addEventListener('loadedmetadata', handleLoadedMetadata);
		audioEl.addEventListener('ended', handleEnded);

		return () => {
			if (audioEl) {
				audioEl.pause();
				audioEl.removeEventListener('timeupdate', updateProgress);
				audioEl.removeEventListener('loadedmetadata', handleLoadedMetadata);
				audioEl.removeEventListener('ended', handleEnded);
				audioEl = null;
			}
		};
	});
</script>

<div
	class="mt-8 border-[3px] border-black dark:border-white bg-[#50e3c2] dark:bg-[#008f6b] p-3 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] text-black dark:text-white flex flex-col gap-3 relative overflow-hidden group"
>
	<!-- Filter Row -->
	<div class="flex justify-between items-center w-full mb-1">
		<span
			class="font-press-start text-[8px] sm:text-[10px] uppercase font-bold tracking-wider opacity-80 pl-1"
		>
			PLAYLIST FILTER:
		</span>
		<select
			value={selectedArtist}
			onchange={handleArtistChange}
			class="appearance-none font-press-start text-[8px] sm:text-[10px] bg-white dark:bg-black text-black dark:text-white border-[2px] border-black dark:border-white px-2 py-1 uppercase shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] outline-none hover:bg-[#f8e71c] dark:hover:bg-[#b8a900] active:bg-[#f8e71c] dark:hover:text-black cursor-pointer transition-colors max-w-[150px] sm:max-w-[200px] truncate"
		>
			{#each allArtists as artist}
				<option value={artist} class="font-sans text-xs font-bold uppercase">
					{artist}
				</option>
			{/each}
		</select>
	</div>

	<!-- Top Row -->
	<div class="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full justify-between">
		<!-- Left Side: Cover & Info -->
		<div class="flex items-center gap-3 w-full sm:w-auto sm:flex-1 min-w-0">
			<!-- Album Cover Art (Vinyl Style) -->
			<div
				class="w-14 h-14 sm:w-16 sm:h-16 shrink-0 relative border-[3px] border-black dark:border-white rounded-full overflow-hidden {isPlaying
					? 'animate-[spin_4s_linear_infinite]'
					: ''}"
			>
				<div class="absolute inset-0 bg-[#0f0f0f] rounded-full">
					<div class="absolute inset-[10%] border border-gray-800 rounded-full"></div>
					<div class="absolute inset-[25%] border border-gray-800 rounded-full"></div>
				</div>
				<img
					src={currentTrack.coverUrl}
					alt={currentTrack.title}
					class="absolute inset-[15%] w-[70%] h-[70%] object-cover rounded-full border border-gray-600"
				/>
				<div
					class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-white dark:bg-[#1a1a1a] rounded-full border border-black z-10"
				></div>
			</div>

			<!-- Track Info -->
			<div class="flex-1 min-w-0 pr-2">
				<div class="flex justify-between items-start">
					<div class="flex flex-col truncate">
						<span class="font-black text-sm uppercase truncate leading-tight mb-0.5"
							>{currentTrack.title}</span
						>
						<span class="font-bold text-[10px] uppercase opacity-80 font-mono truncate"
							>{currentTrack.artist}</span
						>
					</div>
					<button
						onclick={toggleMute}
						class="opacity-70 hit-target hover:opacity-100 hover:scale-110 transition-all shrink-0 ml-2 cursor-pointer"
						aria-label="Toggle mute"
					>
						{#if isMuted}
							<VolumeX size={16} strokeWidth={3} />
						{:else}
							<Volume2 size={16} strokeWidth={3} />
						{/if}
					</button>
				</div>
			</div>
		</div>

		<!-- Right Side: Controls -->
		<div
			class="flex justify-center sm:justify-start items-center gap-1 sm:gap-2 shrink-0 w-full sm:w-auto"
		>
			<button
				onclick={toggleShuffle}
				class="p-1.5 border-[2px] border-black dark:border-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] transition-all flex cursor-pointer {isShuffle
					? 'bg-[#ff79c6] text-white dark:bg-[#b83280]'
					: 'bg-white dark:bg-black text-black dark:text-white hover:bg-[#f8e71c] dark:hover:bg-[#b8a900]'}"
				aria-label="Toggle shuffle"
			>
				<Shuffle size={14} strokeWidth={3} />
			</button>
			<button
				onclick={playPrev}
				class="p-1.5 border-[2px] border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-[#f8e71c] dark:hover:bg-[#b8a900] dark:hover:text-black shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] transition-all cursor-pointer"
				aria-label="Previous track"
			>
				<SkipBack size={14} fill="currentColor" />
			</button>
			<button
				onclick={togglePlay}
				class="p-2 border-[2px] border-black dark:border-white bg-[#ff79c6] dark:bg-[#b83280] text-black dark:text-white hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] transition-all cursor-pointer"
				aria-label={isPlaying ? 'Pause' : 'Play'}
			>
				{#if isPlaying}
					<Pause size={18} fill="currentColor" />
				{:else}
					<Play size={18} fill="currentColor" class="ml-0.5" />
				{/if}
			</button>
			<button
				onclick={playNext}
				class="p-1.5 border-[2px] border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-[#f8e71c] dark:hover:bg-[#b8a900] dark:hover:text-black shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] transition-all cursor-pointer"
				aria-label="Next track"
			>
				<SkipForward size={14} fill="currentColor" />
			</button>
			<button
				onclick={toggleRepeat}
				class="p-1.5 border-[2px] border-black dark:border-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] transition-all flex cursor-pointer {repeatMode !==
				'none'
					? 'bg-[#ff79c6] text-white dark:bg-[#b83280]'
					: 'bg-white dark:bg-black text-black dark:text-white hover:bg-[#f8e71c] dark:hover:bg-[#b8a900]'}"
				aria-label="Toggle repeat"
			>
				{#if repeatMode === 'one'}
					<Repeat1 size={14} strokeWidth={3} />
				{:else}
					<Repeat size={14} strokeWidth={3} />
				{/if}
			</button>
		</div>
	</div>

	<!-- Bottom Row: Progress -->
	<div class="w-full">
		<div
			class="h-2 w-full bg-black/20 dark:bg-white/20 border border-black dark:border-white relative overflow-hidden"
		>
			<div
				class="absolute top-0 left-0 h-full bg-[#ff3b30] border-r border-black dark:border-white transition-[width] duration-300 ease-linear"
				style="width: {progress}%"
			></div>
		</div>
		<div class="flex justify-between mt-1.5 font-mono text-[9px] sm:text-[10px] font-bold opacity-80">
			<span>{formatTime(currentTime)}</span>
			<span>{formatTime(duration)}</span>
		</div>
	</div>
</div>
