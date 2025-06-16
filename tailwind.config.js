/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'f1-red': '#E10600',
        'f1-black': '#15151E',
        'f1-white': '#FFFFFF',
        'f1-gold': '#FFD700',
        'f1-gray': '#1E1E1E',
        'f1-light-gray': '#2A2A2A',
      },
      fontFamily: {
        'f1': ['Formula1', 'sans-serif'],
      },
      backdropBlur: {
        'glass': '10px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 