// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getNotification , updateNotification } = require('../controllers/notificationController');

// Route to get user by email and password
router.get('/:userID', getNotification);
router.put('/:userID/update', updateNotification);

module.exports = router;
