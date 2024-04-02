const express = require('express')
const bot = require('./telegram')

const server = express()

const MAIN_USERS = [604815449]

function sendAll(callback) {
  MAIN_USERS.forEach((user) => {
    callback(user)
  })
}

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

server.use(express.json())

/**
 * name: string
 * phoneNumber: string
 * message: string
 */
server.post('/feedback', (req, res) => {
  const post = req?.body ?? {}

  if (!Object.entries(post).length) {
    return res.status(500).end()
  }

  sendAll((chatId) => {
    bot.sendPhoto(chatId, './img/logo.png')
    bot.sendMessage(
      chatId,
      `
        <strong>Тебя давно не было в уличных гонках!</strong>
        <strong>Твой друг достиг уже 40-го уровня!</strong>

        <code>
          Имя: ${post.name}
          Имя телефона: ${post.phoneNumber}
          Сообщение: ${post.message}
        </code>
      `,
      {
        parse_mode: 'HTML',
      }
    )
  })

  return res.status(200).end()
})

server.listen(3000, () => {
  console.log('listening on port 3000')
})
