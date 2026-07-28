/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:       '#07080c',
        surface:   '#13171f',
        card:      '#0e1017',
        line:      'rgba(255, 255, 255, 0.08)',
        bone:      '#f9fafb',
        'bone-dim': '#d1d5db',
        muted:     '#6b7280',
        ember:     '#ff6b00',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono:    ['Fira Code', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'blink':      'blink 1.1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%':      { opacity: 0 },
        }
      },
      boxShadow: {
        float: '0 4px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.04)',
        ember: '0 0 20px rgba(255, 107, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
