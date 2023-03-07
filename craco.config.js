const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    alias: {
      '@modules': path.resolve(__dirname, "src/modules/"),
      '@pages': path.resolve(__dirname, "src/pages/"),
      '@components': path.resolve(__dirname, "src/components/"),
      '@utils': path.resolve(__dirname, "src/utils/"),
      '@assets': path.resolve(__dirname, "src/assets/"),
      '@fonts': path.resolve(__dirname, "src/fonts/"),
      '@styles': path.resolve(__dirname, "src/assets/css/"),
      '@images': path.resolve(__dirname, "src/assets/images/"),
    }
  }
};