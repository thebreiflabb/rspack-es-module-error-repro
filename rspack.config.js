const path = require('path');

module.exports = {
  entry: {
    add: './src/add.js',
  },
  target: 'es2020',
  output: {
    filename: '[name].bundle.mjs',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module',
    },
  },
};
