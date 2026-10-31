import { useState, useEffect, useRef, useId, useCallback } from 'react'
import { projectsData } from '../data/portfolioData'

export default function Projects({ onModalStateChange }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeModalProject, setActiveModalProject] = useState(null)
  const modalCloseBtnRef = useRef(null)
  const modalRef = useRef(null)
  const lastActiveElementRef = useRef(null)
  const modalTitleId = useId()

  const filterCategories = [
    { label: 'All', value: 'All' },
    { label: 'Web', value: 'Full-Stack & Web' },
    { label: 'Cloud & Microservices', value: 'Cloud & Microservices' },
    { label: 'QA & CI/CD', value: 'Quality & CI/CD' },
    { label: 'Games', value: 'Games & Interactive Systems' },
    { label: 'Distributed Systems', value: 'Distributed Systems' },
  ]

  const cardRoleLabels = {
    unistay: 'Full-Stack & Integration Contributor',
    'salon-sanaru': 'Academic Team Contributor',
    'distributed-payment': 'Concurrency & Integration Contributor',
    'cinnamon-bistro': 'DevOps, QA & Integration',
    'cinnamon-pipeline': 'Group Leader & CI Pipeline Lead',
    'facility-breach': 'Gameplay Interactions & Scene Integration',
  }

  const cardDescriptions = {
    unistay:
      'Full-stack boarding management platform deployed with Railway and Netlify, streamlining room allocation, bookings, and student services.',
    'salon-sanaru':
      'Academic team salon management project organizing appointment booking, service allocations, and customer records.',
    'distributed-payment':
      'Distributed computing prototype demonstrating multi-node validation, concurrency control, and atomic transaction guarantees.',
    'cinnamon-bistro':
      'Multi-service restaurant management system supporting table reservations, order management, and administrative dining workflows.',
    'cinnamon-pipeline':
      'Automated multi-stage CI pipeline combining baseline linting, code coverage gates, browser testing, and smoke tests via GitHub Actions.',
    'facility-breach':
      '3D interactive game created in Unity 6 featuring physics-based door mechanisms, movable barricades, and player interaction arbitration.',
  }

  const cardTechnologies = {
    unistay: ['React', 'TypeScript', 'Spring Boot', 'MySQL'],
    'salon-sanaru': ['React', 'Java', 'Spring Boot', 'MySQL'],
    'distributed-payment': ['Go (Golang)', 'Git & GitHub', 'Concurrency & Multi-Threading', 'Atomic Transaction Logic'],
    'cinnamon-bistro': ['ASP.NET Core', 'C#', 'React', 'MySQL'],
    'cinnamon-pipeline': ['GitHub Actions', 'Docker', 'ESLint', 'Coverlet'],
    'facility-breach': ['Unity 6 Engine', 'C#', 'NavMesh Integration', 'Physics Interactions'],
  }

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
    <section id="portfolio" className="py-24 sm:py-32 relative bg-section-alt border-t border-[#2A3B52] overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">PROJECTS</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#67D4ED] tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#162338]/60 border border-[#2A3B52]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#67D4ED]" />
            <span>05 / Selected Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F5F9] tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto mt-4 leading-relaxed">
            Verified academic engineering projects, quality pipelines, and systems implementations
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.label}
              type="button"
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-[#67D4ED] text-[#0B1220] font-bold shadow-md'
                  : 'glass-card text-[#CBD5E1] hover:text-[#F1F5F9] hover:border-[#67D4ED]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Card Grid: 3 columns on wide desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => {
            const techs = cardTechnologies[project.id] || project.technologies.slice(0, 4)
            const remainingCount = project.technologies.length - techs.length

            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#67D4ED]/40 hover:-translate-y-1 relative h-full"
              >
                {/* Card Top: Category Pill, Project Number, Title, Role, Description */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#67D4ED] bg-[#0B1220]/60 px-2.5 py-0.5 rounded-full border border-[#2A3B52]">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#94A3B8]">
                      #{project.number}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-[#F1F5F9] group-hover:text-[#67D4ED] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Concise, fully visible card-only role label */}
                  <p className="text-xs font-semibold text-[#67D4ED] mt-1.5 leading-snug">
                    {cardRoleLabels[project.id] || project.role}
                  </p>

                  {/* Concise card description */}
                  <p className="text-sm text-[#CBD5E1] mt-3 leading-relaxed">
                    {cardDescriptions[project.id] || project.cardDescription}
                  </p>
                </div>

                {/* Card Bottom: Technology Tags & Action Links */}
                <div className="pt-4 border-t border-[#2A3B52] mt-5 space-y-3.5">
                  {/* Compact Technology Tags (up to 4 prioritized chips) */}
                  <div className="flex flex-wrap gap-1.5 min-h-[48px] items-start">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#0B1220]/60 border border-[#2A3B52] text-[#CBD5E1]"
                      >
                        {tech}
                      </span>
                    ))}
                    {remainingCount > 0 && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#0B1220]/60 text-[#94A3B8]">
                        +{remainingCount}
                      </span>
                    )}
                  </div>

                  {/* Action Links aligned horizontally across the grid row */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      type="button"
                      onClick={(e) => handleOpenModal(project, e)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#67D4ED] hover:text-[#A5ECF9] group/btn transition-colors cursor-pointer py-1"
                    >
                      <span>View Details</span>
                      <i className="bi bi-arrow-right group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#CBD5E1] hover:text-[#F1F5F9] px-3 py-1.5 rounded-lg bg-[#0B1220]/60 border border-[#2A3B52] hover:border-[#67D4ED]/40 transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <i className="bi bi-github project-github-icon text-base text-[#67D4ED]" aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
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
            className="modal-surface rounded-2xl max-w-4xl lg:max-w-5xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left text-[#F1F5F9]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              ref={modalCloseBtnRef}
              type="button"
              onClick={handleCloseModal}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-[#CBD5E1] hover:text-[#F1F5F9] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#67D4ED]"
              aria-label="Close project details"
            >
              <i className="bi bi-x-lg text-lg" />
            </button>

            {/* Modal Header */}
            <div className="pr-10 mb-6 pb-4 border-b border-[#2A3B52]">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#67D4ED] bg-[#0B1220]/60 px-2.5 py-0.5 rounded-full border border-[#2A3B52]">
                  {activeModalProject.category}
                </span>
                <span className="text-xs font-mono font-semibold text-[#94A3B8]">
                  #{activeModalProject.number}
                </span>
              </div>
              <h3 id={modalTitleId} className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F1F5F9] leading-tight">
                {activeModalProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1">
                {activeModalProject.badge} • <span className="font-semibold text-[#F1F5F9]">{activeModalProject.role}</span>
              </p>
            </div>

            {/* Two-Column Landscape Organization on Desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left Column (Overview, Architecture, Full Tech Inventory, Action Links) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#67D4ED] mb-1.5 font-mono">
                    Project Overview
                  </h4>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed">
                    {activeModalProject.detailedDescription}
                  </p>
                </div>

                {/* Architecture Blueprint */}
                {activeModalProject.architecture && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#67D4ED] mb-1.5 font-mono">
                      Architecture
                    </h4>
                    <p className="font-mono text-xs text-[#67D4ED] bg-[#0B1220] p-2.5 rounded-lg border border-[#2A3B52] leading-normal">
                      {activeModalProject.architecture}
                    </p>
                  </div>
                )}

                {/* Complete Key Technologies Inventory */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#67D4ED] mb-2 font-mono">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#0B1220]/80 text-[#F1F5F9] font-medium border border-[#2A3B52]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-[#2A3B52] flex items-center gap-3">
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass-action inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <i className="bi bi-github project-github-icon text-base text-[#67D4ED]" aria-hidden="true" />
                    <span>View on GitHub</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 rounded-full border border-[#2A3B52] text-[#CBD5E1] hover:text-[#F1F5F9] text-xs sm:text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer"
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
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#67D4ED] mb-2.5 font-mono">
                      My Contributions &amp; Implementation Details
                    </h4>
                    <ul className="space-y-2.5">
                      {activeModalProject.contributions.map((c, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <i className="bi bi-check2-circle text-[#67D4ED] shrink-0 mt-0.5 text-base" />
                          <span className="leading-relaxed text-[#CBD5E1]">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Concise & Natural Project Scope Note */}
                {activeModalProject.note && (
                  <div className="p-3.5 rounded-xl bg-[#0B1220] border border-[#2A3B52] text-xs text-[#CBD5E1]">
                    <div className="font-bold flex items-center gap-1.5 mb-1 text-[#F1F5F9]">
                      <i className="bi bi-info-circle text-[#67D4ED]" />
                      <span>Context &amp; Scope</span>
                    </div>
                    <p className="leading-relaxed text-[#CBD5E1]">{activeModalProject.note}</p>
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
