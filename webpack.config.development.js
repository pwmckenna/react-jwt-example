'use strict';

var path = require('path');
var webpack = require('webpack');
var address = require('network-address')();
var hotPort = 3002;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var rimraf = require('rimraf');
rimraf.sync('public/build');

module.exports = {
  devtool: 'eval',
  devServer: true,
  debug: true,
  entry: [
    'webpack-dev-server/client?http://' + address + ':' + hotPort,
    'webpack/hot/dev-server',
    './src/client/app.js'
  ],
  output: {
    path: path.join(__dirname, '/public/build/'),
    filename: 'bundle.js',
    publicPath: 'http://' + address + ':' + hotPort + '/build/'
  },
  resolve: {
    extensions: ['', '.js', 'json']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract("css-loader!stylus-loader")
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("main.css")
  ],
  _hotPort: hotPort
};
