const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NetworkSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  friends: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
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
      }
    }
  ],
  following: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    }
  ]
});

module.exports = Network = mongoose.model('network', NetworkSchema);
