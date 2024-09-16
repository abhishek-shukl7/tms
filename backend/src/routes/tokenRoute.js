// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getToken,removeToken } = require('../controllers/tokenController');

router.post('/', getToken);
router.post('/logout', removeToken);

module.exports = router;
