import { useState } from 'react'
import { skillsData } from '../../data/portfolioData'

export default function FiverrSkills() {
  const [activeTab, setActiveTab] = useState('all')

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks & UI' },
    { id: 'devops', label: 'Databases & DevOps' },
  ]

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-[#071d2d] border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#66d8ee]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#49e3a1] tracking-wider mb-3">
            <span>02 / TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Technical Stack &amp; Applied Tools
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            These are the technologies, languages, and frameworks I actively use in coursework and web development projects, maintained in one shared data source.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-[#49e3a1] to-[#66d8ee] text-[#071d2d] font-bold shadow-md'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* Languages */}
          {(activeTab === 'all' || activeTab === 'languages') &&
            skillsData.languages.map((skill) => (
              <div
                key={skill.name}
                className="ocean-glass rounded-2xl p-5 border border-white/10 flex items-start justify-between gap-4 hover:border-[#66d8ee]/40 transition-all group"
              >
                <div className="flex items-start gap-3.5">
                  <span className="text-2xl p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#66d8ee] transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {skill.note}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#49e3a1] bg-[#49e3a1]/10 px-2 py-0.5 rounded border border-[#49e3a1]/20 shrink-0">
                  {skill.level}
                </span>
              </div>
            ))}

          {/* Frameworks & Web */}
          {(activeTab === 'all' || activeTab === 'frameworks') &&
            skillsData.frameworks.map((skill) => (
              <div
                key={skill.name}
                className="ocean-glass rounded-2xl p-5 border border-white/10 flex items-start justify-between gap-4 hover:border-[#49e3a1]/40 transition-all group"
              >
                <div className="flex items-start gap-3.5">
                  <span className="text-2xl p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#49e3a1] transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {skill.note}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#66d8ee] bg-[#66d8ee]/10 px-2 py-0.5 rounded border border-[#66d8ee]/20 shrink-0">
                  {skill.category}
                </span>
              </div>
            ))}

          {/* Cloud, Database & DevOps */}
          {(activeTab === 'all' || activeTab === 'devops') &&
            skillsData.cloudAndDevOps.map((skill) => (
              <div
                key={skill.name}
                className="ocean-glass rounded-2xl p-5 border border-white/10 flex items-start justify-between gap-4 hover:border-[#aa75ff]/40 transition-all group"
              >
                <div className="flex items-start gap-3.5">
                  <span className="text-2xl p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#aa75ff] transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {skill.note}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#aa75ff] bg-[#aa75ff]/10 px-2 py-0.5 rounded border border-[#aa75ff]/20 shrink-0">
                  {skill.category}
                </span>
              </div>
            ))}
        </div>

        {/* Academic Competencies Banner */}
        <div className="mt-12 ocean-glass rounded-2xl p-6 sm:p-8 border border-white/10">
          <div className="text-xs font-mono text-[#49e3a1] uppercase tracking-widest font-semibold mb-3">
            THEORETICAL &amp; ARCHITECTURAL COMPETENCIES
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {skillsData.competencies.map((comp, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <span className="text-[#49e3a1] font-bold text-xs mt-0.5">✓</span>
                <span>{comp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
