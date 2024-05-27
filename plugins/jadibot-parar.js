import fs from "fs"
async function handler(m, {conn, usedPrefix}) {
   if (conn.user.jid == global.conn.user.jid) return m.reply(`*⚡️ El Bot Principal No Se Puede Apagar*`)
   m.reply(`*✅️ Desconectando El Bot!*`)
   conn.fstop = true
   conn.ws.close()
}
handler.command = handler.help = ['stop', 'byebot'];
handler.tags = ['jadibot'];
handler.owner = true
handler.private = true
handler.register = true
export default handler; 
