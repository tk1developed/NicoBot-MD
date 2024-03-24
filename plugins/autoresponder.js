import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]

if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen8, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝐐𝐔𝐄 𝐘𝐎 𝐐𝐔𝐄?', body: '𝑨𝑯𝑶𝑹𝑨 𝑸𝑼𝑬 𝑸𝑼𝑰𝑬𝑹𝑬𝑺?', sourceUrl: `https://github.com/diegojadibot/SakuraBotLite-MD`, thumbnail: imagen7}}})}

return !0 }
export default handler