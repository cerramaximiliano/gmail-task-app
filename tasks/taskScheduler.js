const cron = require('node-cron');
const { fetchEmails } = require('../controllers/emailController');

cron.schedule('*/5 * * * *', () => {
console.log(true)
  fetchEmails();
  console.log('Emails fetched and tasks executed');
}, {
  timezone: "America/Argentina/Buenos_Aires"
});
