import { technicalSkillsData } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-section-alt border-t border-white/10 overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">SKILLS</div>

      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#49E3A1] tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-white/5 border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#49E3A1]" />
            <span>03 / Technical Inventory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-[#D5E2E8] max-w-2xl mx-auto mt-4 leading-relaxed">
            Comprehensive technical inventory across full-stack engineering, cloud infrastructure, and systems
          </p>
        </div>

        {/* 11 Categorized Skill Cards: 4 + 4 + 3 on Large Desktop (final 3 centered), 2 per row on Tablet/Smaller Desktop, 1 on Mobile */}
        <div className="flex flex-wrap justify-center gap-6 items-stretch">
          {technicalSkillsData.map((group) => (
            <div
              key={group.category}
              className="w-full md:w-[calc(50%-0.75rem)] xl:w-[calc(25%-1.125rem)] glass-card rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between gap-2.5 mb-2.5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-white/5 text-[#49E3A1] flex items-center justify-center text-lg shrink-0 border border-white/15 group-hover:border-[#49E3A1]/40 transition-colors">
                      <i className={`bi ${group.icon}`} />
                    </div>
                    <h3 className="text-base font-bold text-[#F8FAFC] group-hover:text-[#49E3A1] transition-colors leading-snug">
                      {group.category}
                    </h3>
                  </div>

                  <span className="text-[11px] font-mono font-semibold text-[#B8CCD5] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/15 shrink-0">
                    {group.skills.length}
                  </span>
                </div>

                {/* Subtitle / Description */}
                <p className="text-xs text-[#D5E2E8] mb-4 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Compact Technology Badges */}
              <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/10 mt-auto">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-[#F8FAFC] hover:border-[#49E3A1]/50 hover:text-[#49E3A1] transition-colors leading-tight"
                  >
                    <i className={`bi ${skill.icon} text-[11px] text-[#49E3A1] shrink-0`} />
                    <span className="break-words">{skill.name}</span>
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
