const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// connection
const database = mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB Successfully'),
);

module.exports = database;
