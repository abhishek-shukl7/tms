const mongoose = require('mongoose');
const Notification = require('../models/notification.model');

const getNotification = async (req, res) => {
    const userID = req.params.userID;
    // const userObjectId = mongoose.Types.ObjectId(userID);
    // console.log("userid",userID);
  try {
    const notification = await Notification.find({user_id:userID});
    console.log("notification",notification);
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }else{
        return res.status(200).json(notification);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user data', error: err });
  }
};

const updateNotification = async (req, res) => {
  try {
    const { userID } = req.params; 
    const updateData = req.body;
    const updatedUser = await Notification.findOneAndUpdate(
      { user_id: userID },
      { $set: updateData },  
      { new: true }         
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'Not able to update Notification.' });
    }
    else{
      return res.status(200).json({ message: 'Notification updated successfully', user: updatedUser });
    }
   
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};


module.exports = { getNotification , updateNotification };
