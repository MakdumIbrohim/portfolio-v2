import React from 'react';
import Link from 'next/link';
import { Terminal, AlertTriangle, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#ff3b30] text-white p-6 sm:p-12 md:p-16 font-sans selection:bg-white selection:text-black flex flex-col items-center justify-center relative overflow-hidden">
            {/* Main Content */}
            <div className="w-full max-w-3xl flex flex-col relative z-10">

                {/* Warning Header */}
                <div className="border-b-[4px] border-dashed border-white pb-4 mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3 font-press-start text-xs sm:text-sm md:text-base tracking-wider uppercase">
                        <AlertTriangle className="animate-pulse" size={24} strokeWidth={3} />
                        FATAL ERROR
                    </div>
                    <div className="font-mono font-bold bg-black text-white px-2 py-1 text-xs">ERR_404</div>
                </div>

                {/* Glitch Text Area */}
                <div className="mb-8 text-center sm:text-left">
                    <h1 className="text-[12vw] sm:text-6xl md:text-8xl font-press-start leading-none tracking-tighter mb-4 text-black drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">
                        404
                    </h1>
                    <h2 className="font-press-start text-sm sm:text-lg md:text-xl uppercase tracking-widest text-black bg-white inline-block px-3 py-1 border-[3px] border-black transform -rotate-2">
                        PAGE NOT FOUND
                    </h2>
                </div>

                {/* Terminal/Context Box */}
                <div className="bg-black text-[#50e3c2] p-4 sm:p-6 border-[3px] border-white font-mono text-xs md:text-sm mb-8 relative">
                    <div className="flex items-center gap-2 mb-2 opacity-70">
                        <Terminal size={14} /> <span className="uppercase tracking-widest text-[10px]">System Log</span>
                    </div>
                    <p className="mb-2">{`> Locating requested directory...`}</p>
                    <p className="mb-2 text-[#ff3b30] animate-pulse">{`> Error: Directory does not exist in current memory bank.`}</p>
                    <p className="mb-2">{`> Possible reasons:`}</p>
                    <ul className="list-disc leading-relaxed ml-6 mb-4 text-white">
                        <li>The URL is incorrect.</li>
                        <li>The file was deleted during a system purge.</li>
                        <li>The developer broke something again.</li>
                    </ul>
                </div>

                {/* Action Button */}
                <div className="flex justify-center sm:justify-start">
                    <Link href="/" className="group border-[3px] border-black bg-[#f8e71c] text-black font-press-start text-[10px] sm:text-xs md:text-sm px-6 py-4 flex items-center justify-center gap-3 shadow-[4px_4px_0_0_#000] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all uppercase w-full sm:w-auto">
                        <Home size={18} strokeWidth={2.5} className="group-hover:-translate-y-1 transition-transform" />
                        RETURN TO ROOT
                    </Link>
                </div>
            </div>
        </div>
    );
}
