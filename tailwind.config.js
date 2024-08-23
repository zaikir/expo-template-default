const colors = require('./src/theme/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    spacing: { 1: 'var(--spacing-1)' },
    fontFamily: {
      inter: ['Inter'],
    },
    extend: {
      colors,
    },
  },
  plugins: [],
};
