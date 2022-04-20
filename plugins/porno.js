const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados puto pajero*'
let res = await axios("https://meme-api.herokuapp.com/gimme/nsfw")
let json = res.data
let ShadowBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, Ixxibot, "*🥵🥵🥵🥵🥵*", '©The ixxi - Bot', ' SIGUIENTE ', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(porno)$/i
module.exports = handler
