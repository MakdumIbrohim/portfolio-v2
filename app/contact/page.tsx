"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { DontClickButton } from '@/components/dont-click-button';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [toast, setToast] = React.useState<{ show: boolean, message: string, type: 'success' | 'error' }>({ show: false, message: '', type: 'success' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xyzprkoe", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setToast({ show: true, message: "PESAN BERHASIL TERKIRIM!", type: 'success' });
                form.reset();
            } else {
                setToast({ show: true, message: "GAGAL MENGIRIM PESAN. COBA LAGI.", type: 'error' });
            }
        } catch (error) {
            setToast({ show: true, message: "TERDETEKSI GANGGUAN JARINGAN.", type: 'error' });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 5000);
        }
    };

    return (
        <div className="min-h-screen bg-[#f4f4f0] dark:bg-[#1a1a1a] text-black dark:text-white p-3 sm:p-4 md:p-8 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
            {/* Custom Toast Notification */}
            {toast.show && (
                <div className="fixed bottom-4 right-4 z-50 animate-[slide-up_0.3s_ease-out]">
                    <div className={`border-[3px] border-black p-4 font-black tracking-widest uppercase shadow-[4px_4px_0_0_#000] flex items-center gap-3 ${toast.type === 'success' ? 'bg-[#50e3c2] text-black' : 'bg-[#ff3b30] text-white'}`}>
                        {toast.type === 'success' ? <Send size={20} /> : <div className="w-5 h-5 flex items-center justify-center border-2 border-current rounded-full">!</div>}
                        {toast.message}
                    </div>
                </div>
            )}

            {/* Header Navigation */}
            <header className="border-[3px] border-black dark:border-white p-3 sm:p-4 md:p-6 mb-4 md:mb-8 bg-white dark:bg-black flex flex-col lg:flex-row items-center justify-between gap-4 max-w-6xl mx-auto shadow-[4px_4px_0_0_#000] lg:shadow-[8px_8px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] dark:lg:shadow-[8px_8px_0_0_#fff]">
                <nav className="grid grid-cols-1 lg:flex lg:flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 font-black text-[10px] sm:text-xs md:text-sm lg:text-base tracking-wider uppercase w-full lg:w-auto">
                    <Link href="/" className="border-[3px] border-black dark:border-white bg-[#4a90e2] text-white px-4 sm:px-6 py-2 flex items-center justify-center gap-1 sm:gap-2 shadow-[2px_2px_0_0_#000] md:shadow-[4px_4px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] dark:md:shadow-[4px_4px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] cursor-pointer transition-all w-full lg:w-auto text-center">
                        <span className="text-lg leading-none mt-[-2px]">←</span> BACK TO HOME
                    </Link>
                    <Link href="/certificates" className="border-[3px] border-black dark:border-white bg-[#50e3c2] dark:bg-[#008f6b] px-4 sm:px-6 py-2 flex items-center justify-center gap-1 sm:gap-2 shadow-[2px_2px_0_0_#000] md:shadow-[4px_4px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] dark:md:shadow-[4px_4px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] cursor-pointer transition-all w-full lg:w-auto text-center block">
                        CERTIFICATES
                    </Link>
                </nav>
                <div className="flex gap-2 sm:gap-4 w-full lg:w-auto items-stretch justify-center lg:justify-end mt-2 lg:mt-0">
                    <ThemeToggle />
                    <DontClickButton />
                </div>
            </header>

            {/* Main Content Container */}
            <main className="border-[3px] border-black dark:border-white p-4 sm:p-6 md:p-10 bg-white dark:bg-[#121212] max-w-6xl mx-auto shadow-[6px_6px_0_0_#000] md:shadow-[12px_12px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] dark:md:shadow-[12px_12px_0_0_#fff] relative">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 sm:mb-12 text-center lg:text-left leading-none">
                    LET'S <span className="bg-[#ff79c6] dark:bg-[#b83280] text-white px-3 sm:px-4 pb-1 sm:pb-2 border-[3px] sm:border-[4px] border-black dark:border-white inline-block shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] rotate-1">CONNECT</span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 relative">

                    {/* Contact Details Column */}
                    <div className="flex flex-col gap-6 w-full">
                        <div className="border-[3px] border-black dark:border-white bg-[#50e3c2] dark:bg-[#008f6b] p-4 sm:p-6 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] flex items-center gap-4 transition-transform hover:-translate-y-1">
                            <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-black dark:text-white" strokeWidth={2.5} />
                            <div className="overflow-hidden">
                                <p className="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-black dark:text-white opacity-80 mb-1">Electronic Mail</p>
                                <a href="mailto:hello@makdum.com" className="font-mono text-sm sm:text-lg hover:underline font-bold text-black dark:text-white truncate block">hello@makdum.com</a>
                            </div>
                        </div>

                        <div className="border-[3px] border-black dark:border-white bg-[#f8e71c] dark:bg-[#b8a900] p-4 sm:p-6 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] flex items-center gap-4 transition-transform hover:-translate-y-1">
                            <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-black dark:text-white" strokeWidth={2.5} />
                            <div>
                                <p className="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-black dark:text-white opacity-80 mb-1">Direct Line</p>
                                <p className="font-mono text-sm sm:text-lg font-bold text-black dark:text-white">+62 812-3456-7890</p>
                            </div>
                        </div>

                        <div className="border-[3px] border-black dark:border-white bg-[#4a90e2] text-white p-4 sm:p-6 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] flex items-center gap-4 transition-transform hover:-translate-y-1">
                            <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                            <div>
                                <p className="font-bold text-[10px] sm:text-xs uppercase tracking-widest opacity-80 mb-1">Coordinates</p>
                                <p className="font-mono text-sm sm:text-lg font-bold">East Java, Indonesia</p>
                            </div>
                        </div>

                        <div className="text-center sm:text-left mt-2">
                            <p className="font-medium text-sm sm:text-base mb-4">You can also find me wandering the web at these coordinates:</p>
                            <div className="flex justify-center sm:justify-start gap-4">
                                <a href="#" className="border-[3px] border-black dark:border-white bg-white dark:bg-black p-3 hover:bg-[#f8e71c] dark:hover:bg-[#b8a900] shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[2px] hover:shadow-none transition-all">
                                    <svg className="w-6 h-6 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                </a>
                                <a href="#" className="border-[3px] border-black dark:border-white bg-white dark:bg-black p-3 hover:bg-[#4a90e2] dark:hover:bg-[#4a90e2] shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:translate-y-[2px] hover:shadow-none transition-all group">
                                    <svg className="w-6 h-6 text-black dark:text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="border-[3px] border-black dark:border-white bg-[#fdfdfd] dark:bg-[#1e1e1e] shadow-[4px_4px_0_0_#000] border-t-8 border-t-[#ff3b30] flex flex-col mt-4 lg:mt-0">
                        <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-1">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b-[3px] border-black dark:border-white border-dashed">
                                <h2 className="font-black text-xl sm:text-2xl md:text-3xl uppercase">SEND PAYLOAD</h2>
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 bg-black dark:bg-white rounded-full animate-bounce"></div>
                                    <div className="w-3 h-3 bg-black dark:bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                                    <div className="w-3 h-3 bg-black dark:bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                                </div>
                            </div>

                            <form className="flex flex-col gap-5 flex-1" onSubmit={handleSubmit}>
                                <div className="flex flex-col sm:flex-row gap-5">
                                    <div className="flex-1 flex flex-col">
                                        <label htmlFor="name" className="font-bold text-xs uppercase mb-1 tracking-widest px-1">Nama/Alias</label>
                                        <input type="text" id="name" name="name" required disabled={isSubmitting} placeholder="GUEST USER" className="border-[3px] border-black dark:border-white bg-[#f4f4f0] dark:bg-[#121212] p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#f8e71c] focus:bg-white dark:focus:bg-black transition-colors disabled:opacity-50" />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <label htmlFor="email" className="font-bold text-xs uppercase mb-1 tracking-widest px-1">Email Balasan</label>
                                        <input type="email" id="email" name="email" required disabled={isSubmitting} placeholder="EMAIL ADDRESS" className="border-[3px] border-black dark:border-white bg-[#f4f4f0] dark:bg-[#121212] p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#50e3c2] focus:bg-white dark:focus:bg-black transition-colors disabled:opacity-50" />
                                    </div>
                                </div>

                                <div className="flex flex-col flex-1">
                                    <label htmlFor="message" className="font-bold text-xs uppercase mb-1 tracking-widest px-1">Isi Pesan</label>
                                    <textarea id="message" name="message" required disabled={isSubmitting} placeholder="ENTER MESSAGE PROTOCOL HERE..." className="border-[3px] border-black dark:border-white bg-[#f4f4f0] dark:bg-[#121212] p-3 font-mono text-sm h-40 sm:h-48 resize-none focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:bg-white dark:focus:bg-black transition-colors flex-1 disabled:opacity-50" />
                                </div>

                                <button type="submit" disabled={isSubmitting} className="border-[3px] border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-black text-lg p-4 mt-2 shadow-[4px_4px_0_0_#ff3b30] hover:translate-y-[2px] transition-transform active:shadow-[1px_1px_0_0_#ff3b30] active:translate-y-[4px] flex justify-center items-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-active:translate-x-2 transition-transform" strokeWidth={2.5} />
                                    )}
                                    {isSubmitting ? "MENGIRIM..." : "KIRIM PESAN"}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
