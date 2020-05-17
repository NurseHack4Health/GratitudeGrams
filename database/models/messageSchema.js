const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: mongoose.ObjectId,
  recipient: mongoose.ObjectId,
  seen: Boolean,
  time: Date,
  resource: String,
  resourceClaimed: false,
  type: String,
  content: String,
},
{
  timestamps: {
    createdAt: 'created_at',
  },
});

module.exports = messageSchema;
