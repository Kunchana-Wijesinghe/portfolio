import { fiverrUrls } from '../../data/fiverrData'

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
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/12 backdrop-blur-md mb-8 hover:border-[#49e3a1]/40 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#49e3a1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#49e3a1]"></span>
            </span>
            <span className="text-xs sm:text-sm font-mono font-medium tracking-wide text-slate-200">
              FREELANCE SOFTWARE &amp; WEB DEVELOPER • FIVERR
            </span>
          </div>

          {/* Headline - General & Future-Proof */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Building &amp; Improving{' '}
            <span className="bg-gradient-to-r from-[#49e3a1] via-[#66d8ee] to-[#aa75ff] bg-clip-text text-transparent">
              Web Applications.
            </span>
          </h1>

          {/* Subtitle - Explains what I build/improve before academic details */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-9 max-w-2xl mx-auto">
            I help clients build responsive web applications, integrate frontend interfaces with backend REST APIs, and resolve tricky technical and state bugs. Focused on clean code, reliable performance, and maintainable architecture.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href={fiverrUrls.reactBugFixingGig}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#49e3a1] via-[#66d8ee] to-[#49e3a1] bg-[length:200%_auto] hover:bg-right text-[#071d2d] font-bold text-sm sm:text-base shadow-xl shadow-[#49e3a1]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              title="View my published React Bug-Fixing Gig on Fiverr"
            >
              <span>View React Bug-Fixing Gig</span>
              <span className="text-base font-bold">↗</span>
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm sm:text-base border border-white/15 transition-all cursor-pointer"
            >
              <span>Explore Real Projects</span>
              <span className="text-xs">↓</span>
            </a>
          </div>

          {/* Practical Engineering Capabilities (Real Skills & Projects) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="ocean-glass rounded-2xl p-5 border border-white/10">
              <div className="text-2xl mb-2">💻</div>
              <div className="text-sm sm:text-base font-bold text-white mb-1">Modern Web &amp; UI Development</div>
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Responsive, accessible Single Page Applications using modern JavaScript, React 19, and Tailwind CSS.
              </div>
            </div>
            <div className="ocean-glass rounded-2xl p-5 border border-white/10">
              <div className="text-2xl mb-2">⚙️</div>
              <div className="text-sm sm:text-base font-bold text-white mb-1">Frontend &amp; Backend Integration</div>
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connecting interfaces cleanly to backend services (Java Spring Boot, ASP.NET Core, REST APIs).
              </div>
            </div>
            <div className="ocean-glass rounded-2xl p-5 border border-white/10">
              <div className="text-2xl mb-2">🐬</div>
              <div className="text-sm sm:text-base font-bold text-white mb-1">Database &amp; Systems Architecture</div>
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Managing relational schemas in MySQL, containerizing with Docker, and structuring robust workflows.
              </div>
            </div>
            <div className="ocean-glass rounded-2xl p-5 border border-white/10">
              <div className="text-2xl mb-2">🔍</div>
              <div className="text-sm sm:text-base font-bold text-white mb-1">Troubleshooting &amp; Bug Fixing</div>
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Diagnosing and eliminating state desync, form validation errors, and mobile layout overflow issues.
              </div>
            </div>
          </div>
        </div>

        {/* Primary Stack Pills */}
        <div className="mt-12 max-w-4xl mx-auto ocean-glass rounded-2xl p-4 sm:p-5 border border-white/10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-300 mr-2 font-medium">
            Core Arsenal:
          </span>
          {['React 19', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'Java', 'Spring Boot', 'MySQL', 'Docker', 'Git'].map((tech) => (
            <span
              key={tech}
              className="text-xs sm:text-sm font-mono px-3 py-1 rounded-full bg-white/5 text-slate-200 border border-white/10 hover:border-[#49e3a1]/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
