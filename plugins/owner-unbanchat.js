let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return m.reply(lenguajeYL.smsUnbanCH1())
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return m.reply(lenguajeYL.smsUnbanCH2())
chat.isBanned = false
await conn.reply(m.chat, lenguajeYL.smsUnbanCH3(), m)
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