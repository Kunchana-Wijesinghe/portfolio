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
    <footer id="contact" className="py-24 sm:py-32 relative bg-section-main border-t border-white/10 overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">CONTACT</div>

      {/* Subtle Constellation / Ambient Glow Background */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#49E3A1]/10 via-[#07503F]/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0" aria-hidden="true">
        <svg className="w-full h-full text-[#49E3A1]/25" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle network constellation lines */}
          <line x1="10%" y1="20%" x2="40%" y2="50%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" />
          <line x1="40%" y1="50%" x2="80%" y2="30%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" />
          <line x1="80%" y1="30%" x2="90%" y2="80%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" />
          <line x1="30%" y1="85%" x2="70%" y2="75%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" />
          <circle cx="10%" cy="20%" r="3" fill="#49E3A1" opacity="0.5" />
          <circle cx="40%" cy="50%" r="2.5" fill="#49E3A1" opacity="0.5" />
          <circle cx="80%" cy="30%" r="3.5" fill="#49E3A1" opacity="0.6" />
          <circle cx="90%" cy="80%" r="2" fill="#49E3A1" opacity="0.4" />
          <circle cx="30%" cy="85%" r="3" fill="#49E3A1" opacity="0.5" />
          <circle cx="70%" cy="75%" r="2.5" fill="#49E3A1" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: High-Impact Typography & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-2">
            <div>
              {/* Tag / Number */}
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#49E3A1] tracking-widest uppercase mb-5 px-3 py-1 rounded-full bg-white/5 border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49E3A1]" />
                <span>06 / CONTACT</span>
              </div>

              {/* Availability Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#49E3A1] animate-pulse" />
                <span className="text-xs text-[#D5E2E8] font-mono">Available for meaningful opportunities</span>
              </div>

              {/* Big Bold Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.08] mb-6">
                Let&apos;s build<br />
                something<br />
                <span className="bg-gradient-to-r from-[#49E3A1] via-[#5CF2B0] to-[#49E3A1] bg-clip-text text-transparent">
                  meaningful.
                </span>
              </h2>

              {/* Subtitle Statement */}
              <p className="text-[#D5E2E8] text-sm sm:text-base leading-relaxed max-w-lg mb-8">
                I&apos;m open to software engineering, full-stack development, distributed systems, and collaborative internship opportunities where thoughtful technology can create real value.
              </p>

              {/* Primary Action Button */}
              <div>
                <a
                  href={`mailto:${personalInfo.email}?subject=Software%20Engineering%20Opportunity%20/%20Collaboration`}
                  className="btn-glass-action inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
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
              <div className="text-xs font-mono text-[#49E3A1] uppercase tracking-widest font-semibold mb-6">
                DIRECT CHANNELS
              </div>

              {/* Channel 1: Primary Email */}
              <div className="border-b border-white/10 pb-5 mb-5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-[#B8CCD5] uppercase tracking-wider block mb-1">
                    EMAIL
                  </span>
                  <div className="flex items-center gap-2.5">
                    <i className="bi bi-envelope text-red-400 shrink-0 text-base" />
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-[#F8FAFC] text-sm sm:text-base font-medium hover:text-[#49E3A1] transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-[#D5E2E8] hover:text-[#F8FAFC] transition-all shrink-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#49E3A1]"
                  title="Copy email to clipboard"
                >
                  {copied ? 'Copied! ✓' : 'Copy'}
                </button>
              </div>

              {/* Channel 2: Curriculum Vitae (Resume) */}
              <div className="border-b border-white/10 pb-5 mb-5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-[#B8CCD5] uppercase tracking-wider block mb-1">
                    CURRICULUM VITAE
                  </span>
                  <div className="flex items-center gap-2.5">
                    <i className="bi bi-file-earmark-pdf text-[#49E3A1] shrink-0 text-base" />
                    <span className="text-[#F8FAFC] text-sm sm:text-base font-medium truncate">
                      Kunchana_Wijesinghe_CV.pdf
                    </span>
                  </div>
                </div>

                <a
                  href={`${import.meta.env.BASE_URL}Kunchana_Wijesinghe_CV.pdf`}
                  download="Kunchana_Wijesinghe_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-[#D5E2E8] hover:text-[#F8FAFC] transition-all shrink-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#49E3A1]"
                  title="Download / Open Official CV"
                >
                  <span>Download</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>

              {/* Channel 3: Phone */}
              <div className="border-b border-white/10 pb-5 mb-5 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-[#B8CCD5] uppercase tracking-wider block mb-1">
                    PHONE
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-[#F8FAFC] text-sm sm:text-base font-medium hover:text-[#49E3A1] transition-colors block"
                  >
                    {personalInfo.phoneDisplay}
                  </a>
                </div>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-[#49E3A1]/20 hover:border-[#49E3A1]/50 text-[#D5E2E8] hover:text-[#49E3A1] flex items-center justify-center transition-all cursor-pointer"
                  title="Call Phone"
                  aria-label="Call phone"
                >
                  <span className="text-sm font-bold">↗</span>
                </a>
              </div>

              {/* Channel 4: LinkedIn */}
              <div className="border-b border-white/10 pb-5 mb-5 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-[#B8CCD5] uppercase tracking-wider block mb-1">
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
                      className="text-[#F8FAFC] text-sm sm:text-base font-medium hover:text-[#49E3A1] transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-[#49E3A1]/20 hover:border-[#49E3A1]/50 text-[#D5E2E8] hover:text-[#49E3A1] flex items-center justify-center transition-all cursor-pointer"
                  title="Open LinkedIn Profile"
                  aria-label="Open LinkedIn"
                >
                  <span className="text-sm font-bold">↗</span>
                </a>
              </div>

              {/* Channel 5: GitHub */}
              <div className="border-b border-white/10 pb-5 mb-5 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-[#B8CCD5] uppercase tracking-wider block mb-1">
                    CODE
                  </span>
                  <div className="flex items-center gap-2">
                    <i className="bi bi-github text-[#F8FAFC] text-base" />
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#F8FAFC] text-sm sm:text-base font-medium hover:text-[#49E3A1] transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-[#49E3A1]/20 hover:border-[#49E3A1]/50 text-[#D5E2E8] hover:text-[#49E3A1] flex items-center justify-center transition-all cursor-pointer"
                  title="Open GitHub Profile"
                  aria-label="Open GitHub"
                >
                  <span className="text-sm font-bold">↗</span>
                </a>
              </div>

              {/* Channel 6: Location & Timezone */}
              <div className="border-b border-white/10 pb-5 mb-5 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-[#B8CCD5] uppercase tracking-wider block mb-1">
                    LOCATION
                  </span>
                  <span className="text-[#F8FAFC] text-sm sm:text-base font-medium">
                    {personalInfo.location}
                  </span>
                </div>

                <span className="text-xs font-mono text-[#B8CCD5]">
                  GMT +5:30
                </span>
              </div>

              {/* Channel 7: Secondary Socials */}
              <div className="pt-2">
                <span className="text-[10px] font-mono text-[#B8CCD5] uppercase tracking-widest block mb-3">
                  SECONDARY SOCIALS
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#49E3A1]/50 text-[#D5E2E8] hover:text-[#F8FAFC] text-xs font-mono transition-all"
                  >
                    <i className="bi bi-whatsapp text-[#49E3A1]" />
                    <span>WhatsApp</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={personalInfo.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#1877f2]/50 text-[#D5E2E8] hover:text-[#F8FAFC] text-xs font-mono transition-all"
                  >
                    <i className="bi bi-facebook text-[#1877f2]" />
                    <span>Facebook</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#e4405f]/50 text-[#D5E2E8] hover:text-[#F8FAFC] text-xs font-mono transition-all"
                  >
                    <i className="bi bi-instagram text-[#e4405f]" />
                    <span>Instagram</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Bottom Mega Footer Card */}
        <div className="mt-20 sm:mt-28 glass-card rounded-3xl sm:rounded-[36px] p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Branding & Role */}
            <div className="md:col-span-5 lg:col-span-5 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
                {personalInfo.name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#49E3A1] font-semibold">
                {personalInfo.role}
              </p>
              <p className="text-xs sm:text-sm text-[#D5E2E8] max-w-sm pt-2 leading-relaxed">
                Engineering thoughtful systems, scalable microservices, and distributed applications for a more intelligent digital world.
              </p>
            </div>

            {/* Middle: Quick Directory */}
            <div className="md:col-span-3 lg:col-span-3">
              <span className="text-xs font-mono text-[#49E3A1] uppercase tracking-wider block mb-4 font-semibold">
                DIRECTORY
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#D5E2E8]">
                <li>
                  <a href="#top" className="hover:text-[#F8FAFC] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#F8FAFC] transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="hover:text-[#F8FAFC] transition-colors">
                    Capabilities
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-[#F8FAFC] transition-colors">
                    Technical Skills
                  </a>
                </li>
                <li>
                  <a href="#resume" className="hover:text-[#F8FAFC] transition-colors">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-[#F8FAFC] transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#F8FAFC] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Right: Connect */}
            <div className="md:col-span-2 lg:col-span-2">
              <span className="text-xs font-mono text-[#49E3A1] uppercase tracking-wider block mb-4 font-semibold">
                CONNECT
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#D5E2E8]">
                <li>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#49E3A1] transition-colors"
                  >
                    <span>LinkedIn ↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#F8FAFC] transition-colors"
                  >
                    <span>GitHub ↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#49E3A1] transition-colors"
                  >
                    <span>WhatsApp ↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#1877f2] transition-colors"
                  >
                    <span>Facebook ↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#e4405f] transition-colors"
                  >
                    <span>Instagram ↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2 hover:text-[#49E3A1] transition-colors"
                  >
                    <span>Email ↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Far Right: Circular Back to Top */}
            <div className="md:col-span-2 lg:col-span-2 flex flex-col items-center md:items-end justify-center pt-2">
              <a
                href="#top"
                className="w-14 h-14 rounded-full border border-white/20 bg-white/5 hover:bg-[#49E3A1]/20 hover:border-[#49E3A1]/50 flex items-center justify-center text-[#D5E2E8] hover:text-[#49E3A1] transition-all group shadow-lg cursor-pointer"
                title="Scroll to top of page"
                aria-label="Back to top"
              >
                <span className="text-xl font-bold group-hover:-translate-y-1 transition-transform">↑</span>
              </a>
              <span className="text-[10px] font-mono text-[#B8CCD5] uppercase tracking-widest mt-2 block text-center md:text-right">
                BACK TO TOP
              </span>
            </div>
          </div>

          {/* Bottom Sub-Bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#B8CCD5]">
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
