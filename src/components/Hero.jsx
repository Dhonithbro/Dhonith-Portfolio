import React, { useState, useEffect } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Hero3D from './Hero3D'

const ROLES = ['AI/ML Engineer', 'Software Development Engineer', 'Full-Stack Developer', 'AI Application Builder']

export default function Hero() {
  const [terminalStep, setTerminalStep] = useState(0)
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  const terminalLines = [
    '$ whoami',
    '> Elamanchili Dhonith Sairam',
    '$ cat role.txt',
    '> AI/ML & Software Development Engineer',
    '$ ls projects/',
    '> VALKYRIE-Decoder  AI-Voice-Translator',
    '$ cat status.txt',
    '> Open to AI/ML & SDE Roles',
  ]

  // Terminal typewriter
  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalStep((prev) => (prev < terminalLines.length - 1 ? prev + 1 : prev))
    }, 700)
    return () => clearInterval(timer)
  }, [])

  // Role typewriter
  useEffect(() => {
    const role = ROLES[roleIdx]
    let i = 0
    setDisplayed('')
    setTyping(true)
    const interval = setInterval(() => {
      if (i < role.length) {
        setDisplayed(role.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
        setTyping(false)
        // Wait then delete
        setTimeout(() => {
          let j = role.length
          const del = setInterval(() => {
            if (j > 0) {
              setDisplayed(role.slice(0, j - 1))
              j--
            } else {
              clearInterval(del)
              setRoleIdx((prev) => (prev + 1) % ROLES.length)
            }
          }, 45)
        }, 1800)
      }
    }, 70)
    return () => clearInterval(interval)
  }, [roleIdx])

  return (
    <section className="relative isolate overflow-hidden min-h-screen flex items-center pt-20">
      {/* 3D Starfield Canvas */}
      <Hero3D />

      {/* Ambient glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/4 -z-10 h-[500px] w-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.07) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-5%] bottom-1/4 -z-10 h-[400px] w-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10 py-20 grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

        {/* ===== LEFT: Text Content ===== */}
        <div>
          {/* Status dot */}
          <div className="flex items-center gap-3 font-mono text-xs text-gray-400 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Open to AI/ML & SDE placement roles
          </div>

          {/* Name */}
          <p className="font-mono text-sm text-[#ff6b00] mb-3 tracking-widest uppercase">
            Elamanchili Dhonith Sairam
          </p>

          {/* Headline */}
          <h1 className="font-display text-[2.6rem] sm:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.05] tracking-tight text-white mb-6">
            AI/ML &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ff6b00, #ff9500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Software Engineer
            </span>
            <br />building things that work.
          </h1>

          {/* Typewriter role */}
          <div className="font-mono text-lg text-gray-300 mb-8 h-8 flex items-center gap-2">
            <span className="text-[#ff6b00]">~/</span>
            <span className="text-white">{displayed}</span>
            <span
              className="inline-block w-[2px] h-5 bg-[#ff6b00]"
              style={{ animation: 'blink 1.1s step-end infinite' }}
            />
          </div>

          {/* Subheading */}
          <p className="max-w-lg text-gray-300 text-base leading-relaxed mb-10">
            B.Tech CSE at <strong className="text-white">VIT Amaravati</strong>. I build
            AI/ML systems and full-stack software —{' '}
            <em className="not-italic text-[#ff6b00] font-medium">from idea to deployment</em>.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#projects"
              data-cursor="WORK"
              className="group inline-flex items-center gap-2 rounded-lg border border-[#ff6b00]/50 bg-[#ff6b00]/10 px-6 py-3 font-mono text-sm text-white transition-all duration-300 hover:border-[#ff6b00] hover:bg-[#ff6b00]/20 hover:shadow-[0_0_30px_rgba(255,107,0,0.3)]"
            >
              See my work
              <ArrowRight className="h-4 w-4 text-[#ff6b00] transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              data-cursor="CONNECT"
              className="group inline-flex items-center gap-1.5 px-2 py-3 font-mono text-sm text-gray-400 transition-colors hover:text-white"
            >
              Contact me
              <ArrowUpRight className="h-4 w-4 text-[#ff6b00] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Terminal widget */}
          <div className="max-w-md rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/30 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-3 font-mono text-[0.65rem] uppercase tracking-widest text-gray-500">
                dhonith@portfolio ~ zsh
              </span>
            </div>
            {/* Lines */}
            <div className="p-4 font-mono text-xs space-y-1.5 min-h-[120px]">
              {terminalLines.slice(0, terminalStep + 1).map((line, idx) => (
                <div
                  key={idx}
                  className={
                    line.startsWith('$')
                      ? 'text-gray-400'
                      : 'text-emerald-400 pl-2'
                  }
                >
                  {line}
                </div>
              ))}
              {terminalStep < terminalLines.length - 1 && (
                <span
                  className="inline-block w-[7px] h-[13px] bg-[#ff6b00] align-middle"
                  style={{ animation: 'blink 1.1s step-end infinite' }}
                />
              )}
            </div>
          </div>
        </div>

        {/* ===== RIGHT: Profile + Metrics ===== */}
        <div className="flex flex-col items-center lg:items-end gap-8">
          {/* Profile image with glow ring */}
          <div className="relative group">
            <div
              className="absolute -inset-1 rounded-2xl opacity-60 group-hover:opacity-100 transition duration-500 blur-lg"
              style={{ background: 'linear-gradient(135deg, #ff6b00, #ff9500)' }}
            />
            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl border border-white/10 overflow-hidden bg-surface"
              style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.6)' }}
            >
              <img
                src="/dhonith-profile.jpg"
                alt="Elamanchili Dhonith Sairam"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentNode.style.display = 'flex'
                  e.target.parentNode.style.alignItems = 'center'
                  e.target.parentNode.style.justifyContent = 'center'
                  e.target.parentNode.innerHTML = `
                    <div style="text-align:center;padding:20px">
                      <div style="font-family:Space Grotesk,sans-serif;font-size:3rem;font-weight:700;color:#ff6b00">DS</div>
                      <div style="font-family:Fira Code,monospace;font-size:0.7rem;color:#9ca3af;margin-top:8px">Dhonith Sairam</div>
                    </div>
                  `
                }}
              />
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
            {[
              { val: '100%', label: 'Fact Accuracy' },
              { val: '0%',   label: 'Hallucination' },
              { val: '41%',  label: 'FLOPs Reduced' },
              { val: '250+', label: 'DSA Solved' },
            ].map((m) => (
              <div
                key={m.label}
                className="glass-card p-4 rounded-xl border border-white/08 text-left"
              >
                <div className="font-mono text-2xl font-bold text-[#ff6b00] mb-0.5">{m.val}</div>
                <div className="font-mono text-[0.65rem] text-gray-400 uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
