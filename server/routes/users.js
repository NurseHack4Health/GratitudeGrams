const express = require('express');

const router = express.Router();

const { User, Thread } = require('../../database/index');

router.get('/search', (req, res) => {
  const {
    searchText,
  } = req.query;
  console.log(searchText);
  User.find({ username: new RegExp(searchText, 'i') }, '_id, username', { limit: 10 })
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(400).send('Error searching usernames', err));
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const projection = '-password';
  User.findById(userId, projection)
    .then((user) => res.send(user));
});

router.post('/', (req, res) => {
  const {
    username,
    password,
    email,
    refererId,
  } = req.body;
  User.find({ username })
    .then((user) => {
      if (user.length) {
        throw new Error('Username already taken');
      }
    })
    .then(() => {
      const newUser = new User({
        username,
        password,
        email,
      });
      return newUser.save();
    })
    .then(({ _id }) => {
      if (refererId) {
        const thread = new Thread({
          userIds: [_id, refererId],
          messages: [{
            senderId: refererId,
            recipientId: _id,
            seen: false,
            resource: 'seed',
            resourceClaimed: false,
            type: 'referral',
          }],
        });
        return thread.save();
      }
      return null;
    })
    .then(() => {
      res.status(201).send();
    })
    .catch((err) => {
      console.log(err.toString());
      res.status(400).send(err.toString());
    });
});

module.exports = router;
