// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getProjectByID , getAllProjects , insertProject , updateProject} = require('../controllers/projectController');

// Route to get user by email and password
router.post('/:projectID', getProjectByID);
router.get('/getAll', getAllProjects);

router.post('/insert', insertProject);
router.put('/:projectID/update', updateProject);

module.exports = router;
