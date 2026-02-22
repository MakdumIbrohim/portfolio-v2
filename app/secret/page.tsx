"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SecretPage() {
    const [logs, setLogs] = useState<string[]>([]);
    const [showButton, setShowButton] = useState(false);

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

    return (
        <div className="min-h-screen bg-black text-[#50e3c2] p-4 sm:p-8 font-mono flex flex-col items-center justify-center relative overflow-hidden selection:bg-[#ff3b30] selection:text-white">
            {/* Scanline Effect Overlay (Neo-Brutalist Hacker vibe) */}
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.8) 50%)', backgroundSize: '100% 4px' }}></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] pointer-events-none opacity-80"></div>

            <div className="w-full max-w-2xl bg-[#111] border-[4px] border-[#ff3b30] p-6 sm:p-10 shadow-[8px_8px_0_0_#ff3b30] relative z-10 flex flex-col">
                <div className="border-b-[4px] border-[#ff3b30] pb-4 mb-6 flex justify-between items-center">
                    <h1 className="text-xl sm:text-2xl font-black text-[#ff3b30] tracking-widest uppercase animate-pulse">
                        ☠ CLASSIFIED TERMINAL ☠
                    </h1>
                    <div className="text-[#ff3b30] text-xs animate-bounce">[ REC ]</div>
                </div>

                <div className="space-y-3 min-h-[300px] flex flex-col">
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
                        <div className="mt-auto pt-10 flex flex-col items-center animate-fade-in-up">
                            <p className="text-white mb-6 text-center text-sm sm:text-base max-w-md">
                                You weren't supposed to click that. But since you're here, consider this your official induction into the dev club.
                            </p>
                            <Link href="/" className="border-[3px] border-[#50e3c2] bg-transparent hover:bg-[#50e3c2] text-[#50e3c2] hover:text-black font-black px-6 py-3 uppercase tracking-widest transition-all shadow-[4px_4px_0_0_#50e3c2] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#50e3c2] active:translate-y-[4px] active:shadow-none">
                                RETURN TO SAFETY
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
