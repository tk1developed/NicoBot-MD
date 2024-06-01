let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return m.reply(lenguajeYL['smsAvisoMG']() + '🔵 *¡Este Chat No Está Registrado En Mi Base!*')
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return m.reply(lenguajeYL.smsAvisoMG() + '🍬 *¡La Bot No Está Baneada En Este Chat!*')
chat.isBanned = false
await conn.reply(m.chat, lenguajeYL['smsAvisoEG']() + '🍒 *¡La Bot Ya Responderá A Los Comandos!*', m)
}
handler.command = /^unbanchat|desbanearchat|desbanchat$/i
handler.owner = true 
//handler.group = true

export default handler