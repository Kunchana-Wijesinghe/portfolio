import { personalInfo, spokenLanguages } from '../data/portfolioData'

export default function About() {
  const cvUrl = `${import.meta.env.BASE_URL}Kunchana_Wijesinghe_CV.pdf`

  const coreFocusAreas = [
    { title: 'Full-Stack Engineering', desc: 'React, TypeScript, Java Spring Boot & ASP.NET Core REST APIs' },
    { title: 'Cloud & DevOps', desc: 'AWS & Azure cloud infrastructure, Docker containerization & CI/CD' },
    { title: 'Quality & Test Automation', desc: 'GitHub Actions pipelines, baseline linting & coverage gates' },
    { title: 'Distributed Systems', desc: 'Atomic transactions, concurrency control & Kafka event pipelines' },
  ]

  return (
    <section id="about" className="py-24 relative bg-section-alt border-t border-white/10 overflow-hidden text-left">
      {/* Background Watermark */}
      <div className="section-watermark">ABOUT</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card p-6 sm:p-10 lg:p-12 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Personal Overview & Core Engineering Domains */}
            <div className="lg:col-span-5 space-y-6">
              {/* Candidate Overview Card */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3.5">
                <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#07503F] text-[#49E3A1] flex items-center justify-center text-sm border border-[#49E3A1]/30">
                    <i className="bi bi-person-vcard" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#F8FAFC] uppercase tracking-wider">
                      Candidate Overview
                    </h4>
                    <p className="text-[11px] font-mono text-[#B8CCD5]">SLIIT • Computer Science</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="text-[#B8CCD5] font-medium">Name:</span>
                    <span className="font-semibold text-[#F8FAFC]">{personalInfo.name}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="text-[#B8CCD5] font-medium">Profile:</span>
                    <span className="font-semibold text-[#F8FAFC] text-right">{personalInfo.subtitle}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="text-[#B8CCD5] font-medium">Institution:</span>
                    <span className="font-semibold text-[#49E3A1]">SLIIT (Y3S1)</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="text-[#B8CCD5] font-medium">Location:</span>
                    <span className="font-semibold text-[#F8FAFC]">{personalInfo.location}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1 gap-1">
                    <span className="text-[#B8CCD5] font-medium">Email:</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-[#49E3A1] hover:underline break-all font-mono text-[11px]"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Core Focus Areas */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono font-bold text-[#49E3A1] uppercase tracking-wider">
                    Core Focus Areas
                  </h4>
                  <a
                    href="#skills"
                    className="text-xs font-semibold text-[#49E3A1] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Full Skills</span>
                    <i className="bi bi-arrow-right text-[10px]" />
                  </a>
                </div>

                <div className="space-y-2">
                  {coreFocusAreas.map((area) => (
                    <div
                      key={area.title}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs hover:border-[#49E3A1]/30 transition-colors"
                    >
                      <span className="font-semibold text-[#F8FAFC] block">{area.title}</span>
                      <span className="text-[#D5E2E8] mt-0.5 block">{area.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Bio */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="relative mb-6">
                  <span className="text-xs font-mono text-[#49E3A1] uppercase tracking-wider block mb-1">
                    01 // BIOGRAPHY
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight pb-3 border-b border-white/10">
                    About me
                  </h3>
                  <div className="absolute -bottom-[1px] left-0 w-16 h-[2px] bg-[#49E3A1]" />
                </div>

                <div className="space-y-4 text-[#D5E2E8] text-sm sm:text-base leading-relaxed font-sans">
                  <p>
                    I am a dedicated Computer Science undergraduate currently in Year 3, Semester 1 at the{' '}
                    <strong className="text-[#F8FAFC] font-semibold">
                      Sri Lanka Institute of Information Technology (SLIIT)
                    </strong>
                    . My academic and practical background spans advanced software engineering, distributed systems, database management, and intelligent systems.
                  </p>
                  <p>
                    Throughout my academic journey, I have led and contributed to complex technical projects—from designing multi-stage automated GitHub Actions CI pipelines with baseline code quality gates and coverage reporting, to developing full-stack applications with React, Java Spring Boot, and ASP.NET Core, and engineering physics interactions in Unity 6.
                  </p>
                  <p>
                    I take pride in writing structured, maintainable code, verifying edge cases, and collaborating constructively in team environments. With a 7-year background on the Student Prefect Board and 5 years on the IT Club executive board at Richmond College, Galle, I bring proven leadership, integrity, and proactive communication to engineering teams.
                  </p>
                </div>

                {/* Spoken Languages */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <h4 className="text-xs font-mono font-semibold text-[#49E3A1] uppercase tracking-wider mb-2.5">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {spokenLanguages.map((lang) => (
                      <div
                        key={lang.language}
                        className="text-xs px-3.5 py-1.5 rounded-full bg-white/5 text-[#F8FAFC] border border-white/10"
                      >
                        <span className="font-semibold text-[#49E3A1]">{lang.language}: </span>
                        <span className="text-[#D5E2E8]">{lang.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass-action inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <i className="bi bi-download" />
                  <span>Download Curriculum Vitae</span>
                </a>

                <a
                  href="#skills"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-[#F8FAFC] hover:border-[#49E3A1]/50 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                >
                  <span>Explore Technical Skills</span>
                  <i className="bi bi-arrow-right text-xs" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
