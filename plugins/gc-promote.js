let handler = async (m, { conn,usedPrefix, command, text }) => {

if (isNaN(text) && !text.match(/@/g)){

} else if (isNaN(text)) {
let number = text.split`@`[1]
} else if (!isNaN(text)) {
let number = text
}

if (!text && !m.quoted) return conn.reply(m.chat, `🏷 *Etiqueta al usuario. que desea promover a admin*\n\nEjemplo, !demote @tag\n!demote *responde a un mensaje*`, m, fake, )
if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `🌼 *Número erróneo*`, m, fake, )

try {
if (text) {
let user = number + '@s.whatsapp.net'
} else if (m.quoted.sender) {
let user = m.quoted.sender
} else if (m.mentionedJid) {
let user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
conn.reply(m.chat, `✅ *Se promovió a admin con éxito*`, m, fake, )
}

}
handler.help = ['promote']
handler.tags = ['grupo']
handler.command = ['promote', 'promover']

handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler