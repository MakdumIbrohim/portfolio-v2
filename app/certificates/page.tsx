"use client";

import React from 'react';
import Link from 'next/link';
import { Award, ExternalLink } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { DontClickButton } from '@/components/dont-click-button';

// Sample certificate data
const certificates = [
    {
        id: 1,
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2024",
        color: "#ff9900", // AWS Orange
        icon: "☁️"
    },
    {
        id: 2,
        title: "Fullstack React Native Bootcamp",
        issuer: "CodeAcademy",
        date: "2023",
        color: "#61dafb", // React Blue
        icon: "📱"
    },
    {
        id: 3,
        title: "Advanced Laravel Masterclass",
        issuer: "Laracasts",
        date: "2023",
        color: "#ff2d20", // Laravel Red
        icon: "🐘"
    },
    {
        id: 4,
        title: "Docker Certified Associate",
        issuer: "Docker Inc.",
        date: "2022",
        color: "#2496ed", // Docker Blue
        icon: "🐳"
    },
];

export default function CertificatesPage() {
    return (
        <div className="min-h-screen bg-[#f4f4f0] dark:bg-[#1a1a1a] text-black dark:text-white p-3 sm:p-4 md:p-8 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
            {/* Header Navigation */}
            <header className="border-[3px] border-black dark:border-white p-3 sm:p-4 md:p-6 mb-4 md:mb-8 bg-white dark:bg-black flex flex-col lg:flex-row items-center justify-between gap-4 max-w-6xl mx-auto shadow-[4px_4px_0_0_#000] lg:shadow-[8px_8px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] dark:lg:shadow-[8px_8px_0_0_#fff]">
                <nav className="grid grid-cols-1 lg:flex lg:flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 font-black text-[10px] sm:text-xs md:text-sm lg:text-base tracking-wider uppercase w-full lg:w-auto">
                    <Link href="/" className="border-[3px] border-black dark:border-white bg-[#4a90e2] text-white px-4 sm:px-6 py-2 flex items-center justify-center gap-1 sm:gap-2 shadow-[2px_2px_0_0_#000] md:shadow-[4px_4px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] dark:md:shadow-[4px_4px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] cursor-pointer transition-all w-full lg:w-auto text-center">
                        <span className="text-lg leading-none mt-[-2px]">←</span> BACK TO HOME
                    </Link>
                </nav>
                <div className="flex gap-2 sm:gap-4 w-full lg:w-auto items-stretch justify-center lg:justify-end mt-2 lg:mt-0">
                    <ThemeToggle />
                    <DontClickButton />
                </div>
            </header>

            {/* Main Content Container */}
            <main className="border-[3px] border-black dark:border-white p-4 sm:p-6 md:p-10 bg-white dark:bg-[#121212] max-w-6xl mx-auto shadow-[6px_6px_0_0_#000] md:shadow-[12px_12px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] dark:md:shadow-[12px_12px_0_0_#fff] relative">

                {/* Page Title */}
                <div className="mb-10 sm:mb-14 border-b-[4px] border-dashed border-black dark:border-white pb-6 sm:pb-8">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-center lg:text-left leading-none flex items-center justify-center lg:justify-start gap-4 sm:gap-6 flex-wrap">
                        <Award className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#50e3c2] dark:text-[#008f6b]" strokeWidth={2.5} />
                        <span>PROOF OF <span className="bg-[#50e3c2] dark:bg-[#008f6b] text-black dark:text-white px-3 sm:px-4 pb-1 sm:pb-2 border-[3px] sm:border-[4px] border-black dark:border-white inline-block shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] -rotate-2">SKILL</span></span>
                    </h1>
                    <p className="font-mono text-sm sm:text-base font-bold text-center lg:text-left mt-6 max-w-2xl bg-[#fff9db] dark:bg-[#1f1a00] p-4 border-[3px] border-black dark:border-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] uppercase text-black dark:text-gray-300 mx-auto lg:mx-0">
                        &gt; SELECT _DATABASE: CERTIFICATES.SQL<br />
                        &gt; QUERY RETURNED {certificates.length} RECORDS.
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="border-[3px] border-black dark:border-white bg-[#fdfdfd] dark:bg-[#1e1e1e] shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] transition-transform hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] relative overflow-hidden group flex flex-col h-full"
                        >
                            {/* Colorful Top Banner indicating technology */}
                            <div
                                className="h-3 w-full border-b-[3px] border-black dark:border-white"
                                style={{ backgroundColor: cert.color }}
                            ></div>

                            <div className="p-5 sm:p-6 flex flex-col flex-1 relative">
                                {/* Large Background Icon */}
                                <div className="absolute right-4 bottom-4 text-6xl opacity-10 group-hover:scale-125 transition-transform duration-500 pointer-events-none grayscale group-hover:grayscale-0">
                                    {cert.icon}
                                </div>

                                {/* Content */}
                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <div className="bg-black dark:bg-white text-white dark:text-black font-black text-xs sm:text-sm px-3 py-1 uppercase tracking-widest inline-block border-[2px] border-black dark:border-white">
                                        {cert.date}
                                    </div>
                                </div>

                                <h2 className="text-xl sm:text-2xl font-black uppercase leading-tight mb-2 relative z-10 group-hover:text-[#4a90e2] transition-colors">
                                    {cert.title}
                                </h2>

                                <p className="font-mono font-bold text-sm text-gray-600 dark:text-gray-400 mb-6 uppercase tracking-wider relative z-10">
                                    ISSUER: {cert.issuer}
                                </p>

                                <div className="mt-auto relative z-10">
                                    <button className="border-[2px] border-black dark:border-white bg-white dark:bg-black font-bold text-xs sm:text-sm px-4 py-2 flex justify-center items-center gap-2 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:bg-[#f8e71c] dark:hover:bg-[#b8a900] dark:hover:text-black transition-colors w-full sm:w-auto uppercase">
                                        <ExternalLink size={16} strokeWidth={2.5} /> VIEW CREDENTIAL
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
}
