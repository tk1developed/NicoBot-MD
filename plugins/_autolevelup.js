import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {

let user = global.db.data.users[m.sender]
if (!user.autolevelup) 
  return !0

let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {

conn.sendButton(m.chat, '⛄' + wm, `╭━〘𝐇𝐀𝐓𝐒𝐔𝐍𝐄 𝐒𝐀𝐊𝐔𝐑𝐀-𝐁𝐎𝐓〙━⊷ 
┃ ⛥││🥳ғᴇʟɪᴄɪᴅᴀᴅᴇs ʜᴀ sᴜʙɪᴅᴏ ᴅᴇ ɴɪᴠᴇʟ 
┃ ⛥││🔸ɴɪᴠᴇʟ ᴀɴᴛᴇʀɪᴏʀ: ${before}
┃ ⛥││⬆️ɴɪᴠᴇʟ ᴀᴄᴛᴜᴀʟ ${user.level}
┃ ⛥││⚔️ʀᴀɴɢᴏ ${user.role}
┃ ⛥││📅ғᴇᴄʜᴀ${new Date().toLocaleString('id-ID')}
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷`, null, [['🍁ᴍᴇɴᴜ✴️', `/menu`]], m)