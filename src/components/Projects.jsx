import React from 'react'
import { ArrowUpRight, Github, CheckCircle2 } from 'lucide-react'

const PROJECTS = [
  {
    id: 'valkyrie',
    title: 'VALKYRIE-Decoder',
    url: 'github.com/Dhonithbro/valkyrie-decoder',
    year: '2026',
    subtitle: 'Hallucination-Mitigating Transformer Framework',
    github: 'https://github.com/Dhonithbro',
    live: null,
    badge: 'Research Framework',
    badgeColor: 'text-cyan-300 border-cyan-500/40 bg-cyan-500/10',
    description:
      'Built a dual-stream transformer framework embedding structured fact verification directly into decoding — achieving 100% fact accuracy and 0% hallucination rate on a 49,951-fact benchmark.',
    highlights: [
      'Knowledge & Generation Streams via Bidirectional Cross-Stream Attention (BCSA)',
      'Dynamic Veracity Threshold Engine (DVTE) for real-time epistemic gating',
      '41% FLOPs reduction via adaptive early-exit routing (F1: 98.9%)',
      'PyTest suite & GitHub Actions CI/CD on every push',
    ],
    tags: ['PyTorch', 'Transformers', 'NLP', 'PyTest', 'GitHub Actions'],
  },
  {
    id: 'ai-translator',
    title: 'AI Voice & Document Translator',
    url: 'voice-translator-2-1.vercel.app',
    year: '2026',
    subtitle: 'Neural Machine Translation Web App',
    github: 'https://github.com/Dhonithbro',
    live: 'https://voice-translator-2-1.vercel.app/',
    badge: 'Actively Maintained',
    badgeColor: 'text-emerald-300 border-emerald-500/40 bg-emerald-500/10',
    description:
      'Real-time web application for instant text, voice, and document translation across multiple language pairs using pre-trained MarianMT and mBART transformer models.',
    highlights: [
      'Helsinki-NLP/MarianMT & mBART for context-aware translation',
      'React frontend + FastAPI/Flask backend with automatic language detection',
      'Decoupled architecture for independent frontend & backend scalability',
      'Extensible pipeline supporting domain fine-tuning & REST API integration',
    ],
    tags: ['React', 'FastAPI', 'Flask', 'MarianMT', 'mBART', 'NLP'],
  },
]

export default function Projects() {
  return (
    <section className="section-divider py-24 sm:py-32 relative z-10">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">

        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gray-500 mb-5">
              <span className="h-px w-7 bg-white/15" aria-hidden="true" />
              SELECTED WORK
            </span>
            <h2 className="font-display text-[2rem] sm:text-[2.6rem] font-bold text-white leading-tight tracking-tight max-w-lg">
              Things people actually use.
            </h2>
          </div>
          <a
            href="https://github.com/Dhonithbro"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="GITHUB"
            className="group inline-flex items-center gap-1.5 font-mono text-sm text-gray-400 hover:text-white transition-colors"
          >
            All GitHub repos
            <ArrowUpRight className="h-4 w-4 text-[#ff6b00] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/08">

              {/* Browser Chrome Bar */}
              <div className="flex items-center gap-1.5 border-b border-white/08 bg-black/30 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 flex-1 truncate font-mono text-[0.68rem] text-gray-500">
                  {project.url}
                </span>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.65rem] text-[#ff6b00] hover:underline flex items-center gap-1"
                    data-cursor="VISIT"
                  >
                    LIVE <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#ff6b00] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-gray-500 shrink-0">{project.year}</span>
                </div>

                <p className="font-mono text-xs text-amber-400 mb-4">{project.subtitle}</p>

                <p className="text-sm text-gray-300 leading-relaxed mb-5">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/08">
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-xs font-bold ${project.badgeColor}`}>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
                    </span>
                    {project.badge}
                  </span>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/05 border border-white/10 px-2 py-0.5 font-mono text-[0.65rem] text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
