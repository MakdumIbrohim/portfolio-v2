"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Disc3 } from 'lucide-react';

export function AudioPlayerCard() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Sample track data
    const trackName = "Lofi Work Vibes.mp3";
    const trackArtist = "Unknown Hacker";

    useEffect(() => {
        // We create a dummy audio element. Usually this would be a real source.
        // For portfolio purposes, you'd replace the src with a real audio file (e.g. /lofi.mp3)
        audioRef.current = new Audio("https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3");
        audioRef.current.loop = true;

        const updateProgress = () => {
            if (audioRef.current) {
                setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
            }
        };

        audioRef.current.addEventListener('timeupdate', updateProgress);

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.removeEventListener('timeupdate', updateProgress);
            }
        };
    }, []);

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

    return (
        <div className="mt-8 border-[3px] border-black dark:border-white bg-[#50e3c2] dark:bg-[#008f6b] p-3 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] text-black dark:text-white flex items-center gap-3 md:gap-4 relative overflow-hidden group">

            {/* Spinning Disc Record */}
            <div className={`w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center border-[2px] border-black dark:border-white shrink-0 ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
                <div className="w-4 h-4 bg-[#ff3b30] rounded-full border-[2px] border-black dark:border-white absolute z-10"></div>
                <Disc3 size={40} className="text-[#f8e71c] dark:text-[#b8a900] opacity-80" strokeWidth={1} />
            </div>

            {/* Track Info & Progress */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-end mb-1">
                    <div className="flex flex-col truncate">
                        <span className="font-black text-sm uppercase truncate leading-tight">{trackName}</span>
                        <span className="font-bold text-[10px] uppercase opacity-80 font-mono truncate">{trackArtist}</span>
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
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1 sm:gap-2">
                <button className="p-1.5 border-[2px] border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-[#f8e71c] dark:hover:bg-[#b8a900] dark:hover:text-black shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] transition-all">
                    <SkipBack size={14} fill="currentColor" />
                </button>
                <button
                    onClick={togglePlay}
                    className="p-2 border-[2px] border-black dark:border-white bg-[#ff79c6] dark:bg-[#b83280] text-black dark:text-white hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] transition-all"
                >
                    {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
                </button>
                <button className="p-1.5 border-[2px] border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-[#f8e71c] dark:hover:bg-[#b8a900] dark:hover:text-black shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] transition-all">
                    <SkipForward size={14} fill="currentColor" />
                </button>
            </div>

        </div>
    );
}
