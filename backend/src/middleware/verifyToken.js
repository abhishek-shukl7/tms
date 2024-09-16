const jwt = require('jsonwebtoken');
const secretKey = 'AbhishekTMS@123'; 
const client = require('../../config/redisClient.js');

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).json({ status: 403, message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Ensure Redis client is connected before using
    if (!client.status || client.status !== 'ready') {
      console.error('Redis client is not connected');
      return res.status(500).json({ message: 'Redis client not connected' });
    }

    // Check if the token is blacklisted
    const reply = await client.get(token);

    if (reply === 'blacklisted') {
      return res.status(401).json({ message: 'Token has been blacklisted' });
    }

    // Verify the token
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid or expired token' });
      }

      req.userId = decoded.userId;
      next();
    });
  } catch (err) {
    console.error('Redis error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = verifyToken;
