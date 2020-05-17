require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database/index');

const threads = require('./routes/threads');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/threads', threads);

db.connect(() => {
  app.listen(PORT, () => console.log('Server listening on port', PORT));
});
