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

const threadSchema = new mongoose.Schema({
  threadId: String,
  participant1: String,
  participant2: String,
  messages: [messageSchema],
});

const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;
