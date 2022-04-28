//NO MODIFIQUES EL NÚMERO DEL CREADOR NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS <3 
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT
//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
//LLEVO AL REDEDOR DE 1 AÑO Y MEDIO EN LA ELABORACION DE ESTE BOT, SI TU LO EDITAS EN UNA SEMANA NO ERES TU EL CREADOR, SI LO EDITAS TOTALMENTE A TU MANERA SERIA UTULIZADO MI BOT COMO BASE Y AHI SI LO SERIAS  

let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
▋▀▄▀▄▀▄▀▄▀▄▀▄      
   *𝐓𝐡𝐞 Ixxi - 𝐁𝐨𝐭*
  ╭─────────
  𝗛ola,${username}
  Creador del Bot: Ixxi - Ares
  Numero del Bot oficial:wa.me/525583274312
  ╰──────────                        
 ▋▀▄▀▄▀▄▀▄▀▄▀
 ✰ Para Gays
 _${usedPrefix}top10gays_
 _${usedPrefix}toplind@s_
 _${usedPrefix}topput@s_
 _${usedPrefix}toppajer@s_
 _${usedPrefix}topotakus_
▋▀▄▀▄▀▄▀▄▀▄▀▄
 ✰ DESCARGAS
_${usedPrefix}imagen 
_${usedPrefix}ytsearch
_${usedPrefix}dlaudio 
_${usedPrefix}dlvid 
_${usedPrefix}ytmp3 
_${usedPrefix}ytmp4 
_${usedPrefix}ytmp4.2 
_${usedPrefix}play
 _${usedPrefix}play2 
_${usedPrefix}play3 
_${usedPrefix}play4 
▋▀▄▀▄▀▄▀▄▀▄▀▄
 ✰ SOLO ADMINS, NO INUTILES
 _${usedPrefix}admins
 _${usedPrefix}add 
 _${usedPrefix}kick 
 _${usedPrefix}save 
 _${usedPrefix}daradmin 
 _${usedPrefix}quitaradmin
 _${usedPrefix}grupo 
 _${usedPrefix}enable nsfw_
 _${usedPrefix}disable nsfw_
 _${usedPrefix}enable welcome_
 _${usedPrefix}disable welcome_
 _${usedPrefix}enable antilink_
 _${usedPrefix}disable antilink_
 _${usedPrefix}enable antilink2_
 _${usedPrefix}disable antilink2_
 _${usedPrefix}enable delete_
 _${usedPrefix}disable  delete_ 
 _${usedPrefix}link_
 _${usedPrefix}notificar *texto*_
 _${usedPrefix}infogrupo_
 _${usedPrefix}invocar *texto*_
 _${usedPrefix}del 
 _${usedPrefix}fantasmas_
 _${usedPrefix}banchat_
 _${usedPrefix}unbanchat_
 ▋▀▄▀▄▀▄▀▄▀
 ✰ pornito
 _${usedPrefix}labiblia_
▋▀▄▀▄▀▄▀▄▀▄▀▄▀
 ✰ Responde a un audio o nota de voz
 _${usedPrefix}bass_
 _${usedPrefix}deep_
 _${usedPrefix}earrape_
 _${usedPrefix}fast_
 _${usedPrefix}fat_
 _${usedPrefix}nightcore_
 _${usedPrefix}reverse_
 _${usedPrefix}robot_
 _${usedPrefix}slow_
 _${usedPrefix}smooth_
 _${usedPrefix}vibracion *cantidad*_
▋▀▄▀▄▀▄▀▄▀▄▀▄▀▄
  ✰ ADMINS
 _${usedPrefix}boost_
 _${usedPrefix}restart_
 _${usedPrefix}banlist_
 _${usedPrefix}binario1_
 _${usedPrefix}binario2_
 _${usedPrefix}banchat2_
 _${usedPrefix}actualizar_
 _${usedPrefix}CajaFuerte_
 _${usedPrefix}unbanchat2_
 _${usedPrefix}bc *texto*_
 _${usedPrefix}deletechat_
 _${usedPrefix}mutechat_
 _${usedPrefix}bcgc *texto*_
 _${usedPrefix}bcbot *texto*_
 _${usedPrefix}mutechat *all*_
 _${usedPrefix}setbye *@tag*_
 _${usedPrefix}banuser *@tag*_
 _${usedPrefix}deletechat *all*_
 _${usedPrefix}mutechat *chat*_
 _${usedPrefix}mutechat *group*_
 _${usedPrefix}enable *public*_
 _${usedPrefix}disable *public*_
 _${usedPrefix}deletechat *chat*_
 _${usedPrefix}deletechat *group*_
 _${usedPrefix}unbanuser *@tag*_
 _${usedPrefix}listgroup *@tag*_
 _${usedPrefix}enable *restrict*_
 _${usedPrefix}enable *autoread*_
 _${usedPrefix}setwelcome *@tag*_
 _${usedPrefix}enable *autoread*_
 _${usedPrefix}disable *autoread*_
▋▀▄▀▄▀▄▀▄▀▄▀`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '@Ixxi - Bot', '𝙼𝙴𝙽𝚄 𝚂𝙸𝙼𝙿𝙻𝙴', `#menusimple`, '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`, '𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂', `#grupos`, m, false, { contextInfo: { mentionedJid }})  
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler
