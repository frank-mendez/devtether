const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommunitySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String
  },
  stackoverflow: {
    type: String
  },
  github: {
    type: String
  },
  sitepoint: {
    type: String
  },
  bitbucket: {
    type: String
  },
  reddit: {
    type: String
  },
  dzone: {
    type: String
  },
  hackernews: {
    type: String
  },
  treehouse: {
    type: String
  },
  others: [
    {
      name: {
        type: String
      }
    }
  ]
});

module.exports = Community = mongoose.model('network', CommunitySchema);
