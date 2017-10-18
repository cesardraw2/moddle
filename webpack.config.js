var path = require('path');

var webpack = require('webpack');

var LodashPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'Moddle',
    libraryTarget: 'umd'
  },
  target: 'node',
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.js$/
    }]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new LodashPlugin({
      'collections': true
    })
  ],
  devtool: 'source-map'
};