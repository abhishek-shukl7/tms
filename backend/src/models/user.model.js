const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for tms_user
const userSchema = new Schema({
  profile_image: { type: String },
  first_name: { type: String },
  last_name: { type: String },
  username: { type: String },
  gender: { type: String },
  DOB: { type: String },
  marital_status: { type: String },
  phone_num: { type: String },
  email: { type: String },
  country: { type: String },
  full_address: { type: String },
  status: { type: String },
  join_date: { type: String },
  languages: [String], // Array of strings
  total_experience: { type: String },
  total_awards: { type: Number },
  total_certificate: { type: Number },
  event_participated: { type: Number },
  social_links: {type : Object}, // Array of social links
  profile_summary: { type: String },
  education: [String], // Array of education details
  experience: [String], // Array of experience details
  user_type: { type: String },
  user_role: { type: String },
  skill_name: { type: String }, 
  skill_proficiency: { type: String }, 
  user_password: { type: String }, // Password field
}, { collection: 'tms_user' });

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
