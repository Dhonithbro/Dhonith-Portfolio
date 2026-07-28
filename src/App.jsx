import React, { useState, useEffect, useRef } from 'react'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Research from './components/Research'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {
  const [activeTab, setActiveTab] = useState('hero')

  // Scroll spy for nav highlight
  useEffect(() => {
    const tabs = ['hero', 'projects', 'about', 'research', 'skills', 'certifications', 'contact']
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300
      for (const tabId of tabs) {
        const el = document.getElementById(tabId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(tabId)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Section reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-ink text-bone font-sans antialiased relative overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Fixed Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Page Sections */}
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="projects" className="section-reveal">
          <Projects />
        </div>
        <div id="about" className="section-reveal">
          <About />
        </div>
        <div id="research" className="section-reveal">
          <Research />
        </div>
        <div id="skills" className="section-reveal">
          <Skills />
        </div>
        <div id="certifications" className="section-reveal">
          <Certifications />
        </div>
        <div id="contact" className="section-reveal">
          <Contact />
        </div>
      </main>
    </div>
  )
}
