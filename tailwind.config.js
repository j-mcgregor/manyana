module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.js',
    './components/**/*.jsx',
    './components/**/*.tsx',
    './components/**/*.ts',
    './pages/**/*.js',
    './pages/**/*.ts',
    './pages/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        link: '#983A5D'
      },
      zIndex: {
        front: 99999
      }
    },
    fontFamily: {
      'jost-regular': ['jost-regular'],
      'jost-bold': ['jost-bold'],
      'jost-extra-bold': ['jost-extra-bold']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
};
