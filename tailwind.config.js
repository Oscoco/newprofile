module.exports = {
    content: [
      './*html',
      './pages/**/*.{html,js}'],
    theme: {
      extend: {
        backgroundImage: theme => ({
          'wave-pattern': 'url(../img/oskar.jpg)', 
        }),
      },
    },
    plugins: [],
  }