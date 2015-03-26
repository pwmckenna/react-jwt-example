'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.development.js');

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  quiet: true,
  stats: {
    colors: true
  },
  historyApiFallback: true
}).listen(webpackConfig._hotPort, function (err) {
  if (err) {
    throw err;
  }
  console.log('webpack dev server listening on %s', webpackConfig._hotPort);
});
