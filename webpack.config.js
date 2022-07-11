const path = require('path')

module.exports = {
  // mode:"production",
  entry: './src/service_worker/background.js',
  output: {
    filename: 'build/service_worker/background.js',
    path: path.resolve(__dirname, '.'),
  }
}