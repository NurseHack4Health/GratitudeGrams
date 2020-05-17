const express = require('express');

const router = express.Router();

const { User } = require('../../database/index');

// Get all information for a user
router.get('/:userId', (req, res) => {
  const filter = { userId: req.params };

  User.find(filter)
    .then((user) => res.send(user))
});

