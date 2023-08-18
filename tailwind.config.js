import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      neutral: colors.neutral,
      red: colors.red,
      green: colors.green,
      pop: '#469269',
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
};
