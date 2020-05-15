require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log('Server listening on port', PORT));
