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
  let img = await (await fetch('https://telegra.ph/file/015dd23bace0fe0c9bc9d.jpg')).buffer()  
  let str = ` Rᴇɢɪsᴛʀᴏ - Usᴜᴀʀɪᴏ 🚩

🌩 *Nᴏᴍʙʀᴇ* : ${name}
💚 *Eᴅᴀᴅ* : ${age} años
🌼 *Nᴜᴍᴇʀᴏ ᴅᴇ sᴇʀɪᴇ* :
${sn}`
conn.sendMessage(m.chat, {
text: str,
contextInfo: { 
forwardingScore: 9999, 
isForwarded: true, 
externalAdReply: {
title: packname,
body: saludo,
thumbnailUrl: img,
thumbnail: img,
sourceUrl: global.channel,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['reg'].map(v => v + ' *<nombre.edad>*')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'verificar', 'registrar'] 

export default handler