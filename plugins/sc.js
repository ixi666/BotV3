//Codigo by ShadowBotV3
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
let who = m.sender
let pp = await(await fetch('https://i.imgur.com/oHrJTtq.jpg')).buffer()
let kai = await(await fetch('https://i.imgur.com/oHrJTtq.jpg')).buffer()
let text = `*https://github.com/ixi666/BotV3*`.trim()
conn.reply(m.chat, text, m, { thumbnail: kai, contextInfo: {
mentionedJid: [who],
externalAdReply: {
title: 'ππ΄πΏπΎππΈππΎππΈπΎ π³π΄π» π±πΎπ',
body: 'Ixxi Bot',
thumbnail: pp
}}})}
handler.command = /^sc|script|repositorio|repobot|scbot$/i
module.exports = handler
