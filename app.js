/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
// imports
const express = require('express');
const app = express();
const cors = require('cors');
const useragent = require('express-useragent');
const { database } = require('./config/db');

const dotenv = require('dotenv');
dotenv.config();

// routes
const auth = require('./routes/auth');

// eslint-disable-next-line no-unused-vars
const { resolve } = require('path');

// extracts the JSON object from the request
const bodyParser = require('body-parser');

// user agent
app.use(useragent.express());

// Using body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// cors
const isProduction = process.env.NODE_ENV === 'production';
// eslint-disable-next-line consistent-return
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // for preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});
app.use('/', home);
app.use(`/${process.env.VERSION}/auth`, auth);

module.exports = app;
