"use client";

import React from 'react';
import Link from 'next/link';
import { Award, ExternalLink } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { DontClickButton } from '@/components/dont-click-button';
import { MobileMenu } from '@/components/mobile-menu';

// Sample certificate data
const certificates = [
    {
        id: 1,
        title: "Belajar Dasar Pemrograman Web",
        issuer: "Dicoding Indonesia",
        date: "17 Agustus 2025",
        color: "#2d3e50", // Dicoding dark blue
        icon: "/icon/dicoding/dicoding.jpeg",
        imageUrl: "/certificates/dicoding/sertifikat_belajar_dasar_pemrograman_web.png",
        credentialUrl: "/certificates/dicoding/sertifikat_belajar_dasar_pemrograman_web.png"
    },
    {
        id: 3,
        title: "Belajar Membuat Front-End Web untuk Pemula",
        issuer: "Dicoding Indonesia",
        date: "17 Agustus 2025",
        color: "#2d3e50", // Dicoding dark blue
        icon: "/icon/dicoding/dicoding.jpeg",
        imageUrl: "/certificates/dicoding/sertifikat_belajar_membuat_front-end_web_untuk_pemula.png",
        credentialUrl: "/certificates/dicoding/sertifikat_belajar_membuat_front-end_web_untuk_pemula.png"
    },
    {
        id: 4,
        title: "Belajar Dasar Pemrograman JavaScript",
        issuer: "Dicoding Indonesia",
        date: "16 Agustus 2025",
        color: "#2d3e50", // Dicoding dark blue
        icon: "/icon/dicoding/dicoding.jpeg",
        imageUrl: "/certificates/dicoding/sertifikat_dicoding_js_dasar.png",
        credentialUrl: "https://dicoding.com/certificates/ERZR242LQPYV"
    },
    {
        id: 5,
        title: "Memulai Pemrograman dengan Dart",
        issuer: "Dicoding Indonesia",
        date: "07 September 2025",
        color: "#2d3e50", // Dicoding dark blue
        icon: "/icon/dicoding/dicoding.jpeg",
        imageUrl: "/certificates/dicoding/sertifikat_memulai_pemrograman_dart.png",
        credentialUrl: "https://dicoding.com/certificates/EYX4K95J6PDL"
    },
    {
        id: 2,
        title: "Sertifikat Kompetensi Kemalasan",
        issuer: "IMPHNEN",
        date: "02 August 2025",
        color: "#0595d2", // IMPHNEN Blue
        icon: "/icon/imphnen/imphnen.png",
        imageUrl: "https://raw.githubusercontent.com/MakdumIbrohim/fortofolio/main/public/sertifikat_kompetensi_kemalasan.jpg",
        credentialUrl: "https://raw.githubusercontent.com/MakdumIbrohim/fortofolio/main/public/sertifikat_kompetensi_kemalasan.jpg"
    }
];

export default function Certificates() {
    const [selectedIssuer, setSelectedIssuer] = React.useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#f4f4f0] dark:bg-[#1a1a1a] text-black dark:text-white p-3 sm:p-4 md:p-8 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
            {/* Header Navigation */}
            <header className="border-[3px] border-black dark:border-white p-3 sm:p-4 md:p-6 mb-4 md:mb-8 bg-white dark:bg-black flex items-center justify-between gap-4 max-w-6xl mx-auto shadow-[4px_4px_0_0_#000] lg:shadow-[8px_8px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] dark:lg:shadow-[8px_8px_0_0_#fff]">
                {/* Desktop Nav */}
                <nav className="hidden lg:flex justify-start gap-4 font-press-start text-[8px] sm:text-[10px] md:text-xs tracking-wider uppercase">
                    <Link href="/" className="border-[3px] border-black dark:border-white bg-[#4a90e2] text-white px-6 py-2 flex items-center justify-center gap-2 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] cursor-pointer transition-all">
                        <span className="text-lg leading-none mt-[-2px]">←</span> BACK TO HOME
                    </Link>
                    <Link href="/projects" className="border-[3px] border-black dark:border-white bg-[#ff79c6] dark:bg-[#b83280] text-white px-6 py-2 flex items-center justify-center gap-2 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] cursor-pointer transition-all">
                        PROJECTS
                    </Link>
                </nav>
                <div className="flex flex-1 lg:flex-none gap-2 sm:gap-4 items-center justify-end">
                    <ThemeToggle />
                    <DontClickButton />
                    <MobileMenu />
                </div>
            </header>

            {/* Main Content Container */}
            <main className="border-[3px] border-black dark:border-white p-4 sm:p-6 md:p-10 bg-white dark:bg-[#121212] max-w-6xl mx-auto shadow-[6px_6px_0_0_#000] md:shadow-[12px_12px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] dark:md:shadow-[12px_12px_0_0_#fff] relative">

                {/* Page Title */}
                <div className="mb-10 sm:mb-14 border-b-[4px] border-dashed border-black dark:border-white pb-6 sm:pb-8">
                    <h1 className="text-[7vw] sm:text-3xl md:text-5xl font-press-start uppercase tracking-tighter text-center lg:text-left leading-[1.3] flex items-center justify-center lg:justify-start gap-4 sm:gap-6 flex-wrap">
                        <Award className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#50e3c2] dark:text-[#008f6b]" strokeWidth={2.5} />
                        <span>PROOF OF<span className="bg-[#50e3c2] dark:bg-[#008f6b] text-black dark:text-white px-3 sm:px-4 pb-1 sm:pb-2 ml-1 sm:ml-2 border-[3px] sm:border-[4px] border-black dark:border-white inline-block shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] -rotate-2">SKILL</span></span>
                    </h1>
                    <p className="font-press-start text-[8px] sm:text-[10px] md:text-xs leading-loose text-center lg:text-left mt-6 max-w-2xl bg-[#fff9db] dark:bg-[#1f1a00] p-4 border-[3px] border-black dark:border-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] uppercase text-black dark:text-gray-300 mx-auto lg:mx-0">
                        &gt; SELECT _DATABASE: CERTIFICATES.SQL<br />
                        &gt; QUERY RETURNED {certificates.length} RECORDS.
                    </p>
                </div>

                {/* Certificates Issuers Grid or Specific Issuer View */}
                {!selectedIssuer ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-[slide-up_0.3s_ease-out]">
                        {Object.values(
                            certificates.reduce((acc, cert) => {
                                if (!acc[cert.issuer]) {
                                    acc[cert.issuer] = {
                                        name: cert.issuer,
                                        certs: [],
                                        color: cert.color,
                                        icon: cert.icon
                                    };
                                }
                                acc[cert.issuer].certs.push(cert);
                                return acc;
                            }, {} as Record<string, { name: string, certs: typeof certificates, color: string, icon: string }>)
                        ).map((issuerGroup) => (
                            <button
                                key={issuerGroup.name}
                                onClick={() => setSelectedIssuer(issuerGroup.name)}
                                className="border-[3px] border-black dark:border-white bg-[#fdfdfd] dark:bg-[#1e1e1e] shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] transition-transform hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] dark:hover:shadow-[8px_8px_0_0_#fff] relative overflow-hidden group flex flex-col items-center justify-center p-8 sm:p-10 text-center min-h-[250px] cursor-pointer w-full focus:outline-none focus:ring-4 focus:ring-[#f8e71c]"
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 h-3 border-b-[3px] border-black dark:border-white transition-colors"
                                    style={{ backgroundColor: issuerGroup.color }}
                                ></div>
                                <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center min-h-[80px] sm:min-h-[120px]">
                                    {issuerGroup.icon.startsWith('/') ? (
                                        <img src={issuerGroup.icon} alt={issuerGroup.name} className="h-24 sm:h-32 w-auto object-contain drop-shadow-sm" />
                                    ) : (
                                        issuerGroup.icon
                                    )}
                                </div>
                                <h2 className="text-sm sm:text-base font-press-start uppercase tracking-tight mb-4 group-hover:text-[#4a90e2] transition-colors leading-[1.4]">
                                    {issuerGroup.name}
                                </h2>
                                <div className="bg-black dark:bg-white text-white dark:text-black font-press-start text-[8px] px-3 py-1.5 uppercase tracking-widest border-[2px] border-black dark:border-white mt-auto inline-block">
                                    {issuerGroup.certs.length} CREDENTIAL{issuerGroup.certs.length !== 1 ? 'S' : ''}
                                </div>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col gap-8 animate-[slide-up_0.3s_ease-out]">
                        <div className="flex justify-between items-center sm:items-start flex-col sm:flex-row gap-4 border-b-[3px] border-black dark:border-white border-dashed pb-6">
                            <h2 className="text-sm sm:text-base md:text-lg font-press-start uppercase tracking-tight border-[3px] border-black dark:border-white p-3 inline-block bg-[#f8e71c] dark:bg-[#b8a900] text-black shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] leading-[1.4]">
                                {selectedIssuer}
                            </h2>
                            <button
                                onClick={() => setSelectedIssuer(null)}
                                className="border-[3px] border-black dark:border-white bg-[#ff79c6] dark:bg-[#b83280] text-white px-4 py-3 font-press-start text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] dark:hover:shadow-[2px_2px_0_0_#fff] transition-all w-full sm:w-auto leading-[1.3]"
                            >
                                <span className="text-lg leading-none mt-[-2px]">←</span> BACK TO ISSUERS
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
                            {certificates.filter(c => c.issuer === selectedIssuer).map((cert) => (
                                <div
                                    key={cert.id}
                                    className="border-[3px] border-black dark:border-white bg-[#fdfdfd] dark:bg-[#1e1e1e] shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] transition-transform hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] dark:hover:shadow-[8px_8px_0_0_#fff] relative overflow-hidden group flex flex-col h-full cursor-pointer"
                                >
                                    {/* Colorful Top Banner indicating technology */}
                                    <div
                                        className="h-3 w-full border-b-[3px] border-black dark:border-white"
                                        style={{ backgroundColor: cert.color }}
                                    ></div>

                                    {/* Certificate Image if available */}
                                    {cert.imageUrl ? (
                                        <div className="relative w-full aspect-[4/3] border-b-[3px] border-black dark:border-white overflow-hidden bg-gray-100 dark:bg-gray-800">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={cert.imageUrl}
                                                alt={`Certificate for ${cert.title}`}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
                                            />
                                        </div>
                                    ) : null}

                                    <div className="p-5 sm:p-6 flex flex-col flex-1 relative">
                                        {/* Large Background Icon (only if no image) */}
                                        {!cert.imageUrl && (
                                            <div className="absolute right-4 bottom-4 text-6xl opacity-10 group-hover:scale-125 transition-transform duration-500 pointer-events-none grayscale group-hover:grayscale-0">
                                                {cert.icon.startsWith('/') ? (
                                                    <img src={cert.icon} alt={cert.issuer} className="w-24 h-24 object-contain opacity-50" />
                                                ) : (
                                                    cert.icon
                                                )}
                                            </div>
                                        )}

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
                                            {cert.credentialUrl ? (
                                                <a
                                                    href={cert.credentialUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="border-[2px] border-black dark:border-white bg-white dark:bg-black font-bold text-xs sm:text-sm px-4 py-2 flex justify-center items-center gap-2 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:bg-[#f8e71c] dark:hover:bg-[#b8a900] hover:text-black dark:hover:text-black transition-colors w-full sm:w-auto uppercase inline-flex"
                                                >
                                                    <ExternalLink size={16} strokeWidth={2.5} /> VIEW CREDENTIAL
                                                </a>
                                            ) : (
                                                <button disabled className="opacity-50 cursor-not-allowed border-[2px] border-black dark:border-white bg-white dark:bg-black font-bold text-xs sm:text-sm px-4 py-2 flex justify-center items-center gap-2 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] w-full sm:w-auto uppercase">
                                                    <ExternalLink size={16} strokeWidth={2.5} /> NO CREDENTIAL LINK
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
}
