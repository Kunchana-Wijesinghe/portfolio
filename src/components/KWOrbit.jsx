import { useState, useEffect, useRef } from 'react'
import profilePhoto from '../assets/kunchana-profile.jpeg'
import { personalInfo } from '../data/portfolioData'

export default function KWOrbit({ isHidden, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isTabVisible, setIsTabVisible] = useState(true)
  const [imgFailed, setImgFailed] = useState(false)

  const triggerButtonRef = useRef(null)
  const panelRef = useRef(null)
  const firstActionRef = useRef(null)

  const cvUrl = `${import.meta.env.BASE_URL}Kunchana_Wijesinghe_CV.pdf`

  // Tab visibility detection to pause animations when tab is in background
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden)
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  const handleOpenPanel = () => {
    setIsMinimized(false)
    setIsOpen(true)
  }

  const handleClosePanel = () => {
    setIsOpen(false)
    setTimeout(() => {
      triggerButtonRef.current?.focus()
    }, 50)
  }

  // Handle Escape key and focus trapping when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        e.preventDefault()
        handleClosePanel()
        return
      }

      if (e.key === 'Tab' && panelRef.current) {
        const focusableElements = panelRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusableElements[0]
        const last = focusableElements[focusableElements.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last?.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first?.focus()
          }
        }
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      // Focus first action upon opening
      setTimeout(() => {
        firstActionRef.current?.focus()
      }, 50)
    }

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const handleAction = (target) => {
    setIsOpen(false)
    if (typeof onNavigate === 'function') {
      onNavigate(target)
    } else {
      if (target.startsWith('#')) {
        const el = document.querySelector(target)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.open(target, '_blank', 'noopener,noreferrer')
      }
    }
  }

  // If intro or modal is open, completely hide companion
  if (isHidden) return null

  // If user minimized the companion
  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="px-3 py-1.5 rounded-full bg-[#072438]/90 border border-white/20 hover:border-[#49E3A1]/50 text-xs font-mono text-[#D5E2E8] hover:text-[#49E3A1] shadow-lg backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#49E3A1]"
          aria-label="Reopen Explore with Kunchana portfolio navigator"
        >
          <span className="w-2 h-2 rounded-full bg-[#49E3A1]" />
          <span>KW Orbit</span>
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Tooltip on Hover / Focus */}
      {!isOpen && isHovered && (
        <div
          role="tooltip"
          className="mb-2 px-3 py-1 rounded-full bg-[#072438]/95 border border-[#49E3A1]/30 text-xs font-mono text-[#D5E2E8] shadow-xl backdrop-blur-md animate-in fade-in duration-150 pointer-events-none"
        >
          Need a quick tour?
        </div>
      )}

      {/* Floating Companion Orb Trigger */}
      <button
        ref={triggerButtonRef}
        type="button"
        onClick={() => (isOpen ? handleClosePanel() : handleOpenPanel())}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Explore with Kunchana: Open portfolio navigator"
        className={`relative w-13 h-13 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#49E3A1] shadow-2xl ${
          isTabVisible ? 'animate-orbit-float' : ''
        } ${isOpen ? 'ring-2 ring-[#49E3A1] scale-105' : 'hover:scale-105'}`}
      >
        {/* Subtle Orbiting Dots Ring */}
        <div className={`absolute -inset-2 pointer-events-none ${isTabVisible ? 'animate-orbit-spin' : ''}`}>
          <div className="w-2 h-2 rounded-full bg-[#49E3A1] shadow-[0_0_8px_#49E3A1] absolute top-0 left-1/2 -translate-x-1/2" />
        </div>
        <div className={`absolute -inset-2.5 pointer-events-none ${isTabVisible ? 'animate-orbit-spin-reverse' : ''}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-[#5CF2B0] shadow-[0_0_6px_#5CF2B0] absolute bottom-0 left-1/2 -translate-x-1/2" />
        </div>

        {/* Central Orb Surface: Profile Photo with Emerald Border & Glow */}
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#072438] via-[#0A323B] to-[#07503F] border-2 border-[#49E3A1] shadow-[0_0_12px_rgba(73,227,161,0.4)] p-0.5 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full rounded-full bg-[#071D2D] overflow-hidden flex items-center justify-center">
            {!imgFailed ? (
              <img
                src={profilePhoto}
                alt={personalInfo?.name || 'Kunchana Wijesinghe'}
                className="w-full h-full object-cover object-top"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <span className="font-mono font-extrabold text-xs tracking-wider text-[#49E3A1]">
                KW
              </span>
            )}
          </div>
        </div>
      </button>

      {/* Compact Navigation Panel Dialog */}
      {isOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Explore with Kunchana Portfolio Navigator"
          className="absolute bottom-16 right-0 w-72 sm:w-80 rounded-2xl bg-[#082638] border border-white/20 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200 text-left"
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#49E3A1] shadow-[0_0_6px_#49E3A1]" />
              <div>
                <h3 className="text-sm font-bold text-[#F8FAFC] tracking-tight leading-none">
                  Explore with Kunchana
                </h3>
                <p className="text-[10px] font-mono text-[#B8CCD5] mt-0.5">
                  Portfolio Navigator
                </p>
              </div>
            </div>

            {/* Actions: Minimize & Close */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false)
                  setIsMinimized(true)
                }}
                className="p-1 rounded-md text-[#B8CCD5] hover:text-[#F8FAFC] hover:bg-white/10 text-xs transition-colors"
                title="Minimize navigator"
                aria-label="Minimize navigator"
              >
                <i className="bi bi-dash-lg" />
              </button>
              <button
                type="button"
                onClick={handleClosePanel}
                className="p-1 rounded-md text-[#B8CCD5] hover:text-[#F8FAFC] hover:bg-white/10 text-xs transition-colors"
                title="Close navigator (Escape)"
                aria-label="Close navigator"
              >
                <i className="bi bi-x-lg" />
              </button>
            </div>
          </div>

          {/* Navigation Action Buttons */}
          <div className="space-y-1.5">
            <button
              ref={firstActionRef}
              type="button"
              onClick={() => handleAction('#portfolio')}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#49E3A1]/40 text-left transition-all group cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#49E3A1]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#07503F] text-[#49E3A1] flex items-center justify-center text-xs">
                  <i className="bi bi-folder-check" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F8FAFC] group-hover:text-[#49E3A1] transition-colors">
                    Explore Projects
                  </div>
                  <div className="text-[10px] text-[#D5E2E8]">6 verified implementations</div>
                </div>
              </div>
              <i className="bi bi-chevron-right text-xs text-[#B8CCD5] group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => handleAction('#skills')}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#49E3A1]/40 text-left transition-all group cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#49E3A1]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#07503F] text-[#49E3A1] flex items-center justify-center text-xs">
                  <i className="bi bi-code-slash" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F8FAFC] group-hover:text-[#49E3A1] transition-colors">
                    View Skills
                  </div>
                  <div className="text-[10px] text-[#D5E2E8]">11 categorized disciplines</div>
                </div>
              </div>
              <i className="bi bi-chevron-right text-xs text-[#B8CCD5] group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => handleAction(cvUrl)}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#49E3A1]/40 text-left transition-all group cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#49E3A1]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#07503F] text-[#49E3A1] flex items-center justify-center text-xs">
                  <i className="bi bi-file-earmark-pdf" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F8FAFC] group-hover:text-[#49E3A1] transition-colors">
                    Download CV
                  </div>
                  <div className="text-[10px] text-[#D5E2E8]">Official resume PDF</div>
                </div>
              </div>
              <i className="bi bi-box-arrow-up-right text-xs text-[#B8CCD5] group-hover:text-[#49E3A1] transition-colors" />
            </button>

            <button
              type="button"
              onClick={() => handleAction('#contact')}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#49E3A1]/40 text-left transition-all group cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#49E3A1]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#07503F] text-[#49E3A1] flex items-center justify-center text-xs">
                  <i className="bi bi-envelope" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F8FAFC] group-hover:text-[#49E3A1] transition-colors">
                    Contact Kunchana
                  </div>
                  <div className="text-[10px] text-[#D5E2E8]">Email, LinkedIn, WhatsApp</div>
                </div>
              </div>
              <i className="bi bi-chevron-right text-xs text-[#B8CCD5] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
