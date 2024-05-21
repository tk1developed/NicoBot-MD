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
  global.db.data.users[m.sender].money += 600
  global.db.data.users[m.sender].limit += 10
  global.db.data.users[m.sender].exp += 245
  global.db.data.users[m.sender].joincount += 5
  let sn = createHash('md5').update(m.sender).digest('hex')
  let img = await (await fetch('')).buffer()  
  let str = `╭━〔  𝐑 𝐄 𝐆 𝐈 𝐒 𝐓 𝐑 𝐎 📇  〕⬣
┃ • 🌺 Nombre: ${name}
┃ • 🔮 Edad : ${age} años
╰━━━━━━━━━━━━⬣

╭━〔  𝐑𝐄𝐂𝐎𝐌𝐏𝐄𝐍𝐒𝐀𝐒 ✏️  〕⬣
┃ • 10 Diamantes 💎
┃ • 600 YoshiCoins 💰
┃ • 245 Exp 💸
┃ • 5 Monedas 🪙
╰━━━━━━━━━━━━⬣`
conn.sendMessage(m.chat, {
text: str,
contextInfo: { 
forwardingScore: 9999, 
isForwarded: true, 
externalAdReply: {
title: '乂  R E G I S T R O  乂',
body: `👋 Hola ` + nombre,
thumbnailUrl: img,
thumbnail: img,
sourceUrl: global.channel,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})

await m.reply(`${sn}`)}
handler.help = ['reg'].map(v => v + ' *<nombre.edad>*')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'verificar', 'registrar'] 

export default handler