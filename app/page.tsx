import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f4f0] text-black p-4 md:p-8 font-sans selection:bg-black selection:text-white">
      {/* Header Navigation */}
      <header className="border-[3px] border-black p-4 md:p-6 mb-8 bg-white flex flex-wrap items-center justify-between gap-4 max-w-6xl mx-auto shadow-[8px_8px_0_0_#000]">
        <nav className="flex flex-wrap gap-3 md:gap-4 font-black text-sm md:text-base tracking-wider uppercase">
          <div className="border-[3px] border-black bg-[#4a90e2] text-white px-4 py-2 flex items-center gap-2 shadow-[4px_4px_0_0_#000] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] cursor-pointer transition-all">
            <span>★</span> PROFILE <span>★</span>
          </div>
          <div className="border-[3px] border-black bg-[#f8e71c] px-4 py-2 shadow-[4px_4px_0_0_#000] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] cursor-pointer transition-all">
            PROJECTS
          </div>
          <div className="border-[3px] border-black bg-[#50e3c2] px-4 py-2 shadow-[4px_4px_0_0_#000] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] cursor-pointer transition-all">
            CERTIFICATES
          </div>
          <div className="border-[3px] border-black bg-[#ff79c6] px-4 py-2 shadow-[4px_4px_0_0_#000] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] cursor-pointer transition-all">
            CONTACT
          </div>
        </nav>
        <div className="border-[3px] border-black bg-[#ff3b30] text-white font-black px-6 py-2 shadow-[4px_4px_0_0_#000] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] cursor-pointer transition-all flex items-center gap-2 ml-auto text-sm md:text-base uppercase tracking-wider">
          <span>☠</span> DON'T CLICK ME
        </div>
      </header>

      {/* Main Content Container */}
      <main className="border-[3px] border-black p-4 md:p-8 bg-white max-w-6xl mx-auto shadow-[12px_12px_0_0_#000] relative">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 md:gap-12 relative">
          
          {/* Left Column (Profile Info) */}
          <div className="flex flex-col gap-6 relative z-10 w-full max-w-[320px] mx-auto lg:mx-0">
            {/* Profile Picture Box */}
            <div className="relative">
              <div className="border-[3px] border-black bg-white aspect-[3/4] p-3 shadow-[6px_6px_0_0_#000]">
                <div className="w-full h-full bg-gray-200 border-[3px] border-black overflow-hidden relative flex items-center justify-center">
                  <div className="text-gray-400 font-bold uppercase tracking-widest flex flex-col items-center">
                    <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span>PHOTO</span>
                  </div>
                  {/* Uncomment to use a real image */}
                  {/* <img src="/makdum.jpg" alt="Makdum" className="absolute inset-0 w-full h-full object-cover grayscale" /> */}
                </div>
              </div>
              
              {/* Level Badge */}
              <div className="mt-6 border-[3px] border-black bg-[#f8e71c] font-black p-3 text-center shadow-[4px_4px_0_0_#000] uppercase tracking-wider text-sm">
                LVL. ??? TECHNOMANCER
              </div>
            </div>

            {/* Server Stats Box */}
            <div className="border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000] mt-auto">
              <div className="border-b-[3px] border-black p-3 flex items-center font-mono font-bold text-sm bg-gray-100">
                <span className="mr-2">≡</span> SERVER_STATS.JSON
              </div>
              <div className="p-4 font-mono text-xs md:text-sm space-y-3 bg-[#fff9db]">
                <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <span className="font-bold whitespace-nowrap mr-2">Processor</span>
                  <span className="bg-black text-white px-2 py-0.5 whitespace-nowrap">Dual AMD EPYC™ 9654</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <span className="font-bold whitespace-nowrap mr-2">Memory</span>
                  <span className="bg-black text-white px-2 py-0.5 whitespace-nowrap">1024 GB RAM</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="font-bold whitespace-nowrap mr-2">Status</span>
                  <span className="bg-black text-[#50e3c2] px-2 py-0.5 whitespace-nowrap animate-pulse">OPTIMAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Bio & Terminal) */}
          <div className="flex flex-col relative">
            
            {/* Sticker Top Left overlapping name slightly */}
            <div className="absolute -top-5 md:-top-10 left-0 md:left-40 border-[3px] border-black bg-[#ff3b30] text-white font-black px-3 py-1 rotate-[-8deg] shadow-[4px_4px_0_0_#000] z-20 text-sm md:text-base uppercase tracking-widest whitespace-nowrap">
              DEPLOY READY
            </div>
            
            {/* Header Text */}
            <div className="mb-6 relative z-10 pt-4 md:pt-0">
              <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black leading-[0.9] uppercase tracking-tighter">
                MAKDUM <br />
                <span className="text-[#4a90e2]">IBROHIM</span>
              </h1>
              
              {/* Role Badges */}
              <div className="flex flex-wrap gap-3 mt-6 font-bold text-xs md:text-sm uppercase tracking-wider">
                <div className="border-[3px] border-black bg-[#50e3c2] px-3 py-1.5 shadow-[4px_4px_0_0_#000]">
                  TEACHER 👨‍🏫
                </div>
                <div className="border-[3px] border-black bg-[#4a90e2] text-white px-3 py-1.5 shadow-[4px_4px_0_0_#000]">
                  FULLSTACK 💻
                </div>
                <div className="border-[3px] border-black bg-[#ff3b30] text-white px-3 py-1.5 shadow-[4px_4px_0_0_#000]">
                  DEVOPS ⚙️
                </div>
              </div>
            </div>

            {/* Dashed Separator */}
            <div className="border-b-[4px] border-dashed border-black w-full my-6 opacity-50"></div>

            {/* Terminal Window */}
            <div className="border-[3px] border-black bg-white shadow-[8px_8px_0_0_#000] flex-1 flex flex-col relative overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="border-b-[3px] border-black bg-[#4a90e2] p-2 flex items-center justify-between font-mono text-white text-xs md:text-sm font-bold">
                <div className="flex items-center gap-2">
                  <span className="ml-1">≡ root@makdum-server:~</span>
                </div>
                <div className="flex gap-2 mr-1">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-black bg-[#ff3b30]"></div>
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-black bg-[#f8e71c]"></div>
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-black bg-[#50e3c2]"></div>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-5 md:p-8 font-mono text-sm md:text-base leading-relaxed bg-[#fdfdfd] flex-1">
                <div className="mb-5">
                  <span className="bg-[#f8e71c] px-2 py-0.5 font-bold text-black border-[2px] border-black shadow-[2px_2px_0_0_#000]">
                    $ whoami
                  </span>
                </div>
                
                <p className="mb-5 font-medium">
                  I am Makdum. By day, I empower students to become software engineers. By night, I retreat to my Homelab to manage bare-metal infrastructure.
                </p>
                <p className="mb-8 font-medium">
                  I have a passion for enterprise web development and problem-solving—though production outages still test my patience. Currently optimizing my workflow to bypass expensive cloud costs.
                </p>
                
                <div className="mb-3 font-bold uppercase tracking-widest">
                  <span className="border-b-2 border-black pb-1">TECH ARSENAL:</span>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                  {['Laravel', 'React', 'Next.js', 'Tailwind', 'Docker', 'Linux'].map(tech => (
                    <span key={tech} className="border-[2px] border-black bg-gray-100 px-3 py-1 text-xs font-bold shadow-[3px_3px_0_0_#000] hover:bg-[#f8e71c] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#000] cursor-pointer transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto pt-4 flex items-center">
                  <span className="text-black font-bold">root@makdum-server:~# </span>
                  <span className="w-2.5 h-5 bg-black ml-2 animate-pulse inline-block align-text-bottom"></span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
