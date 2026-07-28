import React, { useState } from 'react'
import { Mail, Github, Linkedin, MapPin, Send, Check, Copy } from 'lucide-react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('dhonithyelamanchili@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="section-divider py-24 sm:py-32 relative z-10">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gray-500 mb-5">
            <span className="h-px w-7 bg-white/15" aria-hidden="true" />
            GET IN TOUCH
          </span>
          <h2 className="font-display text-[2rem] sm:text-[2.6rem] font-bold text-white leading-tight tracking-tight mt-5 max-w-2xl">
            Open to AI/ML &<br />SDE Opportunities.
          </h2>
        </div>

        {/* Main Card */}
        <div
          className="glass-card rounded-2xl border border-white/08 overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg, rgba(12,14,23,0.95) 0%, rgba(18,21,34,0.9) 100%)' }}
        >
          {/* Ambient glows */}
          <div
            className="absolute -top-32 -left-32 w-80 h-80 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-32 -right-32 w-80 h-80 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.06) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Left: Contact Info */}
            <div className="p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/08">
              <p className="text-sm text-gray-300 leading-relaxed mb-8 max-w-sm">
                Looking to hire an AI/ML Engineer or Software Development Engineer for campus
                placements or technical roles? Feel free to reach out directly!
              </p>

              {/* Info Items */}
              <div className="space-y-5 mb-8">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-xs text-gray-500 mb-0.5">Email</p>
                    <div className="flex items-center gap-2">
                      <a
                        href="mailto:dhonithyelamanchili@gmail.com"
                        className="text-sm font-medium text-white hover:text-cyan-400 transition-colors truncate"
                      >
                        dhonithyelamanchili@gmail.com
                      </a>
                      <button
                        onClick={copyEmail}
                        className="p-1 text-gray-500 hover:text-cyan-400 transition-colors shrink-0"
                        title="Copy email"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/25 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#ff6b00]" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-0.5">Location</p>
                    <p className="text-sm font-medium text-white">Amaravati, Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Dhonithbro"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="GITHUB"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card border border-white/10 text-sm text-gray-300 hover:text-white hover:border-white/25 transition-all"
                >
                  <Github className="w-4 h-4 text-gray-400" />
                  <span className="font-mono text-xs">Dhonithbro</span>
                </a>
                <a
                  href="https://linkedin.com/in/dhonith"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="LINKEDIN"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card border border-white/10 text-sm text-gray-300 hover:text-white hover:border-white/25 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="font-mono text-xs">dhonith</span>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="p-8 sm:p-10">
              <h3 className="font-display text-lg font-bold text-white mb-6">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-gray-500 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Recruiter / Collaborator"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/30 text-white text-sm placeholder-gray-600 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-gray-500 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/30 text-white text-sm placeholder-gray-600 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-gray-500 mb-1.5">Message</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Hi Dhonith, we'd like to discuss..."
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/30 text-white text-sm placeholder-gray-600 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-display font-semibold text-sm text-black flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    background: submitted
                      ? 'linear-gradient(135deg, #34d399, #059669)'
                      : 'linear-gradient(135deg, #ff6b00, #ff9500)',
                    boxShadow: submitted
                      ? '0 0 30px rgba(52,211,153,0.3)'
                      : '0 0 30px rgba(255,107,0,0.25)',
                  }}
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="font-mono text-xs text-gray-600">
            © {new Date().getFullYear()} Elamanchili Dhonith Sairam · Built with React & Three.js
          </p>
        </div>

      </div>
    </section>
  )
}
