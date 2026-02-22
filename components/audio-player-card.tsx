"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Disc3 } from 'lucide-react';
import { audioTracks } from '@/lib/audio-tracks';

export function AudioPlayerCard() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const currentTrack = audioTracks[currentTrackIndex];

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
            playNext();
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
    }, [currentTrackIndex]); // Re-run when track changes

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
        setCurrentTrackIndex((prev) => (prev + 1) % audioTracks.length);
        // Setting progress to 0 manually for immediate visual feedback
        setProgress(0);
        setCurrentTime(0);
    };

    const playPrev = () => {
        setCurrentTrackIndex((prev) => (prev - 1 + audioTracks.length) % audioTracks.length);
        setProgress(0);
        setCurrentTime(0);
    };

    return (
        <div className="mt-8 border-[3px] border-black dark:border-white bg-[#50e3c2] dark:bg-[#008f6b] p-3 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] text-black dark:text-white flex items-center gap-3 md:gap-4 relative overflow-hidden group">

            {/* Album Cover Art (Vinyl Style) */}
            <div className={`w-14 h-14 sm:w-16 sm:h-16 shrink-0 relative border-[3px] border-black dark:border-white rounded-full overflow-hidden ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
                {/* Vinyl Grooves Background (Outer Black Ring) */}
                <div className="absolute inset-0 bg-[#0f0f0f] rounded-full">
                    {/* Inner grooves effect */}
                    <div className="absolute inset-[10%] border border-gray-800 rounded-full"></div>
                    <div className="absolute inset-[25%] border border-gray-800 rounded-full"></div>
                </div>

                {/* Actual image loaded dynamically as the vinyl center label */}
                <img
                    src={currentTrack.coverUrl}
                    alt={currentTrack.title}
                    className="absolute inset-[15%] w-[70%] h-[70%] object-cover rounded-full border border-gray-600"
                />

                {/* Decorative CD/Vinyl hole in the absolute middle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-white dark:bg-[#1a1a1a] rounded-full border border-black z-10"></div>
            </div>

            {/* Track Info & Progress */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-end mb-1">
                    <div className="flex flex-col truncate">
                        <span className="font-black text-sm uppercase truncate leading-tight">{currentTrack.title}</span>
                        <span className="font-bold text-[10px] uppercase opacity-80 font-mono truncate">{currentTrack.artist}</span>
                    </div>
                    <button onClick={toggleMute} className="opacity-70 hover:opacity-100 hover:scale-110 transition-all">
                        {isMuted ? <VolumeX size={16} strokeWidth={3} /> : <Volume2 size={16} strokeWidth={3} />}
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="h-2 w-full bg-black/20 dark:bg-white/20 border border-black dark:border-white relative overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full bg-[#ff3b30] border-r border-black dark:border-white transition-all duration-100"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Time Display */}
                <div className="flex justify-between mt-1 font-mono text-[9px] sm:text-[10px] font-bold opacity-80">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1 sm:gap-2">
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
            </div>

        </div>
    );
}
