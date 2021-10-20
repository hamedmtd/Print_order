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
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
