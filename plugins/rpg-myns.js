//💖 𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿 💖

import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')

conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', '👇 *ESTE ES SU NUMERO DE SERIE* 👇', 'status@broadcast')
}
handler.help = ['myns']
handler.tags = ['rg']
handler.command = /^(myns|ceksn)$/i
handler.register = true
export default handler