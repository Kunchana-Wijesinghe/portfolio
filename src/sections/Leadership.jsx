import { leadershipData } from '../data/portfolioData'

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 sm:py-28 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-3">
            <span>05 // LEADERSHIP & IMPACT</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Leadership &amp; Extracurriculars
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl font-sans">
            Continuous leadership roles and institutional service cultivated through school boards, tech clubs, and cultural activities.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipData.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-semibold">
                    {item.duration}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-1">
                  {item.role}
                </h3>
                <p className="font-mono text-xs text-cyan-400 mb-3">
                  {item.organization}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Richmond College</span>
                <span className="text-indigo-400">Institutional Service</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
