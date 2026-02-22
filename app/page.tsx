import React from 'react';
import Link from 'next/link';
import { Briefcase, Laptop, Settings, Smartphone } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { DontClickButton } from '@/components/dont-click-button';
import { AudioPlayerCard } from '@/components/audio-player-card';
import { MobileMenu } from '@/components/mobile-menu';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f4f0] dark:bg-[#1a1a1a] text-black dark:text-white p-3 sm:p-4 md:p-8 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      {/* Header Navigation */}
      <header className="border-[3px] border-black dark:border-white p-3 sm:p-4 md:p-6 mb-4 md:mb-8 bg-white dark:bg-black flex flex-col lg:flex-row items-center justify-between gap-4 max-w-6xl mx-auto shadow-[4px_4px_0_0_#000] lg:shadow-[8px_8px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] dark:lg:shadow-[8px_8px_0_0_#fff]">
        <nav className="hidden lg:flex lg:flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 font-black text-[10px] sm:text-xs md:text-sm lg:text-base tracking-wider uppercase w-full lg:w-auto">
          <div className="border-[3px] border-black dark:border-white bg-[#4a90e2] text-white px-2 sm:px-4 py-2 flex items-center justify-center gap-1 sm:gap-2 shadow-[2px_2px_0_0_#000] md:shadow-[4px_4px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] dark:md:shadow-[4px_4px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] cursor-pointer transition-all w-full lg:w-auto text-center">
            <span>★</span> PROFILE <span>★</span>
          </div>
          <Link href="/projects" className="border-[3px] border-black dark:border-white bg-[#f8e71c] dark:bg-[#b8a900] px-2 sm:px-4 py-2 flex items-center justify-center shadow-[2px_2px_0_0_#000] md:shadow-[4px_4px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] dark:md:shadow-[4px_4px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] cursor-pointer transition-all text-black dark:text-white w-full lg:w-auto text-center block">
            PROJECTS
          </Link>
          <Link href="/certificates" className="border-[3px] border-black dark:border-white bg-[#50e3c2] dark:bg-[#008f6b] px-2 sm:px-4 py-2 flex items-center justify-center shadow-[2px_2px_0_0_#000] md:shadow-[4px_4px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] dark:md:shadow-[4px_4px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] cursor-pointer transition-all text-black dark:text-white w-full lg:w-auto text-center block">
            CERTIFICATES
          </Link>
          <Link href="/contact" className="border-[3px] border-black dark:border-white bg-[#ff79c6] dark:bg-[#b83280] px-2 sm:px-4 py-2 flex items-center justify-center shadow-[2px_2px_0_0_#000] md:shadow-[4px_4px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] dark:md:shadow-[4px_4px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] cursor-pointer transition-all text-black dark:text-white w-full lg:w-auto text-center block">
            CONTACT
          </Link>
        </nav>
        <div className="flex gap-2 sm:gap-4 w-full lg:w-auto items-stretch justify-center lg:justify-end mt-2 lg:mt-0">
          <ThemeToggle />
          <DontClickButton />
          <MobileMenu />
        </div>
      </header>

      {/* Main Content Container */}
      <main className="border-[3px] border-black dark:border-white p-3 sm:p-4 md:p-8 bg-white dark:bg-[#121212] max-w-6xl mx-auto shadow-[6px_6px_0_0_#000] md:shadow-[12px_12px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] dark:md:shadow-[12px_12px_0_0_#fff] relative">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-6 md:gap-12 relative">

          {/* Left Column (Profile Info) */}
          <div className="flex flex-col gap-5 md:gap-6 relative z-10 w-full max-w-sm mx-auto lg:mx-0">
            {/* Profile Picture Box */}
            <div className="relative">
              {/* Sticker */}
              <div className="absolute -top-3 -right-3 md:-top-5 md:-right-5 border-[3px] border-black dark:border-white bg-[#ff3b30] text-white font-black px-2 sm:px-3 py-1 rotate-[12deg] shadow-[2px_2px_0_0_#000] md:shadow-[4px_4px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] z-20 text-[10px] sm:text-sm md:text-base uppercase tracking-widest whitespace-nowrap">
                NO BUGS, ONLY FEATURES
              </div>
              <div className="border-[3px] border-black dark:border-white bg-white dark:bg-black aspect-[4/5] sm:aspect-[3/4] p-2 sm:p-3 shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] dark:md:shadow-[6px_6px_0_0_#fff]">
                <div className="w-full h-full bg-gray-200 dark:bg-zinc-800 border-[3px] border-black dark:border-white overflow-hidden relative flex items-center justify-center group cursor-pointer" tabIndex={0}>
                  <div className="text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest flex flex-col items-center">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span className="text-sm border-b border-gray-400">PHOTO</span>
                  </div>
                  {/* Real image */}
                  <img src="/pfp/makdum-pfp.png" alt="Makdum" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-active:grayscale-0 group-active:scale-105 focus:grayscale-0 focus:scale-105" />
                </div>
              </div>

              {/* Level Badge */}
              <div className="mt-4 md:mt-6 border-[3px] border-black dark:border-white bg-[#f8e71c] dark:bg-[#b8a900] font-black p-2 sm:p-3 text-center shadow-[3px_3px_0_0_#000] md:shadow-[4px_4px_0_0_#000] dark:shadow-[3px_3px_0_0_#fff] text-black dark:text-white uppercase tracking-wider text-xs sm:text-sm">
                MOBILE DEVELOPER
              </div>
            </div>

            {/* Server Stats Box */}
            <div className="border-[3px] border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] mt-auto">
              <div className="border-b-[3px] border-black dark:border-white p-2 sm:p-3 flex items-center font-mono font-bold text-xs sm:text-sm bg-gray-100 dark:bg-zinc-900 border-b-black dark:border-b-white">
                <span className="mr-2">≡</span> SERVER_STATS.JSON
              </div>
              <div className="p-3 sm:p-4 font-mono text-[10px] sm:text-xs md:text-sm space-y-2 sm:space-y-3 bg-[#fff9db] dark:bg-[#1f1a00] dark:text-gray-300">
                <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 pb-1.5 sm:pb-2">
                  <span className="font-bold whitespace-nowrap mr-2 text-black dark:text-white">Processor</span>
                  <span className="bg-black dark:bg-white text-white dark:text-black px-1.5 sm:px-2 py-0.5 whitespace-nowrap text-right max-w-[120px] sm:max-w-none truncate sm:overflow-visible">Dual AMD EPYC™</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 pb-1.5 sm:pb-2">
                  <span className="font-bold whitespace-nowrap mr-2 text-black dark:text-white">Memory</span>
                  <span className="bg-black dark:bg-white text-white dark:text-black px-1.5 sm:px-2 py-0.5 whitespace-nowrap">1024 GB RAM</span>
                </div>
                <div className="flex justify-between items-center pb-0.5 sm:pb-1">
                  <span className="font-bold whitespace-nowrap mr-2 text-black dark:text-white">Status</span>
                  <span className="bg-black dark:bg-white text-[#50e3c2] dark:text-[#008f6b] font-bold px-1.5 sm:px-2 py-0.5 whitespace-nowrap animate-pulse">OPTIMAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Bio & Terminal) */}
          <div className="flex flex-col relative mt-8 lg:mt-0">

            {/* Header Text */}
            <div className="mb-6 relative z-10 pt-2 lg:pt-0 text-center lg:text-left">
              <h1 className="text-[12vw] sm:text-5xl md:text-7xl lg:text-[5rem] font-black leading-[0.85] uppercase tracking-tighter text-black dark:text-white break-words">
                MAKDUM <br />
                <span className="text-[#4a90e2]">IBROHIM</span>
              </h1>

              {/* Role Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mt-4 sm:mt-6 font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">
                <div className="border-[2px] sm:border-[3px] border-black dark:border-white bg-[#50e3c2] dark:bg-[#008f6b] text-black dark:text-white px-2 sm:px-3 py-1 sm:py-1.5 shadow-[2px_2px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] flex items-center gap-1 sm:gap-2">
                  FREELANCER <Briefcase size={14} className="sm:w-4 sm:h-4" strokeWidth={2.5} />
                </div>
                <div className="border-[2px] sm:border-[3px] border-black dark:border-white bg-[#4a90e2] text-white px-2 sm:px-3 py-1 sm:py-1.5 shadow-[2px_2px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] flex items-center gap-1 sm:gap-2">
                  FULLSTACK <Laptop size={14} className="sm:w-4 sm:h-4" strokeWidth={2.5} />
                </div>
                <div className="border-[2px] sm:border-[3px] border-black dark:border-white bg-[#ff3b30] text-white px-2 sm:px-3 py-1 sm:py-1.5 shadow-[2px_2px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] flex items-center gap-1 sm:gap-2">
                  MOBILE DEV<Smartphone size={14} className="sm:w-4 sm:h-4" strokeWidth={2.5} />
                </div>
              </div>

              {/* Lofi Audio Player Component */}
              <AudioPlayerCard />
            </div>

            {/* Dashed Separator */}
            <div className="border-b-[3px] sm:border-b-[4px] border-dashed border-black dark:border-white w-full my-4 sm:my-6 opacity-30 md:opacity-50"></div>

            {/* Terminal Window */}
            <div className="border-[3px] border-black dark:border-white bg-white dark:bg-[#1e1e1e] shadow-[4px_4px_0_0_#000] md:shadow-[8px_8px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] flex-1 flex flex-col relative overflow-hidden">

              {/* Terminal Title Bar */}
              <div className="border-b-[3px] border-black dark:border-white bg-[#4a90e2] p-2 sm:p-2.5 flex items-center justify-between font-mono text-white text-[10px] sm:text-xs md:text-sm font-bold">
                <div className="flex items-center gap-1 sm:gap-2 truncate mr-2">
                  <span className="ml-0.5 sm:ml-1 truncate">≡ root@makdum-server:~</span>
                </div>
                <div className="flex gap-1.5 sm:gap-2 mr-0.5 sm:mr-1 flex-shrink-0">
                  <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border-[1.5px] sm:border-2 border-black bg-[#ff3b30]"></div>
                  <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border-[1.5px] sm:border-2 border-black bg-[#f8e71c]"></div>
                  <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border-[1.5px] sm:border-2 border-black bg-[#50e3c2]"></div>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-3 sm:p-5 md:p-8 font-mono text-xs sm:text-sm md:text-base leading-relaxed sm:leading-relaxed bg-[#fdfdfd] dark:bg-[#121212] flex-1 text-black dark:text-gray-300 overflow-x-auto">
                <div className="mb-4 sm:mb-5 max-w-full overflow-hidden">
                  <span className="bg-[#f8e71c] dark:bg-[#b8a900] px-1.5 sm:px-2 py-0.5 font-bold text-black border-[2px] border-black dark:border-white shadow-[1px_1px_0_0_#000] sm:shadow-[2px_2px_0_0_#000] dark:shadow-[1px_1px_0_0_#fff] dark:text-white inline-block">
                    $ ./makdum --info
                  </span>
                </div>

                <p className="mb-4 sm:mb-5 font-medium break-words">
                  Hai! Aku web developer yang excited banget bikin website atau aplikasi yang kece dan bisa dipake. Fokus utamaku di frontend, tapi lagi gaspol juga belajar backend. Selalu open buat tantangan baru biar makin jago!
                </p>

                <div className="mb-2 sm:mb-3 font-bold uppercase tracking-widest text-black dark:text-white text-[10px] sm:text-xs md:text-sm">
                  <span className="border-b-[1.5px] sm:border-b-2 border-black dark:border-white pb-0.5 sm:pb-1">TECH ARSENAL:</span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mb-4 sm:mb-6">
                  {['Laravel', 'React', 'Next.js', 'Tailwind', 'Docker', 'Linux'].map(tech => (
                    <span key={tech} className="border-[1.5px] sm:border-[2px] border-black dark:border-white bg-gray-100 dark:bg-zinc-800 text-black dark:text-white px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold shadow-[2px_2px_0_0_#000] sm:shadow-[3px_3px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] hover:bg-[#f8e71c] dark:hover:bg-[#b8a900] dark:hover:text-white hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] dark:hover:shadow-[1px_1px_0_0_#fff] cursor-pointer transition-all">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-2 sm:pt-4 flex items-center flex-wrap">
                  <span className="text-black dark:text-white font-bold whitespace-nowrap">root@makdum-server:~# </span>
                  <span className="w-1.5 sm:w-2.5 h-3 sm:h-5 bg-black dark:bg-white ml-1.5 sm:ml-2 animate-pulse inline-block align-middle sm:align-text-bottom"></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
