import { skillsData } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-[#071d2d] border-t border-white/10 overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">SKILLS</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#49e3a1]/10 border border-[#49e3a1]/25 text-[#49e3a1] font-mono text-xs mb-3">
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-[#49e3a1] via-[#66d8ee] to-[#aa75ff] bg-clip-text text-transparent">Capabilities &amp; Stack</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Programming languages, full-stack frameworks, cloud DevOps tooling, and theoretical Computer Science competencies validated across university software engineering projects.
          </p>
        </div>

        {/* 4 Balanced Capability Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: Programming Languages */}
          <div className="ocean-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#66d8ee]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <span className="text-2xl">⚡</span>
                <span className="font-mono text-xs text-[#66d8ee] uppercase tracking-wider font-semibold">
                  01 / LANGUAGES
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Programming Languages
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Object-oriented, systems &amp; modern typed syntax
              </p>

              <div className="space-y-2.5">
                {skillsData.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#051521]/60 border border-white/10 hover:border-[#66d8ee]/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg shrink-0">{lang.icon}</span>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-200">
                          {lang.name}
                        </div>
                        {lang.note && (
                          <div className="text-[11px] font-mono text-slate-400">
                            {lang.note}
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#071d2d] text-[#66d8ee] border border-white/10 shrink-0 font-medium">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Primary Focus:</span>
              <span className="text-[#66d8ee]">Java OOP • C# • TypeScript • JavaScript</span>
            </div>
          </div>

          {/* Card 2: Frameworks & Full-Stack */}
          <div className="ocean-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#49e3a1]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <span className="text-2xl">🚀</span>
                <span className="font-mono text-xs text-[#49e3a1] uppercase tracking-wider font-semibold">
                  02 / FRAMEWORKS &amp; WEB
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Frameworks &amp; Full-Stack
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Client-side SPAs, REST APIs &amp; microservices
              </p>

              <div className="space-y-2.5">
                {skillsData.frameworks.map((fw) => (
                  <div
                    key={fw.name}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#051521]/60 border border-white/10 hover:border-[#49e3a1]/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg shrink-0">{fw.icon}</span>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-200">
                          {fw.name}
                        </div>
                        {fw.note && (
                          <div className="text-[11px] font-mono text-slate-400">
                            {fw.note}
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#071d2d] text-[#49e3a1] border border-white/10 shrink-0 font-medium">
                      {fw.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Ecosystem:</span>
              <span className="text-[#49e3a1]">React SPAs • Spring Boot REST • ASP.NET Core</span>
            </div>
          </div>

          {/* Card 3: Cloud, DevOps & Databases */}
          <div className="ocean-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#38bdf8]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <span className="text-2xl">☁️</span>
                <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-wider font-semibold">
                  03 / CLOUD &amp; DEVOPS
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Cloud, DevOps &amp; Data
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Containerization, cloud deployment &amp; message queues
              </p>

              <div className="space-y-2.5">
                {skillsData.cloudAndDevOps.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#051521]/60 border border-white/10 hover:border-[#38bdf8]/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg shrink-0">{tool.icon}</span>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-200">
                          {tool.name}
                        </div>
                        {tool.note && (
                          <div className="text-[11px] font-mono text-slate-400">
                            {tool.note}
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#071d2d] text-[#38bdf8] border border-white/10 shrink-0 font-medium">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Infrastructure:</span>
              <span className="text-[#38bdf8]">Docker • Azure Apps • Kafka • CI/CD</span>
            </div>
          </div>

          {/* Card 4: Core CS Architecture & Competencies */}
          <div className="ocean-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#aa75ff]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <span className="text-2xl">🏛️</span>
                <span className="font-mono text-xs text-[#aa75ff] uppercase tracking-wider font-semibold">
                  04 / ARCHITECTURE &amp; CS
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Core CS Competencies
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                System design, distributed concurrency &amp; SDLC
              </p>

              <div className="space-y-2.5">
                {skillsData.competencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-[#051521]/60 border border-white/10 flex items-start gap-3 hover:border-[#aa75ff]/30 transition-colors"
                  >
                    <span className="text-[#aa75ff] font-mono text-xs font-bold mt-0.5 shrink-0 px-2 py-0.5 rounded-md bg-[#aa75ff]/10 border border-[#aa75ff]/20">
                      0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                      {comp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Foundation:</span>
              <span className="text-[#aa75ff]">SLIIT CS Year 3 • Theoretical &amp; Applied</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
