import { useState } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <footer id="contact" className="py-24 sm:py-32 relative bg-[#05131e] border-t border-white/10 overflow-hidden">
      {/* Background Huge Watermark */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none text-white/[0.025] font-black text-[18vw] leading-none tracking-tighter whitespace-nowrap z-0 font-heading"
        aria-hidden="true"
      >
        CONTACT
      </div>

      {/* Subtle Constellation / Grid Mesh Background */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-0" aria-hidden="true">
        <svg className="w-full h-full text-[#49e3a1]/20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="oceanGlow" cx="70%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#49e3a1" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#05131e" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#oceanGlow)" />
          {/* Subtle network constellation lines */}
          <line x1="10%" y1="20%" x2="40%" y2="50%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" />
          <line x1="40%" y1="50%" x2="80%" y2="30%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" />
          <line x1="80%" y1="30%" x2="90%" y2="80%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" />
          <line x1="30%" y1="85%" x2="70%" y2="75%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" />
          <circle cx="10%" cy="20%" r="3" fill="#49e3a1" opacity="0.4" />
          <circle cx="40%" cy="50%" r="2.5" fill="#66d8ee" opacity="0.5" />
          <circle cx="80%" cy="30%" r="3.5" fill="#49e3a1" opacity="0.6" />
          <circle cx="90%" cy="80%" r="2" fill="#66d8ee" opacity="0.4" />
          <circle cx="30%" cy="85%" r="3" fill="#49e3a1" opacity="0.5" />
          <circle cx="70%" cy="75%" r="2.5" fill="#66d8ee" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: High-Impact Typography & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-2">
            <div>
              {/* Tag / Number */}
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#49e3a1] tracking-wider mb-5">
                <span>06 / CONTACT</span>
              </div>

              {/* Availability Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#49e3a1] animate-pulse"></span>
                <span className="text-xs text-slate-300 font-mono">Available for meaningful opportunities</span>
              </div>

              {/* Big Bold Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Let&apos;s build<br />
                something<br />
                <span className="bg-gradient-to-r from-[#49e3a1] via-[#66d8ee] to-[#49e3a1] bg-clip-text text-transparent">
                  meaningful.
                </span>
              </h2>

              {/* Subtitle Statement */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
                I&apos;m open to software engineering, full-stack development, distributed systems, and collaborative internship opportunities where thoughtful technology can create real value.
              </p>

              {/* Primary Action Button */}
              <div>
                <a
                  href={`mailto:${personalInfo.email}?subject=Software%20Engineering%20Opportunity%20/%20Collaboration`}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#05131e] font-bold text-sm hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg cursor-pointer"
                >
                  <span>Start a conversation</span>
                  <span className="text-base font-bold">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Channels List */}
          <div className="lg:col-span-6 lg:pl-6">
            <div className="border-t lg:border-t-0 border-white/10 pt-8 lg:pt-0">
              
              {/* Section Tag */}
              <div className="text-xs font-mono text-[#49e3a1] uppercase tracking-widest font-semibold mb-6">
                DIRECT CHANNELS
              </div>

              {/* Channel 1: Primary Email */}
              <div className="border-b border-white/10 pb-5 mb-5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    EMAIL
                  </span>
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white text-sm sm:text-base font-medium hover:text-[#66d8ee] transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all shrink-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#49e3a1]"
                  title="Copy email to clipboard"
                >
                  {copied ? 'Copied! ✓' : 'Copy'}
                </button>
              </div>

              {/* Channel 2: Curriculum Vitae (Resume) */}
              <div className="border-b border-white/10 pb-5 mb-5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    CURRICULUM VITAE
                  </span>
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#49e3a1] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-white text-sm sm:text-base font-medium truncate">
                      Kunchana_Wijesinghe_CV.pdf
                    </span>
                  </div>
                </div>

                <a
                  href={`${import.meta.env.BASE_URL}Kunchana_Wijesinghe_CV.pdf`}
                  download="Kunchana_Wijesinghe_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all shrink-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#49e3a1]"
                  title="Download / Open Official CV"
                >
                  <span>Download</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>

              {/* Channel 3: Phone */}
              <div className="border-b border-white/10 pb-5 mb-5 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    PHONE
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-white text-sm sm:text-base font-medium hover:text-[#49e3a1] transition-colors block"
                  >
                    {personalInfo.phoneDisplay}
                  </a>
                </div>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-[#49e3a1]/20 hover:border-[#49e3a1]/50 text-slate-300 hover:text-[#49e3a1] flex items-center justify-center transition-all cursor-pointer"
                  title="Call Phone"
                  aria-label="Call phone"
                >
                  <span className="text-sm font-bold">↗</span>
                </a>
              </div>

              {/* Channel 4: LinkedIn */}
              <div className="border-b border-white/10 pb-5 mb-5 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    NETWORK
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-[#0077b5] text-white flex items-center justify-center text-[10px] font-bold">
                      in
                    </span>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white text-sm sm:text-base font-medium hover:text-[#66d8ee] transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-[#49e3a1]/20 hover:border-[#49e3a1]/50 text-slate-300 hover:text-[#49e3a1] flex items-center justify-center transition-all cursor-pointer"
                  title="Open LinkedIn Profile"
                  aria-label="Open LinkedIn"
                >
                  <span className="text-sm font-bold">↗</span>
                </a>
              </div>

              {/* Channel 5: GitHub */}
              <div className="border-b border-white/10 pb-5 mb-5 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    CODE
                  </span>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white text-sm sm:text-base font-medium hover:text-[#66d8ee] transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-[#49e3a1]/20 hover:border-[#49e3a1]/50 text-slate-300 hover:text-[#49e3a1] flex items-center justify-center transition-all cursor-pointer"
                  title="Open GitHub Profile"
                  aria-label="Open GitHub"
                >
                  <span className="text-sm font-bold">↗</span>
                </a>
              </div>

              {/* Channel 6: Location & Timezone */}
              <div className="border-b border-white/10 pb-5 mb-5 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    LOCATION
                  </span>
                  <span className="text-white text-sm sm:text-base font-medium">
                    {personalInfo.location}
                  </span>
                </div>

                <span className="text-xs font-mono text-slate-400">
                  GMT +5:30
                </span>
              </div>

              {/* Channel 7: Secondary Socials */}
              <div className="pt-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-3">
                  SECONDARY SOCIALS
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="https://wa.me/94702725762"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#49e3a1]/40 text-slate-300 hover:text-white text-xs font-mono transition-all"
                  >
                    <span>💬 WhatsApp</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#66d8ee]/40 text-slate-300 hover:text-white text-xs font-mono transition-all"
                  >
                    <span>LinkedIn</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#66d8ee]/40 text-slate-300 hover:text-white text-xs font-mono transition-all"
                  >
                    <span>GitHub</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            © {new Date().getFullYear()} {personalInfo.name} • {personalInfo.degree}
          </p>
          <a
            href="#top"
            className="text-slate-400 hover:text-[#49e3a1] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Back to top</span>
            <span>↑</span>
          </a>
        </div>

      </div>
    </footer>
  )
}
