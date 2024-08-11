const { getEmails } = require("../services/gmailService");
const Email = require("../models/email");

const fetchEmails = async () => {
  await getEmails();
  const emails = await Email.find({});
  return emails;
};

module.exports = { fetchEmails };
