let handler = async (m) => {

global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, `✅ *El Bot Ha Sido Desactivado En Este Grupo*`, m, fake, )

}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i

/*handler.botAdmin = true
handler.admin = true 
handler.group = true*/

export default handler