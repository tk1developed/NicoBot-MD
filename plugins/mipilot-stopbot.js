import fs from "fs"
async function handler(m, {conn, usedPrefix}) {
   if (conn.user.jid == global.conn.user.jid) return m.reply(`*😆👊 Hᴇʏ Eʟ Bᴏᴛ Pʀɪɴᴄɪᴘᴀʟ Nᴏ Sᴇ Aᴘᴀɢᴀ Wᴇʏ.*`)
   m.reply(`*[❗] Oᴋ Oʀᴅᴇɴᴇs Rᴇsɪᴠɪᴅᴀ Dᴇsᴄᴏɴᴇᴄᴛᴀɴᴅᴏ Eʟ Bᴏᴛ...*`)
   conn.fstop = true
   conn.ws.close()
}
handler.command = handler.help = ['stop', 'byebot'];
handler.tags = ['jadibot'];
handler.owner = true
export default handler; 
