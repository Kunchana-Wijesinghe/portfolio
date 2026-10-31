import { useState, useEffect, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Capabilities from './sections/Capabilities'
import Skills from './sections/Skills'
import Resume from './sections/Resume'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import IntroOverlay from './components/IntroOverlay'
import KWOrbit from './components/KWOrbit'

export default function App() {
  const [isIntroActive, setIsIntroActive] = useState(() => {
    try {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) return false
      return sessionStorage.getItem('kw_intro_seen') !== 'true'
    } catch {
      return false
    }
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setIsIntroActive(false)
    // Accessibility: restore sensible keyboard focus to main content container upon intro dismissal
    requestAnimationFrame(() => {
      const mainEl = document.getElementById('main-content')
      if (mainEl) {
        mainEl.setAttribute('tabindex', '-1')
        mainEl.focus({ preventScroll: true })
      }
    })
  }, [])

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F1F5F9] flex flex-col font-sans selection:bg-[#67D4ED] selection:text-[#0B1220]">
      {/* KW System Boot Intro Overlay */}
      {isIntroActive && (
        <IntroOverlay onComplete={handleIntroComplete} />
      )}

      {/* Background Page Content Wrapper
          Accessibility: 'inert' completely prevents keyboard navigation (tab traversal), screen reader interaction,
          and pointer clicks on all underlying page content (Navbar, Skip link, main sections, KWOrbit)
          while the full-screen intro is running.
      */}
      <div
        id="portfolio-interactive-wrapper"
        inert={isIntroActive ? '' : undefined}
        className="flex-1 flex flex-col"
      >
        {/* Skip to main content accessibility link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#67D4ED] focus:text-[#0B1220] focus:text-xs uppercase tracking-wider rounded-lg font-bold shadow-lg"
        >
          Skip to main content
        </a>

        {/* Floating Glass Navigation Bar */}
        <Navbar />

        <main id="main-content" className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Technical Capabilities */}
          <Capabilities />

          {/* Dedicated Technical Skills */}
          <Skills />

          {/* Resume & Leadership */}
          <Resume />

          {/* Projects / Portfolio */}
          <Projects onModalStateChange={setIsModalOpen} />

          {/* Contact & Mega Footer */}
          <Contact />
        </main>

        {/* KW Orbit Floating Portfolio Navigator Companion */}
        <KWOrbit isHidden={isIntroActive || isModalOpen} />
      </div>
    </div>
  )
}
