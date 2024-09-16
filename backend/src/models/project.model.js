const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for projects
const projectSchema = new Schema({
  name: { type: String},
  description: { type: String },
  category: { type: String, enum: ['Design', 'Developer', 'Test', 'Android', 'SEO', 'iOS']},
  created_date: { type: Date, default: Date.now },
  due_date: { type: Date },
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed', 'On Hold'], default: 'Not Started' },
  completion: { type: Number, min: 0, max: 100, default: 0 }, 
  cost: { type: Number, default: 0 },
}, { collection: 'tms_project' });

// Create the Project model from the schema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
