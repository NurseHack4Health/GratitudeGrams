const mongoose = require('mongoose');
const messageSchema = require('./messageSchema');

const threadSchema = new mongoose.Schema({
  usernames: [String],
  userIds: [mongoose.ObjectId],
  messages: [messageSchema],
});

const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;
