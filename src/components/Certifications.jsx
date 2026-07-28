import React from 'react'
import { Award, CheckCircle, ExternalLink } from 'lucide-react'

const CERTS = [
  {
    title: 'GenAI Using IBM Watsonx',
    issuer: 'IBM Career Education Program',
    detail: 'Completed with 98% Score',
    year: '2025',
    badge: 'IBM Watsonx',
    color: 'text-blue-300 border-blue-500/40 bg-blue-500/08',
    verifyUrl: 'https://courses.vit.skillsnetwork.site/certificates/ad4e83e4b30a485fb2bf124f8e1065ad',
  },
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    detail: 'Credly Verified Badge',
    year: '2026',
    badge: 'AWS Credly',
    color: 'text-amber-300 border-amber-500/40 bg-amber-500/08',
    verifyUrl: 'https://www.credly.com',
  },
  {
    title: 'AWS Academy Cloud Architecting',
    issuer: 'Amazon Web Services (AWS)',
    detail: 'Advanced Cloud Design Patterns',
    year: '2026',
    badge: 'AWS Credly',
    color: 'text-amber-300 border-amber-500/40 bg-amber-500/08',
    verifyUrl: 'https://www.credly.com',
  },
  {
    title: 'MATLAB Onramp',
    issuer: 'MathWorks',
    detail: 'Computational Modeling & Simulation',
    year: '2025',
    badge: 'MathWorks',
    color: 'text-emerald-300 border-emerald-500/40 bg-emerald-500/08',
    verifyUrl: null,
  },
  {
    title: 'Wadhwani Foundation Certificate',
    issuer: 'Wadhwani Foundation',
    detail: 'Professional Competencies',
    year: '2025',
    badge: 'Completed',
    color: 'text-purple-300 border-purple-500/40 bg-purple-500/08',
    verifyUrl: null,
  },
]

export default function Certifications() {
  return (
    <section className="section-divider py-24 sm:py-32 relative z-10">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gray-500 mb-5">
            <span className="h-px w-7 bg-white/15" aria-hidden="true" />
            CREDENTIALS & BADGES
          </span>
          <h2 className="font-display text-[2rem] sm:text-[2.6rem] font-bold text-white leading-tight tracking-tight mt-5 max-w-xl">
            Industry Certifications
          </h2>
        </div>

        {/* Cert Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-white/08 flex flex-col justify-between group"
            >
              <div>
                {/* Badge + Year */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className={`px-2.5 py-1 rounded-full border font-mono text-xs font-bold ${cert.color}`}>
                    {cert.badge}
                  </span>
                  <span className="font-mono text-xs text-gray-500">{cert.year}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-base font-bold text-white mb-1.5 group-hover:text-[#ff6b00] transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="font-mono text-xs text-cyan-400 font-semibold mb-2">{cert.issuer}</p>

                {/* Detail */}
                <p className="text-xs text-gray-400 mb-5">{cert.detail}</p>
              </div>

              {/* Verify link */}
              {cert.verifyUrl ? (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="VERIFY"
                  className="pt-4 border-t border-white/08 font-mono text-xs text-cyan-400 hover:text-cyan-300 flex items-center justify-between transition-colors"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className="pt-4 border-t border-white/08 font-mono text-xs text-gray-500 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Completion</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
