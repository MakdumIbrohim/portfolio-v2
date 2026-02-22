"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "CERTIFICATES", href: "/certificates" },
        { name: "PROJECTS", href: "/projects" },
        { name: "SKILLS", href: "/skills" },
        { name: "CONTACT", href: "/contact" }
    ];

    return (
        <div className="lg:hidden relative z-50">
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="border-[3px] border-black dark:border-white bg-[#f8e71c] dark:bg-[#b8a900] text-black dark:text-white p-2 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] transition-all flex items-center justify-center"
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>

            {/* Dropdown Menu Container */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu Content */}
                    <div className="absolute top-full right-0 mt-3 w-56 border-[3px] border-black dark:border-white bg-white dark:bg-[#121212] flex flex-col shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] z-50 animate-[slide-down_0.2s_ease-out]">
                        <div className="bg-[#4a90e2] text-white p-3 border-b-[3px] border-black dark:border-white font-black text-xs tracking-widest uppercase flex items-center justify-between">
                            <span>NAVIGATION</span>
                        </div>

                        <nav className="flex flex-col">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`p-4 font-black text-sm tracking-wider uppercase border-b-[3px] border-black dark:border-white last:border-b-0 hover:bg-[#ff79c6] dark:hover:bg-[#b83280] hover:text-white transition-colors flex items-center justify-between ${isActive
                                                ? "bg-[#50e3c2] dark:bg-[#008f6b] text-black dark:text-white -mr-1 shadow-[-4px_0_0_0_#000] dark:shadow-[-4px_0_0_0_#fff]"
                                                : "text-black dark:text-white"
                                            }`}
                                    >
                                        <span>{link.name}</span>
                                        {isActive && <span className="text-xl leading-none">←</span>}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </>
            )}
        </div>
    );
}
