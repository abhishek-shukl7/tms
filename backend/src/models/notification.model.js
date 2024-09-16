const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for notifications
const notificationSchema = new Schema({
  email: { type: Boolean, default: false },
  sms: { type: Boolean, default: false },
  email_when: {
    type: String,
    enum: [
      'You have new notifications.',
      "You're sent a direct message",
      'Someone adds you as a connection'
    ],
  },
  escalate_email: {
    type: String,
    enum: [
      'Upon new order',
      'New membership approval',
      'Member registration'
    ],
  },
  user_id: { type: String },
  // user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { collection: 'tms_notification' });

// Create the Notification model from the schema
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
