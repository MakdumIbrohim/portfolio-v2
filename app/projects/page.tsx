"use client";

import React from 'react';
import Link from 'next/link';
import { FolderGit2, ExternalLink, Github } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { DontClickButton } from '@/components/dont-click-button';
import { MobileMenu } from '@/components/mobile-menu';

// Sample projects data
const projects = [
    {
        id: 1,
        title: "E-Learning Platform",
        description: "A comprehensive learning management system built with Next.js, featuring real-time video streaming, interactive quizzes, and progress tracking.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
        color: "#4a90e2", // Blue
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "DevOps Dashboard",
        description: "Internal tool for monitoring server health, deployment status, and handling CI/CD pipelines directly from a web interface.",
        tech: ["React", "Go", "Docker", "Prometheus"],
        color: "#ff3b30", // Red
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "EcoTracker API",
        description: "RESTful API built with Laravel to track carbon footprint data for enterprises. Includes complex data aggregation and reporting.",
        tech: ["Laravel", "PostgreSQL", "Redis"],
        color: "#50e3c2", // Cyan/Green
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Crypto Portfolio App",
        description: "Mobile-first web application to track cryptocurrency investments, utilizing real-time WebSocket data from major exchanges.",
        tech: ["React Native", "Expo", "Zustand"],
        color: "#f8e71c", // Yellow
        link: "#",
        github: "#"
    },
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-[#f4f4f0] dark:bg-[#1a1a1a] text-black dark:text-white p-3 sm:p-4 md:p-8 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
            {/* Header Navigation */}
            <header className="border-[3px] border-black dark:border-white p-3 sm:p-4 md:p-6 mb-4 md:mb-8 bg-white dark:bg-black flex items-center justify-between gap-4 max-w-6xl mx-auto shadow-[4px_4px_0_0_#000] lg:shadow-[8px_8px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] dark:lg:shadow-[8px_8px_0_0_#fff]">
                {/* Desktop Nav */}
                <nav className="hidden lg:flex justify-start gap-4 font-black text-sm lg:text-base tracking-wider uppercase">
                    <Link href="/" className="border-[3px] border-black dark:border-white bg-[#4a90e2] text-white px-6 py-2 flex items-center justify-center gap-2 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] cursor-pointer transition-all">
                        <span className="text-lg leading-none mt-[-2px]">←</span> BACK TO HOME
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
                <div className="mb-10 sm:mb-14 border-b-[4px] border-dashed border-black dark:border-white pb-6 sm:pb-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-end">
                    <div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-center md:text-left leading-none flex items-center justify-center md:justify-start gap-4 sm:gap-6 flex-wrap">
                            <FolderGit2 className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#f8e71c] dark:text-[#b8a900]" strokeWidth={2.5} />
                            <span>MY <span className="bg-[#f8e71c] dark:bg-[#b8a900] text-black px-3 sm:px-4 pb-1 sm:pb-2 border-[3px] sm:border-[4px] border-black dark:border-white inline-block shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] rotate-2">PROJECTS</span></span>
                        </h1>
                    </div>

                    <div className="font-mono text-xs sm:text-sm font-bold bg-[#fff9db] dark:bg-[#1f1a00] p-3 border-[3px] border-black dark:border-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] uppercase text-black dark:text-gray-300 w-full md:w-auto">
                        STATUS: BUILDING 🏗️<br />
                        COMMITS: TOO MANY
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="border-[3px] border-black dark:border-white bg-[#fdfdfd] dark:bg-[#1e1e1e] shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] transition-transform hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] dark:hover:shadow-[8px_8px_0_0_#fff] relative flex flex-col group"
                        >
                            {/* Header colored banner */}
                            <div
                                className="p-3 sm:p-4 border-b-[3px] border-black dark:border-white flex justify-between items-center"
                                style={{ backgroundColor: project.color }}
                            >
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full border-2 border-black bg-white"></div>
                                    <div className="w-3 h-3 rounded-full border-2 border-black bg-white"></div>
                                </div>
                                <div className="font-mono font-bold text-xs uppercase text-black bg-white px-2 py-0.5 border-2 border-black">
                                    APP_ID: 00{project.id}
                                </div>
                            </div>

                            <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-1">
                                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-4 group-hover:underline decoration-4 underline-offset-4">
                                    {project.title}
                                </h2>

                                <p className="font-medium text-sm sm:text-base mb-6 flex-1 text-gray-800 dark:text-gray-300 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="mb-8">
                                    <div className="font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-2 opacity-60">Tech Stack</div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="font-mono text-[10px] sm:text-xs font-bold border-[2px] border-black dark:border-white bg-white dark:bg-black px-2 py-1 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff]">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3 sm:gap-4 mt-auto pt-4 border-t-[3px] border-dashed border-black dark:border-white opacity-50 group-hover:opacity-100 transition-opacity">
                                    <a href={project.github} className="border-[3px] border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-bold text-xs sm:text-sm px-4 py-2 flex justify-center items-center gap-2 flex-1 hover:translate-y-[2px] shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:shadow-none transition-all uppercase">
                                        <Github size={16} strokeWidth={2.5} /> Repo
                                    </a>
                                    <a href={project.link} className="border-[3px] border-black dark:border-white bg-[#50e3c2] dark:bg-[#008f6b] text-black dark:text-white font-bold text-xs sm:text-sm px-4 py-2 flex justify-center items-center gap-2 flex-1 hover:translate-y-[2px] shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:shadow-none transition-all uppercase">
                                        <ExternalLink size={16} strokeWidth={2.5} /> Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
}
