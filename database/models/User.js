const mongoose = require('mongoose');
const transactionSchema = require('./Transaction');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: String,
  email: {
    type: String,
    required: true,
  },
  displayName: String,
  availableGiveResources: {
    soil: {
      type: Number,
      default: 2,
      min: 0,
      max: 2,
    },
    sun: {
      type: Number,
      default: 1,
      min: 0,
      max: 1,
    },
    water: {
      type: Number,
      default: 3,
      min: 0,
      max: 3,
    },
  },
  tree: {
    size: {
      type: Number,
      default: 0,
      min: 0,
    },
    soil: {
      type: Number,
      default: 0,
      min: 0,
    },
    sun: {
      type: Number,
      default: 0,
      min: 0,
    },
    water: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  fruitPoints: {
    type: Number,
    default: 0,
    min: 0,
  },
  transactionHistory: [transactionSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
