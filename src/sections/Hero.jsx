import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'
import { handleCvDownload, CV_URL, CV_FILENAME } from '../utils/cv'
import profilePhoto from '../assets/kunchana-profile.jpeg'

export default function Hero() {
  const [interestIndex, setInterestIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    try {
      return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    } catch {
      return false
    }
  })

  const interests = personalInfo.internshipInterests

  // Detect reduced-motion preference changes
  useEffect(() => {
    try {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      const handleChange = (e) => {
        setPrefersReducedMotion(e.matches)
      }
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    } catch {
      // Browser environment fallback
    }
  }, [])

  // Typing / Rotating effect for internship interests
  useEffect(() => {
    if (prefersReducedMotion) return

    const currentInterest = interests[interestIndex] || ''
    const typingSpeed = isDeleting ? 35 : 75
    const pauseTime = 1900

    let timer

    if (!isDeleting && displayedText === currentInterest) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && displayedText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false)
        setInterestIndex((prev) => (prev + 1) % interests.length)
      }, 250)
    } else {
      timer = setTimeout(() => {
        const nextChar = isDeleting
          ? currentInterest.substring(0, displayedText.length - 1)
          : currentInterest.substring(0, displayedText.length + 1)
        setDisplayedText(nextChar)
      }, typingSpeed)
    }

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, interestIndex, interests, prefersReducedMotion])

  const activeInterestText = prefersReducedMotion
    ? (interests[0] || 'Software Engineering')
    : displayedText

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 sm:pt-32 lg:pt-28 pb-16 lg:pb-16 flex items-center justify-center bg-section-main overflow-hidden w-full max-w-full text-left"
    >
      <div id="top" className="absolute top-0" />

      {/* Ambient Breathing Glow Orbs */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#67D4ED]/10 via-[#162338]/20 to-[#101B2D]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-orb" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-gradient-to-bl from-[#162338]/20 via-[#67D4ED]/08 to-[#0B1220]/25 rounded-full blur-3xl pointer-events-none -z-10 animate-orb" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Introductions, Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 max-w-full">

            {/* Compact Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#162338]/60 border border-[#2A3B52] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span className="text-xs font-mono text-[#CBD5E1] font-medium tracking-wide">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Headline Block */}
            <div className="space-y-2 max-w-full">
              <p className="font-mono text-[#67D4ED] text-xs sm:text-sm uppercase tracking-widest font-semibold">
                {personalInfo.role}
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F1F5F9] leading-[1.12] break-words">
                {personalInfo.name}
              </h1>

              {/* Dynamic Rotating Internship Interests with reserved layout space */}
              <div className="min-h-[2.25rem] sm:min-h-[2.5rem] flex items-center flex-wrap gap-x-2 gap-y-1">
                <span
                  className="text-[#CBD5E1] font-mono text-xs sm:text-sm uppercase tracking-wider font-medium select-none"
                  style={{ color: '#CBD5E1' }}
                >
                  TARGETING:
                </span>
                <span
                  className="text-[#67D4ED] font-semibold text-base sm:text-xl tracking-tight inline-flex items-center min-w-0 sm:min-w-[280px]"
                  style={{ color: '#67D4ED' }}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {activeInterestText}
                  {!prefersReducedMotion && (
                    <span
                      className="inline-block ml-0.5 text-[#67D4ED] font-mono animate-pulse"
                      style={{ color: '#67D4ED' }}
                      aria-hidden="true"
                    >
                      |
                    </span>
                  )}
                </span>
              </div>
            </div>

            {/* Concise Introduction */}
            <p className="text-[#CBD5E1] text-base sm:text-lg leading-relaxed max-w-xl font-normal font-sans">
              I’m a Computer Science undergraduate at <span className="text-[#F1F5F9] font-semibold">SLIIT</span>, building web applications and exploring software quality and cloud deployment through academic team projects.
            </p>

            {/* Main Action Buttons & Quieter Contact Link */}
            <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
              {/* Primary Action 1: View Projects */}
              <a
                href="#portfolio"
                className="btn-glass-action inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>View Projects</span>
                <i className="bi bi-arrow-down-short text-base" />
              </a>

              {/* Primary Action 2: Download CV */}
              <a
                href={CV_URL}
                download={CV_FILENAME}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCvDownload}
                className="btn-glass-action inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                title="Download Official CV (PDF)"
              >
                <i className="bi bi-file-earmark-pdf text-sm" />
                <span>Download CV</span>
              </a>

              {/* Quieter Contact Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-[#CBD5E1] hover:text-[#67D4ED] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#67D4ED] rounded-lg group"
              >
                <span>Contact</span>
                <i className="bi bi-arrow-up-right text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Compact Secondary Links Strip */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-3 border-t border-[#2A3B52] w-full text-xs text-[#CBD5E1]">
              <span className="font-mono text-[#94A3B8] text-[11px] uppercase tracking-wider">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#67D4ED] transition-colors"
                aria-label="GitHub Profile"
              >
                <i className="bi bi-github text-sm" />
                <span>GitHub</span>
              </a>

              <span className="text-white/20 select-none">•</span>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#67D4ED] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <i className="bi bi-linkedin text-sm" />
                <span>LinkedIn</span>
              </a>

              <span className="text-white/20 select-none">•</span>

              <span className="inline-flex items-center gap-1 text-[#94A3B8] font-mono text-[11px]">
                <i className="bi bi-geo-alt text-xs text-[#67D4ED]" />
                <span>{personalInfo.location}</span>
              </span>
            </div>

          </div>

          {/* Right Column: Simplified Portrait Showcase */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm">

              {/* Soft Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#67D4ED]/10 via-[#162338]/20 to-[#101B2D]/10 rounded-3xl blur-xl opacity-75 pointer-events-none" />

              {/* Clean Framed Glass Card */}
              <div className="relative rounded-3xl p-2.5 bg-[#162338]/60 border border-[#2A3B52] shadow-2xl backdrop-blur-sm">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4.8] bg-[#0B1220]">
                  <img
                    src={profilePhoto}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  />

                  {/* Subtle bottom vignette to softly ground the photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
