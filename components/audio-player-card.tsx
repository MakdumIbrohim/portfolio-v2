"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Disc3, Repeat, Repeat1, Shuffle } from 'lucide-react';
import { audioTracks } from '@/lib/audio-tracks';

export function AudioPlayerCard() {
    const [selectedArtist, setSelectedArtist] = useState('All');
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isShuffle, setIsShuffle] = useState(false);
    const [repeatMode, setRepeatMode] = useState<'none' | 'all' | 'one'>('none');

    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Compute unique artists and filter tracks
    const allArtists = ['All', ...Array.from(new Set(audioTracks.map(t => t.artist)))];
    const filteredTracks = selectedArtist === 'All'
        ? audioTracks
        : audioTracks.filter(t => t.artist === selectedArtist);

    // Ensure index is valid when filter changes
    const validCurrentIndex = currentTrackIndex >= filteredTracks.length ? 0 : currentTrackIndex;
    const currentTrack = filteredTracks[validCurrentIndex] || audioTracks[0];

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        // Initialize audio element with current track
        const newAudio = new Audio(currentTrack.audioUrl);
        newAudio.loop = false; // We will handle ending manually to go to next track
        // Keep muted state consistent
        newAudio.muted = isMuted;

        // We only swap the ref source and persist playing state if it was already playing
        if (audioRef.current) {
            audioRef.current.pause();
        }

        audioRef.current = newAudio;

        const updateProgress = () => {
            if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime);
                setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
            }
        };

        const handleLoadedMetadata = () => {
            if (audioRef.current) {
                setDuration(audioRef.current.duration);
            }
        };

        const handleEnded = () => {
            if (repeatMode === 'one') {
                if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play().catch(console.error);
                }
            } else {
                playNext();
            }
        };

        audioRef.current.addEventListener('timeupdate', updateProgress);
        audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
        audioRef.current.addEventListener('ended', handleEnded);

        // If it was playing before we switched tracks, auto-play the new one
        if (isPlaying) {
            audioRef.current.play().catch(e => {
                console.log("Auto-play blocked", e);
                setIsPlaying(false);
            });
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.removeEventListener('timeupdate', updateProgress);
                audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audioRef.current.removeEventListener('ended', handleEnded);
            }
        };
    }, [validCurrentIndex, selectedArtist]); // Re-run when track or filter changes

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Audio play blocked", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const playNext = () => {
        if (isShuffle) {
            if (filteredTracks.length <= 1) return;
            let nextIndex;
            do {
                nextIndex = Math.floor(Math.random() * filteredTracks.length);
            } while (nextIndex === validCurrentIndex);
            setCurrentTrackIndex(nextIndex);
        } else {
            // Note: Stop playing if we reach the end and repeat is 'none'
            if (repeatMode === 'none' && validCurrentIndex === filteredTracks.length - 1) {
                setIsPlaying(false);
                setProgress(0);
                setCurrentTime(0);
                return;
            }
            setCurrentTrackIndex((validCurrentIndex + 1) % filteredTracks.length);
        }
        setProgress(0);
        setCurrentTime(0);
    };

    const playPrev = () => {
        if (isShuffle) {
            if (filteredTracks.length <= 1) return;
            let prevIndex;
            do {
                prevIndex = Math.floor(Math.random() * filteredTracks.length);
            } while (prevIndex === validCurrentIndex);
            setCurrentTrackIndex(prevIndex);
        } else {
            setCurrentTrackIndex((validCurrentIndex - 1 + filteredTracks.length) % filteredTracks.length);
        }
        setProgress(0);
        setCurrentTime(0);
    };

    const toggleRepeat = () => {
        setRepeatMode(prev => {
            if (prev === 'none') return 'all';
            if (prev === 'all') return 'one';
            return 'none';
        });
    };

    const toggleShuffle = () => {
        setIsShuffle(!isShuffle);
    };

    const handleArtistChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newArtist = e.target.value;
        setSelectedArtist(newArtist);
        setCurrentTrackIndex(0); // Reset to first song of the newly selected artist
        if (isPlaying) {
            // Give layout effect time to update the current track reference
            setTimeout(() => {
                if (audioRef.current) {
                    audioRef.current.play().catch(console.error);
                }
            }, 100);
        }
    };

    return (
        <div className="mt-8 border-[3px] border-black dark:border-white bg-[#50e3c2] dark:bg-[#008f6b] p-3 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] text-black dark:text-white flex flex-col gap-3 relative overflow-hidden group">

            {/* Filter Row */}
            <div className="flex justify-between items-center w-full mb-1">
                <span className="font-press-start text-[8px] sm:text-[10px] uppercase font-bold tracking-wider opacity-80 pl-1">
                    PLAYLIST FILTER:
                </span>
                <select
                    value={selectedArtist}
                    onChange={handleArtistChange}
                    className="appearance-none font-press-start text-[8px] sm:text-[10px] bg-white dark:bg-black text-black dark:text-white border-[2px] border-black dark:border-white px-2 py-1 uppercase shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] outline-none hover:bg-[#f8e71c] dark:hover:bg-[#b8a900] active:bg-[#f8e71c] dark:hover:text-black cursor-pointer transition-colors max-w-[150px] sm:max-w-[200px] truncate"
                >
                    {allArtists.map(artist => (
                        <option key={artist} value={artist} className="font-sans text-xs font-bold uppercase">
                            {artist}
                        </option>
                    ))}
                </select>
            </div>

            {/* Top Row: Responsive layout, stack on mobile, row on desktop */}
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full justify-between">

                {/* Left Side: Cover & Info */}
                <div className="flex items-center gap-3 w-full sm:w-auto sm:flex-1 min-w-0">
                    {/* Album Cover Art (Vinyl Style) */}
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 shrink-0 relative border-[3px] border-black dark:border-white rounded-full overflow-hidden ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
                        <div className="absolute inset-0 bg-[#0f0f0f] rounded-full">
                            <div className="absolute inset-[10%] border border-gray-800 rounded-full"></div>
                            <div className="absolute inset-[25%] border border-gray-800 rounded-full"></div>
                        </div>
                        <img
                            src={currentTrack.coverUrl}
                            alt={currentTrack.title}
                            className="absolute inset-[15%] w-[70%] h-[70%] object-cover rounded-full border border-gray-600"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-white dark:bg-[#1a1a1a] rounded-full border border-black z-10"></div>
                    </div>

                    {/* Track Info */}
                    <div className="flex-1 min-w-0 pr-2">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col truncate">
                                <span className="font-black text-sm uppercase truncate leading-tight mb-0.5">{currentTrack.title}</span>
                                <span className="font-bold text-[10px] uppercase opacity-80 font-mono truncate">{currentTrack.artist}</span>
                            </div>
                            <button onClick={toggleMute} className="opacity-70 hit-target hover:opacity-100 hover:scale-110 transition-all shrink-0 ml-2">
                                {isMuted ? <VolumeX size={16} strokeWidth={3} /> : <Volume2 size={16} strokeWidth={3} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Controls */}
                <div className="flex justify-center sm:justify-start items-center gap-1 sm:gap-2 shrink-0 w-full sm:w-auto">
                    <button
                        onClick={toggleShuffle}
                        className={`p-1.5 border-[2px] border-black dark:border-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] transition-all flex ${isShuffle ? 'bg-[#ff79c6] text-white dark:bg-[#b83280]' : 'bg-white dark:bg-black text-black dark:text-white hover:bg-[#f8e71c] dark:hover:bg-[#b8a900]'}`}
                    >
                        <Shuffle size={14} strokeWidth={3} />
                    </button>
                    <button onClick={playPrev} className="p-1.5 border-[2px] border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-[#f8e71c] dark:hover:bg-[#b8a900] dark:hover:text-black shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] transition-all">
                        <SkipBack size={14} fill="currentColor" />
                    </button>
                    <button
                        onClick={togglePlay}
                        className="p-2 border-[2px] border-black dark:border-white bg-[#ff79c6] dark:bg-[#b83280] text-black dark:text-white hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] transition-all"
                    >
                        {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
                    </button>
                    <button onClick={playNext} className="p-1.5 border-[2px] border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-[#f8e71c] dark:hover:bg-[#b8a900] dark:hover:text-black shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] transition-all">
                        <SkipForward size={14} fill="currentColor" />
                    </button>
                    <button
                        onClick={toggleRepeat}
                        className={`p-1.5 border-[2px] border-black dark:border-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] transition-all flex ${repeatMode !== 'none' ? 'bg-[#ff79c6] text-white dark:bg-[#b83280]' : 'bg-white dark:bg-black text-black dark:text-white hover:bg-[#f8e71c] dark:hover:bg-[#b8a900]'}`}
                    >
                        {repeatMode === 'one' ? <Repeat1 size={14} strokeWidth={3} /> : <Repeat size={14} strokeWidth={3} />}
                    </button>
                </div>
            </div>

            {/* Bottom Row: Progress */}
            <div className="w-full">
                <div className="h-2 w-full bg-black/20 dark:bg-white/20 border border-black dark:border-white relative overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full bg-[#ff3b30] border-r border-black dark:border-white transition-[width] duration-300 ease-linear"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="flex justify-between mt-1.5 font-mono text-[9px] sm:text-[10px] font-bold opacity-80">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>

        </div>
    );
}
