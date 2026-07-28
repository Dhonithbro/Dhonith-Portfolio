import React, { useState, useEffect } from 'react'
import { Terminal, Menu, X } from 'lucide-react'

const navLinks = [
  { id: 'projects',       num: '01', name: 'Projects',     href: '#projects' },
  { id: 'about',          num: '02', name: 'About',        href: '#about' },
  { id: 'research',       num: '03', name: 'Research',     href: '#research' },
  { id: 'skills',         num: '04', name: 'Stack',        href: '#skills' },
  { id: 'certifications', num: '05', name: 'Credentials',  href: '#certifications' },
]

export default function Navbar({ activeTab, setActiveTab }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id, href) => {
    setActiveTab(id)
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/08 py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 sm:px-10">

        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={() => handleNav('hero', '#hero')}
          data-cursor="HOME"
          className="font-mono text-sm font-semibold text-white hover:text-white transition-colors flex items-center gap-0.5"
        >
          <span className="text-gray-300">dhonith</span>
          <span className="text-[#ff6b00] font-bold text-base" style={{ animation: 'blink 2s step-end infinite' }}>.</span>
          <span className="text-gray-300">dev</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.id, link.href) }}
                data-cursor={link.name.toUpperCase()}
                className={`group relative flex items-center gap-1.5 py-1 font-mono text-[0.82rem] transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="text-[0.6rem] text-[#ff6b00] font-bold tabular-nums">{link.num}</span>
                <span>{link.name}</span>
                {/* Underline */}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-0.5 left-0 h-px w-full bg-[#ff6b00] origin-left transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            )
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Get in touch */}
          <a
            href="#contact"
            onClick={() => handleNav('contact', '#contact')}
            data-cursor="TALK"
            className="hidden md:block rounded-lg border border-[#ff6b00]/40 bg-[#ff6b00]/08 px-4 py-2 font-mono text-[0.8rem] text-white transition-all duration-300 hover:border-[#ff6b00]/80 hover:bg-[#ff6b00]/15 hover:shadow-[0_0_20px_rgba(255,107,0,0.25)]"
          >
            Get in touch
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/08 bg-black/90 backdrop-blur-xl px-6 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.id, link.href) }}
              className="flex items-center gap-3 py-2 font-mono text-sm text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-[0.65rem] text-[#ff6b00] font-bold">{link.num}</span>
              <span>{link.name}</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => handleNav('contact', '#contact')}
            className="block mt-2 rounded-lg border border-[#ff6b00]/40 bg-[#ff6b00]/10 px-4 py-3 text-center font-mono text-sm text-white hover:bg-[#ff6b00]/20 transition-colors"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  )
}
