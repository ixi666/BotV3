let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
//    pp = await conn.getProfilePicture(who)
} catch (e) {
} finally {
let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let username = conn.getName(who)
let str = `
╭══〘〙═╮
║
║ *✨𝗛ola, ${username}!!*
║
╰══╡╞══╯
┏━━━━━━━━━━━━━┓
┃ *<MENU SIMPLE/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ _${usedPrefix}sc_
┣ _${usedPrefix}donar_
┣ _${usedPrefix}infobot_
┣ _${usedPrefix}grupos_
┣ _${usedPrefix}menusimple_
┣ _${usedPrefix}menuaudios_
┣ _${usedPrefix}menu2_
┣ _${usedPrefix}labiblia_
┣ _${usedPrefix}estado_
┣ _Bot_
 _¿Qué es un Bot?_
┗━━━━━━━━━━━━━┛
`.trim()
let mentionedJid = [who]
conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
}}
handler.command = /^(menusimple)$/i
handler.fail = null
module.exports = handler
