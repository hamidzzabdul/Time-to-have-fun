let path = require('path')

module.exports = {
    entry: './Public/js/index.js',
    mode: 'production',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public')
    }
  };