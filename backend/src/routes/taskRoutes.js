// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getTaskByID , getAllTasks , insertTask , updateTask} = require('../controllers/taskController');

// Route to get user by email and password
router.get('/getTaskByID', getTaskByID);
router.get('/getAll', getAllTasks);
router.post('/insert', insertTask);
router.put('/:taskID/update', updateTask);

module.exports = router;
