// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getUserById , getAllUsers , insertUser , updateUser} = require('../controllers/userController');

router.get('/getUser/:userID', getUserById);
router.get('/getAll', getAllUsers);

router.post('/insert', insertUser);
router.put('/:userID/update', updateUser);

module.exports = router;
