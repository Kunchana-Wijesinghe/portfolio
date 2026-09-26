import { useState, useEffect } from 'react'
import { projectsData } from '../data/portfolioData'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [activeModalProject, setActiveModalProject] = useState(null)

  // Close modal on Escape key press and manage body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null)
      }
    }
    if (activeModalProject) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeModalProject])

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true
    if (filter === 'cloud') {
      return (
        project.technologies.includes('Docker') ||
        project.technologies.includes('Azure Container Apps') ||
        project.technologies.includes('Spring Boot')
      )
    }
    if (filter === 'distributed') {
      return project.technologies.includes('Distributed Systems')
    }
    return true
  })

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-[#071d2d] border-t border-white/10 overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">PROJECTS</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#66d8ee]/10 border border-[#66d8ee]/25 text-[#66d8ee] font-mono text-xs mb-3">
              <span>03 // CODE &amp; ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Academic <span className="bg-gradient-to-r from-[#66d8ee] via-[#49e3a1] to-[#aa75ff] bg-clip-text text-transparent">Team Projects</span>
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              University engineering team projects demonstrating full-stack web platforms, cloud-deployed microservices, and failure-tolerant distributed systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-[#051521]/80 p-1.5 rounded-full border border-white/10 self-start md:self-auto backdrop-blur-md">
            <button
              onClick={() => setFilter('all')}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-[#66d8ee] to-[#49e3a1] text-[#071d2d] shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
              aria-pressed={filter === 'all'}
            >
              All ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('cloud')}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === 'cloud'
                  ? 'bg-gradient-to-r from-[#66d8ee] to-[#49e3a1] text-[#071d2d] shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
              aria-pressed={filter === 'cloud'}
            >
              Web &amp; Cloud
            </button>
            <button
              onClick={() => setFilter('distributed')}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === 'distributed'
                  ? 'bg-gradient-to-r from-[#66d8ee] to-[#49e3a1] text-[#071d2d] shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
              aria-pressed={filter === 'distributed'}
            >
              Distributed
            </button>
          </div>
        </div>

        {/* Compact 2x2 Grid Layout for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredProjects.map((project) => {
            const visibleTech = project.technologies.slice(0, 5)
            const remainingTechCount = project.technologies.length - visibleTech.length

            return (
              <article
                key={project.id}
                className="ocean-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#66d8ee]/40 transition-all"
              >
                <div>
                  {/* Top Meta Line */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3.5 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-sm font-bold text-[#66d8ee]">
                        #{project.number}
                      </span>
                      <span className="text-white/20">|</span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-200 font-mono text-[11px] uppercase tracking-wider">
                        👥 {project.badge}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#49e3a1]/10 border border-[#49e3a1]/25 text-[#49e3a1] font-mono text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#49e3a1] animate-pulse"></span>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#66d8ee] transition-colors tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[#49e3a1] mt-1 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Concise Overview */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.cardDescription}
                  </p>

                  {/* Documented Role Tag (if known) */}
                  {project.myContribution && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#66d8ee]/10 border border-[#66d8ee]/25 text-[#66d8ee] font-mono text-xs">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>Role &amp; Integration Documented</span>
                    </div>
                  )}

                  {/* Core Technologies Pills */}
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-1.5 items-center">
                      {visibleTech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full bg-[#051521]/80 border border-white/10 text-[11px] font-mono text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {remainingTechCount > 0 && (
                        <button
                          type="button"
                          onClick={() => setActiveModalProject(project)}
                          className="px-2.5 py-1 rounded-full bg-[#66d8ee]/10 hover:bg-[#66d8ee]/20 border border-[#66d8ee]/30 text-[11px] font-mono text-[#66d8ee] transition-colors cursor-pointer"
                          title="Click to view full technology stack in modal"
                        >
                          +{remainingTechCount} more
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[#66d8ee]/50 text-white font-mono text-xs font-semibold transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#66d8ee]"
                  >
                    <svg className="w-3.5 h-3.5 text-[#66d8ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>View Details</span>
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#66d8ee] to-[#49e3a1] text-[#071d2d] font-bold text-xs font-mono hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#66d8ee]"
                  >
                    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>GitHub ↗</span>
                  </a>
                </div>
              </article>
            )
          })}
        </div>

      </div>

      {/* Accessible Project Details Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <div
            onClick={() => setActiveModalProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-3xl ocean-glass rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#66d8ee]/30 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#66d8ee]">
                    PROJECT #{activeModalProject.number}
                  </span>
                  <span className="text-white/20">|</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-200 font-mono text-xs uppercase tracking-wider">
                    👥 {activeModalProject.badge}
                  </span>
                </div>
                <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {activeModalProject.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-[#49e3a1] mt-1 font-medium">
                  {activeModalProject.subtitle}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer shrink-0 focus:outline-none focus:ring-2 focus:ring-[#66d8ee]"
                aria-label="Close project details"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              {/* Detailed Description */}
              <div>
                <h4 className="text-xs font-mono uppercase text-[#66d8ee] tracking-wider font-semibold mb-2">
                  Detailed Project Overview:
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeModalProject.detailedDescription}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-mono uppercase text-[#66d8ee] tracking-wider font-semibold mb-2.5">
                  Key Features &amp; System Capabilities:
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="text-[#49e3a1] font-bold mt-0.5 shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* My Contribution (if present) */}
              {activeModalProject.myContribution && (
                <div className="p-4 rounded-2xl bg-[#051521]/80 border border-[#66d8ee]/30">
                  <h4 className="flex items-center gap-2 text-xs font-mono uppercase text-[#66d8ee] tracking-wider font-semibold mb-2">
                    <svg className="w-4 h-4 text-[#66d8ee] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>My Documented Individual Contribution:</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.myContribution}
                  </p>
                </div>
              )}

              {/* Technology Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase text-[#66d8ee] tracking-wider font-semibold mb-2.5">
                  Full Technology Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-[#051521] border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Spec */}
              <div className="p-3.5 rounded-xl bg-[#051521]/60 border border-white/10 font-mono text-xs text-slate-300 flex items-center gap-2 flex-wrap">
                <span className="text-[#66d8ee] font-semibold">ARCHITECTURE:</span>
                <span>{activeModalProject.architecture}</span>
              </div>

              {/* Team Project Attribution Disclaimer */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-400">
                <span className="text-[#66d8ee] font-semibold">ACADEMIC TEAM PROJECT: </span>
                <span>
                  Developed as a university collaborative engineering project. Individual responsibilities and integration workflows are highlighted above where documented.
                </span>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white font-mono text-xs font-semibold transition-all cursor-pointer"
              >
                Close
              </button>

              <a
                href={activeModalProject.github}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#66d8ee] to-[#49e3a1] text-[#071d2d] font-bold text-xs font-mono hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>View on GitHub ↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
