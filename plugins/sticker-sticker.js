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

if (!/webp|image|video/g.test(mime) && !text) return m.reply(`⚠️⚓️ 𝐻𝑒𝑦 𝐿𝑎 𝐶𝑜𝑛𝑣𝑒𝑟𝑠𝑖𝑜𝑛 𝐴 𝐹𝑎𝑙𝑙𝑎𝑑𝑜 𝐼𝑛𝑡𝑒𝑛𝑡𝑎 𝐸𝑛𝑣𝑖𝑎𝑟 𝑈𝑛𝑎 𝐼𝑚𝑎𝑔𝑒𝑛 𝑂 𝑈𝑛 𝑉𝑖𝑑𝑒𝑜 𝑌 𝐿𝑢𝑒𝑔𝑜 𝑅𝑒𝑠𝑝𝑜𝑛𝑑𝑒 𝐶𝑜𝑛 𝐸𝑙 𝐶𝑜𝑚𝑎𝑛𝑑𝑜 !s`)
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('⚠️Eʟ Vɪᴅᴇᴏ Nᴏ Pᴜᴇᴅᴇ Dᴜʀᴀʀ Mᴀs Dᴇ 6 Sᴇɢᴜɴᴅᴏs')

if (/webp|image|video/g.test(mime)) {
let img = await q.download?.()
let out
stiker = await sticker(img, false, global.packname, global.author)
await conn.reply(m.chat, `𝐸𝑠𝑝𝑒𝑟𝑎 𝐵𝑟𝑜𝑑𝑒𝑟 𝐸𝑙 𝑆𝑡𝑖𝑘𝑒𝑟 𝑆𝑒 𝐸𝑠𝑡𝑎́ 𝐶𝑟𝑒𝑎𝑛𝑑𝑜⚓..

🌼 𝑺𝒊 𝑬𝒍 𝑺𝒕𝒊𝒄𝒌𝒆𝒓 𝑻𝒊𝒆𝒏𝒆 𝑬𝒓𝒓𝒐𝒓 𝑷𝒐𝒓 𝑭𝒂𝒗𝒐𝒓 𝑹𝒆𝒆𝒏𝒗𝒊𝒆𝒔𝒆𝒍𝒐 𝑨𝒍 𝑪𝒓𝒆𝒂𝒅𝒐𝒓 𝑫𝒆𝒍 𝑩𝒐𝒕.🌱

𝖤𝗌𝗍𝖾 𝖲𝗍𝗂𝖼𝗄𝖾𝗋 𝖥𝗎𝖾 𝖧𝖾𝖼𝗁𝗈 𝖯𝗈𝗋 𝖤𝗅 𝖡𝗈𝗍:
𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯✨🌻`, m)

if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)

if (!stiker) errorMessage = 'ERROR'
}} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
else return m.reply('⚘️ Este Enlace No Es Válido')}

if (stiker) {
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
} else {
console.log(stiker)
}}

handler.command = /^(s(tickers?)?(image|video|gif|img)?)$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}