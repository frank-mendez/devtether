const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  //Connect to a user
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  edited: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
