import { educationData } from '../data/portfolioData'
import sliitLogo from '../assets/sliit-logo.svg'
import richmondLogo from '../assets/richmond-logo.png'

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 relative bg-[#071d2d] border-t border-white/10 overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">EDUCATION</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#aa75ff]/10 border border-[#aa75ff]/25 text-[#aa75ff] font-mono text-xs mb-3">
            <span>04 // ACADEMIC RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="bg-gradient-to-r from-[#aa75ff] via-[#66d8ee] to-[#49e3a1] bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl">
            Formal institutional qualifications, foundational schooling, and academic fields covered up to Year 3 Semester 1.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {educationData.map((edu, idx) => {
            const isRichmond = edu.id === 'richmond'
            const isSliit = edu.id === 'sliit'

            return (
              <div
                key={edu.id}
                className="ocean-glass rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#66d8ee]/40 transition-all"
              >
                {/* Header Row: Logo, Title, Period & Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-4">
                    {/* Logo Box */}
                    {isRichmond && (
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0 shadow-md">
                        <img
                          src={richmondLogo}
                          alt="Richmond College Crest"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}

                    {isSliit && (
                      <div className="w-16 h-14 sm:w-20 sm:h-16 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0 shadow-md">
                        <img
                          src={sliitLogo}
                          alt="SLIIT Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#66d8ee] font-bold">
                          0{idx + 1} //
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {edu.institution}
                        </h3>
                      </div>
                      <p className="text-sm font-mono text-[#49e3a1] font-medium mt-0.5">
                        {edu.degree}
                      </p>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">
                        {edu.location}
                      </p>
                    </div>
                  </div>

                  {/* Period & Status */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0">
                    <span className="px-3 py-1 rounded-full bg-[#051521]/80 border border-white/10 text-xs font-mono text-slate-200 font-semibold">
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-mono bg-[#66d8ee]/10 text-[#66d8ee] border border-[#66d8ee]/25">
                      {edu.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-5">
                  {edu.description}
                </p>

                {/* Richmond Academic Highlights */}
                {edu.highlights && (
                  <div className="mb-5 space-y-2">
                    <span className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold block">
                      Institutional Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <span className="text-[#49e3a1] font-bold mt-0.5">▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* SLIIT Summarized Domains (Up to Year 3, Semester 1) */}
                {edu.coveredDomains && (
                  <div className="pt-5 border-t border-white/10 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#66d8ee] font-semibold block">
                        Core Academic Fields Covered (Up to Year 3, Semester 1):
                      </span>
                      <span className="text-[11px] font-mono text-[#49e3a1] bg-[#49e3a1]/10 px-2.5 py-0.5 rounded-full border border-[#49e3a1]/25 self-start sm:self-auto font-medium">
                        Current Stage: Year 3, Semester 1
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {edu.coveredDomains.map((domain, dIdx) => (
                        <div
                          key={dIdx}
                          className="p-3.5 rounded-2xl bg-[#051521]/60 border border-white/10 hover:border-[#66d8ee]/30 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="text-base">{domain.icon}</span>
                              <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                                {domain.field}
                              </h4>
                            </div>
                            <p className="text-[11px] font-mono text-slate-300 leading-relaxed">
                              {domain.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* G.C.E. O/L Subjects (Without Results) */}
                {edu.olSubjects && (
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3 font-semibold">
                      G.C.E. Ordinary Level (O/L) Subjects Studied:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {edu.olSubjects.map((subject) => (
                        <span
                          key={subject}
                          className="px-3 py-1 rounded-full bg-[#051521]/70 border border-white/10 text-xs font-mono text-slate-200 hover:border-[#66d8ee]/40 hover:text-[#66d8ee] transition-colors"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
