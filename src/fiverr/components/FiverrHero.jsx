import { fiverrProfileInfo } from '../../data/fiverrData'
import { personalInfo } from '../../data/portfolioData'

export default function FiverrHero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#49e3a1]/15 via-[#66d8ee]/12 to-[#aa75ff]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-orb" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#66d8ee]/10 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] -z-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/12 backdrop-blur-md mb-8 hover:border-[#49e3a1]/40 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#49e3a1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#49e3a1]"></span>
            </span>
            <span className="text-xs font-mono font-medium tracking-wide text-slate-200">
              AVAILABLE ON FIVERR • FREELANCE SOFTWARE DEVELOPER
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Building Clean, Scalable Web Apps &amp;{' '}
            <span className="bg-gradient-to-r from-[#49e3a1] via-[#66d8ee] to-[#aa75ff] bg-clip-text text-transparent">
              Frontend Solutions.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-9 max-w-2xl mx-auto">
            Hi, I&apos;m <span className="text-white font-semibold">{personalInfo.name}</span>—a Computer Science undergraduate at SLIIT. I build performant React web applications, robust backend APIs, and solve complex frontend challenges for clients on Fiverr.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
            <a
              href={fiverrProfileInfo.fiverrUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#49e3a1] via-[#66d8ee] to-[#49e3a1] bg-[length:200%_auto] hover:bg-right text-[#071d2d] font-bold text-sm sm:text-base shadow-xl shadow-[#49e3a1]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Discuss a Project on Fiverr</span>
              <span className="text-base font-bold">↗</span>
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm sm:text-base border border-white/15 transition-all cursor-pointer"
            >
              <span>Explore Real Projects</span>
              <span className="text-xs">↓</span>
            </a>
          </div>

          {/* Core Foundation Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="ocean-glass rounded-xl p-3 sm:p-4 border border-white/10">
              <div className="text-lg mb-1">🎓</div>
              <div className="text-xs font-bold text-white mb-0.5">CS Undergraduate</div>
              <div className="text-[11px] text-slate-400 leading-tight">Year 3 Semester 1 at SLIIT</div>
            </div>
            <div className="ocean-glass rounded-xl p-3 sm:p-4 border border-white/10">
              <div className="text-lg mb-1">⚡</div>
              <div className="text-xs font-bold text-white mb-0.5">Modern Full-Stack</div>
              <div className="text-[11px] text-slate-400 leading-tight">React, TypeScript, Java, Spring Boot</div>
            </div>
            <div className="ocean-glass rounded-xl p-3 sm:p-4 border border-white/10">
              <div className="text-lg mb-1">🛡️</div>
              <div className="text-xs font-bold text-white mb-0.5">Secure Collaboration</div>
              <div className="text-[11px] text-slate-400 leading-tight">Protected milestones &amp; escrow on Fiverr</div>
            </div>
            <div className="ocean-glass rounded-xl p-3 sm:p-4 border border-white/10">
              <div className="text-lg mb-1">💡</div>
              <div className="text-xs font-bold text-white mb-0.5">Clean Documentation</div>
              <div className="text-[11px] text-slate-400 leading-tight">Well-structured code &amp; handover guides</div>
            </div>
          </div>
        </div>

        {/* Core Tech Pills Bar */}
        <div className="mt-14 max-w-4xl mx-auto ocean-glass rounded-2xl p-5 border border-white/10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mr-2">
            Primary Stack:
          </span>
          {['React 19', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'Java', 'Spring Boot', 'MySQL', 'Docker', 'Git'].map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-slate-200 border border-white/10 hover:border-[#49e3a1]/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
