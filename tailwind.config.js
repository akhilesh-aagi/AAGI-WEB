/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#b9ddff',
          300: '#7cc3ff',
          400: '#36a5ff',
          500: '#0088ff',
          600: '#0066ff',
          700: '#0052cc',
          800: '#0042a3',
          900: '#003380',
        },
        secondary: {
          50: '#f5f7ff',
          100: '#ebf0ff',
          200: '#d6e0ff',
          300: '#adc3ff',
          400: '#839fff',
          500: '#4d6fff',
          600: '#3451db',
          700: '#2a41b3',
          800: '#23358f',
          900: '#1d2b73',
        },
        dark: {
          100: '#1a1b1e',
          200: '#141517',
          300: '#101113',
          400: '#0c0d0e',
          500: '#080909',
          600: '#040505',
          700: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 4s ease-in-out infinite',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-hover': '0 16px 48px rgba(0, 0, 0, 0.15)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-dark-hover': '0 16px 48px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};