import { useState } from 'react'
import { personalInfo } from '../data/portfolioData'
import profilePhoto from '../assets/kunchana-profile.jpeg'

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 pb-16 lg:py-0 flex items-center justify-center bg-[#071d2d] overflow-hidden"
    >
      {/* Ambient Breathing Glow Orbs */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#66d8ee]/15 via-[#49e3a1]/10 to-[#aa75ff]/15 rounded-full blur-3xl pointer-events-none -z-10 animate-orb" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-gradient-to-bl from-[#49e3a1]/15 via-[#66d8ee]/10 to-[#5c62ff]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-orb" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#051521]/80 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#49e3a1] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#49e3a1]"></span>
              </span>
              <span className="text-xs font-mono text-slate-300 tracking-wide">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="font-mono text-[#66d8ee] text-xs uppercase tracking-widest font-semibold">
                3rd Year Computer Science Undergraduate
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#66d8ee] via-[#49e3a1] to-[#aa75ff] bg-clip-text text-transparent">
                {personalInfo.role}
              </p>
            </div>

            {/* Bio summary */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Undergraduate at <strong className="text-white font-semibold">SLIIT</strong> with focused expertise in architecting full-stack applications, distributed consensus systems, and structured database engineering. Alumnus of <strong className="text-white font-semibold">Richmond College, Galle</strong>.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#66d8ee] via-[#49e3a1] to-[#38bdf8] text-[#071d2d] font-bold text-xs sm:text-sm shadow-md hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href={`${import.meta.env.BASE_URL}Kunchana_Wijesinghe_CV.pdf`}
                download="Kunchana_Wijesinghe_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full ocean-glass text-white font-medium text-xs sm:text-sm hover:border-[#49e3a1]/50 hover:text-[#49e3a1] transition-all cursor-pointer shadow-sm"
                title="Download Official CV (PDF)"
              >
                <svg className="w-3.5 h-3.5 text-[#49e3a1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full ocean-glass text-white font-medium text-xs sm:text-sm hover:border-[#66d8ee]/40 transition-all"
              >
                <span>Contact Me</span>
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#051521]/70 border border-white/10 text-slate-300 text-xs font-mono hover:text-[#66d8ee] hover:border-[#66d8ee]/40 transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                <svg className="w-3.5 h-3.5 text-[#66d8ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>{copied ? 'Copied! ✓' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Social & Location Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#051521]/60 border border-white/10 text-xs text-slate-300 hover:text-white hover:border-[#66d8ee]/40 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub Profile</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#051521]/60 border border-white/10 text-xs text-slate-300 hover:text-white hover:border-[#66d8ee]/40 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#66d8ee]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 1 0-.01-3.18 1.59 1.59 0 0 0 .01 3.18m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
                <span>LinkedIn Profile</span>
              </a>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#051521]/40 border border-white/10 text-xs font-mono text-slate-400">
                <svg className="w-3.5 h-3.5 text-[#49e3a1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{personalInfo.location}</span>
              </span>
            </div>

          </div>

          {/* Right Column: Visual Portrait Showcase */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Soft Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#66d8ee]/25 via-[#49e3a1]/15 to-[#aa75ff]/20 rounded-3xl blur-xl opacity-80"></div>

              <div className="relative rounded-3xl ocean-glass p-4 shadow-2xl space-y-3.5">
                
                {/* Photo Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 aspect-[4/4.5] group bg-[#071d2d]">
                  <img
                    src={profilePhoto}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071d2d] via-transparent to-transparent opacity-80 pointer-events-none"></div>

                  {/* Badges on image */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-[#071d2d]/90 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#66d8ee]">
                      SLIIT • 3rd Year CS (Y3S1)
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#051521]/90 backdrop-blur-md border border-[#49e3a1]/30 text-[11px] font-mono text-[#49e3a1]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#49e3a1] animate-pulse"></span>
                      Active
                    </span>
                  </div>
                </div>

                {/* Quick Info Strip */}
                <div className="grid grid-cols-2 gap-2 text-center font-mono text-xs">
                  <div className="p-2.5 rounded-xl bg-[#051521]/60 border border-white/10">
                    <div className="text-base font-bold text-[#66d8ee]">3+ Core</div>
                    <div className="text-[10px] text-slate-400 uppercase mt-0.5">Projects Built</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#051521]/60 border border-white/10">
                    <div className="text-base font-bold text-[#49e3a1]">7+ Yrs</div>
                    <div className="text-[10px] text-slate-400 uppercase mt-0.5">Prefect &amp; Lead</div>
                  </div>
                </div>

                {/* Footer Tag Strip */}
                <div className="p-2.5 rounded-xl bg-[#051521]/70 border border-white/10 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-slate-400">Core Stack:</span>
                  <span className="text-slate-200 font-semibold">Java • Distributed • MySQL</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
