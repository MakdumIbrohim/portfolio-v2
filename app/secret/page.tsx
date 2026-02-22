"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { BugOff } from 'lucide-react';

export default function SecretPage() {
    const [logs, setLogs] = useState<string[]>([]);
    const [showButton, setShowButton] = useState(false);
    const [score, setScore] = useState(0);
    const [bugPos, setBugPos] = useState({ x: 50, y: 50 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sequence = [
            "INITIATING BREACH PROTOCOL...",
            "BYPASSING FIREWALL [████████░░] 80%",
            "ACCESS GRANTED.",
            "DOWNLOADING TOP SECRET FILES...",
            "WARNING: UNAUTHORIZED USER DETECTED!",
            "SYSTEM LOCKDOWN IMMINENT.",
            "Just kidding! 👾 Welcome to the hidden zone.",
        ];

        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < sequence.length) {
                setLogs(prev => [...prev, sequence[currentIndex]]);
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => setShowButton(true), 1000);
            }
        }, 800);

        return () => clearInterval(interval);
    }, []);

    // Bug movement logic
    useEffect(() => {
        if (!showButton) return;

        const moveBug = () => {
            if (containerRef.current) {
                // Find safe bounds to keep the bug inside the container
                const newX = Math.floor(Math.random() * 80) + 10; // 10% to 90%
                const newY = Math.floor(Math.random() * 80) + 10;
                setBugPos({ x: newX, y: newY });
            }
        };

        // Move bug every 1 second
        const bugInterval = setInterval(moveBug, 1000);
        return () => clearInterval(bugInterval);
    }, [showButton, score]); // Re-run when score changes so it teleports immediately on catch

    const catchBug = (e: React.MouseEvent) => {
        e.stopPropagation();
        setScore(prev => prev + 1);
        // Force immediate jump when clicked
        setBugPos({
            x: Math.floor(Math.random() * 80) + 10,
            y: Math.floor(Math.random() * 80) + 10
        });
    };

    return (
        <div className="min-h-screen bg-black text-[#50e3c2] p-4 sm:p-8 font-mono flex flex-col items-center justify-center relative overflow-hidden selection:bg-[#ff3b30] selection:text-white">
            {/* Scanline Effect Overlay (Neo-Brutalist Hacker vibe) */}
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.8) 50%)', backgroundSize: '100% 4px' }}></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] pointer-events-none opacity-80"></div>

            <div ref={containerRef} className="w-full max-w-2xl bg-[#111] border-[4px] border-[#ff3b30] p-6 sm:p-10 shadow-[8px_8px_0_0_#ff3b30] relative z-10 flex flex-col min-h-[500px]">
                <div className="border-b-[4px] border-[#ff3b30] pb-4 mb-6 flex justify-between items-center">
                    <h1 className="text-xl sm:text-2xl font-black text-[#ff3b30] tracking-widest uppercase animate-pulse">
                        ☠ CLASSIFIED TERMINAL ☠
                    </h1>
                    <div className="flex items-center gap-4">
                        {showButton && (
                            <div className="text-[#f8e71c] font-bold border-[2px] border-[#f8e71c] px-3 py-1 shadow-[2px_2px_0_0_#f8e71c]">
                                BUGS SQUASHED: {score}
                            </div>
                        )}
                        <div className="text-[#ff3b30] text-xs animate-bounce">[ REC ]</div>
                    </div>
                </div>

                <div className="space-y-3 flex-1 flex flex-col relative">
                    {logs.map((log, index) => (
                        <div key={index} className="text-sm sm:text-lg">
                            <span className="text-[#f8e71c] mr-3">admin@system:~#</span>
                            <span className={index >= 4 && index <= 5 ? "text-[#ff3b30] font-bold" : (index === 6 ? "text-white font-bold" : "")}>{log}</span>
                        </div>
                    ))}
                    {!showButton && (
                        <div className="text-sm sm:text-lg animate-pulse mt-1">
                            <span className="text-[#f8e71c] mr-3">admin@system:~#</span>
                            <span className="w-3 h-5 bg-[#50e3c2] inline-block align-middle"></span>
                        </div>
                    )}

                    {showButton && (
                        <div className="mt-8 pt-4 flex flex-col items-center animate-fade-in-up border-t-[2px] border-dashed border-[#50e3c2] relative">
                            <p className="text-white mb-2 text-center text-sm sm:text-base font-bold text-[#f8e71c]">
                                &gt; INCOMING THREAT: PRODUCTION BUGS DETECTED!
                            </p>
                            <p className="text-white mb-8 text-center text-xs sm:text-sm">
                                Squash as many bugs as you can before you leave. They're fast.
                            </p>

                            {/* The clickable bug */}
                            <button
                                onClick={catchBug}
                                style={{ left: `${bugPos.x}%`, top: `${Math.max(20, bugPos.y)}%` }}
                                className="absolute z-50 text-[#ff3b30] hover:scale-125 transition-transform cursor-crosshair focus:outline-none"
                            >
                                <BugOff size={32} strokeWidth={2.5} className="drop-shadow-[0_0_8px_rgba(255,59,48,0.8)]" />
                            </button>

                            <Link href="/" className="mt-4 border-[3px] border-[#50e3c2] bg-transparent hover:bg-[#50e3c2] text-[#50e3c2] hover:text-black font-black px-6 py-3 uppercase tracking-widest transition-all shadow-[4px_4px_0_0_#50e3c2] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#50e3c2] active:translate-y-[4px] active:shadow-none z-10 bg-[#111]">
                                RETURN TO SAFETY
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
