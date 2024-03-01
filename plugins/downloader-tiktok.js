import fg from 'api-dylux'
import { tiktokdl } from '@bochilteam/scraper'

var handler = async (m, { conn, text, args, usedPrefix, command}) => {

if (!args[0]) throw `⚠️ _Ingrese Un Enlace De Tiktok_\n\n❕ *Ejemplo:*\n${usedPrefix + command} https://vm.tiktok.com/ZMjbonqPu/`
if (!args[0].match(/tiktok/gi)) throw `*⚠️ 𝖵𝖾𝗋𝗂𝖿𝗂𝗊𝗎𝖾 𝖰𝗎𝖾 𝖤𝗅 𝖫𝗂𝗇𝗄 𝖲𝖾𝖺 𝖢𝗈𝗋𝗋𝖾𝖼𝗍𝗈*`


const { key } = await conn.sendMessage(m.chat, {text: `${wait}`}, {quoted: m})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waitt}`, edit: key})
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `${waittt}`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waitttt}`, edit: key})

try {
let p = await fg.tiktok(args[0])
let te = `𝆺𝅥𝅮 🔥 _Nombre:_ ${p.nickname}
𝆺𝅥𝅮 👤 _Usuario:_ ${p.unique_id}
𝆺𝅥𝅮 ⏰ _Duración:_ ${p.duration}
𝆺𝅥𝅮 📄 _Descripción:_ ${p.description}`
conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
} catch {
try {
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) throw '*⚠️ ERROR AL DESACARGAR EL VÍDEO*'
conn.sendFile(m.chat, url, 'fb.mp4', `• 🧃 *Nombre:* ${nickname}\n• 📄 *Descripción:* ${description}`, m)
m.react(done)
} catch {
m.reply(`*⚠️ ERROR AL DESCARGAR EL VÍDEO*`)
}}

}
handler.help = ['tiktok']
handler.tags = ['descargas']
handler.command = /^(tiktok|tt|ttdl|tiktokdl|tiktoknowm)$/i
handler.register = true
handler.diamond = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))