import { getFiverrSelectedProjects, fiverrGigInfo } from '../../data/fiverrData'

export default function FiverrProjects() {
  const selectedProjects = getFiverrSelectedProjects()

  return (
    <section id="selected-work" className="py-20 sm:py-28 relative bg-[#071d2d]/60 border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#aa75ff]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#49e3a1] tracking-wider mb-3">
            <span>03 / SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Real Projects &amp; Frontend Code
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Here are actual web applications I have built and contributed to, demonstrating solid React architecture, responsive design, clean state management, and real-world frontend engineering.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {selectedProjects.map((project) => (
            <div
              key={project.id}
              className="ocean-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-[#66d8ee]/40 transition-all duration-300 group"
            >
              <div>
                {/* Project Tag & Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#49e3a1] bg-[#49e3a1]/10 px-2.5 py-1 rounded-full border border-[#49e3a1]/20">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.timeline}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#66d8ee] transition-colors">
                  {project.title}
                </h3>

                {/* Frontend Focus Role */}
                <div className="mb-3 text-xs font-mono text-[#66d8ee] font-medium bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5">
                  Frontend Focus: {project.frontendRole}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {project.tagline}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-white/10">
                  {project.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-[#49e3a1] font-bold text-xs mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link & CTA */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>View Repository ↗</span>
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-500">Repository Private</span>
                )}

                <a
                  href={fiverrGigInfo.gigUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#49e3a1] hover:underline"
                >
                  Order Fix ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Authenticity Transparency Card */}
        <div className="mt-8 text-center text-xs font-mono text-slate-400">
          * All project codebases above reflect genuine engineering work from my academic and team portfolio. No simulated projects or fictional clients.
        </div>
      </div>
    </section>
  )
}
