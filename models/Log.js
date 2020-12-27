const mongoose = require('mongoose');

const log = new mongoose.Schema({
  action: { type: String, required: true, default: '' },
  user: { type: String, required: false, default: '' },
  status: { type: String, required: false, default: '' },
  createdAt: { type: Number },
});

module.exports = mongoose.model('Log', log);
