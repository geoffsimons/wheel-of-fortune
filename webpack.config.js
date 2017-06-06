'use strict';

const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// TODO: dotenv load
const production = process.env.NODE_ENV === 'production';

const devPlugins = production ? [] : [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './app/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    ...devPlugins,
    new ExtractTextPlugin('dist/index.css'),
    new HTMLPlugin({
      template: 'index.html',
      inject: 'body',
      filename: 'index.html'
    })
  ],
  resolve: {
    // alias: { debug: './app/util/debug.js' }, //NOT WORKING
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  }
};
