import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]

if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
await this.sendMessage(m.chat, {text: `🧸 𝙌𝙐𝙀 𝙔𝙊 𝙌𝙐𝙀?`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}


return !0 }
export default handler