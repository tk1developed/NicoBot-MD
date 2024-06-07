let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `Por qué no vas directamente con el numero del Bot`, m)
else {
await conn.reply(m.chat, `Usted ha cerrado session`, m)
conn.ws.close()
}}
handler.command = handler.help = ['stop', 'byebot'];
handler.tags = ['jadibot'];
handler.owner = true
handler.private = true
handler.register = true