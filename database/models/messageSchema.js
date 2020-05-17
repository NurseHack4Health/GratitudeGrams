const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: mongoose.ObjectId,
  recipientId: mongoose.ObjectId,
  seen: {
    type: Boolean,
    default: false,
  },
  resource: String,
  resourceClaimed: {
    type: Boolean,
    default: false,
  },
  type: String,
  content: String,
},
{
  timestamps: {
    createdAt: 'created_at',
  },
});

module.exports = messageSchema;
