const express = require('express');
const router = express.Router();

//Add middleware auth
const auth = require('../../middleware/auth');

const User = require('../../models/User');

// @route GET api/auth
// @desc Test Auth Route
// @access Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {}
});

module.exports = router;
