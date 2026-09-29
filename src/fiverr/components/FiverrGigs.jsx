import { fiverrActiveGigs, fiverrProfileInfo, freelanceCapabilities } from '../../data/fiverrData'

export default function FiverrGigs() {
  return (
    <section id="gigs" className="py-20 sm:py-28 relative bg-[#071d2d] border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#49e3a1]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#49e3a1] tracking-wider mb-3">
            <span>04 / SERVICES &amp; GIGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Active Fiverr Offerings &amp; Custom Work
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Order directly through my active Fiverr Gigs or reach out to discuss custom development, architecture, and feature requests.
          </p>
        </div>

        {/* Current Active Gigs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {fiverrActiveGigs.map((gig) => (
            <div
              key={gig.id}
              className="ocean-glass rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-[#49e3a1]/50 transition-all duration-300 group"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {gig.icon}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#49e3a1] bg-[#49e3a1]/10 px-3 py-1 rounded-full border border-[#49e3a1]/20">
                    {gig.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#49e3a1] transition-colors">
                  {gig.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {gig.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6 pt-3 border-t border-white/10">
                  {gig.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-[#49e3a1] font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {gig.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Escrow Protected on Fiverr
                </span>
                <a
                  href={gig.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#49e3a1] text-[#071d2d] font-bold text-xs hover:bg-[#66d8ee] transition-all cursor-pointer"
                >
                  <span>View Gig on Fiverr</span>
                  <span className="text-sm font-bold">↗</span>
                </a>
              </div>
            </div>
          ))}

          {/* Custom Project Card */}
          <div className="ocean-glass rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-[#66d8ee]/50 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  🎯
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#66d8ee] bg-[#66d8ee]/10 px-3 py-1 rounded-full border border-[#66d8ee]/20">
                  Custom Orders
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#66d8ee] transition-colors">
                Custom Web Development &amp; Architecture
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Have a project that requires tailored full-stack development, custom API endpoints, UI feature additions, or specific architectural integration?
              </p>

              <div className="space-y-2 mb-6 pt-3 border-t border-white/10">
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="text-[#66d8ee] font-bold">✓</span>
                  <span>Custom scope based on your exact repository or mockups</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="text-[#66d8ee] font-bold">✓</span>
                  <span>Transparent timeline estimates &amp; milestone breakdown</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="text-[#66d8ee] font-bold">✓</span>
                  <span>Custom Fiverr order created specifically for your requirements</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Full-Stack', 'Custom SPAs', 'REST APIs', 'Spring Boot', 'Tailwind', 'DevOps'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Tailored Quote &amp; Delivery
              </span>
              <a
                href={fiverrProfileInfo.fiverrUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all cursor-pointer"
              >
                <span>Request Custom Offer</span>
                <span className="text-sm font-bold">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* General Capabilities Grid (What I can build/help with) */}
        <div>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold mb-6">
            CORE FREELANCE CAPABILITIES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {freelanceCapabilities.map((cap) => (
              <div
                key={cap.id}
                className="ocean-glass rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl mb-3 block">{cap.icon}</span>
                  <h4 className="text-sm font-bold text-white mb-1.5">{cap.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {cap.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 pt-3 border-t border-white/5">
                  {cap.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
