import db from '../lib/database.js'
import { createHash } from 'crypto'
import fs from 'fs'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `*Ya estás registrado*\n\n*¿Quiere volver a registrarse?*\n\nUse este comando para eliminar su registro \n*${usedPrefix}unreg* <Número de serie>`
  if (!Reg.test(text)) throw `*Formato incorrecto*\n\nEjemplo : *${usedPrefix + command} ${name2}.16*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombre no puede estar vacío'
  if (!age) throw 'La edad no puede estar vacía'
  if (name.length >= 100) throw 'El nombre es demasiado largo' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Wow el abuelo quiere jugar al bot'
  if (age < 5) throw '🚼  hay un abuelo bebé jsjsj '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch((_) => imagen6)
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
let nombreWA = await usedPrefix + conn.getName(m.sender) //'@' + m.sender.split("@s.whatsapp.net")[0]
let user = global.db.data.users[m.sender]
let verificar = new RegExp(usedPrefix)
let biografia = await conn.fetchStatus(m.sender).catch(_ => '𝘕𝘖 𝘋𝘌𝘍𝘐𝘕𝘐𝘋𝘖')
bio = biografia.status?.toString() || sinDefinir 
  let str = `╭⊶⊷⊷⊷⊶⊷✰⊶⊷⊶⊷⊷⊷╮
┃ • Yᴏᴛsᴜʙᴀ Nᴀᴋᴀɴᴏ - MD 🪷
┣⊶⊷⊷⊷⊶⊷✰⊶⊷⊶⊷⊷⊷╯
┃ ┌• ────── ✾ ────── •
┃ ┇Nombre: ${name}
┃ ┇Edad : ${age} años
┃ └• ────── ✾ ────── •
╰⊶⊷⊷⊷⊶⊷✰⊶⊷⊶⊷⊷⊷╯

conn.sendMessage(m.chat, {
text: str,
contextInfo: {
externalAdReply: {
title: wm,
body: user.name,
thumbnailUrl: pp, 
sourceUrl: 'https://www.atom.bio/gatabot/',
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}, { quoted: fkontak })
await m.reply(`${sn}`)        
}}
handler.help = ['reg'].map(v => v + ' *<nombre.edad>*')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'verificar', 'registrar'] 

export default handler