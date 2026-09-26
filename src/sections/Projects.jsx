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
    <section id="projects" className="py-20 sm:py-28 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
              <span>03 // CODE & SYSTEMS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Academic Engineering Projects
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl font-sans">
              Selected engineering projects demonstrating object-oriented paradigms, distributed consensus, and relational data architecture.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              type="button"
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'all'
                  ? 'bg-cyan-500 text-black font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              type="button"
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'featured'
                  ? 'bg-cyan-500 text-black font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setFilter('distributed')}
              type="button"
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'distributed'
                  ? 'bg-cyan-500 text-black font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Distributed
            </button>
          </div>
        </div>

        {/* Projects List / Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden group"
            >
              {/* Top Meta Line */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-cyan-400">
                    #{project.number}
                  </span>
                  <span className="text-slate-600">|</span>
                  <span className="font-mono text-xs text-slate-300 uppercase tracking-wider">
                    {project.badge}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Main Content Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Info & Description */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-cyan-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <svg
                            className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture spec ribbon */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-400 flex items-center gap-2">
                    <span className="text-cyan-400">ARCH:</span>
                    <span className="text-slate-300 truncate">{project.architecture}</span>
                  </div>
                </div>

                {/* Right: Technologies & Actions */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-slate-800/80 lg:pl-8">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                      Technologies Used
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-white text-xs font-semibold font-mono transition-all group/btn"
                    >
                      <svg className="w-4 h-4 fill-current text-slate-400 group-hover/btn:text-white" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>View on GitHub</span>
                      <svg className="w-3.5 h-3.5 text-slate-400 group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
