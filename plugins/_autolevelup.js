import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {
//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw 

let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
if (!chat.autolevelup)
return !0

let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {
        m.reply(`╭━〔  𝐀𝐔𝐓𝐎 - 𝐍𝐈𝐕𝐄𝐋 🍄  〕⬣        
┃֪࣪ *🍂 𝐅𝐞𝐥𝐢𝐜𝐢𝐝𝐚𝐝𝐞𝐬 𝐒𝐮𝐛𝐢𝐬𝐭𝐞 𝐃𝐞 𝐍𝐢𝐯𝐞𝐥 🍁*
┃֪࣪ 🌺 *Nɪᴠᴇʟ Aɴᴛɪɢᴜᴏ : ${before}* 
┃֪࣪ 🌻 *Nᴜᴇᴠᴏ Nɪᴠᴇʟ : ${user.level}*
┃֪࣪ 🍃 *Rᴀɴɢᴏ : ${user.role}*
┃֪࣪ 📅 *Fᴇᴄʜᴀ : ${new Date().toLocaleString('id-ID')}*
╰━━━━━━━━━━━━⬣`.trim())
    }
} 