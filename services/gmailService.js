const { google } = require('googleapis');
const Email = require('../models/email');

const getEmails = async () => {
  const auth = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
  auth.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  const gmail = google.gmail({ version: 'v1', auth });
  const res = await gmail.users.messages.list({ userId: 'me' });
  console.log(res.data)
  const emails = [];
  for (let msg of res.data.messages) {
    const message = await gmail.users.messages.get({ userId: 'me', id: msg.id });
    const { from, subject } = message.data.payload.headers.reduce((acc, header) => {
      if (header.name === 'From') acc.from = header.value;
      if (header.name === 'Subject') acc.subject = header.value;
      return acc;
    }, {});
    const body = message.data.snippet;
    const attachments = message.data.payload.parts?.filter(part => part.filename)?.map(part => part.body.attachmentId) || [];
    emails.push(new Email({ sender: from, subject, body, attachments, receivedAt: new Date() }));
  }

  await Email.insertMany(emails);
};

module.exports = { getEmails };
