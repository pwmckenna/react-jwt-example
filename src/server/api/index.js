'use strict';

import express from 'express';
import auth from './auth';

const apiRouter = express.Router();

auth(apiRouter);

export default apiRouter
