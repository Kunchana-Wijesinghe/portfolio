import { getFreelanceProjects } from '../../data/fiverrData'

export default function FiverrProjects() {
  const projects = getFreelanceProjects()

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-[#071d2d]/60 border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#aa75ff]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#49e3a1] tracking-wider mb-3 font-semibold">
            <span>03 / SELECTED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Real Projects &amp; Documented Contributions
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Authentic software engineering projects demonstrating full-stack architecture, clean frontend implementations, distributed systems, and real team contributions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="ocean-glass rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-[#66d8ee]/40 transition-all duration-300 group"
            >
              <div>
                {/* Header: Badge & Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#49e3a1] bg-[#49e3a1]/10 px-3 py-1 rounded-full border border-[#49e3a1]/20 font-semibold">
                    {project.badge || project.projectType}
                  </span>
                  <span className="text-xs font-mono text-slate-300">
                    {project.status}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-[#66d8ee] transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs sm:text-sm font-mono text-slate-300 mb-4">
                  {project.subtitle}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-200 leading-relaxed mb-5">
                  {project.cardDescription || project.description}
                </p>

                {/* Documented Contribution (Authentic) */}
                {project.myContribution && (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-5">
                    <span className="text-xs font-mono text-[#49e3a1] uppercase tracking-wider block font-semibold mb-1">
                      My Documented Contribution:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {project.myContribution}
                    </p>
                  </div>
                )}

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  {(project.highlights || project.keyFeatures || []).slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <span className="text-[#66d8ee] font-bold text-sm mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(project.technologies || []).slice(0, 7).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 text-slate-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {(project.technologies || []).length > 7 && (
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 text-slate-300">
                      +{(project.technologies || []).length - 7} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-slate-200 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>View Repository ↗</span>
                  </a>
                ) : (
                  <span className="text-xs sm:text-sm font-mono text-slate-400">Repository Private</span>
                )}

                <a
                  href="#gigs"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#49e3a1] hover:text-[#66d8ee] transition-colors"
                >
                  <span>Inquire about similar work</span>
                  <span>↓</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Authenticity Notice */}
        <div className="mt-10 text-center text-xs sm:text-sm font-mono text-slate-300">
          * All project representations above reflect genuine SLIIT university and team engineering work from my academic portfolio.
        </div>
      </div>
    </section>
  )
}
