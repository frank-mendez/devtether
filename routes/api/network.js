const express = require('express');
const router = express.Router();

// @route GET api/auth
// @desc Test Auth Route
// @access Public
router.get('/', (req, res) => res.send('Network Route'));

module.exports = router;