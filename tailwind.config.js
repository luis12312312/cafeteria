/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        cafe: {
          50: '#f8f2ea',
          100: '#f5efe7',
          200: '#eadfce',
          300: '#e0cfb7',
          400: '#d0b797',
          500: '#c39f79',
          600: '#8b5e34',
          700: '#6b4f3b',
          800: '#3c2a21',
          900: '#211912',
        },
        tinta: '#1f1713',
      },
      boxShadow: {
        suave: '0 10px 30px rgba(33, 25, 19, 0.12)',
      },
      backgroundImage: {
        'vignette': 'radial-gradient(120% 80% at 50% 0%, rgba(33,25,19,0.12), transparent 60%)',
        'paper': 'linear-gradient(to bottom, rgba(255,255,255,0.35), rgba(255,255,255,0.2))',
      },
    },
  },
  plugins: [],
}

