import React from 'react'
import { GraduationCap, MapPin, Code2, Server, Brain } from 'lucide-react'

const CAPABILITIES = [
  {
    num: '01',
    icon: Brain,
    title: 'AI & Machine Learning',
    desc: 'Building and working with ML systems — transformer architectures, PyTorch, FAISS vector search, and fine-tuning pre-trained models for real-world tasks like translation and text generation.',
  },
  {
    num: '02',
    icon: Server,
    title: 'Software Development & APIs',
    desc: 'Full-stack web development with React, FastAPI, and Flask. Designing clean REST APIs, connecting AI backends to modern frontends, and building production-ready applications.',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Cloud, DevOps & Testing',
    desc: 'AWS Cloud deployment, GitHub Actions CI/CD pipelines, Docker containerization, and PyTest for automated testing — ensuring every project is reliable and scalable.',
  },
]

export default function About() {
  return (
    <section className="section-divider py-24 sm:py-32 relative z-10">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">

        {/* Section Label */}
        <span className="inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gray-500 mb-5">
          <span className="h-px w-7 bg-white/15" aria-hidden="true" />
          WHAT I DO & BACKGROUND
        </span>

        {/* Capabilities List */}
        <div className="border-t border-white/08 mt-8">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon
            return (
              <div
                key={cap.num}
                className="grid gap-4 border-b border-white/08 py-8 md:grid-cols-[0.08fr_1fr_1.8fr] md:gap-10 hover:bg-white/02 transition-colors px-2 rounded-lg items-start"
              >
                <span className="font-mono text-xs text-[#ff6b00] font-bold pt-0.5">{cap.num}</span>
                <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#ff6b00] shrink-0" />
                  {cap.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">{cap.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Bio + Education Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Bio Card */}
          <div className="glass-card p-8 rounded-2xl border border-white/08">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-xl border border-[#ff6b00]/30 bg-[#ff6b00]/10 flex items-center justify-center"
              >
                <span className="font-display text-2xl font-bold text-[#ff6b00]">DS</span>
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-white">Elamanchili Dhonith Sairam</h4>
                <div className="flex items-center gap-2 font-mono text-xs text-[#ff6b00] mt-1">
                  <MapPin className="w-3 h-3" />
                  <span>Amaravati, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              B.Tech Computer Science candidate at{' '}
              <strong className="text-white">VIT Amaravati</strong>. Focused on building
              AI/ML applications and full-stack software — bridging machine learning
              with real-world product development. Strong DSA foundation with{' '}
              <strong className="text-white">250+ problems solved</strong>.
            </p>

            <div className="pt-4 border-t border-white/08 grid grid-cols-2 gap-3 font-mono text-xs">
              <div>
                <div className="text-gray-500 mb-1">Focus Area</div>
                <div className="text-white font-semibold">NLP & Full-Stack AI</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">DSA Problems</div>
                <div className="text-[#ff6b00] font-bold">250+</div>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="glass-card p-8 rounded-2xl border border-white/08">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-5 h-5 text-[#ff6b00]" />
              <h4 className="font-display text-lg font-bold text-white">Education</h4>
            </div>

            <div className="space-y-8">
              {/* VIT */}
              <div className="relative pl-6 border-l-2 border-[#ff6b00]">
                <span
                  className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#ff6b00]"
                  style={{ boxShadow: '0 0 10px #ff6b00' }}
                />
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-display font-bold text-white text-sm leading-tight">
                    VIT Amaravati
                  </h5>
                  <span className="font-mono text-xs text-[#ff6b00] shrink-0 ml-4">2023–Present</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">B.Tech Computer Science & Engineering</p>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00] text-xs font-mono font-bold">
                  CGPA: 7.99
                </span>
              </div>

              {/* Sri Chaitanya */}
              <div className="relative pl-6 border-l-2 border-white/15">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-gray-600" />
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-display font-bold text-white text-sm leading-tight">
                    Sri Chaitanya Junior College
                  </h5>
                  <span className="font-mono text-xs text-gray-500 shrink-0 ml-4">2021–2023</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">Intermediate (PCM)</p>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/05 border border-white/15 text-gray-300 text-xs font-mono">
                  941 / 1000
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
