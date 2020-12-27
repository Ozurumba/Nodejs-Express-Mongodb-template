/* eslint-disable import/newline-after-import */
// imports
const express = require('express');
const router = express.Router();


// Controllers
const authCtrl = require('../controllers/auth');

// admin routes
router.get('/', authCtrl.home);
module.exports = router;
