import { skillsData } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-[#071d2d] border-t border-white/10 overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">SKILLS</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#49e3a1]/10 border border-[#49e3a1]/25 text-[#49e3a1] font-mono text-xs mb-3">
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-[#49e3a1] via-[#66d8ee] to-[#aa75ff] bg-clip-text text-transparent">Capabilities &amp; Stack</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
            Programming languages, developer tools, database systems, and software engineering competencies applied across academic projects.
          </p>
        </div>

        {/* 3 Main Capability Cards (Equal Height & Proportion) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Programming Languages */}
          <div className="ocean-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <span className="text-2xl">⚡</span>
                <span className="font-mono text-xs text-[#66d8ee] uppercase tracking-wider font-semibold">
                  01 / LANGUAGES
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                Programming Languages
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-5">
                Core syntax &amp; OOP foundations
              </p>

              <div className="space-y-2">
                {skillsData.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between p-2.5 rounded-2xl bg-[#051521]/60 border border-white/10 hover:border-[#66d8ee]/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{lang.icon}</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        {lang.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#071d2d] text-[#66d8ee] border border-white/10">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-white/10 text-xs font-mono text-slate-400">
              Focus on Java OOP paradigms &amp; clean design
            </div>
          </div>

          {/* Card 2: Databases & Tools */}
          <div className="ocean-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <span className="text-2xl">🛠️</span>
                <span className="font-mono text-xs text-[#49e3a1] uppercase tracking-wider font-semibold">
                  02 / TOOLS &amp; DATA
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                Databases &amp; Tools
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-5">
                Data persistence, versioning &amp; IDEs
              </p>

              <div className="space-y-2">
                {skillsData.databasesAndTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center justify-between p-2.5 rounded-2xl bg-[#051521]/60 border border-white/10 hover:border-[#49e3a1]/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{tool.icon}</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        {tool.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#071d2d] text-[#49e3a1] border border-white/10">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-white/10 text-xs font-mono text-slate-400">
              Proficient in Git branching &amp; MySQL modeling
            </div>
          </div>

          {/* Card 3: Core Architecture */}
          <div className="ocean-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <span className="text-2xl">🏛️</span>
                <span className="font-mono text-xs text-[#aa75ff] uppercase tracking-wider font-semibold">
                  03 / ARCHITECTURE
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                Core Competencies
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-5">
                System design &amp; SDLC principles
              </p>

              <div className="space-y-2">
                {skillsData.competencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-2xl bg-[#051521]/60 border border-white/10 flex items-start gap-2.5 hover:border-[#aa75ff]/30 transition-colors"
                  >
                    <span className="text-[#aa75ff] font-mono text-xs font-bold mt-0.5 shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {comp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-white/10 text-xs font-mono text-slate-400">
              Disciplined testing &amp; clear documentation
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
