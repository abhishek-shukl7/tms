const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const Token = require('../models/token.model');
const client = require('../../config/redisClient');

const getToken = async (req, res) => {
  const { email, password } = req.body;
  const userEmail = email.trim();
  try {
    const user = await User.findOne({ email : userEmail });
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.user_password);

    if(isMatch){
        const token = jwt.sign({ user_id: user._id }, 'AbhishekTMS@123', { expiresIn: '1h' });
        let user_id = user._id;
        const tokenEntry = new Token({
            user_id: user._id,
            token: token
        });

        await tokenEntry.save();
        
        res.status(200).json({user_id,token});
    }else{
        return res.status(401).json({ message: 'Invalid password' });
    }
    // user.comparePassword(password, (err, isMatch) => {
    //   if (err) return res.status(500).json({ message: 'Error comparing passwords' });
    //   if (!isMatch) return res.status(401).json({ message: 'Invalid password' });
    //   res.status(200).json(user);
    // });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user data', error: err });
  }
};


const removeToken = async (req, res) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(400).json({ message: 'No token provided' });
  }

  // Add token to blacklist with an expiry time matching the token's remaining time
  client.set(token, 'blacklisted', 'EX', 3600, (err) => {
    if (err) {
      console.error('Error setting token in Redis:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    res.status(200).json({ message: 'Successfully logged out' });
  });
};

  
module.exports = { getToken , removeToken};
