/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F8FAFC',
        surface: '#FFFFFF',
        primary: '#2563EB',
        'primary-light': '#EFF6FF',
        secondary: '#0F172A',
        accent: '#F43F5E',
        'accent-light': '#FFF1F2',
        textPrimary: '#111827',
        textSecondary: '#4B5563',
        textMuted: '#9CA3AF',
        border: '#E5E7EB',
        'border-light': '#F3F4F6',
      },
      fontFamily: {
        arabic: ['Cairo', 'Tajawal', 'IBM Plex Sans Arabic', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 20px rgba(0,0,0,0.12), 0 8px 32px rgba(0,0,0,0.06)',
        'primary-glow': '0 4px 20px rgba(37,99,235,0.2)',
        'nav': '0 1px 0 #E5E7EB, 0 4px 16px rgba(0,0,0,0.04)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563EB, #F43F5E)',
        'gradient-hero': 'linear-gradient(160deg, #F8FAFC 0%, #EFF6FF 55%, #F8FAFC 100%)',
        'gradient-section': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'badge-pulse': 'badge-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'badge-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
