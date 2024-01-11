import fs from "fs"
async function handler(m, {conn, usedPrefix}) {
   if (conn.user.jid == global.conn.user.jid) return m.reply(`*🙀 𝘏𝘦𝘺 𝘌𝘴𝘱𝘦𝘳𝘢, 𝘌𝘭 𝘉𝘰𝘵 𝘖𝘳𝘪𝘯𝘤𝘪𝘱𝘢𝘭 𝘕𝘰 𝘚𝘦 𝘗𝘶𝘦𝘥𝘦 𝘈𝘱𝘢𝘨𝘢𝘳.*`)
   m.reply(`*[❗] Dejarás de ser un Sub Bot en 5 segundos...*`)
   conn.fstop = true
   conn.ws.close()
}
handler.command = handler.help = ['stop', 'byebot'];
handler.tags = ['jadibot'];
handler.owner = true
export default handler; 