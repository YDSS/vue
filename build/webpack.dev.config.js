var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './practice/index',
    // vue: './src/index',
    // practice: './practice/index'
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'practice.js'
    // filename: 'vue.js',
    // library: 'Vue',
    // libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  },
  babel: {
    loose: 'all'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ],
  devtool: 'source-map'
}
