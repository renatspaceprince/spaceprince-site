const TelegramBot = require('node-telegram-bot-api')

const API_URL = process.env.API_KEY_BOT

const tgBot = new TelegramBot(API_URL, {
  polling: true,
})

module.exports = tgBot
