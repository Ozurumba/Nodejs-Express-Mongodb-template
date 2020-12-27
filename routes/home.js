/* eslint-disable import/newline-after-import */
// imports
const express = require('express');
const router = express.Router();


// Controllers
const hardwareCtrl = require('../controllers/hardware');

// admin routes
router.get('/', hardwareCtrl.home);
module.exports = router;
