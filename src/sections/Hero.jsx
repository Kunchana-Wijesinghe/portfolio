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
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-grid-pattern overflow-hidden"
    >
      {/* Background ambient radial glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300 font-medium tracking-wide">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="font-mono text-cyan-400 text-sm sm:text-base font-semibold tracking-wider uppercase">
                Hello World, I&apos;m
              </p>
              <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 bg-clip-text text-transparent">
                {personalInfo.role}
              </h2>
            </div>

            {/* Bio summary */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              Passionate undergraduate at <span className="text-slate-200 font-medium">SLIIT</span> with hands-on experience in architecting full-stack applications, distributed consensus systems, and structural database development. Dedicated to clean OOP paradigms and reliable software engineering.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 font-medium text-sm hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all"
              >
                <span>Contact Me</span>
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs font-mono hover:bg-slate-800 hover:text-cyan-300 transition-all"
                title="Copy email to clipboard"
              >
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>{copied ? 'Email Copied! ✓' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Social pills */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 1 0-.01-3.18 1.59 1.59 0 0 0 .01 3.18m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/50 border border-slate-800 text-xs text-slate-400">
                <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photo Showcase Card */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-indigo-600/25 rounded-3xl blur-2xl opacity-70"></div>

              <div className="relative rounded-3xl bg-[#0d1322]/90 border border-slate-800/90 p-4 sm:p-5 shadow-2xl backdrop-blur-xl space-y-4">
                
                {/* Photo Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 aspect-[4/4.5] group">
                  <img
                    src={profilePhoto}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle bottom gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80 pointer-events-none"></div>

                  {/* Floating Tag inside image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="px-2.5 py-1 rounded-lg bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-cyan-400">
                      SLIIT • CS Undergrad
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Active
                    </div>
                  </div>
                </div>

                {/* Profile quick stats & info */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-xl font-bold font-heading text-cyan-400">3+</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono mt-0.5">
                      Core Projects
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-xl font-bold font-heading text-indigo-400">7+</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono mt-0.5">
                      Yrs Leadership
                    </div>
                  </div>
                </div>

                {/* Focus Tag strip */}
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between font-mono text-[11px]">
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
