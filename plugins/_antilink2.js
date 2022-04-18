let handler = m => m

let linkRegex = /https:/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink2 && isGroupLink) {
    await m.reply(`*「 ANTI LINKS 」*\n*Hasta la vista inutil, ${await this.getName(m.sender)} rompiste las reglas negro, ixxi c ries kkkk*`)
    await m.reply(`*nuca seras blanco*`)
    if (isAdmin) return m.reply('*Te salvaste cagon(a) eres admin, no puedo eliminarte :v*')
    if (!isBotAdmin) return m.reply('*El bot no es admin, no puede exterminar a las personas*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*Lol.. enviaste el enlace de este grupo :v*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler
