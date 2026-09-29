import { useState } from 'react'
import { fiverrFaqs, fiverrUrls } from '../../data/fiverrData'

export default function FiverrFAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const hasProfileUrl = Boolean(fiverrUrls.fiverrProfileUrl && fiverrUrls.fiverrProfileUrl.trim())

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="py-20 sm:py-28 relative bg-[#071d2d] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#49e3a1] tracking-wider mb-3 font-semibold">
            <span>06 / FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Common questions about placing custom orders, project scope, revisions, and communication on Fiverr.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {fiverrFaqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.q}
                className="ocean-glass rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-slate-300 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#49e3a1] border-[#49e3a1]/40' : ''
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-200 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Direct Link to Message */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-300 mb-3">
            Have a question specific to your application or technology stack?
          </p>
          {hasProfileUrl ? (
            <a
              href={fiverrUrls.fiverrProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#66d8ee] hover:text-[#49e3a1] underline underline-offset-4 cursor-pointer"
            >
              <span>Message me directly on Fiverr profile</span>
              <span>↗</span>
            </a>
          ) : (
            <a
              href={fiverrUrls.reactBugFixingGig}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#66d8ee] hover:text-[#49e3a1] underline underline-offset-4 cursor-pointer"
            >
              <span>Contact via &ldquo;Contact Seller&rdquo; on my active Fiverr Gig</span>
              <span>↗</span>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
