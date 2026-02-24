"use client";

import { useEffect, useRef } from "react";

export function UISounds() {
    const audioContextRef = useRef<AudioContext | null>(null);

    // Initialize audio context lazily on first user interaction
    // to comply with browser autoplay policies.
    const initAudio = () => {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        if (audioContextRef.current.state === "suspended") {
            audioContextRef.current.resume();
        }
    };

    const playHoverSound = () => {
        if (!audioContextRef.current) return;
        const ctx = audioContextRef.current;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Very short, high pitched "bip"
        osc.type = "square";
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);

        // Keep it quiet so it's not annoying
        gain.gain.setValueAtTime(0.02, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.05);
    };

    const playClickSound = () => {
        if (!audioContextRef.current) return;
        const ctx = audioContextRef.current;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Percussive "boop/thock"
        osc.type = "triangle";
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1);

        // Louder than hover, but still pleasant
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    };

    useEffect(() => {
        if (typeof window === "undefined") return;

        // Do not play sounds if user has requested reduced motion/distractions
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (mediaQuery.matches) return;

        const handleInteraction = () => initAudio();

        // Global listeners to catch interacting with buttons and links
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a') || target.closest('button')) {
                playHoverSound();
            }
        };

        const handleMouseDown = (e: MouseEvent) => {
            initAudio(); // Ensure context is ready
            const target = e.target as HTMLElement;
            if (target.closest('a') || target.closest('button')) {
                playClickSound();
            }
        };

        // Initialize audio on first click anywhere
        document.addEventListener('click', handleInteraction, { once: true });

        // Start listening for specific element interactions
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mousedown', handleMouseDown);
            if (audioContextRef.current) {
                audioContextRef.current.close().catch(console.error);
                audioContextRef.current = null;
            }
        };
    }, []);

    // This component renders nothing visually
    return null;
}
