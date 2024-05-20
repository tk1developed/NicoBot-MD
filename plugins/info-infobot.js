import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
let MessageType =  (await import(global.baileys)).default
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = './Menu2.jpg'
//let vn = './media/infobot.mp3'
let name = await conn.getName(m.sender)
let old = performance.now()
  //await m.reply('_Realizando test_')
  let neww = performance.now()
  let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  let speed = neww - old

let info = `           \`『ＩＮＦＯ ＤＥＬ ＢＯＴ 』\`

> 🍁 *Creador:* Diego
> 🌩 *Versión Actual:* ${vs}
> 🍂 *Prefijo:* *${usedPrefix}*
> 🔐 *Chats Privados:* *${chats.length - groups.length}*
> 📮 *Chats De Grupos:* *${groups.length}* 
> 📩 *Chats En Total:* *${chats.length}* 
> 🕒 *Activa:* *${uptime}*
> 📇 *Usuarios Activo En Mi Base:* *${totalreg}*
> 🚀 *Velocidad:* *${speed}*   
> 🏷 *Modo:* ${global.db.data.settings[conn.user.jid].self ? '*Privado*' : '*Público*'}
> 💬 *Antiprivado:* ${global.db.data.settings[conn.user.jid].antiprivado ? '*Activado ✔*' : '*Desactivado ✘*'}
> 📵 *Antillamada:* ${global.db.data.settings[conn.user.jid].antiCall ? '*Activado ✔*' : '*Desactivado*'}
> 🌻 *Autoread:*  ${autoread ? '*Activado ✔*' : '*Desactivado ✘*'}   
> 🤖 *Sub Jadibts Activas:* *${totaljadibot.length}*
> ⛔ *Restrict:* ${restrict ? '*Activado ✔*' : '*Desactivado ✘*'}`
conn.sendMessage(m.chat, { image: { url: "https://telegra.ph/file/623f6e25bee4a80a6cd52.jpg", }, caption: info,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: packname,
sourceUrl: yt,
mediaType: 1,
showAdAttribution: true,
thumbnailUrl: "https://telegra.ph/file/623f6e25bee4a80a6cd52.jpg",
handler.help = ['infobot']
handler.tags = ['info', 'tools']
handler.command = /^(infobot|informacionbot|infoshi|informaciónyoshi|informacionyoshi)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}