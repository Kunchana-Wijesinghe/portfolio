import { useState } from 'react'
import { personalInfo } from '../data/portfolioData'
import { handleCvDownload, CV_URL, CV_FILENAME } from '../utils/cv'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleScrollToTop = (e) => {
    e.preventDefault()
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'auto' : 'smooth',
    })
  }

  return (
    <footer id="contact" className="py-20 sm:py-24 relative bg-section-main border-t border-[#2A3B52] overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">CONTACT</div>

      {/* Subtle Constellation / Ambient Glow Background */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#67D4ED]/10 via-[#101B2D]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0" aria-hidden="true">
        <svg className="w-full h-full text-[#67D4ED]/20" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle network constellation lines */}
          <line x1="10%" y1="20%" x2="40%" y2="50%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" />
          <line x1="40%" y1="50%" x2="80%" y2="30%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" />
          <line x1="80%" y1="30%" x2="90%" y2="80%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" />
          <line x1="30%" y1="85%" x2="70%" y2="75%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" />
          <circle cx="10%" cy="20%" r="3" fill="#67D4ED" opacity="0.5" />
          <circle cx="40%" cy="50%" r="2.5" fill="#67D4ED" opacity="0.5" />
          <circle cx="80%" cy="30%" r="3.5" fill="#67D4ED" opacity="0.6" />
          <circle cx="90%" cy="80%" r="2" fill="#67D4ED" opacity="0.4" />
          <circle cx="30%" cy="85%" r="3" fill="#67D4ED" opacity="0.5" />
          <circle cx="70%" cy="75%" r="2.5" fill="#67D4ED" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Headline, Introductory Paragraph & Action */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-1">
            <div>
              {/* Tag / Number */}
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#67D4ED] tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-[#162338]/60 border border-[#2A3B52]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#67D4ED]" />
                <span>06 / CONTACT</span>
              </div>

              {/* Availability Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162338]/60 border border-[#2A3B52] mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-xs text-[#CBD5E1] font-mono">Available for meaningful opportunities</span>
              </div>

              {/* Scaled Headline (strong visual hierarchy without excessive scale) */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F5F9] tracking-tight leading-[1.12] mb-5">
                Let&apos;s build<br />
                something<br />
                <span className="bg-gradient-to-r from-[#67D4ED] via-[#A5ECF9] to-[#67D4ED] bg-clip-text text-transparent">
                  meaningful.
                </span>
              </h2>

              {/* Exact Requested Introductory Paragraph */}
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed max-w-lg mb-7">
                I&apos;m seeking an internship in software engineering, frontend, backend, QA or DevOps. Get in touch to discuss an opportunity.
              </p>

              {/* Primary Action Button */}
              <div>
                <a
                  href={`mailto:${personalInfo.email}?subject=Software%20Engineering%20Opportunity%20/%20Collaboration`}
                  className="btn-glass-action inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Start a conversation</span>
                  <span className="text-sm font-bold">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Channels List */}
          <div className="lg:col-span-6 lg:pl-4">
            <div className="border-t lg:border-t-0 border-[#2A3B52] pt-8 lg:pt-1">
              {/* Section Tag */}
              <div className="text-xs font-mono text-[#67D4ED] uppercase tracking-widest font-semibold mb-5">
                DIRECT CHANNELS
              </div>

              {/* Channel 1: Primary Email (wraps safely on mobile without clipping) */}
              <div className="border-b border-[#2A3B52] pb-4 mb-4 flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider block mb-1">
                    EMAIL
                  </span>
                  <div className="flex items-start gap-2.5 min-w-0">
                    <i className="bi bi-envelope contact-channel-icon text-[#67D4ED] shrink-0 text-base mt-0.5" />
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-[#F1F5F9] text-sm sm:text-base font-medium hover:text-[#67D4ED] transition-colors break-all [overflow-wrap:anywhere] min-w-0"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-full border border-[#2A3B52] bg-[#162338]/60 hover:bg-[#162338] text-xs font-mono text-[#CBD5E1] hover:text-[#F1F5F9] hover:border-[#67D4ED]/50 transition-all shrink-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#67D4ED]"
                  title="Copy email to clipboard"
                >
                  {copied ? 'Copied! ✓' : 'Copy'}
                </button>
              </div>

              {/* Channel 2: Curriculum Vitae (Resume) with BASE_URL-aware link */}
              <div className="border-b border-[#2A3B52] pb-4 mb-4 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider block mb-1">
                    CURRICULUM VITAE
                  </span>
                  <div className="flex items-center gap-2.5">
                    <i className="bi bi-file-earmark-pdf contact-channel-icon text-[#67D4ED] shrink-0 text-base" />
                    <span className="text-[#F1F5F9] text-sm sm:text-base font-medium truncate">
                      Kunchana_Wijesinghe_CV.pdf
                    </span>
                  </div>
                </div>

                <a
                  href={CV_URL}
                  download={CV_FILENAME}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCvDownload}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2A3B52] bg-[#162338]/60 hover:bg-[#162338] text-xs font-mono text-[#CBD5E1] hover:text-[#F1F5F9] hover:border-[#67D4ED]/50 transition-all shrink-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#67D4ED]"
                  title="Download / Open Official CV"
                >
                  <span>Download</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>

              {/* Channel 3: Phone */}
              <div className="border-b border-[#2A3B52] pb-4 mb-4 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider block mb-1">
                    PHONE
                  </span>
                  <div className="flex items-center gap-2.5">
                    <i className="bi bi-telephone contact-channel-icon text-[#67D4ED] shrink-0 text-base" />
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-[#F1F5F9] text-sm sm:text-base font-medium hover:text-[#67D4ED] transition-colors"
                    >
                      {personalInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#2A3B52] bg-[#162338]/60 hover:bg-[#67D4ED]/10 hover:border-[#67D4ED] text-[#CBD5E1] hover:text-[#67D4ED] flex items-center justify-center transition-all cursor-pointer"
                  title="Call Phone"
                  aria-label="Call phone"
                >
                  <span className="text-sm font-bold">↗</span>
                </a>
              </div>

              {/* Channel 4: LinkedIn */}
              <div className="border-b border-[#2A3B52] pb-4 mb-4 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider block mb-1">
                    NETWORK
                  </span>
                  <div className="flex items-center gap-2.5">
                    <i className="bi bi-linkedin contact-channel-icon text-[#67D4ED] shrink-0 text-base" />
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#F1F5F9] text-sm sm:text-base font-medium hover:text-[#67D4ED] transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#2A3B52] bg-[#162338]/60 hover:bg-[#67D4ED]/10 hover:border-[#67D4ED] text-[#CBD5E1] hover:text-[#67D4ED] flex items-center justify-center transition-all cursor-pointer"
                  title="Open LinkedIn Profile"
                  aria-label="Open LinkedIn"
                >
                  <span className="text-sm font-bold">↗</span>
                </a>
              </div>

              {/* Channel 5: GitHub */}
              <div className="border-b border-[#2A3B52] pb-4 mb-4 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider block mb-1">
                    CODE
                  </span>
                  <div className="flex items-center gap-2.5">
                    <i className="bi bi-github contact-channel-icon text-[#67D4ED] shrink-0 text-base" />
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#F1F5F9] text-sm sm:text-base font-medium hover:text-[#67D4ED] transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#2A3B52] bg-[#162338]/60 hover:bg-[#67D4ED]/10 hover:border-[#67D4ED] text-[#CBD5E1] hover:text-[#67D4ED] flex items-center justify-center transition-all cursor-pointer"
                  title="Open GitHub Profile"
                  aria-label="Open GitHub"
                >
                  <span className="text-sm font-bold">↗</span>
                </a>
              </div>

              {/* Channel 6: Location */}
              <div className="border-b border-[#2A3B52] pb-4 mb-4 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider block mb-1">
                    LOCATION
                  </span>
                  <div className="flex items-center gap-2.5">
                    <i className="bi bi-geo-alt contact-channel-icon text-[#67D4ED] shrink-0 text-base" />
                    <span className="text-[#F1F5F9] text-sm sm:text-base font-medium">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono text-[#94A3B8]">
                  GMT +5:30
                </span>
              </div>

              {/* Compact Social Links (WhatsApp, Facebook, Instagram without "Secondary Socials" label) */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2A3B52] bg-[#162338]/60 hover:bg-[#162338] hover:border-[#67D4ED]/50 text-[#CBD5E1] hover:text-[#F1F5F9] text-xs font-mono transition-all"
                >
                  <i className="bi bi-whatsapp text-[#25D366]" />
                  <span>WhatsApp</span>
                  <span className="text-[10px]">↗</span>
                </a>
                <a
                  href={personalInfo.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2A3B52] bg-[#162338]/60 hover:bg-[#162338] hover:border-[#1877f2]/50 text-[#CBD5E1] hover:text-[#F1F5F9] text-xs font-mono transition-all"
                >
                  <i className="bi bi-facebook text-[#1877f2]" />
                  <span>Facebook</span>
                  <span className="text-[10px]">↗</span>
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2A3B52] bg-[#162338]/60 hover:bg-[#162338] hover:border-[#e4405f]/50 text-[#CBD5E1] hover:text-[#F1F5F9] text-xs font-mono transition-all"
                >
                  <i className="bi bi-instagram text-[#e4405f]" />
                  <span>Instagram</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant 4-Column Glass Footer Panel (Rounded Top Corners) */}
        <div className="mt-14 sm:mt-20 rounded-t-3xl sm:rounded-t-[36px] rounded-b-xl sm:rounded-b-2xl border border-[#2A3B52] bg-[#162338]/85 backdrop-blur-md p-7 sm:p-9 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* 1. Identity — widest column */}
            <div className="sm:col-span-2 lg:col-span-5 space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F1F5F9] tracking-tight">
                {personalInfo.name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#67D4ED] font-medium">
                {personalInfo.subtitle || 'Computer Science Undergraduate'}
              </p>
              <p className="text-xs sm:text-sm text-[#CBD5E1] pt-1.5 leading-relaxed max-w-sm">
                Building applications and exploring software quality, cloud deployment and distributed systems.
              </p>
            </div>

            {/* 2. Explore */}
            <div className="lg:col-span-2">
              <span className="text-xs font-mono text-[#67D4ED] uppercase tracking-wider block mb-3.5 font-semibold">
                Explore
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E1]">
                <li>
                  <a href="#about" className="hover:text-[#67D4ED] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-[#67D4ED] transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#resume" className="hover:text-[#67D4ED] transition-colors">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-[#67D4ED] transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#67D4ED] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* 3. Connect */}
            <div className="lg:col-span-3">
              <span className="text-xs font-mono text-[#67D4ED] uppercase tracking-wider block mb-3.5 font-semibold">
                Connect
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                <li>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#67D4ED] transition-colors group"
                  >
                    <i className="bi bi-linkedin contact-channel-icon text-[#67D4ED] text-sm shrink-0" />
                    <span>LinkedIn</span>
                    <span className="text-[10px] text-[#94A3B8] group-hover:text-[#67D4ED] transition-colors">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#67D4ED] transition-colors group"
                  >
                    <i className="bi bi-github contact-channel-icon text-[#67D4ED] text-sm shrink-0" />
                    <span>GitHub</span>
                    <span className="text-[10px] text-[#94A3B8] group-hover:text-[#67D4ED] transition-colors">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-2 hover:text-[#67D4ED] transition-colors group"
                  >
                    <i className="bi bi-envelope contact-channel-icon text-[#67D4ED] text-sm shrink-0" />
                    <span>Email</span>
                    <span className="text-[10px] text-[#94A3B8] group-hover:text-[#67D4ED] transition-colors">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* 4. Back to top */}
            <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-start pt-1">
              <a
                href="#top"
                onClick={handleScrollToTop}
                className="w-11 h-11 rounded-full border border-[#2A3B52] bg-[#0B1220]/60 hover:bg-[#162338] hover:border-[#67D4ED]/60 text-[#CBD5E1] hover:text-[#67D4ED] flex items-center justify-center transition-all group shadow-sm focus:outline-none focus:ring-2 focus:ring-[#67D4ED] focus:ring-offset-2 focus:ring-offset-[#162338]"
                aria-label="Back to top"
                title="Back to top"
              >
                <span className="text-base font-bold group-hover:-translate-y-0.5 transition-transform" aria-hidden="true">↑</span>
              </a>
              <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider mt-2">
                Back to top
              </span>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-8 pt-5 border-t border-[#2A3B52] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#94A3B8]">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-center sm:text-right">
              {personalInfo.location} · GMT +5:30
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
