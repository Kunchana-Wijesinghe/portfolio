import { useState, useEffect, useRef, useCallback } from 'react'
import profilePhoto from '../assets/kunchana-profile.jpeg'
import { personalInfo } from '../data/portfolioData'

export default function IntroOverlay({ onComplete }) {
  const [activeStep, setActiveStep] = useState(0) // 0: init, 1: build, 2: test, 3: deploy, 4: ready, 5: final message
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)
  const skipButtonRef = useRef(null)
  const dismissedRef = useRef(false)

  const handleDismiss = useCallback(() => {
    if (dismissedRef.current) return
    dismissedRef.current = true
    try {
      sessionStorage.setItem('kw_intro_seen', 'true')
    } catch {
      // Storage unavailable or disabled in private browsing, continue gracefully
    }
    setIsFadingOut(true)
    setTimeout(() => {
      onComplete()
    }, 350)
  }, [onComplete])

  useEffect(() => {
    // 1. Check prefers-reduced-motion: skip animation immediately
    try {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) {
        handleDismiss()
        return
      }
    } catch {
      // Ignore matchMedia check errors
    }

    // 2. Focus skip button upon mount
    skipButtonRef.current?.focus()

    // 3. Timed sequential step advancement over ~2.2 seconds
    const timer1 = setTimeout(() => setActiveStep(1), 350)  // Node 1: Build
    const timer2 = setTimeout(() => setActiveStep(2), 700)  // Node 2: Test
    const timer3 = setTimeout(() => setActiveStep(3), 1050) // Node 3: Deploy
    const timer4 = setTimeout(() => setActiveStep(4), 1400) // Node 4: Ready
    const timer5 = setTimeout(() => setActiveStep(5), 1700) // Message: Welcome to my portfolio.
    const timerEnd = setTimeout(() => handleDismiss(), 2450) // Smooth dismissal

    // 4. Absolute failsafe timeout ensuring user cannot be trapped
    const failsafe = setTimeout(() => handleDismiss(), 3500)

    // 5. Escape key support
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        handleDismiss()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
      clearTimeout(timerEnd)
      clearTimeout(failsafe)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleDismiss])

  // Nodes for the crossing diagonal process animation
  // Coordinate anchors are in percentages: 12.5% / 87.5% horizontally, 16% / 84% vertically
  const nodes = [
    {
      id: 1,
      name: 'Build',
      icon: 'bi-hammer',
      left: '14%',
      top: '18%',
      x: 50,
      y: 29,
    },
    {
      id: 2,
      name: 'Test',
      icon: 'bi-shield-check',
      left: '86%',
      top: '18%',
      x: 310,
      y: 29,
    },
    {
      id: 3,
      name: 'Deploy',
      icon: 'bi-cloud-arrow-up',
      left: '86%',
      top: '82%',
      x: 310,
      y: 131,
    },
    {
      id: 4,
      name: 'Ready',
      icon: 'bi-check-circle',
      left: '14%',
      top: '82%',
      x: 50,
      y: 131,
    },
  ]

  return (
    <aside
      aria-label="System Boot Introduction"
      aria-modal="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B1220] select-none transition-opacity duration-300 p-4 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(103,212,237,0.10),transparent_65%)] pointer-events-none" />

      {/* Top Bar: Skip Intro Button */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30">
        <button
          ref={skipButtonRef}
          type="button"
          onClick={handleDismiss}
          className="px-4 py-2 rounded-full border border-[#2A3B52] bg-[#162338]/60 hover:bg-[#162338] text-xs font-mono text-[#CBD5E1] hover:text-[#F1F5F9] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#67D4ED]"
          aria-label="Skip Introduction and proceed to portfolio"
        >
          <span>Skip Intro ⏭</span>
        </button>
      </div>

      {/* Three Vertically Separated Areas Container */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md z-10 py-1">

        {/* =========================================================================
            AREA 1: TOP — Identity Block
            Slightly upward, clear vertical gaps, zero lines or nodes passing through
           ========================================================================= */}
        <div className="flex flex-col items-center text-center">
          {/* Circular Profile Portrait */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#67D4ED] shadow-[0_0_24px_rgba(103,212,237,0.35)] overflow-hidden bg-[#0B1220] p-0.5 transition-all duration-500">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0B1220] flex items-center justify-center">
              {!imgFailed ? (
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <span className="font-extrabold text-2xl font-mono tracking-wider text-[#67D4ED]">
                  KW
                </span>
              )}
            </div>
          </div>

          {/* Full Name */}
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#F1F5F9] tracking-tight leading-tight mt-3">
            {personalInfo.name}
          </h2>

          {/* Undergraduate Subtitle */}
          <p className="text-xs sm:text-sm font-mono text-[#CBD5E1] mt-0.5 tracking-wide">
            {personalInfo.subtitle}
          </p>
        </div>

        {/* =========================================================================
            AREA 2: MIDDLE — Process Animation
            Placed entirely BELOW the identity block with crossing diagonal connectors
           ========================================================================= */}
        <div className="relative mt-5 sm:mt-6 w-[290px] sm:w-[360px] h-[145px] sm:h-[160px] flex items-center justify-center">
          {/* Crossing Diagonal Circuit SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 360 160"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="circuit-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Subtle Outer Boundary Ellipse */}
            <ellipse
              cx="180"
              cy="80"
              rx="135"
              ry="54"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1.5"
              strokeDasharray="3 5"
            />

            {/* Inactive Background Diagonal Crossing Lines */}
            {/* Diagonal 1: Build (top-left) to Deploy (bottom-right) */}
            <line
              x1="50"
              y1="29"
              x2="310"
              y2="131"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
            />
            {/* Diagonal 2: Test (top-right) to Ready (bottom-left) */}
            <line
              x1="310"
              y1="29"
              x2="50"
              y2="131"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
            />

            {/* Active Sequential Crossing Connectors */}
            {/* Step 1: Center to Node 1 (Build) */}
            <line
              x1="180"
              y1="80"
              x2="50"
              y2="29"
              stroke={activeStep >= 1 ? '#67D4ED' : 'transparent'}
              strokeWidth="2"
              filter={activeStep >= 1 ? 'url(#circuit-glow)' : undefined}
              className="transition-all duration-300"
            />

            {/* Step 2: Center to Node 2 (Test) */}
            <line
              x1="180"
              y1="80"
              x2="310"
              y2="29"
              stroke={activeStep >= 2 ? '#67D4ED' : 'transparent'}
              strokeWidth="2"
              filter={activeStep >= 2 ? 'url(#circuit-glow)' : undefined}
              className="transition-all duration-300"
            />

            {/* Step 3: Center to Node 3 (Deploy) — Completes Build-Deploy Diagonal */}
            <line
              x1="180"
              y1="80"
              x2="310"
              y2="131"
              stroke={activeStep >= 3 ? '#67D4ED' : 'transparent'}
              strokeWidth="2"
              filter={activeStep >= 3 ? 'url(#circuit-glow)' : undefined}
              className="transition-all duration-300"
            />

            {/* Step 4: Center to Node 4 (Ready) — Completes Test-Ready Diagonal */}
            <line
              x1="180"
              y1="80"
              x2="50"
              y2="131"
              stroke={activeStep >= 4 ? '#67D4ED' : 'transparent'}
              strokeWidth="2"
              filter={activeStep >= 4 ? 'url(#circuit-glow)' : undefined}
              className="transition-all duration-300"
            />
          </svg>

          {/* Central Crossing Circuit Hub Pivot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10">
            <div
              className={`w-7 h-7 rounded-full border transition-all duration-500 flex items-center justify-center ${
                activeStep >= 1
                  ? 'border-[#67D4ED] bg-[#162338] shadow-[0_0_12px_rgba(103,212,237,0.6)]'
                  : 'border-[#2A3B52] bg-[#162338]/40'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeStep >= 4
                    ? 'bg-[#67D4ED] scale-125 shadow-[0_0_8px_#67D4ED]'
                    : activeStep >= 1
                    ? 'bg-[#67D4ED]'
                    : 'bg-[#94A3B8]/60'
                }`}
              />
            </div>
          </div>

          {/* Four Process Nodes Positioned Around the Crossing Connectors */}
          {nodes.map((node) => {
            const isNodeActive = activeStep >= node.id

            return (
              <div
                key={node.name}
                style={{ left: node.left, top: node.top }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-sm border transition-all duration-300 ${
                    isNodeActive
                      ? 'bg-[#162338] text-[#67D4ED] border-[#67D4ED] shadow-[0_0_14px_rgba(103,212,237,0.45)] scale-105'
                      : 'bg-[#162338]/60 text-[#94A3B8] border-[#2A3B52]'
                  }`}
                >
                  <i className={`bi ${node.icon}`} />
                </div>
                <span
                  className={`text-[10px] font-mono tracking-wider uppercase mt-1 transition-colors duration-200 ${
                    isNodeActive ? 'text-[#67D4ED] font-bold' : 'text-[#94A3B8] font-medium'
                  }`}
                >
                  {node.name}
                </span>
              </div>
            )
          })}
        </div>

        {/* =========================================================================
            AREA 3: BOTTOM — Welcome Message
            Placed below the process animation with a distinct gap
           ========================================================================= */}
        <div className="mt-5 sm:mt-6 min-h-[2.5rem] flex flex-col items-center justify-center text-center px-4 z-10">
          {activeStep < 5 ? (
            <div className="flex items-center gap-2 font-mono text-xs text-[#CBD5E1]">
              <span className="w-2 h-2 rounded-full bg-[#67D4ED] animate-pulse" />
              <span>KW System Boot: Initializing modules...</span>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-base sm:text-lg font-mono font-bold text-[#67D4ED] tracking-wide drop-shadow-[0_0_10px_rgba(103,212,237,0.5)]">
                Welcome to my portfolio.
              </p>
            </div>
          )}
        </div>

      </div>
    </aside>
  )
}
