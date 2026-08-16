/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cardBg: '#f8fafc',
        alertError: '#f87171',
        alertSuccess: '#34d399',
        void: {
          50: '#0a0d0a',
          100: '#050605',
          950: '#000000',
        },
        omni: {
          DEFAULT: '#39ff14',
          bright: '#7cff45',
          dim: '#1a8a0a',
          dark: '#0d4d05',
          glow: 'rgba(57,255,20,0.45)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: ['Rajdhani', 'Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 8px rgba(57,255,20,0.5)',
        'glow': '0 0 20px rgba(57,255,20,0.45), 0 0 4px rgba(57,255,20,0.6)',
        'glow-lg': '0 0 40px rgba(57,255,20,0.35), 0 0 12px rgba(57,255,20,0.5)',
        'hud': 'inset 0 0 20px rgba(57,255,20,0.08), 0 0 1px rgba(57,255,20,0.6)',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        borderPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.6' },
          '94%': { opacity: '1' },
        },
      },
      animation: {
        scanline: 'scanline 3s linear infinite',
        borderPulse: 'borderPulse 2.5s ease-in-out infinite',
        flicker: 'flicker 6s linear infinite',
      },
    }
  },
  darkMode: ['class'],
  plugins: [
    require('daisyui'),
    require("tailwindcss-animate"),
  ],
  daisyui: {
    themes: ["light"],
  },
};
