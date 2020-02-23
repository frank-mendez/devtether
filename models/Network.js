const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NetworkSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String
  },
  friends: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      name: {
        type: String
      },
      status: {
        type: String,
        default: 'pending'
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  friendrequests: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      name: {
        type: String
      },
      status: {
        type: String,
        default: 'pending'
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  followers: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      name: {
        type: String
      }
    }
  ],
  following: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      name: {
        type: String
      }
    }
  ]
});

module.exports = Network = mongoose.model('network', NetworkSchema);
