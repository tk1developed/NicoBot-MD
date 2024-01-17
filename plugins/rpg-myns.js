import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')

conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', '🪁 *𝐄𝐬𝐭𝐞 𝐄𝐬 𝐒𝐮 𝐍𝐮𝐦𝐞𝐫𝐨 𝐃𝐞 𝐒𝐞𝐫𝐢𝐞* 🌻', 'status@broadcast')
}
handler.help = ['myns']
handler.tags = ['rg']
handler.command = /^(myns|ceksn)$/i
handler.register = true
export default handler