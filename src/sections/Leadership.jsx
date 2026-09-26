import { leadershipData } from '../data/portfolioData'
import richmondLogo from '../assets/richmond-logo.png'

export default function Leadership() {
  const featuredLeader = leadershipData[0] // Student Prefect (7 Years)
  const otherRoles = leadershipData.slice(1) // Remaining 4 roles

  return (
    <section id="leadership" className="py-20 sm:py-28 relative bg-[#071d2d] border-t border-white/10 overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">LEADERSHIP</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#49e3a1]/10 border border-[#49e3a1]/25 text-[#49e3a1] font-mono text-xs mb-3">
            <span>05 // LEADERSHIP &amp; IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Leadership &amp; <span className="bg-gradient-to-r from-[#49e3a1] via-[#66d8ee] to-[#aa75ff] bg-clip-text text-transparent">Extracurriculars</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl">
            Institutional governance, student board leadership, tech mentorship, and community service cultivated at Richmond College.
          </p>
        </div>

        {/* Featured Top Card: Student Prefect (7 Years) */}
        {featuredLeader && (
          <div className="ocean-glass rounded-3xl p-6 sm:p-8 mb-6 relative overflow-hidden group hover:border-[#66d8ee]/40 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shrink-0">
                  {featuredLeader.icon}
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#66d8ee] mb-1">
                    <span>★ FEATURED LEADERSHIP MILESTONE</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {featuredLeader.role}
                  </h3>
                  <p className="font-mono text-xs text-[#49e3a1] font-semibold">
                    {featuredLeader.organization}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start md:self-auto">
                <span className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-[#aa75ff]/20 text-[#c49eff] border border-[#aa75ff]/40 font-bold">
                  {featuredLeader.duration}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              {featuredLeader.description}
            </p>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <img src={richmondLogo} alt="Richmond Crest" className="w-4 h-4 object-contain inline-block opacity-80" />
                Richmond College, Galle
              </span>
              <span className="text-[#66d8ee] font-medium">Student Governance &amp; Administration</span>
            </div>
          </div>
        )}

        {/* 2x2 Balanced Grid for the Remaining 4 Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherRoles.map((item) => (
            <div
              key={item.id}
              className="ocean-glass rounded-3xl p-6 flex flex-col justify-between group hover:border-[#66d8ee]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#051521]/80 text-[#66d8ee] border border-white/10 font-medium">
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#66d8ee] transition-colors">
                  {item.role}
                </h3>
                <p className="font-mono text-xs text-[#49e3a1] font-medium mb-3">
                  {item.organization}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <img src={richmondLogo} alt="Richmond Crest" className="w-3.5 h-3.5 object-contain inline-block opacity-75" />
                  Richmond College
                </span>
                <span className="text-[#66d8ee]/80 font-medium">Extracurricular Activity</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
