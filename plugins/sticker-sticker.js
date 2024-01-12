import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
let stiker = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let autor = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''

if (!/webp|image|video/g.test(mime) && !text) return m.reply(`*⚠️ 𝘏𝘦𝘺 𝘓𝘢 𝘊𝘰𝘯𝘷𝘦𝘳𝘴𝘪𝘰́𝘯 𝘏𝘢 𝘍𝘢𝘭𝘭𝘢𝘥𝘰, 𝘐𝘯𝘵𝘦𝘯𝘵𝘢 𝘌𝘯𝘷𝘪𝘢𝘳 𝘜𝘯𝘢 𝘐𝘮𝘢𝘨𝘦𝘯 𝘖 𝘝𝘪𝘥𝘦𝘰 𝘠 𝘓𝘶𝘦𝘨𝘰 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘊𝘰𝘯 𝘌𝘭 𝘊𝘰𝘮𝘢𝘯𝘥𝘰 .𝘴*`)
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('*⚠️ El Video No Puede Durar Mas De 6 Segundos*')

if (/webp|image|video/g.test(mime)) {
let img = await q.download?.()
let out
stiker = await sticker(img, false, global.packname, global.author)
await conn.reply(m.chat, `🙀𝘊𝘢𝘭𝘮𝘢 𝘈𝘮𝘪𝘨𝘰/𝘈 𝘌𝘴𝘵𝘰𝘺 𝘊𝘳𝘦𝘢𝘥𝘰 𝘚𝘶 𝘚𝘵𝘪𝘤𝘬𝘦𝘳, 𝘙𝘦𝘤𝘶𝘦𝘳𝘥𝘦 𝘘𝘶𝘦 𝘌𝘭 𝘜𝘴𝘰 𝘋𝘦𝘭 𝘊𝘰𝘮𝘢𝘯𝘥𝘰 𝘌𝘴 𝘊𝘢𝘥𝘢 6 𝘔𝘪𝘯𝘶𝘵𝘰𝘴, 𝘉𝘺: 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵-𝘔𝘋❤️`, m)

if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)

if (!stiker) errorMessage = 'ERROR'
}} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
else return m.reply('*⚠️ EL ENLACE / URL / LINK NO ES VÁLIDO*')}

if (stiker) {
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
} else {
console.log(stiker)
}}

handler.command = /^(s(tickers?)?(image|video|gif|img)?)$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}