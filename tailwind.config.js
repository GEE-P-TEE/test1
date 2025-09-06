/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dify-blue': '#2563eb',
        'trello-blue': '#0079bf',
        'success-green': '#059669',
        'neutral-gray': '#6b7280',
        'light-gray': '#f3f4f6',
        'dark-gray': '#374151',
        'warning-orange': '#d97706',
        'error-red': '#dc2626',
        'info-blue': '#0ea5e9'
      },
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'mono': ['SF Mono', 'Monaco', 'Cascadia Code', 'monospace']
      },
      animation: {
        'pulse-scale': 'pulse-scale 0.3s ease-in-out',
        'shake': 'shake 0.3s ease-in-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'fade-in': 'fade-in 0.2s ease-out'
      },
      keyframes: {
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' }
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}