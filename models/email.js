const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  sender: String,
  subject: String,
  body: String,
  attachments: Array,
  receivedAt: Date,
  historyId: String, // Agrega el campo historyId para almacenar el ID de historial de Gmail
});

module.exports = mongoose.model('Email', emailSchema);
