const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const getUserById = async (req, res) => {
  try {
    const { userID } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userID)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }
    const user = await User.findById(userID);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
   
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user data', error: err });
  }
};

const getAllUsers = async (req, res) => {
    try {
      const users = await User.find({},'profile_image first_name last_name username email full_address status user_type user_role');
    //   console.log("user",users);
      if (!users) {
        return res.status(404).json({ message: 'Users not found' });
      }
      else{
        return res.status(200).json(users);
      }
     
    } catch (err) {
      res.status(500).json({ message: 'Error fetching user data', error: err });
    }
  };

const insertUser = async (req, res) => {
  try {
    const {
      profile_image,
      first_name,
      last_name,
      username,
      gender,
      DOB,
      marital_status,
      phone_num,
      email,
      country,
      full_address,
      status,
      join_date,
      languages,
      total_experience,
      total_awards,
      total_certificate,
      event_participated,
      social_links,
      profile_summary,
      education,
      experience,
      user_type,
      user_role,
      skill_name,
      skill_proficiency,
      user_password
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    const hashedPassword = await bcrypt.hash(user_password, 10);

    const newUser = new User({
      profile_image,
      first_name,
      last_name,
      username,
      gender,
      DOB,
      marital_status,
      phone_num,
      email,
      country,
      full_address,
      status,
      join_date,
      languages,
      total_experience,
      total_awards,
      total_certificate,
      event_participated,
      social_links,
      profile_summary,
      education,
      experience,
      user_type,
      user_role,
      skill_name,
      skill_proficiency,
      user_password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({user : newUser, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
  };

const updateUser = async (req, res) => {
    try {
      const { userID } = req.params; 
      if (!mongoose.Types.ObjectId.isValid(userID)) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }
      const updateData = req.body;
      const updatedUser = await User.findByIdAndUpdate(
        userID,
        { $set: updateData },  
        { new: true }         
      );
      if (!updatedUser) {
        return res.status(404).json({ message: 'Not able to update User' });
      }
      else{
        return res.status(200).json({ message: 'User updated successfully', user: updatedUser });
      }
     
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  };

module.exports = { getUserById , getAllUsers , insertUser , updateUser};
