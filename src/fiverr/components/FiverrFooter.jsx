import { fiverrProfileInfo } from '../../data/fiverrData'
import { personalInfo } from '../../data/portfolioData'

export default function FiverrFooter() {
  const mainPortfolioUrl = import.meta.env.BASE_URL

  return (
    <footer id="contact" className="py-20 sm:py-28 relative bg-[#071d2d] border-t border-white/10 overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">FIVERR</div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#49e3a1]/10 via-[#66d8ee]/8 to-[#aa75ff]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Big CTA Card */}
        <div className="ocean-glass rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/15 text-center relative overflow-hidden shadow-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#49e3a1] animate-pulse" />
            <span className="text-xs font-mono text-slate-300">
              Open for Custom Projects &amp; Inquiries
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 max-w-2xl mx-auto">
            Ready to bring your project to life?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
            Send me a message with your project brief, repository, or UI designs on Fiverr. We will align on goals, scope, and milestones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={fiverrProfileInfo.fiverrUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#49e3a1] via-[#66d8ee] to-[#49e3a1] bg-[length:200%_auto] hover:bg-right text-[#071d2d] font-extrabold text-sm sm:text-base shadow-xl shadow-[#49e3a1]/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Contact me on Fiverr</span>
              <span className="text-lg font-bold">↗</span>
            </a>

            <a
              href={mainPortfolioUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm sm:text-base border border-white/15 transition-all cursor-pointer"
            >
              <span>Visit Full Engineering Portfolio</span>
              <span className="text-xs">↗</span>
            </a>
          </div>

          {/* Fiverr Safety Notice */}
          <div className="mt-8 text-xs font-mono text-slate-400">
            🔒 All transactions, project agreements, and milestone deliveries are conducted securely via Fiverr.
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} {personalInfo.name} • Freelance Software Developer
          </div>

          <div className="flex items-center gap-4">
            <a
              href={mainPortfolioUrl}
              className="hover:text-white transition-colors"
            >
              Main Portfolio ↗
            </a>
            <span>•</span>
            <a
              href={fiverrProfileInfo.fiverrUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#49e3a1] transition-colors"
            >
              Fiverr Profile ↗
            </a>
            <span>•</span>
            <a
              href="#top"
              className="hover:text-white transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
