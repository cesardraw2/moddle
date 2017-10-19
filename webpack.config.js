var path = require('path');

var webpack = require('webpack');

module.exports = {
  entry: {
    'bundle': [ './lib/index.js' ],
    'bundle.min': [ './lib/index.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'Moddle',
    libraryTarget: 'umd'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            [ 'env', { loose: true, modules: false } ]
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      parallel: true
    })
  ],
  devtool: 'source-map'
};