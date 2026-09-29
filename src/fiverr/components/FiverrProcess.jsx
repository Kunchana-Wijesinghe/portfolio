import { howIWorkSteps, fiverrGigInfo } from '../../data/fiverrData'

export default function FiverrProcess() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 relative bg-[#071d2d] border-t border-white/5 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#66d8ee]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#49e3a1] tracking-wider mb-3">
            <span>02 / HOW I WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            A Transparent 5-Step Workflow
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every fix follows a disciplined, predictable process so you know exactly what is happening at every milestone—with zero guesswork and zero surprises.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5">
          {howIWorkSteps.map((item, index) => (
            <div
              key={item.step}
              className="ocean-glass rounded-2xl p-5 border border-white/10 flex flex-col justify-between hover:border-[#49e3a1]/40 transition-all duration-300 relative group"
            >
              <div>
                {/* Step Number & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#49e3a1]">
                    {item.step}
                  </span>
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#49e3a1] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Progress Connector Indicator */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400">
                  Step {index + 1} of 5
                </span>
                <span className="text-xs text-[#49e3a1]">✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Confidence Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#49e3a1]/10 via-[#66d8ee]/10 to-transparent border border-[#49e3a1]/25 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[#49e3a1]/15 text-[#49e3a1] flex items-center justify-center text-xl shrink-0">
              💬
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Clear communication every step of the way
              </div>
              <div className="text-xs text-slate-300">
                You will receive updates throughout the process, followed by an explanation of the bug causes and exact code changes made.
              </div>
            </div>
          </div>

          <a
            href={fiverrGigInfo.gigUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-6 py-2.5 rounded-full bg-[#49e3a1] text-[#071d2d] font-bold text-xs hover:bg-[#66d8ee] transition-colors cursor-pointer"
          >
            Start on Fiverr ↗
          </a>
        </div>
      </div>
    </section>
  )
}
