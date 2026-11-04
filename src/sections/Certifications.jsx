import { useState, useEffect, useRef, useId, useCallback } from 'react'
import { certificationsData, currentlyLearningData } from '../data/portfolioData'

export default function Certifications({ onModalStateChange }) {
  const [activeModalCert, setActiveModalCert] = useState(null)
  const modalCloseBtnRef = useRef(null)
  const modalRef = useRef(null)
  const lastActiveElementRef = useRef(null)
  const modalTitleId = useId()

  const handleOpenModal = (cert, e) => {
    lastActiveElementRef.current = e?.currentTarget || document.activeElement
    setActiveModalCert(cert)
    onModalStateChange?.(true)
  }

  const handleCloseModal = useCallback(() => {
    setActiveModalCert(null)
    onModalStateChange?.(false)
    setTimeout(() => {
      if (lastActiveElementRef.current && typeof lastActiveElementRef.current.focus === 'function') {
        lastActiveElementRef.current.focus()
      }
    }, 50)
  }, [onModalStateChange])

  // Accessibility: Focus trap, Escape-to-close, and background scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        handleCloseModal()
        return
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusableElements.length) return

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    if (activeModalCert) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      setTimeout(() => {
        modalCloseBtnRef.current?.focus()
      }, 50)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeModalCert, handleCloseModal])

  return (
    <section id="certifications" className="py-24 sm:py-32 relative bg-[#0B1220] border-t border-[#2A3B52] overflow-hidden text-left">
      {/* Decorative Background Watermark moved ~40px upward with slightly reduced opacity */}
      <div className="section-watermark -top-6 sm:-top-8 opacity-60" aria-hidden="true">
        CREDENTIALS
      </div>

      {/* Content Container matches Projects grid width (max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header with reduced gap */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#67D4ED] tracking-widest uppercase mb-2.5 px-3 py-1 rounded-full bg-[#162338]/60 border border-[#2A3B52]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#67D4ED]" />
            <span>06 / CERTIFICATIONS &amp; DIGITAL CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F5F9] tracking-tight">
            Certifications &amp; Credentials
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto mt-2.5 leading-relaxed">
            Credentials earned through structured learning and practical assessments.
          </p>
        </div>

        {/* 1. COMPLETED CREDENTIALS LIST */}
        <div className="space-y-5 sm:space-y-6">
          {certificationsData.map((cert) => {
            const cardSkills = cert.cardSkills || cert.skills.slice(0, 4)

            return (
              <div
                key={cert.id}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-[#2A3B52] shadow-xs hover:shadow-xl hover:border-[#67D4ED]/40 transition-all duration-300 relative group"
              >
                {/* Desktop Top Row: Small Cyan Credential Icon + Title & Metadata on Left, Actions on Right */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  {/* Left: Clearly visible small cyan icon + Title, Metadata, Description & Skill Chips aligned */}
                  <div className="flex items-start gap-3 sm:gap-3.5 min-w-0 flex-1">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#162338] border border-[#67D4ED]/40 group-hover:border-[#67D4ED]/70 text-[#67D4ED] flex items-center justify-center text-base sm:text-lg shrink-0 shadow-xs transition-colors mt-0.5">
                      <i className="bi bi-patch-check-fill text-[#67D4ED]" aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3
                        onClick={(e) => handleOpenModal(cert, e)}
                        className="text-lg sm:text-xl md:text-2xl font-bold text-[#F1F5F9] group-hover:text-[#67D4ED] transition-colors leading-snug cursor-pointer tracking-tight"
                      >
                        {cert.name}
                      </h3>

                      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm mt-1">
                        <span className="text-[#94A3B8] font-medium">
                          {cert.issuer} · Issued {cert.issueDateShort || 'Nov 2026'}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full border border-[#2A3B52] bg-[#0B1220]/60 text-[#CBD5E1]">
                          {cert.type ? cert.type.toUpperCase() : 'DIGITAL CREDENTIAL'}
                        </span>
                      </div>

                      {/* Description aligned directly with title text */}
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mt-2.5 max-w-3xl">
                        {cert.cardSummary}
                      </p>

                      {/* Skill Chips aligned directly with title text */}
                      <div className="flex flex-wrap gap-2 items-center mt-3">
                        {cardSkills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#0B1220]/60 border border-[#2A3B52] text-[#CBD5E1] hover:border-[#67D4ED]/50 hover:text-[#F1F5F9] transition-colors leading-tight"
                          >
                            <i className="bi bi-tag text-[10px] text-[#67D4ED] shrink-0" aria-hidden="true" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Right Action Buttons */}
                  <div className="hidden md:flex items-center gap-3 shrink-0 pt-0.5">
                    <button
                      type="button"
                      onClick={(e) => handleOpenModal(cert, e)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border-2 border-[#67D4ED] bg-transparent text-[#F1F5F9] font-bold text-xs sm:text-sm hover:bg-[#67D4ED] hover:text-[#0B1220] transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(103,212,237,0.12)] focus:outline-none focus:ring-2 focus:ring-[#67D4ED] active:scale-[0.98]"
                      aria-label={`View details for ${cert.name}`}
                    >
                      <span>View Details</span>
                      <span className="text-sm font-bold">→</span>
                    </button>

                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#2A3B52] bg-[#0B1220]/60 hover:bg-[#162338] text-[#CBD5E1] hover:text-[#F1F5F9] hover:border-[#67D4ED]/50 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#67D4ED] active:scale-[0.98]"
                      aria-label={`Verify ${cert.name} on Credly`}
                    >
                      <span>Verify on Credly</span>
                      <span className="text-xs text-[#94A3B8]">↗</span>
                    </a>
                  </div>
                </div>

                {/* Mobile Actions: Stacked below content on small screens */}
                <div className="flex md:hidden flex-wrap items-center gap-2.5 pt-4 mt-4 border-t border-[#2A3B52]">
                  <button
                    type="button"
                    onClick={(e) => handleOpenModal(cert, e)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border-2 border-[#67D4ED] bg-transparent text-[#F1F5F9] font-bold text-xs hover:bg-[#67D4ED] hover:text-[#0B1220] transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(103,212,237,0.12)] focus:outline-none focus:ring-2 focus:ring-[#67D4ED] active:scale-[0.98]"
                    aria-label={`View details for ${cert.name}`}
                  >
                    <span>View Details</span>
                    <span className="text-xs font-bold">→</span>
                  </button>

                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-[#2A3B52] bg-[#0B1220]/60 hover:bg-[#162338] text-[#CBD5E1] hover:text-[#F1F5F9] hover:border-[#67D4ED]/50 text-xs font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#67D4ED] active:scale-[0.98]"
                    aria-label={`Verify ${cert.name} on Credly`}
                  >
                    <span>Verify on Credly</span>
                    <span className="text-[10px] text-[#94A3B8]">↗</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* 2. CURRENTLY LEARNING SECTION */}
        {currentlyLearningData && currentlyLearningData.length > 0 && (
          <div className="mt-8 sm:mt-10">
            {/* Subtle "Currently Learning" Section Subheading */}
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#67D4ED] animate-pulse" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#67D4ED] font-semibold">
                Currently Learning
              </h3>
            </div>

            {/* Currently Learning Cards (Matching format) */}
            <div className="space-y-4">
              {currentlyLearningData.map((plan) => (
                <div
                  key={plan.id}
                  className="glass-card rounded-2xl p-6 sm:p-7 border border-[#2A3B52] shadow-xs hover:shadow-xl hover:border-[#67D4ED]/40 transition-all duration-300 relative group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    {/* Left: Learning Icon + Title & Provider + In Progress Status */}
                    <div className="flex items-start gap-3 sm:gap-3.5 min-w-0">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#162338] border border-[#2A3B52] group-hover:border-[#67D4ED]/50 text-[#67D4ED] flex items-center justify-center text-base sm:text-lg shrink-0 shadow-xs transition-colors mt-0.5">
                        <i className="bi bi-journal-code text-[#67D4ED]" aria-hidden="true" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[#F1F5F9] group-hover:text-[#67D4ED] transition-colors leading-snug tracking-tight">
                          {plan.title}
                        </h4>

                        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm mt-1">
                          <span className="text-[#94A3B8] font-medium">
                            {plan.provider}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full border border-[#67D4ED]/40 bg-[#67D4ED]/10 text-[#67D4ED]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#67D4ED] animate-pulse" />
                            {plan.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Right Action: View Learning Plan ↗ */}
                    <div className="hidden md:flex items-center gap-3 shrink-0">
                      <a
                        href={plan.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#2A3B52] bg-[#0B1220]/60 hover:bg-[#162338] hover:border-[#67D4ED]/50 text-[#CBD5E1] hover:text-[#F1F5F9] text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#67D4ED] active:scale-[0.98]"
                        aria-label={`View learning plan for ${plan.title}`}
                      >
                        <span>View Learning Plan</span>
                        <span className="text-xs text-[#94A3B8]">↗</span>
                      </a>
                    </div>
                  </div>

                  {/* Description below top row */}
                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mt-3 max-w-4xl">
                    {plan.description}
                  </p>

                  {/* Mobile Action */}
                  <div className="flex md:hidden flex-wrap items-center gap-2.5 pt-4 mt-4 border-t border-[#2A3B52]">
                    <a
                      href={plan.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-[#2A3B52] bg-[#0B1220]/60 hover:bg-[#162338] hover:border-[#67D4ED]/50 text-[#CBD5E1] hover:text-[#F1F5F9] text-xs font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#67D4ED] active:scale-[0.98]"
                      aria-label={`View learning plan for ${plan.title}`}
                    >
                      <span>View Learning Plan</span>
                      <span className="text-[10px] text-[#94A3B8]">↗</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CREDENTIAL DETAILS MODAL: Landscape 2-Column Layout on Desktop */}
      {activeModalCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalTitleId}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
          onClick={handleCloseModal}
        >
          <div
            ref={modalRef}
            className="modal-surface rounded-2xl max-w-4xl lg:max-w-5xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left text-[#F1F5F9]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              ref={modalCloseBtnRef}
              type="button"
              onClick={handleCloseModal}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-[#CBD5E1] hover:text-[#F1F5F9] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#67D4ED] cursor-pointer"
              aria-label="Close credential details"
            >
              <i className="bi bi-x-lg text-lg" aria-hidden="true" />
            </button>

            {/* Modal Header */}
            <div className="pr-10 mb-6 pb-4 border-b border-[#2A3B52]">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#67D4ED] bg-[#0B1220]/60 px-2.5 py-0.5 rounded-full border border-[#2A3B52]">
                  {activeModalCert.type}
                </span>
                <span className="text-[11px] uppercase font-mono text-[#94A3B8] bg-[#0B1220]/40 px-2 py-0.5 rounded-full border border-[#2A3B52]">
                  {activeModalCert.category}
                </span>
              </div>
              <h3 id={modalTitleId} className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F1F5F9] leading-tight">
                {activeModalCert.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-semibold text-[#67D4ED]">{activeModalCert.issuer}</span>
                <span className="text-[#94A3B8]">•</span>
                <span>Issued to <strong className="text-[#F1F5F9] font-medium">{activeModalCert.recipient}</strong></span>
                <span className="text-[#94A3B8]">•</span>
                <span className="font-mono text-[#94A3B8]">{activeModalCert.issueDate}</span>
              </p>
            </div>

            {/* Two-Column Landscape Organization on Desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left Column (Badge Showcase with authentic colors preserved, Verification Badge, Overview, Actions) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                {/* Badge Artwork Container - Original authentic colors preserved */}
                <div className="p-6 rounded-2xl bg-[#0B1220]/70 border border-[#2A3B52] flex flex-col items-center text-center">
                  <img
                    src={activeModalCert.badgeImage}
                    alt={`${activeModalCert.name} official badge`}
                    className="w-36 h-36 sm:w-44 sm:h-44 object-contain filter drop-shadow-[0_12px_24px_rgba(103,212,237,0.25)]"
                  />
                  <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-[#162338]/80 border border-[#2A3B52] text-xs font-mono text-[#67D4ED]">
                    <i className="bi bi-patch-check-fill text-[#67D4ED]" aria-hidden="true" />
                    <span>Verified on Credly</span>
                  </div>
                </div>

                {/* Overview */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#67D4ED] mb-2 font-mono">
                    Credential Overview
                  </h4>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed">
                    {activeModalCert.overview}
                  </p>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-[#2A3B52] flex flex-wrap items-center gap-3">
                  <a
                    href={activeModalCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass-action inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <i className="bi bi-patch-check text-base text-[#67D4ED]" aria-hidden="true" />
                    <span>Verify on Credly</span>
                    <span className="text-xs">↗</span>
                  </a>

                  {activeModalCert.officialInfoUrl && (
                    <a
                      href={activeModalCert.officialInfoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-full border border-[#2A3B52] text-[#CBD5E1] hover:text-[#F1F5F9] hover:bg-white/5 text-xs sm:text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <span>Official Credential Info</span>
                      <span className="text-xs text-[#94A3B8]">↗</span>
                    </a>
                  )}

                  {/* Conditional Certificate PDF action */}
                  {activeModalCert.certificatePdf && (
                    <a
                      href={activeModalCert.certificatePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-full border border-[#67D4ED]/50 text-[#67D4ED] hover:bg-[#67D4ED]/10 text-xs sm:text-sm font-semibold transition-colors cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <i className="bi bi-file-earmark-pdf" aria-hidden="true" />
                      <span>View Certificate PDF</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2.5 rounded-full border border-[#2A3B52] text-[#CBD5E1] hover:text-[#F1F5F9] text-xs sm:text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer ml-auto"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Right Column (Learning Topics, Earning Requirements, Skills) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Learning Topics */}
                {activeModalCert.learningTopics && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#67D4ED] mb-3 font-mono">
                      Learning Topics
                    </h4>
                    <ul className="space-y-2.5">
                      {activeModalCert.learningTopics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <i className="bi bi-check2-circle text-[#67D4ED] shrink-0 mt-0.5 text-base" aria-hidden="true" />
                          <span className="leading-relaxed text-[#CBD5E1]">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Earning Requirements */}
                {activeModalCert.earningRequirements && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#67D4ED] mb-3 font-mono">
                      Earning Requirements
                    </h4>
                    <ul className="space-y-2.5">
                      {activeModalCert.earningRequirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <i className="bi bi-award text-[#67D4ED] shrink-0 mt-0.5 text-base" aria-hidden="true" />
                          <span className="leading-relaxed text-[#CBD5E1]">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Complete Relevant Skills */}
                {activeModalCert.skills && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#67D4ED] mb-2.5 font-mono">
                      Relevant Skills
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalCert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2.5 py-1 rounded-md bg-[#0B1220]/80 text-[#F1F5F9] font-medium border border-[#2A3B52]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
