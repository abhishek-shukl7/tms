const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId, // Assuming user_id is stored as an ObjectId
    required: true,
    ref: 'User', // Reference to the User model
  },
  token: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
    expires: '1h', // Token will expire after 1 hour
  },
});

module.exports = mongoose.model('Token', TokenSchema);
