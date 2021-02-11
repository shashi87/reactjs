module.exports = {
  webpack: {
    configure: {
        devtool: 'eval-source-map'
    }
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}