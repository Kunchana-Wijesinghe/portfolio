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
    // Open default mail client with prefilled subject and body
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
    <footer id="contact" className="py-20 sm:py-28 relative bg-[#060910] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <span>06 // GET IN TOUCH</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl font-sans">
            I am currently open to Software Engineering internships, full-stack projects, and tech collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-slate-400">Direct Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                  type="button"
                >
                  {copied ? 'Copied! ✓' : 'Copy'}
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-100 font-medium text-sm sm:text-base hover:text-cyan-400 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-6">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
                Phone / WhatsApp
              </span>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="text-slate-100 font-medium text-sm sm:text-base hover:text-cyan-400 transition-colors"
              >
                {personalInfo.phoneDisplay}
              </a>
            </div>

            {/* Location & Links */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                  Location
                </span>
                <p className="text-slate-200 text-sm font-medium">
                  {personalInfo.location}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white text-xs font-mono text-center transition-colors"
                >
                  GitHub Profile
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-white text-xs font-mono text-center transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-6">
                Fill in the form to reach out directly via your email client
              </p>

              {submitted && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  Thank you! Your mail application has been opened with your message.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship Opportunity / Project Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Kunchana, I came across your portfolio and would like to connect regarding..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to top */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. Designed &amp; Engineered with React &amp; Tailwind CSS.
          </p>
          <a
            href="#top"
            className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <span>Back to top</span>
            <span>↑</span>
          </a>
        </div>

      </div>
    </footer>
  )
}
