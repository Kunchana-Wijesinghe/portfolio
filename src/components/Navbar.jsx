import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const cvUrl = `${import.meta.env.BASE_URL}Kunchana_Wijesinghe_CV.pdf`

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none flex justify-center">
      <div
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-2xl sm:rounded-full floating-glass-nav px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled ? 'bg-[rgba(11,32,45,0.85)] shadow-2xl border-white/20' : 'bg-[rgba(11,32,45,0.48)] border-white/15'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none rounded-full"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#49E3A1] via-[#07503F] to-[#0A323B] p-[1.5px] shadow-sm group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#071D2D] rounded-full flex items-center justify-center">
              <span className="font-extrabold text-xs tracking-wider text-[#49E3A1]">
                {personalInfo.initials}
              </span>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-[#F8FAFC] text-sm tracking-tight group-hover:text-[#49E3A1] transition-colors leading-tight">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono text-[#D5E2E8] hidden sm:block leading-tight">
              SLIIT • 3rd Year CS (Y3S1)
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 text-xs font-medium text-[#D5E2E8] hover:text-[#F8FAFC] hover:bg-white/10 rounded-full transition-all duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action: Prominent Download CV Button */}
        <div className="hidden md:flex items-center">
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass-action inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold rounded-full hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            title="Download Official CV (PDF)"
          >
            <i className="bi bi-file-earmark-pdf" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-1.5 rounded-lg bg-white/5 border border-white/15 text-[#D5E2E8] hover:text-[#F8FAFC] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-xl`} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-3 right-3 bg-[rgba(7,36,56,0.98)] border border-white/15 backdrop-blur-2xl rounded-2xl p-4 space-y-1.5 shadow-2xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-medium text-[#F8FAFC] hover:bg-white/10 hover:text-[#49E3A1] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-glass-action w-full text-center py-2.5 text-xs font-bold rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
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
