import React from 'react'
import { Code2, Server, Brain, Terminal, Cloud, Wrench } from 'lucide-react'

const SKILL_CATEGORIES = [
  {
    title: 'AI, ML & Transformers',
    icon: Brain,
    accent: '#38bdf8',
    skills: ['PyTorch', 'Transformers', 'NLP', 'Graph Neural Networks', 'FAISS', 'Generative AI', 'Prompt Engineering'],
  },
  {
    title: 'Programming & DSA',
    icon: Code2,
    accent: '#ff6b00',
    skills: ['Python', 'Java', 'R', 'Data Structures & Algorithms', 'DBMS Fundamentals', '250+ DSA Solved'],
  },
  {
    title: 'Backend & Web Engineering',
    icon: Server,
    accent: '#34d399',
    skills: ['FastAPI', 'Flask', 'REST APIs', 'React', 'HTML5', 'CSS3'],
  },
  {
    title: 'Databases & Cloud',
    icon: Cloud,
    accent: '#a78bfa',
    skills: ['SQL (Joins, Indexing, Optimization)', 'NoSQL', 'AWS Cloud Foundations', 'AWS Cloud Architecting'],
  },
  {
    title: 'Testing & DevOps',
    icon: Wrench,
    accent: '#fb923c',
    skills: ['PyTest', 'Unit Testing', 'Git / GitHub', 'GitHub Actions (CI/CD)', 'Docker'],
  },
  {
    title: 'AI-Assisted Development',
    icon: Terminal,
    accent: '#f472b6',
    skills: ['GitHub Copilot', 'Claude AI', 'Cursor (Prompting, Auditing Code)'],
  },
]

export default function Skills() {
  return (
    <section className="section-divider py-24 sm:py-32 relative z-10">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gray-500 mb-5">
            <span className="h-px w-7 bg-white/15" aria-hidden="true" />
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="font-display text-[2rem] sm:text-[2.6rem] font-bold text-white leading-tight tracking-tight mt-5 max-w-xl">
            Skills & Engineering Tooling
          </h2>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/08 flex flex-col"
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${cat.accent}18`,
                      border: `1px solid ${cat.accent}40`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: cat.accent }} />
                  </div>
                  <h3 className="font-display text-sm font-bold text-white leading-tight">{cat.title}</h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-lg text-xs font-sans font-medium text-gray-200 border border-white/10 bg-white/05 hover:border-white/25 hover:text-white transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
