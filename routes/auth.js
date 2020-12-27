/* eslint-disable import/newline-after-import */
// imports
const express = require('express');
const router = express.Router();

// middlewares

// Controllers
const authCtrl = require('../controllers/auth');


// admin routes
router.post('/login', authCtrl.login);

module.exports = router;
