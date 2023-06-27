import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      neutral: colors.neutral,
      pop: colors.green,
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
};
