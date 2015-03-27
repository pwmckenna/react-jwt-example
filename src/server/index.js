'use strict';

const env = process.env.NODE_ENV || 'development';

import http from 'http';
import path from 'path';
import cors from 'cors';
import address from 'network-address';
import api from './api';
import logger from './logger';
import app from './app';

let jsBundle = 'http://0.0.0.0:3002/build/bundle.js';

if (app.get('env') === 'development') {
  // run livereload and webpack dev server
  require('../../webpack-devserver');
}

if (app.get('env') === 'production') {
  let webpackBuildStats = require('../../public/build/webpackBuildStats');
  jsBundle = `/build/${webpackBuildStats.assetsByChunkName.js}`; // jscs:disable
}

// register apis
app.use('/api', api);

// react-router will take care of the rest
app.use('*', (req, res) => {
  res.render('index', {
    jsBundle: jsBundle
  });
});

app.listen(app.get('port'), () => {
  logger.info(`Demo app is listening on ${address()}:${app.get('port')} env=${env}`); // jscs:disable
});
