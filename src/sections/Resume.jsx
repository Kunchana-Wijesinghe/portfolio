import { useState } from 'react'
import sliitLogo from '../assets/sliit-logo.svg'
import richmondLogo from '../assets/richmond-logo.png'

export default function Resume() {
  const [isCourseworkOpen, setIsCourseworkOpen] = useState(false)

  const courseworkGroups = [
    {
      title: 'Software & Programming',
      modules: [
        'Programming Methodology',
        'Programming Paradigms',
        'Software Engineering',
        'Advanced Software Engineering',
        'Object-Oriented Analysis and Design',
        'Case Study Project',
      ],
    },
    {
      title: 'Algorithms & Computing',
      modules: [
        'Computational Thinking',
        'Data Structures and Algorithms',
        'Design and Analysis of Algorithms',
        'Distributed Systems',
        'Parallel Computing',
      ],
    },
    {
      title: 'Systems & Data',
      modules: [
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Computer Organisation and Architecture',
        'Digital Electronics',
      ],
    },
    {
      title: 'Intelligent & Interactive Systems',
      modules: [
        'Intelligent Systems',
        'Graphics and Visualization',
        'Human Computer Interaction',
      ],
    },
    {
      title: 'Mathematics',
      modules: [
        'Discrete Mathematics',
        'Engineering Mathematics I',
        'Engineering Mathematics II',
        'Probability and Statistics',
      ],
    },
    {
      title: 'Professional Development',
      modules: [
        'Professional Skills',
        'English for Academic Purposes',
      ],
    },
  ]

  const leadershipEntries = [
    {
      id: 'prefect',
      title: 'Richmond College Prefect Board',
      organization: 'Richmond College, Galle',
      duration: '7 Years',
      description: 'Supported school discipline, student assemblies and event coordination.',
    },
    {
      id: 'it-club',
      title: 'IT Club Executive Board Member',
      organization: 'Richmond College, Galle',
      duration: '5 Years',
      description: 'Supported technical exhibitions, IT workshops and student learning activities.',
    },
    {
      id: 'band',
      title: 'Senior Western Brass Band',
      organization: 'Richmond College, Galle',
      duration: '3 Years',
      description: 'Represented the college at school ceremonies and external events.',
    },
    {
      id: 'inventors',
      title: 'New Inventors Club Member',
      organization: 'Richmond College, Galle',
      duration: '2 Years',
      description: 'Collaborated on projects and exhibits for school exhibitions.',
    },
    {
      id: 'scout',
      title: 'College Scout Troop',
      organization: 'Richmond College, Galle',
      duration: '1 Year',
      description: 'Participated in scouting, teamwork and outdoor activities.',
    },
  ]

  return (
    <section id="resume" className="py-24 sm:py-32 relative bg-section-main border-t border-[#2A3B52] overflow-hidden text-left">
      {/* Background Watermark */}
      <div className="section-watermark">RESUME</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#67D4ED] tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#162338]/60 border border-[#2A3B52]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#67D4ED]" />
            <span>04 / Education &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F5F9] tracking-tight">
            Resume &amp; Leadership
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto mt-4 leading-relaxed">
            Education, academic coursework and leadership activities.
          </p>
        </div>

        {/* Band 1: Education (Top) */}
        <div>
          <div className="flex items-center gap-2.5 pb-3 border-b border-[#2A3B52] mb-8">
            <div className="w-9 h-9 rounded-xl bg-[#0B1220] text-[#67D4ED] flex items-center justify-center text-lg border border-[#2A3B52]">
              <i className="bi bi-mortarboard resume-header-icon" />
            </div>
            <h3 className="text-xl font-bold text-[#F1F5F9]">
              Education
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* 1. SLIIT Undergraduate Education (Side-by-side on desktop, slightly wider for coursework) */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:border-[#67D4ED]/40">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-[#F1F5F9] leading-snug">
                      BSc (Hons) in Computer Science
                    </h4>
                    <p className="text-sm font-semibold text-[#67D4ED] mt-1">
                      Sri Lanka Institute of Information Technology (SLIIT) <span className="text-[#94A3B8] font-normal">• Malabe, Sri Lanka</span>
                    </p>
                  </div>

                  <div className="bg-white/95 px-2.5 py-1 rounded-lg shrink-0 shadow-xs">
                    <img src={sliitLogo} alt="SLIIT" className="h-6 w-auto object-contain" />
                  </div>
                </div>

                <div className="mb-3">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#0B1220]/60 text-[#67D4ED] border border-[#2A3B52]">
                    2024–Present · Year 3, Semester 1
                  </span>
                </div>

                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  Academic focus: Software Engineering, Algorithms, Databases, Distributed Systems and Parallel Computing.
                </p>

                {/* Collapsible Coursework Disclosure */}
                <details
                  open={isCourseworkOpen}
                  onToggle={(e) => setIsCourseworkOpen(e.currentTarget.open)}
                  className="group/coursework mt-4 pt-3.5 border-t border-[#2A3B52]"
                >
                  <summary className="flex items-center gap-2 cursor-pointer text-xs font-mono font-semibold text-[#67D4ED] hover:text-[#A5ECF9] select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#67D4ED] rounded py-1 list-none">
                    <i className={`bi bi-chevron-right text-xs transition-transform duration-200 ${isCourseworkOpen ? 'rotate-90' : ''}`} />
                    <span>{isCourseworkOpen ? 'Hide coursework' : 'View all coursework'}</span>
                  </summary>

                  <div className="mt-3.5 space-y-3.5 pt-2 text-left">
                    <span className="text-xs font-mono font-bold text-[#F1F5F9] uppercase tracking-wider block">
                      Academic Coursework
                    </span>
                    <div className="space-y-3">
                      {courseworkGroups.map((group) => (
                        <div key={group.title} className="space-y-1">
                          <span className="text-[11px] font-mono font-semibold text-[#67D4ED] block">
                            {group.title}
                          </span>
                          <p className="text-xs text-[#CBD5E1] leading-relaxed">
                            {group.modules.join(' • ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* 2. Richmond College Education (Side-by-side, top-aligned without stretching) */}
            <div className="lg:col-span-5">
              <div className="glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:border-[#67D4ED]/40">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-[#F1F5F9] leading-snug">
                      Primary &amp; Secondary Education
                    </h4>
                    <p className="text-sm font-semibold text-[#67D4ED] mt-1">
                      Richmond College, Galle
                    </p>
                  </div>

                  <div className="bg-white/95 px-2.5 py-1 rounded-lg shrink-0 shadow-xs">
                    <img src={richmondLogo} alt="Richmond College" className="h-7 w-auto object-contain" />
                  </div>
                </div>

                <div className="mb-3">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#0B1220]/60 text-[#67D4ED] border border-[#2A3B52]">
                    2010–2023
                  </span>
                </div>

                <ul className="text-xs sm:text-sm text-[#CBD5E1] space-y-1.5 pt-2 border-t border-[#2A3B52]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#67D4ED] shrink-0">•</span>
                    <span>G.C.E. Advanced Level — Physical Science Stream</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#67D4ED] shrink-0">•</span>
                    <span>G.C.E. Ordinary Level — 9 A passes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Band 2: Leadership & Activities (Below) */}
        <div className="mt-14 sm:mt-16">
          <div className="flex items-center gap-2.5 pb-3 border-b border-[#2A3B52] mb-8">
            <div className="w-9 h-9 rounded-xl bg-[#0B1220] text-[#67D4ED] flex items-center justify-center text-lg border border-[#2A3B52]">
              <i className="bi bi-award resume-header-icon" />
            </div>
            <h3 className="text-xl font-bold text-[#F1F5F9]">
              Leadership &amp; Activities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {leadershipEntries.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-[#67D4ED]/40 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#F1F5F9] leading-snug">
                    {item.title}
                  </h4>

                  {item.duration && (
                    <div className="mt-2.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#0B1220]/60 text-[#67D4ED] border border-[#2A3B52]">
                        {item.duration}
                      </span>
                    </div>
                  )}

                  <p className={`text-xs sm:text-sm font-semibold text-[#67D4ED] ${item.duration ? 'mt-2.5' : 'mt-2'} mb-3`}>
                    {item.organization}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
