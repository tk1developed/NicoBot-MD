import { canLevelUp, xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix, command}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let user = global.db.data.users[who]
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
  let { exp, limit, name, registered, regTime, age, level } = global.db.data.users[who]
  let { min, xp, max } = xpRange(user.level, global.multiplier)
  let username = conn.getName(who)
  let prem = global.prems.includes(who.split`@`[0])
  let txt = `╭─⬣「 *User Perfil* 」⬣`.trim(),
contextInfo: {
externalAdReply: {
title: wm,
body: nombre,
thumbnailUrl: pp, 
sourceUrl: `https://www.atom.bio/bot/`,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}, { quoted: fkontak })    
}
handler.help = ['perfil', 'perfil @user']
handler.tags = ['rg']
handler.command = ['perfil', 'profile']
handler.register = true

export default handler