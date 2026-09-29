import { useEffect } from 'react'
import FiverrNavbar from './components/FiverrNavbar'
import FiverrHero from './components/FiverrHero'
import FiverrAbout from './components/FiverrAbout'
import FiverrSkills from './components/FiverrSkills'
import FiverrProjects from './components/FiverrProjects'
import FiverrGigs from './components/FiverrGigs'
import FiverrProcess from './components/FiverrProcess'
import FiverrFAQ from './components/FiverrFAQ'
import FiverrFooter from './components/FiverrFooter'

export default function FiverrApp() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#071d2d] text-slate-100 flex flex-col selection:bg-[#66d8ee] selection:text-slate-950 font-sans">
      {/* Skip to content link for accessibility */}
      <a
        href="#fiverr-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#49e3a1] focus:text-[#071d2d] focus:font-mono focus:text-xs uppercase tracking-wider rounded-xl font-bold"
      >
        Skip to main content
      </a>

      <FiverrNavbar />

      <main id="fiverr-content" className="flex-1">
        <FiverrHero />
        <FiverrAbout />
        <FiverrSkills />
        <FiverrProjects />
        <FiverrGigs />
        <FiverrProcess />
        <FiverrFAQ />
      </main>

      <FiverrFooter />
    </div>
  )
}
