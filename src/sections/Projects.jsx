import { useState } from 'react'
import { projectsData } from '../data/portfolioData'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true
    if (filter === 'featured') return project.featured
    if (filter === 'distributed') return project.technologies.includes('Distributed Systems')
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
              Featured <span className="bg-gradient-to-r from-[#66d8ee] via-[#49e3a1] to-[#aa75ff] bg-clip-text text-transparent">Engineering Projects</span>
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl">
              Academic software implementations showcasing object-oriented paradigms, distributed consensus, and relational database systems.
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
            >
              All ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === 'featured'
                  ? 'bg-gradient-to-r from-[#66d8ee] to-[#49e3a1] text-[#071d2d] shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setFilter('distributed')}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === 'distributed'
                  ? 'bg-gradient-to-r from-[#66d8ee] to-[#49e3a1] text-[#071d2d] shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Distributed
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="ocean-glass rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#66d8ee]/40 transition-all"
            >
              {/* Top Meta Line */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-[#66d8ee]">
                    #{project.number}
                  </span>
                  <span className="text-white/20">|</span>
                  <span className="font-mono text-xs text-slate-300 uppercase tracking-wider">
                    {project.badge}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#49e3a1]/10 border border-[#49e3a1]/25 text-[#49e3a1] font-mono text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#49e3a1] animate-pulse"></span>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#66d8ee] transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-[#49e3a1] mt-1 font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Highlights Bullet List */}
              <div className="mb-5 space-y-2">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold block">
                  Implementation Highlights:
                </span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <span className="text-[#49e3a1] font-bold mt-0.5">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Pills */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[#051521]/70 border border-white/10 text-xs font-mono text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bottom Footer Bar */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                  <span className="text-[#66d8ee] font-semibold">ARCH:</span>
                  <span className="bg-[#051521]/60 px-2.5 py-1 rounded-lg border border-white/10">
                    {project.architecture}
                  </span>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#66d8ee] to-[#49e3a1] text-[#071d2d] font-bold text-xs font-mono hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md self-start sm:self-auto cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>View on GitHub ↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
