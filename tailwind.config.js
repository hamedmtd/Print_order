const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    // enabled: process.env.NODE_ENV !== 'development',
    content: [
      'pages/**/*.{js,ts,jsx,tsx}',
      'helper/**/*.{js,ts,jsx,tsx}',
      'components/**/*.{js,ts,jsx,tsx}',
      'stores/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      safelist: [/^bg-/, /^text-/, /^ring-/, /^border-/, /^hover:border-/, /^focus:ring-/, /^hover:text-/, /^hover:bg-/, /^group-hover:bg-/, /^group-hover:text-/, /^group-hover:border-/],
    }
  },
  darkMode: false,
  theme: {
    screens: {
      'xs': '0px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      primary: ['Open Sans', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      secondary: ['proxima-nova', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          50: '#2780B1',
          100: '#2780B1',
          200: '#2780B1',
          300: '#2780B1',
          400: '#2780B1',
          500: '#2780B1',
          600: '#2780B1',
          700: '#2780B1',
          800: '#2780B1',
          900: '#2780B1',
        },
        text: {
          50: '#393C40',
          100: '#393C40',
          200: '#393C40',
          300: '#393C40',
          400: '#393C40',
          500: '#393C40',
          600: '#393C40',
          700: '#393C40',
          800: '#393C40',
          900: '#393C40',
        },
        lightgray: {
          50: '#D2D2D2',
          100: '#D2D2D2',
          200: '#D2D2D2',
          300: '#D2D2D2',
          400: '#D2D2D2',
          500: '#D2D2D2',
          600: '#D2D2D2',
          700: '#D2D2D2',
          800: '#D2D2D2',
          900: '#D2D2D2',
        },
        gray: {
          50: '##B0B0B0',
          100: '##B0B0B0',
          200: '##B0B0B0',
          300: '##B0B0B0',
          400: '##B0B0B0',
          500: '##B0B0B0',
          600: '##B0B0B0',
          700: '##B0B0B0',
          800: '##B0B0B0',
          900: '##B0B0B0',
        },
        lighttext: {
          50: '#C4D5EF',
          100: '#C4D5EF',
          200: '#C4D5EF',
          300: '#C4D5EF',
          400: '#C4D5EF',
          500: '#C4D5EF',
          600: '#C4D5EF',
          700: '#C4D5EF',
          800: '#C4D5EF',
          900: '#C4D5EF',
        },
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};