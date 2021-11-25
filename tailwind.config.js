module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      'pages/**/*.{js,ts,jsx,tsx}',
      'helper/**/*.{js,ts,jsx,tsx}',
      'components/**/*.{js,ts,jsx,tsx}',
      'stores/**/*.{js,ts,jsx,tsx}'
    ]
  },
  darkMode: false,
  theme: {
    screens: {
      'xs': '0px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      primary: ['Open Sans', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      secondary: ['proxima-nova', 'sans-serif'],
    },
    extend: {
      colors: {
        prim: {
          50: '#4DCAAC',
          100: '#4DCAAC',
          200: '#4DCAAC',
          300: '#4DCAAC',
          400: '#4DCAAC',
          500: '#4DCAAC',
          600: '#4DCAAC',
          700: '#4DCAAC',
          800: '#4DCAAC',
          900: '#4DCAAC',
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
