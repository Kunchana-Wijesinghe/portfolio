import { useState, useEffect } from 'react'
import { fiverrGigInfo } from '../../data/fiverrData'
import { personalInfo } from '../../data/portfolioData'

export default function FiverrNavbar() {
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
    { name: 'Bug Types', href: '#bug-types' },
    { name: 'How I Work', href: '#how-it-works' },
    { name: 'Selected Work', href: '#selected-work' },
    { name: 'Technologies', href: '#tech-stack' },
    { name: 'FAQ', href: '#faq' },
  ]

  const mainPortfolioUrl = import.meta.env.BASE_URL

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none flex justify-center">
      <div
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-2xl sm:rounded-full floating-glass-nav px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled ? 'bg-[#071d2d]/95 shadow-2xl shadow-black/50 border-white/20' : 'bg-[#0b202d]/80'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#top"
          className="flex items-center gap-3 group focus:outline-none rounded-full"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#49e3a1] via-[#66d8ee] to-[#aa75ff] p-[1.5px] shadow-sm group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#071d2d] rounded-full flex items-center justify-center">
              <span className="font-extrabold text-xs tracking-wider bg-gradient-to-r from-[#49e3a1] to-[#66d8ee] bg-clip-text text-transparent">
                {personalInfo.initials}
              </span>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-white text-sm tracking-tight group-hover:text-[#66d8ee] transition-colors leading-tight">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono text-[#49e3a1] hidden sm:block leading-tight font-medium">
              React Bug Fixing • Fiverr Gig
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#051521]/60 px-2 py-1 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={mainPortfolioUrl}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all cursor-pointer"
            title="Visit full academic engineering portfolio"
          >
            <span>Main Portfolio</span>
            <span className="text-xs">↗</span>
          </a>

          <a
            href={fiverrGigInfo.gigUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-[#071d2d] bg-gradient-to-r from-[#49e3a1] via-[#66d8ee] to-[#49e3a1] bg-[length:200%_auto] hover:bg-right rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            title="Order on Fiverr"
          >
            <span>Order on Fiverr</span>
            <span className="text-xs font-bold">↗</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden">
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
        <div className="pointer-events-auto absolute top-16 left-3 right-3 bg-[#071d2d]/98 border border-white/15 backdrop-blur-2xl rounded-2xl p-4 space-y-2 shadow-2xl lg:hidden">
          <div className="pb-2 border-b border-white/10 mb-2">
            <span className="text-xs font-mono text-[#49e3a1] block">
              React Frontend Bug Fixing Specialist
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-[#49e3a1] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={fiverrGigInfo.gigUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-bold text-[#071d2d] bg-gradient-to-r from-[#49e3a1] to-[#66d8ee] rounded-full shadow-md flex items-center justify-center gap-1.5"
            >
              <span>Order on Fiverr</span>
              <span>↗</span>
            </a>
            <a
              href={mainPortfolioUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-mono text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded-full"
            >
              Visit Full Engineering Portfolio ↗
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
