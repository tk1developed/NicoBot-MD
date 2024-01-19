
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

if (!/webp|image|video/g.test(mime) && !text) return m.reply(`⚠️ 𝘏𝘦𝘺 𝘓𝘢 𝘊𝘰𝘯𝘷𝘦𝘳𝘴𝘪𝘰́𝘯 𝘏𝘢 𝘍𝘢𝘭𝘭𝘢𝘥𝘰, 𝘐𝘯𝘵𝘦𝘯𝘵𝘢 𝘌𝘯𝘷𝘪𝘢𝘳 𝘜𝘯𝘢 𝘐𝘮𝘢𝘨𝘦𝘯 𝘖 𝘝𝘪𝘥𝘦𝘰 𝘠 𝘓𝘶𝘦𝘨𝘰 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘊𝘰𝘯 𝘌𝘭 𝘊𝘰𝘮𝘢𝘯𝘥𝘰 .𝘴`)
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('⚠️Eʟ Vɪᴅᴇᴏ Nᴏ Pᴜᴇᴅᴇ Dᴜʀᴀʀ Mᴀs Dᴇ 6 Sᴇɢᴜɴᴅᴏs')

if (/webp|image|video/g.test(mime)) {
let img = await q.download?.()
let out
stiker = await sticker(img, false, global.packname, global.author)
await conn.reply(m.chat, `_𝐄𝐬𝐩𝐞𝐫𝐚 𝐀𝐦𝐢𝐠𝐨 𝐄𝐬𝐭𝐨𝐲 𝐂𝐫𝐞𝐚𝐧𝐝𝐨 𝐒𝐮 𝐒𝐭𝐢𝐜𝐤𝐞𝐫🌻_

🌻𝘚𝘪 𝘛𝘪𝘦𝘯𝘦𝘴 𝘜𝘯 𝘌𝘳𝘳𝘰𝘳 𝘊𝘰𝘯 𝘌𝘭 𝘚𝘵𝘪𝘤𝘬𝘦𝘳 𝘗𝘶𝘦𝘥𝘦𝘴 𝘙𝘦𝘦𝘯𝘷𝘪𝘢𝘳𝘭𝘰 𝘈𝘭 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 𝘋𝘦𝘭 𝘉𝘰𝘵✨

𝘚𝘵𝘪𝘤𝘬𝘦𝘳 𝘏𝘦𝘤𝘩𝘰 𝘗𝘰𝘳: 𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿✨🌻`, m)

if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)

if (!stiker) errorMessage = 'ERROR'
}} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
else return m.reply('⚠️ EL ENLACE / URL / LINK NO ES VÁLIDO')}

if (stiker) {
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
} else {
console.log(stiker)
}}

handler.command = /^(s(tickers?)?(image|video|gif|img)?)$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}