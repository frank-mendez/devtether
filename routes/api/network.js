const express = require('express');
const router = express.Router();
const request = require('request');

const auth = require('../../middleware/auth');

const Network = require('../../models/Network');
const User = require('../../models/User');

// @route GET api/network/
// @desc Get User Network
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const network = await Network.find({ user: req.user.id });
    if (!network) return res.status(400).json({ msg: 'Network not found' });

    return res.json(network);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/network/addfriend/:friend_id
// @desc Add Friend to Network
// @access Private
router.post('/addfriend/:friend_id', auth, async (req, res) => {
  try {
    const friendToBe = await User.findById(req.params.friend_id).select(
      '-password'
    );

    //Logged in User
    const loggedinUser = await User.findById(req.user.id).select('-password');

    const friend = {
      user: req.params.friend_id,
      name: friendToBe.name
    };

    const friendrequest = {
      user: req.user.id,
      name: loggedinUser.name
    };

    let network = await Network.findOneAndUpdate(
      { user: req.user.id },
      { $push: { friends: friend } }
    );

    if (!network) return res.status(400).json({ msg: 'Network not found' });

    let userfriend = await Network.findOneAndUpdate(
      { user: req.params.friend_id },
      { $push: { friendrequests: friendrequest } }
    );

    if (!userfriend) return res.status(400).json({ msg: 'Friend not found' });

    return res.json(network);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/network/acceptfriend/:friendrequest_id/:friend_id
// @desc Accept Friend to Network
// @access Private
router.post(
  '/acceptfriend/:friendrequest_id/:friend_id',
  auth,
  async (req, res) => {
    try {
      const friendName = await User.findById(req.params.friend_id).select(
        '-password'
      );

      const friend = {
        user: req.params.friend_id,
        name: friendName.name,
        status: 'accepted'
      };
      const network = await Network.updateOne(
        {
          user: req.user.id,
          'friendrequests._id': req.params.friendrequest_id
        },
        {
          $set: { 'friendrequests.$.status': 'accepted' },
          $push: { friends: friend }
        }
      );

      if (!network) return res.status(400).json({ msg: 'Network not found' });

      const updateFriendRequest = await Network.updateOne(
        { user: req.params.friend_id, 'friends.user': req.user.id },
        { $set: { 'friends.$.status': 'accepted' } }
      );

      if (!updateFriendRequest)
        return res.status(400).json({ msg: 'Network not found' });

      return res.json(network);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route POST api/network/rejectfriend/:friendrequest_id/:friend_id
// @desc Reject Friend to Network
// @access Private
router.post(
  '/rejectfriend/:friendrequest_id/:friend_id',
  auth,
  async (req, res) => {
    try {
      const network = await Network.updateOne(
        {
          user: req.user.id,
          'friendrequests._id': req.params.friendrequest_id
        },
        {
          $set: { 'friendrequests.$.status': 'rejected' }
        }
      );

      if (!network) return res.status(400).json({ msg: 'Network not found' });

      const updateFriendRequest = await Network.updateOne(
        { user: req.params.friend_id, 'friends.user': req.user.id },
        { $set: { 'friends.$.status': 'rejected' } }
      );

      if (!updateFriendRequest)
        return res.status(400).json({ msg: 'Network not found' });

      return res.json(network);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
