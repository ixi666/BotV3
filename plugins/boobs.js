const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados PUTO PAJERO*'  
let res = await axios("https://meme-api.herokuapp.com/gimme/boobs")
let json = res.data
let ShadowBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, ShadowBot, "*Boobs 🍒❤️‍🔥*", '©The ixxi - Bot', ' SIGUIENTE ', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(boobs|tetas)$/i
module.exports = handler
