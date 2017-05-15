'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './app/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
