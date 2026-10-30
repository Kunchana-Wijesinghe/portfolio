import { useState, useEffect, useRef, useId, useCallback } from 'react'
import { projectsData } from '../data/portfolioData'

export default function Projects({ onModalStateChange }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeModalProject, setActiveModalProject] = useState(null)
  const modalCloseBtnRef = useRef(null)
  const modalRef = useRef(null)
  const lastActiveElementRef = useRef(null)
  const modalTitleId = useId()

  const categories = [
    'All',
    'Quality & CI/CD',
    'Full-Stack & Web',
    'Cloud & Microservices',
    'Games & Interactive Systems',
    'Distributed Systems',
  ]

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory)

  const handleOpenModal = (project, e) => {
    lastActiveElementRef.current = e?.currentTarget || document.activeElement
    setActiveModalProject(project)
    onModalStateChange?.(true)
  }

  const handleCloseModal = useCallback(() => {
    setActiveModalProject(null)
    onModalStateChange?.(false)
    setTimeout(() => {
      if (lastActiveElementRef.current && typeof lastActiveElementRef.current.focus === 'function') {
        lastActiveElementRef.current.focus()
      }
    }, 50)
  }, [onModalStateChange])

  // Focus Trapping and Escape-to-Close
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

    if (activeModalProject) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      // Focus the close button upon opening
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
  }, [activeModalProject, handleCloseModal])

  return (
    <section id="portfolio" className="py-24 sm:py-32 relative bg-section-alt border-t border-white/10 overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">PROJECTS</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#49E3A1] tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-white/5 border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#49E3A1]" />
            <span>05 / Selected Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-[#D5E2E8] max-w-2xl mx-auto mt-4 leading-relaxed">
            Verified academic engineering projects, quality pipelines, and systems implementations
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#49E3A1] text-[#071D2D] font-bold shadow-md'
                  : 'glass-card text-[#D5E2E8] hover:text-[#F8FAFC] hover:border-[#49E3A1]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Compact Portrait Card Grid (No image areas or placeholders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#49E3A1]/50 hover:-translate-y-1 relative"
            >
              {/* Card Top: Category Pill & Project Number */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#49E3A1] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/15">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#B8CCD5]">
                    #{project.number}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#49E3A1] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Role & Module Badge */}
                <p className="text-xs font-medium text-[#D5E2E8] mt-1.5 line-clamp-1">
                  <span className="font-semibold text-[#F8FAFC]">{project.role}</span> • {project.badge}
                </p>

                {/* Concise Card Description */}
                <p className="text-sm text-[#D5E2E8] mt-3.5 leading-relaxed">
                  {project.cardDescription}
                </p>
              </div>

              {/* Card Bottom: Technology Tags & Action Links */}
              <div className="space-y-4 pt-5 border-t border-white/10 mt-6">
                {/* Compact Technology Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[#D5E2E8]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-[#B8CCD5]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={(e) => handleOpenModal(project, e)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#49E3A1] hover:text-[#5CF2B0] group/btn transition-colors cursor-pointer py-1"
                  >
                    <span>View Details</span>
                    <i className="bi bi-arrow-right group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#D5E2E8] hover:text-[#F8FAFC] px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#49E3A1]/40 transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <i className="bi bi-github text-base text-[#F8FAFC]" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT DETAILS POPUP: Wide Landscape 2-Column Layout on Desktop */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalTitleId}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
          onClick={handleCloseModal}
        >
          <div
            ref={modalRef}
            className="modal-surface rounded-2xl max-w-4xl lg:max-w-5xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left text-[#F8FAFC]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              ref={modalCloseBtnRef}
              type="button"
              onClick={handleCloseModal}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-[#D5E2E8] hover:text-[#F8FAFC] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#49E3A1]"
              aria-label="Close project details"
            >
              <i className="bi bi-x-lg text-lg" />
            </button>

            {/* Modal Header */}
            <div className="pr-10 mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#49E3A1] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/15">
                  {activeModalProject.category}
                </span>
                <span className="text-xs font-mono font-semibold text-[#B8CCD5]">
                  #{activeModalProject.number}
                </span>
              </div>
              <h3 id={modalTitleId} className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F8FAFC] leading-tight">
                {activeModalProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D5E2E8] mt-1">
                {activeModalProject.badge} • <span className="font-semibold text-[#F8FAFC]">{activeModalProject.role}</span>
              </p>
            </div>

            {/* Two-Column Landscape Organization on Desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left Column (Overview, Role, Tech, Action Links) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#49E3A1] mb-1.5 font-mono">
                    Project Overview
                  </h4>
                  <p className="text-sm text-[#D5E2E8] leading-relaxed">
                    {activeModalProject.detailedDescription}
                  </p>
                </div>

                {/* Architecture Blueprint */}
                {activeModalProject.architecture && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#49E3A1] mb-1.5 font-mono">
                      Architecture
                    </h4>
                    <p className="font-mono text-xs text-[#49E3A1] bg-[#051C2C] p-2.5 rounded-lg border border-white/15 leading-normal">
                      {activeModalProject.architecture}
                    </p>
                  </div>
                )}

                {/* Key Technologies */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#49E3A1] mb-2 font-mono">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-[#F8FAFC] font-medium border border-white/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass-action inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <i className="bi bi-github" />
                    <span>View on GitHub</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 rounded-full border border-white/20 text-[#D5E2E8] hover:text-[#F8FAFC] text-xs sm:text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Right Column (My Contributions & Scope Note) */}
              <div className="lg:col-span-7 space-y-5">
                {/* Verified Contributions */}
                {activeModalProject.contributions && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#49E3A1] mb-2.5 font-mono">
                      My Contributions &amp; Implementation Details
                    </h4>
                    <ul className="space-y-2.5">
                      {activeModalProject.contributions.map((c, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <i className="bi bi-check2-circle text-[#49E3A1] shrink-0 mt-0.5 text-base" />
                          <span className="leading-relaxed text-[#D5E2E8]">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Concise & Natural Project Scope Note */}
                {activeModalProject.note && (
                  <div className="p-3.5 rounded-xl bg-[#051C2C] border border-white/15 text-xs text-[#D5E2E8]">
                    <div className="font-bold flex items-center gap-1.5 mb-1 text-[#F8FAFC]">
                      <i className="bi bi-info-circle text-[#49E3A1]" />
                      <span>Context &amp; Scope</span>
                    </div>
                    <p className="leading-relaxed text-[#D5E2E8]">{activeModalProject.note}</p>
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
