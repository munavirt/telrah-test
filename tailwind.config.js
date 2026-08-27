/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#4C2D2B',
          50: '#FBF8F8',
          100: '#F6EFEF',
          200: '#E8D9D8',
          300: '#D4B8B6',
          400: '#A07876',
          500: '#7A5856',
          600: '#624341',
          700: '#4C2D2B',
          800: '#3D2422',
          900: '#2E1B1A',
        },
        cream: {
          DEFAULT: '#FAF8F5',
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F5F1EA',
          300: '#EDE7DC',
          400: '#E8DFD5',
          500: '#D9CCBC',
          600: '#C4B5A1',
          700: '#A68A7F',
          800: '#8A7066',
          900: '#6B564E',
        },
        gold: {
          DEFAULT: '#C9A96E',
          50: '#FBF7EE',
          100: '#F6EDD8',
          200: '#EDDBB0',
          300: '#E0C78B',
          400: '#D4B77C',
          500: '#C9A96E',
          600: '#B8924F',
          700: '#9A773E',
          800: '#7C5F31',
          900: '#5E4826',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 10vw, 7.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(2.5rem, 7vw, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '38': '9.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '700': '700ms',
        '1000': '1000ms',
        '1200': '1200ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        },
        'scroll-line': {
          '0%, 100%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(0.4)', transformOrigin: 'bottom' },
        },
        'image-scale': {
          '0%': { transform: 'scale(1.04)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.8s ease forwards',
        'scale-in': 'scale-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'ken-burns': 'ken-burns 20s ease-in-out infinite alternate',
        'scroll-line': 'scroll-line 2s ease-in-out infinite',
        'logo-draw': 'logo-draw 1.2s ease forwards',
        'image-scale': 'image-scale 4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
