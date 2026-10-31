export default function Capabilities() {
  const capabilities = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: 'bi-window-fullscreen',
      description: 'Build responsive interfaces and connect user workflows to backend APIs.',
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: 'bi-server',
      description: 'Develop REST APIs and integrate application logic with databases.',
    },
    {
      id: 'quality',
      title: 'Quality & Test Automation',
      icon: 'bi-shield-check',
      description: 'Integrate test suites, code quality checks and coverage reporting into CI pipelines.',
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: 'bi-cloud-arrow-up',
      description: 'Work with containerised applications, deployment workflows and cloud environments.',
    },
    {
      id: 'databases',
      title: 'Databases & Distributed Systems',
      icon: 'bi-database',
      description: 'Work with relational data and explore reliable transactions across distributed services.',
    },
  ]

  return (
    <section id="capabilities" className="py-24 sm:py-32 relative bg-section-main border-t border-[#2A3B52] overflow-hidden text-left">
      {/* Background Watermark */}
      <div className="section-watermark">CAPABILITIES</div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#67D4ED] tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#162338]/60 border border-[#2A3B52]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#67D4ED]" />
            <span>02 / Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F5F9] tracking-tight">
            Technical Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto mt-4 leading-relaxed">
            Applied competencies and engineering domains developed across university coursework and verified projects
          </p>
        </div>

        {/* Vertically Stacked Continuous List */}
        <div className="divide-y divide-[#2A3B52] border-y border-[#2A3B52]">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline"
            >
              {/* Left on Desktop: Title & Icon */}
              <div className="md:col-span-5 flex items-center gap-3">
                <i className={`bi ${capability.icon} capability-icon text-base shrink-0`} />
                <h3 className="text-base sm:text-lg font-bold text-[#F1F5F9] tracking-tight">
                  {capability.title}
                </h3>
              </div>

              {/* Right on Desktop / Below on Mobile: Description */}
              <div className="md:col-span-7">
                <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
