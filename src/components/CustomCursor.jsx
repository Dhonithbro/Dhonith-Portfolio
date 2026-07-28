import React, { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const dotRef   = useRef(null)
  const ringRef  = useRef(null)
  const labelRef = useRef(null)

  const pos    = useRef({ x: -200, y: -200 })
  const ring   = useRef({ x: -200, y: -200 })
  const hover  = useRef({ active: false, label: '' })
  const clicked = useRef(false)
  const rafId  = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onDown = () => {
      clicked.current = true
      if (dotRef.current) dotRef.current.style.transform =
        `translate3d(${pos.current.x - 4}px, ${pos.current.y - 4}px, 0) scale(0.5)`
    }

    const onUp = () => {
      clicked.current = false
    }

    const onOver = (e) => {
      const target =
        e.target.closest('[data-cursor]') ||
        e.target.closest('a') ||
        e.target.closest('button')
      if (target) {
        hover.current = { active: true, label: target.getAttribute('data-cursor') || '' }
      } else {
        hover.current = { active: false, label: '' }
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('mouseover', onOver)

    // RAF loop for smooth trailing
    const animate = () => {
      const dx = pos.current.x - ring.current.x
      const dy = pos.current.y - ring.current.y
      ring.current.x += dx * 0.12
      ring.current.y += dy * 0.12

      const { x: rx, y: ry } = ring.current
      const { x: px, y: py } = pos.current
      const { active, label } = hover.current

      // Dot
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${px - 4}px, ${py - 4}px, 0) scale(${clicked.current ? 0.4 : active ? 1.5 : 1})`
      }

      // Ring
      if (ringRef.current) {
        const size = active ? 60 : 32
        const half = size / 2
        ringRef.current.style.width  = `${size}px`
        ringRef.current.style.height = `${size}px`
        ringRef.current.style.transform = `translate3d(${rx - half}px, ${ry - half}px, 0)`
        ringRef.current.style.borderColor = active ? 'rgba(255,107,0,0.7)' : 'rgba(255,255,255,0.2)'
        ringRef.current.style.background  = active ? 'rgba(255,107,0,0.08)' : 'transparent'
      }

      // Label
      if (labelRef.current) {
        labelRef.current.style.opacity = active && label ? '1' : '0'
        labelRef.current.textContent = label
      }

      rafId.current = requestAnimationFrame(animate)
    }

    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      {/* Precision Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#ff6b00',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          boxShadow: '0 0 10px #ff6b00, 0 0 20px rgba(255,107,0,0.4)',
          transition: 'transform 0.08s ease',
        }}
      />

      {/* Trailing Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.2)',
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform, width, height',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'border-color 0.25s, background 0.25s, width 0.25s, height 0.25s',
        }}
      >
        <span
          ref={labelRef}
          style={{
            fontSize: '9px',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 700,
            color: '#ff6b00',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            opacity: 0,
            transition: 'opacity 0.15s',
            userSelect: 'none',
          }}
        />
      </div>
    </>
  )
}
