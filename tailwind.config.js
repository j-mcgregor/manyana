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
        link: '#983A5D',
        black: '#010101',
        'dark-violet': '#221C2B',
        'light-violet': '#69526D',
        puce: '#C58193',
        apricot: '#FEBC6A',
        'blue-purple': '#B4B6F5',
        lavender: '#CEC6E7',
        seashell: '#FAF1EC'
      },
      zIndex: {
        front: 99999
      },
      gridTemplateColumns: {
        layout: '150px 1fr'
      }
    },
    fontFamily: {
      'jost-regular': ['jost-regular'],
      'jost-bold': ['jost-bold'],
      'jost-extra-bold': ['jost-extra-bold'],
      koulen: ['koulen-regular'],
      'roboto-light': ['roboto-slab-light'],
      'roboto-thin': ['roboto-slab-thin'],
      'roboto-bold': ['roboto-slab-bold'],
      'roboto-regular': ['roboto-slab-regular']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
};
