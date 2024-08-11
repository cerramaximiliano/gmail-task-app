const { google } = require('googleapis');
const Email = require('../models/email');

const getEmails = async () => {
  const auth = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
  auth.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  const gmail = google.gmail({ version: 'v1', auth });

  // Obtener el último historyId guardado en la base de datos
  const lastEmail = await Email.findOne().sort({ historyId: -1 });
  const lastHistoryId = lastEmail ? lastEmail.historyId : null;

  // Si hay un lastHistoryId, usamos la API de history para obtener solo los correos nuevos
  let res;
  if (lastHistoryId) {
    res = await gmail.users.history.list({
      userId: 'me',
      startHistoryId: lastHistoryId,
    });
  } else {
    res = await gmail.users.messages.list({ userId: 'me' });
  }

  const emails = [];
  for (let msg of res.data.messages || []) {
    const message = await gmail.users.messages.get({ userId: 'me', id: msg.id });
    const { from, subject } = message.data.payload.headers.reduce((acc, header) => {
      if (header.name === 'From') acc.from = header.value;
      if (header.name === 'Subject') acc.subject = header.value;
      return acc;
    }, {});
    const body = message.data.snippet;
    const attachments = message.data.payload.parts?.filter(part => part.filename)?.map(part => part.body.attachmentId) || [];
    emails.push(new Email({
      sender: from,
      subject,
      body,
      attachments,
      receivedAt: new Date(),
      historyId: message.data.historyId, // Guardar historyId
    }));
  }

  await Email.insertMany(emails);
};


module.exports = { getEmails };
