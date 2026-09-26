import { skillsData } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <span>01 // PROFILE & VISION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl font-sans">
            A snapshot of my background, engineering philosophy, and communication strengths.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Professional Bio (Large Card) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                  Professional Summary
                </span>
                <span className="font-mono text-xs text-slate-500">
                  SLIIT Undergraduate
                </span>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a motivated and enthusiastic Computer Science undergraduate at{' '}
                  <strong className="text-white font-semibold">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </strong>
                  , with hands-on experience architecturalizing academic full-stack applications.
                </p>
                <p>
                  Deeply skilled in <span className="text-cyan-300 font-medium">Java programming</span>,
                  clean software engineering paradigms, and structural database development. I possess robust
                  team collaboration, communication, and leadership capabilities honed through continuous
                  management of university modules and institutional extracurricular boards.
                </p>
                <p>
                  I am highly passionate about implementing modern software systems, learning advanced tools,
                  and delivering high-quality industry engineering frameworks.
                </p>
              </div>
            </div>

            {/* Quick Badges Strip */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg bg-slate-800/80 text-xs font-mono text-slate-300 border border-slate-700/60">
                ⚡ Object-Oriented Architecture
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800/80 text-xs font-mono text-slate-300 border border-slate-700/60">
                🌐 Full-Stack Applications
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800/80 text-xs font-mono text-slate-300 border border-slate-700/60">
                🛡️ Distributed Consensus
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800/80 text-xs font-mono text-slate-300 border border-slate-700/60">
                💾 Relational DB Design
              </span>
            </div>
          </div>

          {/* Right Column Bento Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Key Soft Attributes Card */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-heading text-lg font-bold text-white mb-1 flex items-center gap-2">
                <span>Key Attributes</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-4">
                Core competencies in teamwork & engineering execution
              </p>

              <div className="space-y-2.5">
                {skillsData.softSkills.map((attr, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-cyan-500/30 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">
                      {attr}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-heading text-lg font-bold text-white mb-1 flex items-center gap-2">
                <span>Spoken Languages</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-4">
                Linguistic versatility for global collaboration
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {skillsData.spokenLanguages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-center"
                  >
                    <div className="text-sm font-semibold text-white">{lang.language}</div>
                    <div className="text-[11px] text-cyan-400 font-mono mt-0.5">
                      {lang.proficiency}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
