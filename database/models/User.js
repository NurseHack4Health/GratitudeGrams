const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  avatar: String,
  email: String,
  displayName: String,
  availableGiveResources: {
    soil: Number,
    sun: Number,
    water: Number,
  },
  tree: {
    size: Number,
    soil: Number,
    sun: Number,
    water: Number,
  },
  fruitPoints: Number,
  transactionHistory: [
    {
      transactionId: String,
      prizeId: String,
      prizeCost: Number,
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
