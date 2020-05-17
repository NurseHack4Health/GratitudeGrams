const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  prizeId: mongoose.ObjectId,
  prizeCost: {
    type: Number,
    default: 0,
    min: 0,
  },
},
{
  timestamps: {
    createdAt: 'created_at',
  },
});

module.exports = transactionSchema;
