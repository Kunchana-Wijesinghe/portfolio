import { fiverrFrontendSkills } from '../../data/fiverrData'

export default function FiverrTechStack() {
  return (
    <section id="tech-stack" className="py-20 sm:py-28 relative bg-[#071d2d] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#49e3a1] tracking-wider mb-3">
            <span>04 / TECH ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Frontend Stack &amp; Tooling
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I work fluently across the modern frontend ecosystem, debugging frameworks, state stores, styling libraries, and bundlers.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
          {fiverrFrontendSkills.map((skill) => (
            <div
              key={skill.name}
              className="ocean-glass rounded-xl p-4 border border-white/10 flex flex-col items-center text-center hover:border-[#49e3a1]/40 transition-all duration-200 group"
            >
              <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {skill.icon}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white mb-1">
                {skill.name}
              </span>
              <span className="text-[10px] font-mono text-[#49e3a1] bg-[#49e3a1]/10 px-2 py-0.5 rounded-full border border-[#49e3a1]/20">
                {skill.level}
              </span>
            </div>
          ))}
        </div>

        {/* Diagnostic Tools Row */}
        <div className="mt-10 ocean-glass rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-mono text-[#66d8ee] uppercase tracking-wider font-semibold">
              DIAGNOSTIC &amp; DEBUGGING ARSENAL
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Chrome DevTools • React Developer Tools • React Profiler • Network Waterfall Analysis • Lighthouse Performance Audits • Console Call Stack Tracing
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#49e3a1] animate-pulse" />
            <span className="text-xs font-mono text-slate-300">Clean, Root-Cause Resolution</span>
          </div>
        </div>
      </div>
    </section>
  )
}
