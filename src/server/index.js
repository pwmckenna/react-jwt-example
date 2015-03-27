'use strict';

const env = process.env.NODE_ENV || 'development';

import http from 'http';
import path from 'path';
import cors from 'cors';
import address from 'network-address';
import api from './api';
import logger from './logger';
import app from './app';

let js = 'http://0.0.0.0:3002/build/bundle.js';
let css = 'http://0.0.0.0:3002/build/main.css';

if (app.get('env') === 'development') {
  // run webpack dev server
  require('../../dev-tools');
}

if (app.get('env') === 'production') {
  let webpackBuildStats = require('../../public/build/webpackBuildStats');
  js = `/build/bundle-${webpackBuildStats.hash}.min.js`; // jscs:disable
  css = `/build/main-${webpackBuildStats.hash}.min.css`; // jscs:disable
}

// register apis
app.use('/api', api);

// react-router will take care of the rest
app.use('*', (req, res) => {
  res.render('index', {
    js: js,
    css: css
  });
});

app.use((err, req, res, next) => {/* eslint no-unused-vars:0 */
  logger.error({
    err: err.stack
  });
  res.status(err.statusCode);
  res.send({
    error: err.message || 'Unexpected error'
  });
});

app.listen(app.get('port'), () => {
  logger.info(`Demo app is listening on ${address()}:${app.get('port')} env=${env}`); // jscs:disable
});
