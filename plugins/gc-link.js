let handler = async (m, { conn, args }) => {
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
conn.reply(m.chat, link, fkontak, {detectLink: true})
//conn.sendMessage(m.chat, { text: link }, { quoted: fkontak, detectLink: true })
}
handler.command = /^link(gro?up)?$/i
handler.group = true
handler.botAdmin = true
export default handler