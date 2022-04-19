let handler = async (m, { conn }) => {
  if (!(m.chat in global.DATABASE._data.chats)) return m.reply('*Este chat no está registrado en la base de datos!*')
  let chat = global.DATABASE._data.chats[m.chat]
  if (!chat.isBanned) return m.reply('*Este chat no esta baneado sonso*')
  chat.isBanned = false
  m.reply('* Desbaneado*')
}
handler.command = /^unbanchat2$/i
handler.rowner = true
module.exports = handler
