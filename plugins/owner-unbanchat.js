let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return m.reply(lenguajeYL['smsAvisoMG']() + '🔵 *¡ESTE CHAT NO ESTÁ REGISTRADO!*')
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return m.reply(lenguajeYL.smsAvisoMG() + '🍬 *¡LA BOT NO ESTÁ BANEADA EN ESTE CHAT!*')
chat.isBanned = false
await conn.reply(m.chat, lenguajeYL['smsAvisoEG']() + '🍒 *¡LA BOT YA FUÉ DESBANEADA EN ESTE CHAT!*', m)
}
handler.command = /^unbanchat|desbanearchat|desbanchat$/i
handler.owner = true 
//handler.group = true

export default handler