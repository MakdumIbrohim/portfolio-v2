"use client";

import React, { useState, useEffect } from 'react';

export function LoadingBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    // slight pause at 100% before resetting
                    setTimeout(() => setProgress(0), 1000);
                    return 100;
                }
                const increment = Math.floor(Math.random() * 15) + 5;
                return Math.min(p + increment, 100);
            });
        }, 800);
        return () => clearInterval(interval);
    }, []);

    const totalBlocks = 10;
    const filledBlocks = Math.floor((progress / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;

    const bar = '[' + '■'.repeat(filledBlocks) + '□'.repeat(emptyBlocks) + ']';

    return (
        <div className="flex-1 flex flex-col justify-center items-center relative z-0 hidden lg:flex my-3 opacity-80 hover:opacity-100 transition-opacity">
            <div className="border-[3px] border-black dark:border-white bg-[#fff9db] dark:bg-[#1f1a00] text-black dark:text-white font-mono font-bold px-3 py-2 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] flex flex-col items-center gap-1.5 text-xs sm:text-sm">
                <span className="font-press-start text-[8px] text-[#4a90e2]">LOADING...</span>
                <span className="tracking-widest flex items-center gap-2">
                    {bar} <span className="w-8 text-right">{progress}%</span>
                </span>
            </div>
            {/* Short connecting line */}
            <div className="h-6 border-l-[3px] border-dashed border-black dark:border-white opacity-40 mt-2"></div>
        </div>
    );
}
