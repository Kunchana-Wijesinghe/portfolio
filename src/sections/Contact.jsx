import { useState } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Hi Kunchana,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`
    window.open(mailtoUrl, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <footer id="contact" className="py-20 sm:py-28 relative bg-[#061623] border-t border-white/10 overflow-hidden">
      {/* Background Watermark */}
      <div className="section-watermark">CONTACT</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#66d8ee]/10 border border-[#66d8ee]/25 text-[#66d8ee] font-mono text-xs mb-3">
            <span>06 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Connect &amp; <span className="bg-gradient-to-r from-[#66d8ee] via-[#49e3a1] to-[#aa75ff] bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl">
            Currently open to Software Engineering internship opportunities, full-stack projects, and tech collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Hub */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Dedicated CV Download Action Card */}
            <div className="ocean-glass rounded-3xl p-5 sm:p-6 group hover:border-[#49e3a1]/50 transition-all flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Curriculum Vitae
                </span>
                <span className="text-white font-medium text-base sm:text-lg block">
                  Official Resume
                </span>
                <span className="text-xs font-mono text-[#49e3a1]">
                  Kunchana_Wijesinghe_CV.pdf
                </span>
              </div>
              <a
                href={`${import.meta.env.BASE_URL}Kunchana_Wijesinghe_CV.pdf`}
                download="Kunchana_Wijesinghe_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#49e3a1] to-[#66d8ee] text-[#071d2d] font-bold text-xs font-mono shadow-md hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
                title="Download Official CV (PDF)"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="ocean-glass rounded-3xl p-5 sm:p-6 group hover:border-[#66d8ee]/40 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Direct Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-mono text-[#66d8ee] hover:text-[#49e3a1] transition-colors cursor-pointer"
                  type="button"
                >
                  {copied ? 'Copied! ✓' : 'Copy Email'}
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-white font-medium text-base sm:text-lg hover:text-[#66d8ee] transition-colors break-all block"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="ocean-glass rounded-3xl p-5 sm:p-6 group hover:border-[#66d8ee]/40 transition-all">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                Phone / WhatsApp
              </span>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="text-white font-medium text-base sm:text-lg hover:text-[#66d8ee] transition-colors block"
              >
                {personalInfo.phoneDisplay}
              </a>
            </div>

            {/* Location & Internship Availability */}
            <div className="ocean-glass rounded-3xl p-5 sm:p-6 space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Location &amp; Availability
                </span>
                <p className="text-white text-sm sm:text-base font-medium">
                  {personalInfo.location}
                </p>
                <p className="text-xs text-[#49e3a1] font-mono mt-1">
                  ● Available for on-site &amp; remote software internships
                </p>
              </div>

              {/* Social Pills */}
              <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-2xl bg-[#051521]/80 border border-white/10 hover:border-[#66d8ee]/40 text-slate-200 hover:text-white text-xs font-mono text-center transition-all"
                >
                  GitHub ↗
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-2xl bg-[#051521]/80 border border-white/10 hover:border-[#49e3a1]/40 text-slate-200 hover:text-white text-xs font-mono text-center transition-all"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Quick response note */}
            <div className="p-3.5 rounded-2xl bg-[#051521]/60 border border-white/10 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>⚡ Fast Response:</span>
              <span className="text-[#66d8ee]">Usually within 24 hours</span>
            </div>

          </div>

          {/* Right Column: Clean Interactive Form */}
          <div className="lg:col-span-7">
            <div className="ocean-glass rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Send a Direct Inquiry
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-5">
                  Fill in the message details below to initiate direct communication
                </p>

                {submitted && (
                  <div className="mb-4 p-3 rounded-2xl bg-[#49e3a1]/15 border border-[#49e3a1]/30 text-[#49e3a1] text-xs font-mono">
                    ✓ Your mail application has been opened with your message pre-filled.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#051521]/80 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#66d8ee] focus:ring-1 focus:ring-[#66d8ee] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#051521]/80 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#66d8ee] focus:ring-1 focus:ring-[#66d8ee] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship Opportunity / Project Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#051521]/80 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#66d8ee] focus:ring-1 focus:ring-[#66d8ee] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Kunchana, I came across your portfolio and would like to connect regarding..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#051521]/80 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#66d8ee] focus:ring-1 focus:ring-[#66d8ee] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#66d8ee] via-[#49e3a1] to-[#38bdf8] text-[#071d2d] font-bold text-sm shadow-md hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. Engineered with React 19 &amp; Tailwind CSS.
          </p>
          <a
            href="#top"
            className="text-slate-400 hover:text-[#66d8ee] transition-colors flex items-center gap-1.5"
          >
            <span>Back to top</span>
            <span>↑</span>
          </a>
        </div>

      </div>
    </footer>
  )
}
