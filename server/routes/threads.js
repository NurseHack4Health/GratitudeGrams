const express = require('express');

const router = express.Router();

const { Thread, User } = require('../../database/index');

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const filter = { userIds: userId };
  const projection = '-messages';
  Thread.find(filter, projection)
    .then((threads) => {
      res.send(threads);
    });
});

router.post('/:threadId', (req, res) => {
  const {
    content,
    resource,
    sender,
    recipient,
  } = req.body;
  Promise.resolve(req.params.threadId)
    .then((threadId) => {
      if (threadId === 'new') {
        const thread = new Thread({
          usernames: [sender, recipient],
          userIds: [],
          messages: [],
        });
        return thread.save();
      }
      return Thread.findById(threadId);
    })
    .then((thread) => {
      thread.messages.push({
        senderId: 
      });
    });
});

module.exports = router;
