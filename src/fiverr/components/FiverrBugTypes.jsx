import { bugCategories, fiverrGigInfo } from '../../data/fiverrData'

export default function FiverrBugTypes() {
  return (
    <section id="bug-types" className="py-20 sm:py-28 relative bg-[#071d2d]/60 border-t border-white/5">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#49e3a1]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#49e3a1] tracking-wider mb-3">
            <span>01 / BUG CATEGORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Common React Frontend Bugs I Solve
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Frontend bugs can cost hours of frustration and hurt user conversions. Here are typical issues I diagnose and cleanly repair in React and modern JavaScript codebases.
          </p>
        </div>

        {/* Bug Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bugCategories.map((cat) => (
            <div
              key={cat.id}
              className="ocean-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-[#66d8ee]/40 transition-all duration-300 group"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    DIAGNOSIS &amp; FIX
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#66d8ee] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {cat.description}
                </p>

                {/* Common Symptoms List */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#49e3a1] font-semibold">
                    Typical Symptoms:
                  </div>
                  <ul className="space-y-1.5">
                    {cat.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-[#49e3a1] font-bold text-xs mt-0.5">✓</span>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  Targeted Resolution
                </span>
                <a
                  href={fiverrGigInfo.gigUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-[#66d8ee] hover:text-[#49e3a1] flex items-center gap-1 group-hover:translate-x-1 transition-all"
                >
                  <span>Fix this on Fiverr</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Bug Note Card */}
        <div className="mt-10 ocean-glass rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-white font-bold text-base sm:text-lg">
              Have an issue not listed here?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              From third-party React package conflicts to complex CSS animations or route authentication guards, message me on Fiverr with reproduction steps for an instant assessment.
            </p>
          </div>
          <a
            href={fiverrGigInfo.gigUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Ask About Your Issue</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
