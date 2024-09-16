const mongoose = require('mongoose');
const Project = require('../models/project.model');

const getProjectByID = async (req, res) => {
    const projectID = req.params.projectID;
  try {
    const project = await Project.findById(projectID);
    // console.log("project",project);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }else{
        return res.status(200).json(project);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching project data', error: err });
  }
};

const getAllProjects = async (req, res) => {
    try {
      const { status } = req.query;
      var projects = ''
      if (!status) {
        projects = await Project.find({});
      }else{
        projects = await Project.find({ status: new RegExp(status, 'i') });
      }

      if (!projects) {
        return res.status(404).json({ message: 'Projects not found' });
      }
      else{
        return res.status(200).json(projects);
      }

    } catch (err) {
      res.status(500).json({ message: 'Error fetching project data', error: err });
    }
  };

  const insertProject = async (req, res) => {
    try {
      const project = await Project.create(req.body);
      if (!project) {
        return res.status(404).json({ message: 'Not Able to insert project data' });
      }
      else{
        return res.status(200).json(project);
      }
     
    } catch (err) {
      res.status(500).json({ message: 'Error inserting project data', error: err });
    }
  };

  const updateProject = async (req, res) => {
    try {
      const { projectID } = req.params; 
      if (!mongoose.Types.ObjectId.isValid(projectID)) {
        return res.status(400).json({ message: 'Invalid project ID' });
      }
      const updateData = req.body;
      const updatedProject = await Project.findByIdAndUpdate(
        projectID,
        { $set: updateData },  
        { new: true }         
      );
      if (!updatedProject) {
        return res.status(404).json({ message: 'Not able to update Project Data.' });
      }
      else{
        return res.status(200).json({ message: 'Project Data updated successfully', project: updatedProject });
      }
     
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  };

module.exports = { getProjectByID , getAllProjects , insertProject , updateProject};
