import { technicalCapabilities } from '../data/portfolioData'

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 sm:py-32 relative bg-section-main border-t border-white/10 overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">CAPABILITIES</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#49E3A1] tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-white/5 border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#49E3A1]" />
            <span>02 / Core Engineering Domains</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Technical Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[#D5E2E8] max-w-2xl mx-auto mt-4 leading-relaxed">
            Applied competencies and engineering domains developed across university coursework and verified projects
          </p>
        </div>

        {/* Balanced Capabilities Grid (3 in first row, 2 centered in second row on desktop) */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {technicalCapabilities.map((capability) => (
            <div
              key={capability.id}
              className="glass-card rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group text-center w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 text-[#49E3A1] flex items-center justify-center text-2xl mx-auto mb-5 border border-white/15 group-hover:scale-105 group-hover:border-[#49E3A1]/40 transition-all shadow-inner">
                  <i className={`bi ${capability.icon}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#49E3A1] transition-colors mb-3">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#D5E2E8] leading-relaxed mb-6">
                  {capability.description}
                </p>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap justify-center gap-1.5 pt-4 border-t border-white/10 mt-auto">
                {capability.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#D5E2E8] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
