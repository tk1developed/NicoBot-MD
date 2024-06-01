let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return m.reply(lenguajeYL['smsAvisoFG']() + '🔵 *Este Chat No Está Registrado En Mi Base*)
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return m.reply(lenguajeYL.smsAvisoAG() + '🍬 *La Bot No Está Baneada En Este Chat!*')
chat.isBanned = false
await conn.reply(m.chat, lenguajeYL['smsAvisoEG']() + '🍒 *La Bot Ya Responderá A Los Comandos.*', m)
}
handler.command = /^unbanchat|desbanearchat|desbanchat$/i
handler.owner = true 
//handler.group = true

export default handler


/*var handler = async (m) => {

global.db.data.chats[m.chat].isBanned = false
conn.reply(m.chat, '✅ *Bot Activo De Nuevo En El Grupo*', m, fake, )

}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i

handler.owner = true

export default handler*/