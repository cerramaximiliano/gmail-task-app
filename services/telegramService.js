const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

const sendFileToTelegram = async (filePath) => {
  await bot.telegram.sendDocument(process.env.TELEGRAM_CHAT_ID, { source: filePath });
};

module.exports = { sendFileToTelegram };
