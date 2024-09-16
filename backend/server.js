const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./config/db'); 

const verifyToken = require('./src/middleware/verifyToken');

const tokenRoute = require('./src/routes/tokenRoute'); 
const userRoutes = require('./src/routes/userRoutes'); 
const projectRoutes = require('./src/routes/projectRoutes'); 
const taskRoutes = require('./src/routes/taskRoutes'); 
const notificationRoutes = require('./src/routes/notificationRoutes'); 



const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Use the routes
app.use('/api/login', tokenRoute);

app.use('/api/user',verifyToken, userRoutes); 
app.use('/api/project', verifyToken,projectRoutes);
app.use('/api/task', verifyToken,taskRoutes);
app.use('/api/notification', verifyToken,notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
