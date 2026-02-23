"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export function DontClickButton() {
    const router = useRouter();

    const handleSecretClick = () => {
        // Optionally play a sound, then redirect
        router.push('/secret');
    };

    return (
        <button
            onClick={handleSecretClick}
            className="border-[3px] border-black dark:border-white bg-[#ff3b30] text-white font-press-start px-4 sm:px-6 py-2 shadow-[2px_2px_0_0_#000] md:shadow-[4px_4px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] dark:md:shadow-[4px_4px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] cursor-pointer transition-all flex justify-center items-center gap-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider flex-1 lg:flex-none whitespace-nowrap leading-[1.3]"
        >
            <span className="text-sm sm:text-base md:text-lg -mt-0.5">☠</span> <span className="hidden sm:inline">DON'T CLICK ME</span><span className="sm:hidden">DON'T CLICK</span>
        </button>
    );
}
