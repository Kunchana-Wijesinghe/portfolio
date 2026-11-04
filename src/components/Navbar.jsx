import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'
import { handleCvDownload, CV_URL, CV_FILENAME } from '../utils/cv'

const NAV_LINKS = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Capabilities', href: '#capabilities', id: 'capabilities' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Resume', href: '#resume', id: 'resume' },
  { name: 'Projects', href: '#portfolio', id: 'portfolio' },
  { name: 'Certifications', href: '#certifications', id: 'certifications' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section detection with scroll position offset
      const scrollPosition = window.scrollY + 140
      let current = ''

      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = link.href
            break
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none flex justify-center max-w-full">
      <div
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-2xl sm:rounded-full floating-glass-nav px-3.5 sm:px-6 py-2.5 flex items-center justify-between gap-3 ${
          scrolled
            ? 'bg-[rgba(11,18,32,0.92)] shadow-xl border-[#2A3B52]'
            : 'bg-[rgba(16,27,45,0.80)] border-[#2A3B52]'
        }`}
      >
        {/* Brand / Logo (Compact - student/year subtitle removed) */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none rounded-full shrink-0 min-w-0"
          aria-label="Kunchana Wijesinghe Home"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-[#67D4ED] via-[#162338] to-[#101B2D] p-[1.5px] shadow-xs group-hover:scale-105 transition-transform shrink-0">
            <div className="w-full h-full bg-[#0B1220] rounded-full flex items-center justify-center">
              <span className="font-extrabold text-[11px] tracking-wider text-[#67D4ED]">
                {personalInfo.initials}
              </span>
            </div>
          </div>
          <span className="font-bold text-[#F1F5F9] text-sm tracking-tight group-hover:text-[#67D4ED] transition-colors leading-tight truncate">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 bg-[#162338]/60 px-2 py-1 rounded-full border border-[#2A3B52]"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 text-xs transition-all duration-150 rounded-full ${
                  isActive
                    ? 'text-[#67D4ED] bg-[#67D4ED]/15 font-semibold shadow-xs'
                    : 'text-[#CBD5E1] hover:text-[#F1F5F9] hover:bg-white/5 font-medium'
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </nav>

        {/* Right Action: Download CV Button */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href={CV_URL}
            download={CV_FILENAME}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCvDownload}
            className="btn-glass-action inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            title="Download Official CV (PDF)"
          >
            <i className="bi bi-file-earmark-pdf text-xs" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-1.5 rounded-lg bg-[#162338]/80 border border-[#2A3B52] text-[#CBD5E1] hover:text-[#F1F5F9] focus:outline-none focus:ring-1 focus:ring-[#67D4ED] cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label="Toggle Navigation Menu"
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-xl leading-none`} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="pointer-events-auto absolute top-16 left-3 right-3 bg-[rgba(16,27,45,0.96)] border border-[#2A3B52] backdrop-blur-2xl rounded-2xl p-3 space-y-1 shadow-2xl md:hidden"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-sm transition-colors ${
                  isActive
                    ? 'text-[#67D4ED] bg-[#67D4ED]/15 font-semibold'
                    : 'text-[#CBD5E1] hover:bg-white/5 hover:text-[#F1F5F9] font-medium'
                }`}
              >
                {link.name}
              </a>
            )
          })}
          <div className="pt-2 border-t border-[#2A3B52]">
            <a
              href={CV_URL}
              download={CV_FILENAME}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                setMobileMenuOpen(false)
                handleCvDownload(e)
              }}
              className="btn-glass-action w-full text-center py-2.5 text-xs font-semibold rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <i className="bi bi-file-earmark-pdf" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
