import { personalInfo, spokenLanguages } from '../data/portfolioData'
import { handleCvDownload, CV_URL, CV_FILENAME } from '../utils/cv'

export default function About() {

  return (
    <section id="about" className="py-24 relative bg-section-alt border-t border-[#2A3B52] overflow-hidden text-left">
      {/* Background Watermark */}
      <div className="section-watermark">ABOUT</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card p-6 sm:p-10 lg:p-12 rounded-3xl">
          {/* 1. Heading at Top-Left */}
          <div className="relative mb-6">
            <span className="text-xs font-mono text-[#67D4ED] uppercase tracking-wider block mb-1">
              01 // ABOUT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F1F5F9] tracking-tight pb-3 border-b border-[#2A3B52]">
              About me
            </h3>
            <div className="absolute -bottom-[1px] left-0 w-16 h-[2px] bg-[#67D4ED]" />
          </div>

          {/* 2. Biography Paragraphs */}
          <div className="max-w-[80ch] space-y-4 text-[#CBD5E1] text-sm sm:text-base leading-relaxed font-sans">
            <p>
              I&apos;m a third-year Computer Science undergraduate at SLIIT with academic project experience in full-stack development, distributed systems and cloud deployment. I enjoy building applications, connecting frontend and backend workflows, and solving integration problems with my team.
            </p>
            <p>
              My project work also includes leading a test automation and quality pipeline, integrating test suites into GitHub Actions, and working with Docker-based environments. I&apos;m seeking an internship where I can contribute, strengthen my engineering skills and learn from experienced developers.
            </p>
          </div>

          {/* 3. Personal Details (Compact 2-col grid desktop / 1-col mobile) */}
          <div className="mt-8 pt-6 border-t border-[#2A3B52]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 max-w-3xl text-xs sm:text-sm">
              <div className="flex items-baseline gap-2.5 min-w-0">
                <span className="text-[#94A3B8] font-medium shrink-0">Name:</span>
                <span className="font-semibold text-[#F1F5F9]">{personalInfo.name}</span>
              </div>
              <div className="flex items-baseline gap-2.5 min-w-0">
                <span className="text-[#94A3B8] font-medium shrink-0">University:</span>
                <span className="font-semibold text-[#67D4ED]">SLIIT</span>
              </div>
              <div className="flex items-baseline gap-2.5 min-w-0">
                <span className="text-[#94A3B8] font-medium shrink-0">Location:</span>
                <span className="font-semibold text-[#F1F5F9]">{personalInfo.location}</span>
              </div>
              <div className="flex items-baseline gap-2.5 min-w-0">
                <span className="text-[#94A3B8] font-medium shrink-0">Email:</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[#67D4ED] hover:underline font-mono text-xs sm:text-sm break-all [overflow-wrap:anywhere] min-w-0"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* 4. Spoken Languages */}
          <div className="mt-6 pt-5 border-t border-[#2A3B52]">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#CBD5E1]">
              <span className="font-mono text-[#67D4ED] text-[11px] uppercase tracking-wider font-semibold">Languages:</span>
              {spokenLanguages.map((lang, index) => (
                <span key={lang.language} className="inline-flex items-center">
                  <span>{lang.language} ({lang.proficiency})</span>
                  {index < spokenLanguages.length - 1 && <span className="mx-2 text-[#2A3B52]">•</span>}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Action Buttons at Bottom */}
          <div className="mt-8 pt-6 border-t border-[#2A3B52] flex flex-wrap items-center gap-3">
            <a
              href={CV_URL}
              download={CV_FILENAME}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCvDownload}
              className="btn-glass-action inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <i className="bi bi-download" />
              <span>Download CV</span>
            </a>

            <a
              href="#skills"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-[#F1F5F9] hover:border-[#67D4ED]/50 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            >
              <span>View Skills</span>
              <i className="bi bi-arrow-right text-xs text-[#67D4ED]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
