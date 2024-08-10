const { getEmails } = require('../services/gmailService');
const Email = require('../models/email');

const fetchEmails = async (req, res) => {
  await getEmails();
  const emails = await Email.find({});
  res.json(emails);
};

module.exports = { fetchEmails };
