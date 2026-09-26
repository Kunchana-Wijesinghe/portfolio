import { skillsData } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
            <span>02 // TECHNICAL STACK</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Technical Capabilities
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl font-sans">
            Programming languages, developer tools, database systems, and software engineering competencies.
          </p>
        </div>

        {/* 3 Main Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Programming Languages */}
          <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-2xl">⚡</span>
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                  01 / CORE
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Programming Languages
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Syntax & object-oriented programming foundations
              </p>

              <div className="space-y-3">
                {skillsData.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{lang.icon}</span>
                      <span className="text-sm font-semibold text-slate-200">
                        {lang.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/70 text-xs font-mono text-slate-400">
              Emphasis on Java OOP paradigms & clean architecture
            </div>
          </div>

          {/* Card 2: Databases & Tools */}
          <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-2xl">🛠️</span>
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                  02 / TOOLS
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Databases &amp; Tools
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Data persistence, version control & IDE environments
              </p>

              <div className="space-y-3">
                {skillsData.databasesAndTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{tool.icon}</span>
                      <span className="text-sm font-semibold text-slate-200">
                        {tool.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-emerald-400 border border-slate-700">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/70 text-xs font-mono text-slate-400">
              Proficient in Git workflows, branching, and MySQL modeling
            </div>
          </div>

          {/* Card 3: Core Competencies */}
          <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-2xl">🏛️</span>
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                  03 / ARCHITECTURE
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Core Competencies
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                System design patterns, SDLC & distributed theories
              </p>

              <div className="space-y-2.5">
                {skillsData.competencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3 hover:border-cyan-500/30 transition-colors"
                  >
                    <span className="text-cyan-400 font-mono text-xs font-bold mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {comp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/70 text-xs font-mono text-slate-400">
              Rigorous test-first & clean documentation mindset
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
