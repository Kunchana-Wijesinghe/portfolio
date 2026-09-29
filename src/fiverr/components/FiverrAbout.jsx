export default function FiverrAbout() {

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#071d2d]/60 border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#49e3a1]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Academic Background & Foundation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#49e3a1] tracking-wider font-semibold">
              <span>01 / ABOUT ME</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Academic Computer Science Training, Real Software Delivery.
            </h2>

            <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
              <p>
                I am a 3rd-year <strong className="text-white">Computer Science undergraduate at SLIIT</strong> (Sri Lanka Institute of Information Technology), currently in Year 3 Semester 1. My coursework provides deep foundations across Advanced Software Engineering, Parallel &amp; Distributed Systems, Algorithms, and Relational Database Systems.
              </p>
              <p>
                In my project work, I apply these principles directly to web development—building responsive Single Page Applications in React, implementing RESTful APIs in Java Spring Boot and ASP.NET Core, and managing containerized multi-service workflows with Docker.
              </p>
              <p>
                When working with clients on Fiverr, I take pride in disciplined engineering: writing readable, modular code, keeping dependencies clean, and ensuring zero regressions in existing codebases.
              </p>
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="ocean-glass rounded-xl p-4 border border-white/10">
                <span className="text-xs font-mono text-slate-400 block uppercase font-medium mb-1">Institution</span>
                <span className="text-sm font-bold text-white">SLIIT (Computer Science)</span>
              </div>
              <div className="ocean-glass rounded-xl p-4 border border-white/10">
                <span className="text-xs font-mono text-slate-400 block uppercase font-medium mb-1">Academic Status</span>
                <span className="text-sm font-bold text-white">Year 3, Semester 1 (Y3S1)</span>
              </div>
              <div className="ocean-glass rounded-xl p-4 border border-white/10">
                <span className="text-xs font-mono text-slate-400 block uppercase font-medium mb-1">Client Delivery</span>
                <span className="text-sm font-bold text-[#49e3a1]">Fiverr Escrow Protected</span>
              </div>
            </div>
          </div>

          {/* Right Column: How I Approach Client Work */}
          <div className="lg:col-span-5">
            <div className="ocean-glass rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="text-xs sm:text-sm font-mono text-[#66d8ee] uppercase tracking-widest font-semibold mb-5">
                HOW I APPROACH CLIENT WORK
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-[#49e3a1]/20 text-[#49e3a1] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-[#49e3a1]/30">
                    1
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">Clear Scope Before Code</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      We agree on deliverables, expected functionality, and turnaround time before placing or accepting any order on Fiverr.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-[#66d8ee]/20 text-[#66d8ee] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-[#66d8ee]/30">
                    2
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">Targeted &amp; Non-Destructive</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Changes are surgical—whether developing a new component or fixing a bug, existing logic and styling remain intact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-[#aa75ff]/20 text-[#aa75ff] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-[#aa75ff]/30">
                    3
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">Cross-Device Verification</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Every deliverable is verified across mobile, tablet, and desktop viewports with clean console logs and error boundaries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-[#49e3a1]/20 text-[#49e3a1] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-[#49e3a1]/30">
                    4
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">Transparent Handover</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      You receive full source code, setup notes, and an explanation of the implementation so you have full control.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 text-center">
                <a
                  href="#gigs"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#49e3a1] hover:text-[#66d8ee] transition-colors"
                >
                  <span>Explore Active Gig &amp; Custom Inquiries</span>
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
