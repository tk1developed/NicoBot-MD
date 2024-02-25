import fg from 'api-dylux'
import { tiktokdl } from '@bochilteam/scraper'

var handler = async (m, { conn, text, args, usedPrefix, command}) => {

if (!args[0]) throw `*⚠️ 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺*\n\n❕ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n${usedPrefix + command} https://vm.tiktok.com/ZMjbonqPu/`
if (!args[0].match(/tiktok/gi)) throw `*⚠️ 𝚅𝙴𝚁𝙸𝙵𝙸𝚀𝚄𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙻𝙸𝙽𝙺 𝚂𝙴𝙰 𝙲𝙾𝚁𝚁𝙴𝚃𝙾*`


const { key } = await conn.sendMessage(m.chat, {text: `${wait}`}, {quoted: m})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waitt}`, edit: key})
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `${waittt}`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waitttt}`, edit: key})

try {
let p = await fg.tiktok(args[0])
let te = `𝆺𝅥𝅮 🔥 *𝙽𝙾𝙼𝙱𝚁𝙴:* ${p.nickname}
 𝆺𝅥𝅮 👤 *𝚄𝚂𝚄𝙰𝚁𝙸𝙾:* ${p.unique_id}
𝆺𝅥𝅮 ⏰ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* ${p.duration}
𝆺𝅥𝅮 📄 *𝙳𝙴𝚂𝙲𝚁𝙸𝙲𝙸𝙾𝙽:* ${p.description}`
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
handler.diamond = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))