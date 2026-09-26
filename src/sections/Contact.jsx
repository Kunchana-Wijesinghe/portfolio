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
    <footer id="contact" className="py-24 sm:py-32 relative bg-[#071d2d] border-t border-white/10 overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">CONTACT</div>

      {/* Subtle Constellation / Ambient Glow Background */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#49e3a1]/10 via-[#66d8ee]/8 to-[#aa75ff]/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0" aria-hidden="true">
        <svg className="w-full h-full text-[#49e3a1]/25" xmlns="http://www.w3.org/2000/svg">
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
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#071d2d] font-bold text-sm hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg cursor-pointer"
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
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#49e3a1]/50 text-slate-300 hover:text-white text-xs font-mono transition-all"
                  >
                    <svg className="w-3.5 h-3.5 text-[#49e3a1] fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>WhatsApp</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={personalInfo.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#1877f2]/50 text-slate-300 hover:text-white text-xs font-mono transition-all"
                  >
                    <svg className="w-3.5 h-3.5 text-[#1877f2] fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#e4405f]/50 text-slate-300 hover:text-white text-xs font-mono transition-all"
                  >
                    <svg className="w-3.5 h-3.5 text-[#e4405f] fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Modern Bottom Mega Footer Card */}
        <div className="mt-20 sm:mt-28 ocean-glass rounded-3xl sm:rounded-[36px] p-8 sm:p-10 lg:p-12 border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Branding & Role */}
            <div className="md:col-span-5 lg:col-span-5 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#49e3a1] font-semibold">
                {personalInfo.role}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm pt-2 leading-relaxed">
                Engineering thoughtful systems, scalable microservices, and distributed applications for a more intelligent digital world.
              </p>
            </div>

            {/* Center-Left: Explore Navigation */}
            <div className="md:col-span-3 lg:col-span-3 space-y-3">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block font-semibold">
                EXPLORE
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-medium">
                <li>
                  <a href="#about" className="hover:text-[#49e3a1] transition-colors block">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-[#49e3a1] transition-colors block">
                    Technical Arsenal
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#49e3a1] transition-colors block">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#education" className="hover:text-[#49e3a1] transition-colors block">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#leadership" className="hover:text-[#49e3a1] transition-colors block">
                    Leadership
                  </a>
                </li>
              </ul>
            </div>

            {/* Center-Right: Connect Links */}
            <div className="md:col-span-2 lg:col-span-2 space-y-3">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block font-semibold">
                CONNECT
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                <li>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#66d8ee] transition-colors"
                  >
                    <span className="w-3.5 h-3.5 rounded bg-[#0077b5] text-white flex items-center justify-center text-[9px] font-bold">
                      in
                    </span>
                    <span>LinkedIn ↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>GitHub ↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#e4405f] transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 text-[#e4405f] fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram ↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2 hover:text-[#49e3a1] transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Email ↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Far Right: Circular Back to Top */}
            <div className="md:col-span-2 lg:col-span-2 flex flex-col items-center md:items-end justify-center pt-2">
              <a
                href="#top"
                className="w-14 h-14 rounded-full border border-white/20 bg-white/5 hover:bg-[#49e3a1]/20 hover:border-[#49e3a1]/50 flex items-center justify-center text-slate-300 hover:text-[#49e3a1] transition-all group shadow-lg cursor-pointer"
                title="Scroll to top of page"
                aria-label="Back to top"
              >
                <span className="text-xl font-bold group-hover:-translate-y-1 transition-transform">↑</span>
              </a>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-2 block text-center md:text-right">
                BACK TO TOP
              </span>
            </div>

          </div>

          {/* Bottom Sub-Bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div>
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </div>
            <div>
              {personalInfo.location} • GMT +5:30
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
