import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Leadership from './sections/Leadership'
import Contact from './sections/Contact'

function App() {
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
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#66d8ee] focus:text-slate-950 focus:font-mono focus:text-xs uppercase tracking-wider rounded-xl font-bold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Leadership />
      </main>

      <Contact />
    </div>
  )
}

export default App
