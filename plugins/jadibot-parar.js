let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `👑 Por qué no vas directamente con el numero del Bot`, m, fake, )
else {
await conn.reply(m.chat, `🔴 Subbot Desactivado`, m, fake, )
conn.ws.close()
}}
handler.command = handler.help = ['stop', 'byebot'];
handler.tags = ['jadibot'];
handler.owner = true
handler.private = true
handler.register = true
export default handler