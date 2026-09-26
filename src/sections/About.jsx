import { skillsData } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#071d2d] border-t border-white/10 overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">ABOUT</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#66d8ee]/10 border border-[#66d8ee]/25 text-[#66d8ee] font-mono text-xs mb-3">
            <span>01 // PROFILE &amp; FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Software with <span className="bg-gradient-to-r from-[#66d8ee] via-[#49e3a1] to-[#aa75ff] bg-clip-text text-transparent">Purpose &amp; Precision</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
            A comprehensive overview of my academic foundation at SLIIT, software engineering mindset, and communication capabilities.
          </p>
        </div>

        {/* Balanced Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Professional Bio (Large Card) */}
          <div className="lg:col-span-7 ocean-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#66d8ee] font-semibold">
                  Executive Profile
                </span>
                <a
                  href={`${import.meta.env.BASE_URL}Kunchana_Wijesinghe_CV.pdf`}
                  download="Kunchana_Wijesinghe_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#49e3a1] hover:text-[#66d8ee] transition-colors cursor-pointer"
                  title="Download Official CV (PDF)"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download CV</span>
                </a>
              </div>

              <div className="space-y-3.5 text-slate-300 text-sm leading-relaxed">
                <p>
                  I am a driven 3rd Year Computer Science undergraduate (Year 3, Semester 1) at{' '}
                  <strong className="text-white font-semibold">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </strong>
                  , with comprehensive theoretical and applied foundations spanning Advanced Software Engineering, Parallel Computing, Intelligent Systems, Distributed Architectures, and Algorithm Design.
                </p>
                <p>
                  Specializing in <span className="text-[#66d8ee] font-medium">Java architecture</span>,
                  object-oriented paradigms, and structural database development. Having completed 13 years of schooling at{' '}
                  <strong className="text-white font-semibold">Richmond College, Galle</strong>, I have cultivated
                  deep discipline, collaborative communication, and executive student governance.
                </p>
                <p>
                  My engineering journey focuses on building reliable, clean software systems—ranging from full-stack
                  academic applications to consensus-driven distributed payment networks and normalized relational databases.
                </p>
              </div>

              {/* Education affiliation tag row */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                <div className="p-3 rounded-2xl bg-[#051521]/60 border border-white/10">
                  <div className="text-[#66d8ee] font-semibold">SLIIT 3rd Year Undergrad</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">BSc (Hons) in Computer Science • Y3S1</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#051521]/60 border border-white/10">
                  <div className="text-[#49e3a1] font-semibold">Richmond College Alumnus</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Primary &amp; Secondary (2010 — 2023)</div>
                </div>
              </div>
            </div>

            {/* Engineering Pillars at bottom */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-[#051521]/70 text-xs font-mono text-slate-200 border border-white/10">
                ⚡ Object-Oriented Architecture
              </span>
              <span className="px-3 py-1 rounded-full bg-[#051521]/70 text-xs font-mono text-slate-200 border border-white/10">
                🌐 Distributed Consensus
              </span>
              <span className="px-3 py-1 rounded-full bg-[#051521]/70 text-xs font-mono text-slate-200 border border-white/10">
                💾 Relational DB Normalization
              </span>
              <span className="px-3 py-1 rounded-full bg-[#051521]/70 text-xs font-mono text-slate-200 border border-white/10">
                🔄 Clean SDLC &amp; Git Workflows
              </span>
            </div>
          </div>

          {/* Right Column Bento Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Key Soft Attributes Card */}
            <div className="ocean-glass rounded-3xl p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  Key Attributes &amp; Mindset
                </h3>
                <p className="text-xs text-slate-400 font-mono mb-4">
                  Core execution competencies &amp; teamwork traits
                </p>

                <div className="space-y-2">
                  {skillsData.softSkills.map((attr, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-[#051521]/50 border border-white/10 hover:border-[#66d8ee]/30 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#49e3a1] shrink-0"></span>
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">
                        {attr}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="ocean-glass rounded-3xl p-6">
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Communication &amp; Languages
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-3.5">
                Linguistic versatility for agile team collaboration
              </p>

              <div className="grid grid-cols-3 gap-2">
                {skillsData.spokenLanguages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 rounded-2xl bg-[#051521]/60 border border-white/10 text-center flex flex-col items-center justify-center min-h-[76px]"
                  >
                    <div className="text-sm font-bold text-white">{lang.language}</div>
                    <div className="text-[11px] text-[#66d8ee] font-mono mt-1 leading-tight text-center">
                      {lang.proficiency}
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
