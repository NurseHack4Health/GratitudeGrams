const connect = require('./connection');
const Thread = require('./models/Thread');
const User = require('./models/User');
const messageSchema = require('./models/messageSchema');

module.exports = {
  connect,
  Thread,
  User,
  messageSchema,
};
