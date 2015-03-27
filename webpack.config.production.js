'use strict';

var path = require('path');
var webpack = require('webpack');
var StatsPlugin = require('stats-webpack-plugin');
var rimraf = require('rimraf');
rimraf.sync('public/build');

module.exports = {
  entry: {
    'js': './src/client/app.js'
  },
  output: {
    path: path.join(__dirname, '/public/build/'),
    filename: 'bundle-[hash].min.js'
  },
  resolve: {
    extensions: ['', '.js', 'json']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  plugins: [
    new StatsPlugin(
      path.join(__dirname, 'public/build', 'webpackBuildStats.json'), {
        source: false,
        modules: false
      }
    )
  ]
};
