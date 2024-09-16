const mongoose = require('mongoose');
const Task = require('../models/task.model');

const getTaskByID = async (req, res) => {
    const { taskID } = req.body;
  try {
    const task = await Task.findById(taskID);
    // console.log("task",task);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }else{
        return res.status(200).json(task);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching task data', error: err });
  }
};

const getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find({});
      if (!tasks) {
        return res.status(404).json({ message: 'Tasks not found' });
      }
      else{
        return res.status(200).json(tasks);
      }
     
    } catch (err) {
      res.status(500).json({ message: 'Error fetching task data', error: err });
    }
  };

  const insertTask = async (req, res) => {
    try {
      const task = await Task.create(req.body);
      if (!task) {
        return res.status(404).json({ message: 'Not Able to insert task data' });
      }
      else{
        return res.status(200).json(task);
      }
     
    } catch (err) {
      res.status(500).json({ message: 'Error inserting task data', error: err });
    }
  };


  const updateTask = async (req, res) => {
    try {
      const { taskID } = req.params; 
      if (!mongoose.Types.ObjectId.isValid(taskID)) {
        return res.status(400).json({ message: 'Invalid Task ID' });
      }
      const updateData = req.body;
      const updatedTask = await Task.findByIdAndUpdate(
        taskID,
        { $set: updateData },  
        { new: true }         
      );
      if (!updatedTask) {
        return res.status(404).json({ message: 'Not able to update task Data.' });
      }
      else{
        return res.status(200).json({ message: 'Task Data updated successfully', project: updatedTask });
      }
     
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  };

module.exports = { getTaskByID , getAllTasks , insertTask , updateTask };
