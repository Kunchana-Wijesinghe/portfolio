import { educationData, leadershipData } from '../data/portfolioData'
import sliitLogo from '../assets/sliit-logo.svg'
import richmondLogo from '../assets/richmond-logo.png'

export default function Resume() {
  return (
    <section id="resume" className="py-24 sm:py-32 relative bg-section-main border-t border-white/10 overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">RESUME</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#49E3A1] tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-white/5 border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#49E3A1]" />
            <span>04 / Academic &amp; Leadership Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Resume &amp; Leadership
          </h2>
          <p className="text-sm sm:text-base text-[#D5E2E8] max-w-2xl mx-auto mt-4 leading-relaxed">
            Academic progression, university modules, and longstanding leadership record
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left Column: Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
              <div className="w-9 h-9 rounded-xl bg-white/5 text-[#49E3A1] flex items-center justify-center text-lg border border-white/15">
                <i className="bi bi-mortarboard" />
              </div>
              <h3 className="text-xl font-bold text-[#F8FAFC]">
                Education
              </h3>
            </div>

            {/* Education Timeline Track & Entries */}
            <div className="relative pl-7 sm:pl-9">
              {/* Thin Vertical Timeline Track Line */}
              <div
                className="absolute left-[7px] sm:left-[9px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#49E3A1] via-[#49E3A1]/50 to-[#49E3A1]/20 rounded-full pointer-events-none"
                aria-hidden="true"
              />

              <div className="space-y-6 sm:space-y-8">
                {educationData.map((edu) => (
                  <div key={edu.id} className="relative group">
                    {/* Small Circular Milestone Marker Aligned on Timeline */}
                    <div
                      className="absolute -left-[27px] sm:-left-[33px] top-8 sm:top-9 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#071D2D] border-2 border-[#49E3A1] shadow-[0_0_10px_rgba(73,227,161,0.7)] group-hover:scale-125 group-hover:shadow-[0_0_14px_rgba(73,227,161,0.95)] transition-all duration-300 z-10 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#49E3A1]" />
                    </div>

                    <div className="glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl group-hover:border-[#49E3A1]/40">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-[#F8FAFC] leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-[#49E3A1] mt-1">
                        {edu.institution} <span className="text-[#B8CCD5] font-normal">• {edu.location}</span>
                      </p>
                    </div>

                    <div className="bg-white/95 px-2.5 py-1 rounded-lg shrink-0 shadow-xs">
                      {edu.id === 'sliit' ? (
                        <img src={sliitLogo} alt="SLIIT" className="h-6 w-auto object-contain" />
                      ) : (
                        <img src={richmondLogo} alt="Richmond College" className="h-7 w-auto object-contain" />
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-white/5 text-[#49E3A1] border border-white/15">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm text-[#D5E2E8] mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Coursework / Highlights */}
                  {edu.courses && (
                    <div className="pt-3 border-t border-white/10">
                      <span className="text-xs font-bold text-[#49E3A1] uppercase tracking-wider block mb-2 font-mono">
                        Key Academic Modules:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[#F8FAFC]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.highlights && (
                    <ul className="list-disc list-inside text-xs sm:text-sm text-[#D5E2E8] space-y-1.5 pt-3 border-t border-white/10">
                      {edu.highlights.map((h, idx) => (
                        <li key={idx} className="leading-relaxed">{h}</li>
                      ))}
                    </ul>
                  )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Leadership & Extracurriculars */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
              <div className="w-9 h-9 rounded-xl bg-white/5 text-[#49E3A1] flex items-center justify-center text-lg border border-white/15">
                <i className="bi bi-award" />
              </div>
              <h3 className="text-xl font-bold text-[#F8FAFC]">
                Leadership &amp; Activities
              </h3>
            </div>

            {/* Leadership Timeline Track & Entries */}
            <div className="relative pl-7 sm:pl-9">
              {/* Thin Vertical Timeline Track Line */}
              <div
                className="absolute left-[7px] sm:left-[9px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#49E3A1] via-[#49E3A1]/50 to-[#49E3A1]/20 rounded-full pointer-events-none"
                aria-hidden="true"
              />

              <div className="space-y-6 sm:space-y-8">
                {leadershipData.map((item) => (
                  <div key={item.id} className="relative group">
                    {/* Small Circular Milestone Marker Aligned on Timeline */}
                    <div
                      className="absolute -left-[27px] sm:-left-[33px] top-8 sm:top-9 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#071D2D] border-2 border-[#49E3A1] shadow-[0_0_10px_rgba(73,227,161,0.7)] group-hover:scale-125 group-hover:shadow-[0_0_14px_rgba(73,227,161,0.95)] transition-all duration-300 z-10 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#49E3A1]" />
                    </div>

                    <div className="glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl group-hover:border-[#49E3A1]/40">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h4 className="text-lg font-bold text-[#F8FAFC] leading-snug">
                      {item.role}
                    </h4>
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-white/5 text-[#49E3A1] border border-white/15">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-[#49E3A1] mb-2">
                    {item.organization}
                  </p>

                  <p className="text-sm text-[#D5E2E8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
  )
}
