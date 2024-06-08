let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]

user.registered = false
m.reply(`*『✅』 Usted Ya No Está En Mi Base De Datos*`)

}
handler.help = ['unreg']
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler