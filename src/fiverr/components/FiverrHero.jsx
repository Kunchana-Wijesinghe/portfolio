import { fiverrGigInfo } from '../../data/fiverrData'

export default function FiverrHero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#49e3a1]/15 via-[#66d8ee]/12 to-[#aa75ff]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-orb" />
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
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/12 backdrop-blur-md mb-8 hover:border-[#49e3a1]/40 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#49e3a1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#49e3a1]"></span>
            </span>
            <span className="text-xs font-mono font-medium tracking-wide text-slate-200">
              AVAILABLE ON FIVERR • REACT FRONTEND SPECIALIST
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Fixing React Frontend Bugs with{' '}
            <span className="bg-gradient-to-r from-[#49e3a1] via-[#66d8ee] to-[#aa75ff] bg-clip-text text-transparent">
              Speed & Precision.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-9 max-w-2xl mx-auto">
            Encountering broken components, state synchronization errors, form glitches, or responsive layout issues? I diagnose and resolve React, TypeScript, and modern JavaScript frontend bugs cleanly and without risking regressions.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
            <a
              href={fiverrGigInfo.gigUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#49e3a1] via-[#66d8ee] to-[#49e3a1] bg-[length:200%_auto] hover:bg-right text-[#071d2d] font-bold text-sm sm:text-base shadow-xl shadow-[#49e3a1]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>View my Fiverr Gig</span>
              <span className="text-base font-bold">↗</span>
            </a>

            <a
              href="#bug-types"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm sm:text-base border border-white/15 transition-all cursor-pointer"
            >
              <span>Explore Common Bug Types</span>
              <span className="text-xs">↓</span>
            </a>
          </div>

          {/* Trust Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="ocean-glass rounded-xl p-3 sm:p-4 border border-white/10">
              <div className="text-lg mb-1">⚡</div>
              <div className="text-xs font-bold text-white mb-0.5">Surgical Fixes</div>
              <div className="text-[11px] text-slate-400 leading-tight">No unnecessary refactoring or style drift</div>
            </div>
            <div className="ocean-glass rounded-xl p-3 sm:p-4 border border-white/10">
              <div className="text-lg mb-1">🛡️</div>
              <div className="text-xs font-bold text-white mb-0.5">Escrow Protected</div>
              <div className="text-[11px] text-slate-400 leading-tight">Secure ordering & delivery via Fiverr</div>
            </div>
            <div className="ocean-glass rounded-xl p-3 sm:p-4 border border-white/10">
              <div className="text-lg mb-1">📱</div>
              <div className="text-xs font-bold text-white mb-0.5">Cross-Device Tested</div>
              <div className="text-[11px] text-slate-400 leading-tight">Tested across mobile, tablet, and desktop</div>
            </div>
            <div className="ocean-glass rounded-xl p-3 sm:p-4 border border-white/10">
              <div className="text-lg mb-1">💡</div>
              <div className="text-xs font-bold text-white mb-0.5">Clear Explanations</div>
              <div className="text-[11px] text-slate-400 leading-tight">Understand what caused the bug and why</div>
            </div>
          </div>
        </div>

        {/* Code/Terminal Inspection Card */}
        <div className="mt-14 max-w-4xl mx-auto ocean-glass rounded-2xl border border-white/15 overflow-hidden shadow-2xl">
          {/* Mock Window Bar */}
          <div className="bg-[#051521] px-4 py-3 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">
                src/components/UserProfile.jsx — Bug Diagnosis Diff
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#49e3a1] bg-[#49e3a1]/10 px-2 py-0.5 rounded border border-[#49e3a1]/20">
              RESOLVED
            </span>
          </div>

          {/* Code Diff Display */}
          <div className="p-4 sm:p-6 bg-[#071d2d]/90 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed">
            <div className="text-slate-400 mb-2 text-[11px]">
              // Issue: Stale closure and uncontrolled re-render loop inside useEffect
            </div>
            <div className="bg-red-500/10 border-l-2 border-red-400 text-red-200 px-3 py-1.5 my-1 rounded-r">
              <span className="text-red-400 font-bold select-none mr-2">-</span>
              useEffect(() =&gt; &#123; fetchUser(userId); &#125;) // Missing dependency array triggers infinite API loop
            </div>
            <div className="bg-green-500/10 border-l-2 border-[#49e3a1] text-emerald-200 px-3 py-1.5 my-1 rounded-r">
              <span className="text-[#49e3a1] font-bold select-none mr-2">+</span>
              useEffect(() =&gt; &#123;
            </div>
            <div className="bg-green-500/10 border-l-2 border-[#49e3a1] text-emerald-200 px-3 py-1.5 my-1 rounded-r pl-6">
              let isMounted = true;
            </div>
            <div className="bg-green-500/10 border-l-2 border-[#49e3a1] text-emerald-200 px-3 py-1.5 my-1 rounded-r pl-6">
              fetchUser(userId).then(data =&gt; &#123; if (isMounted) setUser(data); &#125;);
            </div>
            <div className="bg-green-500/10 border-l-2 border-[#49e3a1] text-emerald-200 px-3 py-1.5 my-1 rounded-r pl-6">
              return () =&gt; &#123; isMounted = false; &#125;;
            </div>
            <div className="bg-green-500/10 border-l-2 border-[#49e3a1] text-emerald-200 px-3 py-1.5 my-1 rounded-r">
              &#125;, [userId]); // Guarded cleanup prevents memory leak and race condition
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
