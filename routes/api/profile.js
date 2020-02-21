const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');

// @route GET api/profile/me
// @desc Get Current Profile
// @access Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['name', 'date']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/profile
// @desc Test Auth Route
// @access Private
router.post(
  '/',
  [
    auth,
    check('status', 'Status is required')
      .not()
      .isEmpty(),
    check('skills', 'Skills is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Destructre fields
    const {
      photo,
      title,
      company,
      website,
      status,
      skills,
      bio,
      githubusername,
      youtube,
      facebook,
      instagram,
      twitter,
      linkedin
    } = req.body;

    // Build profile object

    // Initialize object
    const profileFields = {};
    profileFields.user = req.user.id;

    // set profile object
    if (photo) profileFields.photo = photo;
    if (title) profileFields.title = title;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (status) profileFields.status = status;
    if (skills) profileFields.skills = skills;
    if (bio) profileFields.bio = bio;
    if (githubusername) profileFields.githubusername = githubusername;

    // initialize profile object with social
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (facebook) profileFields.social.facebook = facebook;
    if (instagram) profileFields.social.instagram = instagram;
    if (twitter) profileFields.social.twitter = twitter;
    if (linkedin) profileFields.social.linkedin = linkedin;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // Update if profile exist
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
      }

      // Create if profile does not exists
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route GET api/profile
// @desc Get All Profiles
// @access Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'date']);

    return res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route GET api/profile/user/:user_id
// @desc Get Profile by User ID
// @access Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['name', 'date']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route DELETE api/profile
// @desc Delete Profile
// @access Private
router.delete('/', auth, async (req, res) => {
  try {
    await Profile.findOneAndRemove({ user: req.user.id });
    await User.findOneAndRemove({ _id: req.user.id });

    return res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
