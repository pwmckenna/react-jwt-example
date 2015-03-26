'use strict';

import http from 'http';
import path from 'path';
import cors from 'cors';
import express from 'express';
import address from 'network-address';
import favicon from 'serve-favicon';
import compression from 'compression';
import bunyan from 'bunyan';
import bformat from 'bunyan-format';
import helmet from 'helmet';
import config from '../config';

const port = config.port;
const publicFolder = path.join(__dirname, '../../', 'public');

const app = express();

app.set('port', port);
app.set('view engine', 'jade');
app.set('views', path.join(process.cwd(), 'src/server/views'));
app.use(compression());
app.use(favicon(path.join(publicFolder, 'favicon.ico')));
app.use(express.static(publicFolder));
app.use(cors());
app.use(helmet.xframe());
app.use(helmet.xssFilter());
app.use(helmet.nosniff());
app.use(helmet.ienoopen());
app.use(helmet.hidePoweredBy());

export default app;
