import { useState } from 'react'
import { fiverrPublishedGigs, customInquiryInfo, fiverrUrls, freelanceCapabilities } from '../../data/fiverrData'

export default function FiverrGigs() {
  const [showInquiryHelp, setShowInquiryHelp] = useState(false)
  const hasProfileUrl = Boolean(fiverrUrls.fiverrProfileUrl && fiverrUrls.fiverrProfileUrl.trim())

  const handleCustomInquiryClick = (e) => {
    if (!hasProfileUrl) {
      e.preventDefault()
      setShowInquiryHelp(true)
    }
  }

  return (
    <section id="gigs" className="py-20 sm:py-28 relative bg-[#071d2d] border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#49e3a1]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#49e3a1] tracking-wider mb-3 font-semibold">
            <span>04 / SERVICES &amp; GIGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Active Fiverr Offerings &amp; Custom Inquiries
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Order directly through my published Fiverr Gig for frontend bug fixing, or submit a custom project inquiry for bespoke web development and API integration.
          </p>
        </div>

        {/* Offerings Grid: Distinct Published Gig vs Custom Project Inquiry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          
          {/* Card 1: Published Fiverr Gig */}
          {fiverrPublishedGigs.map((gig) => (
            <div
              key={gig.id}
              className="ocean-glass rounded-3xl p-6 sm:p-8 border border-[#49e3a1]/30 flex flex-col justify-between hover:border-[#49e3a1]/60 transition-all duration-300 relative group shadow-xl"
            >
              <div>
                {/* Header: Icon & Clear Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {gig.icon}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#49e3a1] bg-[#49e3a1]/15 px-3 py-1 rounded-full border border-[#49e3a1]/30 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#49e3a1] animate-pulse"></span>
                    <span>{gig.badge}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#49e3a1] transition-colors">
                  {gig.title}
                </h3>

                <p className="text-sm text-slate-200 leading-relaxed mb-5">
                  {gig.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#49e3a1] font-semibold mb-1">
                    What is covered:
                  </div>
                  {gig.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <span className="text-[#49e3a1] font-bold text-sm">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {gig.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-slate-200 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action - Explicitly links to the React bug-fixing Gig */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs font-mono text-slate-300">
                  Live on Fiverr • Escrow Protected
                </span>
                <a
                  href={gig.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#49e3a1] text-[#071d2d] font-bold text-xs sm:text-sm hover:bg-[#66d8ee] transition-all cursor-pointer shadow-md"
                  title="Open published React bug-fixing Gig on Fiverr"
                >
                  <span>Order on Fiverr (Bug Fix)</span>
                  <span className="text-sm font-bold">↗</span>
                </a>
              </div>
            </div>
          ))}

          {/* Card 2: Custom Project Inquiry (Not a published gig or fixed package) */}
          <div className="ocean-glass rounded-3xl p-6 sm:p-8 border border-[#66d8ee]/30 flex flex-col justify-between hover:border-[#66d8ee]/60 transition-all duration-300 relative group shadow-xl">
            <div>
              {/* Header: Icon & Clear Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {customInquiryInfo.icon}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#66d8ee] bg-[#66d8ee]/15 px-3 py-1 rounded-full border border-[#66d8ee]/30 font-semibold">
                  {customInquiryInfo.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#66d8ee] transition-colors">
                {customInquiryInfo.title}
              </h3>

              <p className="text-sm text-slate-200 leading-relaxed mb-5">
                {customInquiryInfo.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                <div className="text-xs font-mono uppercase tracking-wider text-[#66d8ee] font-semibold mb-1">
                  How custom inquiries work:
                </div>
                {customInquiryInfo.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="text-[#66d8ee] font-bold text-sm">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {customInquiryInfo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-slate-200 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action - Clearly separated for custom inquiries */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-300">
                Bespoke Scope &amp; Milestones
              </span>

              {hasProfileUrl ? (
                <a
                  href={fiverrUrls.fiverrProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
                  title="Contact seller directly on Fiverr profile for custom inquiry"
                >
                  <span>Discuss Custom Scope on Fiverr</span>
                  <span className="text-sm font-bold">↗</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleCustomInquiryClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
                  title="How to send a custom project inquiry on Fiverr"
                >
                  <span>Inquire for Custom Work</span>
                  <span className="text-xs font-mono">ℹ</span>
                </button>
              )}
            </div>

            {/* Custom Inquiry Modal / Callout if direct profile URL is not yet configured */}
            {showInquiryHelp && !hasProfileUrl && (
              <div className="mt-4 p-4 rounded-2xl bg-[#051521] border border-[#66d8ee]/40 text-xs sm:text-sm text-slate-200 space-y-2.5 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white flex items-center gap-2">
                    <span>💬</span> How to Inquire on Fiverr:
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowInquiryHelp(false)}
                    className="text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded bg-white/5"
                  >
                    Close ✕
                  </button>
                </div>
                <p className="text-slate-300 leading-relaxed text-xs">
                  For custom project scopes (outside of bug fixing), you can contact me via the <strong>&ldquo;Contact Seller&rdquo;</strong> button on my Fiverr Gig page, or add your direct seller profile URL into <code className="bg-white/10 px-1 py-0.5 rounded font-mono text-[#49e3a1]">src/data/fiverrData.js</code> under <code className="bg-white/10 px-1 py-0.5 rounded font-mono text-[#49e3a1]">fiverrProfileUrl</code>.
                </p>
                <div className="pt-1">
                  <a
                    href={fiverrUrls.reactBugFixingGig}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#66d8ee] hover:underline"
                  >
                    <span>Open Fiverr Gig and click &ldquo;Contact Seller&rdquo;</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* General Capabilities Grid (What I can build/help with) */}
        <div>
          <div className="text-xs sm:text-sm font-mono text-slate-300 uppercase tracking-widest font-semibold mb-6">
            CORE FREELANCE CAPABILITIES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {freelanceCapabilities.map((cap) => (
              <div
                key={cap.id}
                className="ocean-glass rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl mb-3 block">{cap.icon}</span>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2">{cap.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {cap.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {cap.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/5 text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
