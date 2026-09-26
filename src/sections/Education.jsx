import { educationData } from '../data/portfolioData'
import sliitLogo from '../assets/sliit-logo.svg'
import richmondLogo from '../assets/richmond-logo.png'

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs mb-3">
            <span>04 // ACADEMIC RECORD</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Education &amp; Qualifications
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl font-sans">
            Formal academic trajectory, institutional qualifications, and educational milestones.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8">
          {educationData.map((edu, idx) => {
            const isRichmond = edu.id === 'richmond'
            const isSliit = edu.id === 'sliit'

            return (
              <div
                key={edu.id}
                className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Number & Period */}
                  <div className="lg:col-span-3 flex lg:flex-col justify-between items-baseline lg:items-start">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl font-bold text-cyan-400">
                        0{idx + 1}
                      </span>
                      <span className="font-mono text-xs text-slate-400 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 mt-2 hidden lg:block">
                      {edu.location}
                    </span>
                  </div>

                  {/* Right Column: Institution Info & Academics */}
                  <div className="lg:col-span-9 space-y-5">
                    
                    {/* Header Banner with Institutional Logo */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                      <div className="flex items-center gap-4">
                        
                        {/* Richmond College Crest Badge */}
                        {isRichmond && (
                          <div className="w-14 h-16 sm:w-16 sm:h-20 rounded-2xl bg-white p-2 shadow-lg border border-slate-700/60 flex items-center justify-center shrink-0">
                            <img
                              src={richmondLogo}
                              alt="Richmond College Crest"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}

                        {/* SLIIT Logo Badge */}
                        {isSliit && (
                          <div className="h-14 sm:h-16 px-3 py-2 rounded-2xl bg-white shadow-lg border border-slate-700/60 flex items-center justify-center shrink-0">
                            <img
                              src={sliitLogo}
                              alt="SLIIT Official Logo"
                              className="h-full w-auto max-w-[110px] sm:max-w-[130px] object-contain"
                            />
                          </div>
                        )}

                        <div>
                          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                            {edu.institution}
                          </h3>
                          <p className="text-cyan-400 font-mono text-sm font-medium mt-0.5">
                            {edu.degree}
                          </p>
                        </div>
                      </div>

                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 self-start sm:self-auto font-medium">
                        {edu.status}
                      </span>
                    </div>

                    {/* Overview description */}
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Highlights list */}
                    {edu.highlights && (
                      <div className="pt-1">
                        <ul className="space-y-2">
                          {edu.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                              <span className="text-cyan-400 mt-0.5">▹</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* O/L Subjects Chips (Without Results) */}
                    {edu.olSubjects && (
                      <div className="pt-3 border-t border-slate-800/80">
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
                          G.C.E. O/L Subjects Studied:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {edu.olSubjects.map((subject) => (
                            <span
                              key={subject}
                              className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
