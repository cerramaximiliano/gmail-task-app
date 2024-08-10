const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  sender: String,
  subject: String,
  body: String,
  attachments: Array,
  receivedAt: Date,
});

module.exports = mongoose.model('Email', emailSchema);
