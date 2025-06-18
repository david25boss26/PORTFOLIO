/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mercedes-black': '#000000',
        'mercedes-silver': '#C8CCCE',
        'mercedes-dark-gray': '#565F64',
        'mercedes-teal': '#00A19B',
        'mercedes-white': '#FFFFFF',
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