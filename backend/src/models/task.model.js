const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  name: String,
  status: String,
  assigned_to: [String],
  due_date: Date,
  description: String,
  checklist: [String],
  category: String,
  project_id: String,
  files: [String],
}, { collection: 'tms_tasks' });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
