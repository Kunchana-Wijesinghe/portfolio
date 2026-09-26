import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none flex justify-center">
      <div
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-2xl sm:rounded-full floating-glass-nav px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled ? 'bg-[#071d2d]/90 shadow-2xl shadow-black/50 border-white/20' : 'bg-[#0b202d]/75'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#top"
          className="flex items-center gap-3 group focus:outline-none rounded-full"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#66d8ee] via-[#49e3a1] to-[#aa75ff] p-[1.5px] shadow-sm group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#071d2d] rounded-full flex items-center justify-center">
              <span className="font-extrabold text-xs tracking-wider bg-gradient-to-r from-[#66d8ee] to-[#49e3a1] bg-clip-text text-transparent">
                {personalInfo.initials}
              </span>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-white text-sm tracking-tight group-hover:text-[#66d8ee] transition-colors leading-tight">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono text-slate-400 hidden sm:block leading-tight">
              SLIIT • 3rd Year CS (Y3S1)
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#051521]/60 px-2 py-1 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={`${import.meta.env.BASE_URL}Kunchana_Wijesinghe_CV.pdf`}
            download="Kunchana_Wijesinghe_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all cursor-pointer"
            title="Download Official CV (PDF)"
          >
            <svg className="w-3.5 h-3.5 text-[#49e3a1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-1 text-xs font-semibold text-[#071d2d] bg-gradient-to-r from-[#66d8ee] to-[#49e3a1] rounded-full shadow-sm hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-3 right-3 bg-[#071d2d]/98 border border-white/15 backdrop-blur-2xl rounded-2xl p-4 space-y-1.5 shadow-2xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-[#66d8ee] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex items-center gap-2">
            <a
              href={`${import.meta.env.BASE_URL}Kunchana_Wijesinghe_CV.pdf`}
              download="Kunchana_Wijesinghe_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-2 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-full flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 text-[#49e3a1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download CV</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2 text-xs font-semibold text-[#071d2d] bg-gradient-to-r from-[#66d8ee] to-[#49e3a1] rounded-full shadow-md"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
