import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'
import profilePhoto from '../assets/kunchana-profile.jpeg'

export default function Hero() {
  const [interestIndex, setInterestIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const interests = personalInfo.internshipInterests
  const cvUrl = `${import.meta.env.BASE_URL}Kunchana_Wijesinghe_CV.pdf`

  useEffect(() => {
    const currentInterest = interests[interestIndex]
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
  }, [displayedText, isDeleting, interestIndex, interests])

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:py-0 flex items-center justify-center bg-section-main overflow-hidden text-left"
    >
      <div id="top" className="absolute top-0" />
      {/* Ambient Subtle Breathing Glow Orbs */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#49E3A1]/15 via-[#07503F]/12 to-[#0A323B]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-orb" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-gradient-to-bl from-[#07503F]/15 via-[#49E3A1]/10 to-[#072438]/20 rounded-full blur-3xl pointer-events-none -z-10 animate-orb" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Introductions, Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#49E3A1] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#49E3A1]" />
              </span>
              <span className="text-xs font-mono text-[#D5E2E8] tracking-wide font-medium">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Headline Block */}
            <div className="space-y-2">
              <p className="font-mono text-[#49E3A1] text-xs sm:text-sm uppercase tracking-widest font-semibold">
                {personalInfo.subtitle}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-tight">
                {personalInfo.name}
              </h1>

              {/* Dynamic Rotating Internship Interests */}
              <div className="min-h-[2rem] flex items-center gap-2 text-base sm:text-xl font-semibold">
                <span
                  className="text-[#D5E2E8] font-mono text-xs sm:text-sm uppercase tracking-wide"
                  style={{ color: '#D5E2E8' }}
                >
                  Targeting:
                </span>
                <span
                  className="text-[#66D8EE] font-semibold"
                  style={{ color: '#66D8EE' }}
                >
                  {displayedText}
                  <span
                    className="inline-block ml-0.5 text-[#66D8EE] font-mono animate-pulse"
                    style={{ color: '#66D8EE' }}
                  >
                    |
                  </span>
                </span>
              </div>
            </div>

            {/* Bio Summary */}
            <p className="text-[#D5E2E8] text-sm sm:text-base leading-relaxed max-w-xl font-normal font-sans">
              Undergraduate at <strong className="text-[#F8FAFC] font-semibold">SLIIT</strong> (Year 3, Semester 1) with focused academic training across software architecture, test automation, and distributed systems. Actively seeking software engineering internship opportunities.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
              <a
                href="#portfolio"
                className="btn-glass-action inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Projects</span>
                <i className="bi bi-arrow-down-short text-base" />
              </a>

              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full glass-card text-[#F8FAFC] font-medium text-xs sm:text-sm hover:border-[#49E3A1]/50 hover:text-[#49E3A1] transition-all cursor-pointer shadow-sm"
                title="Download Official CV (PDF)"
              >
                <i className="bi bi-file-earmark-pdf text-[#49E3A1]" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full glass-card text-[#D5E2E8] font-medium text-xs sm:text-sm hover:border-[#49E3A1]/50 hover:text-[#F8FAFC] transition-all cursor-pointer"
              >
                <i className="bi bi-envelope text-[#49E3A1]" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Quick Social & Info Links Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10 w-full">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs text-[#D5E2E8] hover:text-[#F8FAFC] hover:border-[#49E3A1]/50 transition-colors"
              >
                <i className="bi bi-github text-[#49E3A1]" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs text-[#D5E2E8] hover:text-[#F8FAFC] hover:border-[#49E3A1]/50 transition-colors"
              >
                <i className="bi bi-linkedin text-[#49E3A1]" />
                <span>LinkedIn Profile</span>
              </a>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-xs font-mono text-[#D5E2E8]">
                <i className="bi bi-geo-alt text-[#49E3A1]" />
                <span>{personalInfo.location}</span>
              </span>
            </div>

          </div>

          {/* Right Column: Visual Portrait Showcase */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Soft Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#49E3A1]/15 via-[#07503F]/15 to-transparent rounded-3xl blur-xl opacity-80 pointer-events-none" />

              <div className="relative rounded-3xl glass-card p-4 shadow-2xl space-y-3.5">
                
                {/* Photo Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 aspect-[4/4.5] group bg-[#071D2D]">
                  <img
                    src={profilePhoto}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071D2D] via-transparent to-transparent opacity-75 pointer-events-none" />

                  {/* Badges on image */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-[#071D2D]/90 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#49E3A1]">
                      SLIIT • 3rd Year CS (Y3S1)
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#071D2D]/90 backdrop-blur-md border border-[#49E3A1]/30 text-[11px] font-mono text-[#49E3A1]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#49E3A1] animate-pulse" />
                      Active
                    </span>
                  </div>
                </div>

                {/* Quick Info Strip */}
                <div className="grid grid-cols-2 gap-2 text-center font-mono text-xs">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-base font-bold text-[#49E3A1]">6 Core</div>
                    <div className="text-[10px] text-[#B8CCD5] uppercase mt-0.5">Projects Built</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-base font-bold text-[#49E3A1]">7+ Yrs</div>
                    <div className="text-[10px] text-[#B8CCD5] uppercase mt-0.5">Prefect &amp; Lead</div>
                  </div>
                </div>

                {/* Footer Tag Strip */}
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-[#D5E2E8]">Core Stack:</span>
                  <span className="text-[#F8FAFC] font-semibold">Full-Stack • CI/CD • Cloud</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
