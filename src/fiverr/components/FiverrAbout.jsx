import { fiverrProfileInfo } from '../../data/fiverrData'

export default function FiverrAbout() {
  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#071d2d]/60 border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#49e3a1]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Story & Background */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#49e3a1] tracking-wider">
              <span>01 / ABOUT ME</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Rigorous Academic Foundation, Practical Engineering Mindset.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a 3rd-year <strong className="text-white">Computer Science undergraduate at SLIIT</strong>, currently in Year 3 Semester 1. My academic curriculum encompasses Advanced Software Engineering, Parallel &amp; Distributed Computing, Algorithms, Intelligent Systems, and Database Management Systems.
              </p>
              <p>
                Beyond academics, I work directly on modern web engineering—architecting interactive React Single Page Applications, implementing Spring Boot and ASP.NET Core REST APIs, and automating containerized deployments with Docker.
              </p>
              <p>
                When working with freelance clients on Fiverr, my goal is straightforward: deliver <strong className="text-white">clean, maintainable code</strong> that solves the real problem without bloated dependencies or unexpected surprises.
              </p>
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="ocean-glass rounded-xl p-3 border border-white/10">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Institution</span>
                <span className="text-xs font-bold text-white">SLIIT (Galle / Malabe)</span>
              </div>
              <div className="ocean-glass rounded-xl p-3 border border-white/10">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Degree Track</span>
                <span className="text-xs font-bold text-white">BSc (Hons) Computer Science</span>
              </div>
              <div className="ocean-glass rounded-xl p-3 border border-white/10">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Freelance Platform</span>
                <span className="text-xs font-bold text-[#49e3a1]">Fiverr Escrow Protected</span>
              </div>
            </div>
          </div>

          {/* Right Column: Freelance Principles Card */}
          <div className="lg:col-span-5">
            <div className="ocean-glass rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="text-xs font-mono text-[#66d8ee] uppercase tracking-widest font-semibold mb-4">
                HOW I APPROACH CLIENT WORK
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#49e3a1]/15 text-[#49e3a1] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Clear Scope Before Code</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      We agree on deliverables, acceptance criteria, and timelines before placing or accepting any order on Fiverr.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#66d8ee]/15 text-[#66d8ee] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Targeted &amp; Non-Destructive</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Whether developing a new module or resolving an existing bug, changes are surgical so existing systems remain stable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#aa75ff]/15 text-[#aa75ff] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Thorough Cross-Device Testing</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Responsive viewports, mobile screens, console warnings, and network error handling are validated prior to delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#49e3a1]/15 text-[#49e3a1] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Transparent Handover</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      You receive full source code, setup instructions, and an explanation of the implementation so you have complete ownership.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 text-center">
                <a
                  href={fiverrProfileInfo.fiverrUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#49e3a1] hover:text-[#66d8ee] transition-colors"
                >
                  <span>Discuss your requirements on Fiverr</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
