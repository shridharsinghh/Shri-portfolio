/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#020617',
        surface: 'rgba(15,23,42,0.65)',
        glass: 'rgba(255,255,255,0.06)',
        border: 'rgba(255,255,255,0.08)',
        text: '#F8FAFC',
        secondary: '#94A3B8',
        purple: '#8B5CF6',
        cyan: '#22D3EE',
        blue: '#3B82F6',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-purple-cyan': 'linear-gradient(135deg, #8B5CF6, #22D3EE)',
        'gradient-blue-violet': 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'rotate-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'orb-move-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(60px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-40px, 30px) scale(0.9)' },
        },
        'orb-move-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-50px, 60px) scale(1.15)' },
          '66%': { transform: 'translate(70px, -30px) scale(0.85)' },
        },
        'orb-move-3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, 50px) scale(1.1)' },
        },
        'neon-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139,92,246,0.4), 0 0 40px rgba(34,211,238,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(139,92,246,0.8), 0 0 80px rgba(34,211,238,0.4)' },
        },
        'timeline-draw': {
          from: { height: '0%' },
          to: { height: '100%' },
        },
        'count-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'text-reveal': {
          from: { clipPath: 'inset(0 100% 0 0)' },
          to: { clipPath: 'inset(0 0% 0 0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'rotate-reverse': 'rotate-reverse 15s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        shimmer: 'shimmer 3s ease infinite',
        'orb-1': 'orb-move-1 20s ease-in-out infinite',
        'orb-2': 'orb-move-2 25s ease-in-out infinite',
        'orb-3': 'orb-move-3 18s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 3s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(139,92,246,0.5), 0 0 60px rgba(139,92,246,0.2)',
        'neon-cyan': '0 0 20px rgba(34,211,238,0.5), 0 0 60px rgba(34,211,238,0.2)',
        'neon-blue': '0 0 20px rgba(59,130,246,0.5), 0 0 60px rgba(59,130,246,0.2)',
        glass: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glass-lg': '0 24px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12)',
      },
    },
  },
  plugins: [],
}
