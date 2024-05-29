//import { bold } from "chalk"
let handler = async (m, { conn, text }) => {

if (!text) return m.reply('🍒 _Escribe el nombre del grupo!_')
try{
m.reply('🍒 _Creando Grupo_ 🍒')
m.react('🌟')
let group = await conn.groupCreate(text, [m.sender])
let link = await conn.groupInviteCode(group.gid)
let url = 'https://chat.whatsapp.com/' + link;
m.reply('*Link:* ' + url)
} catch (e) {
m.reply(`🔵 *Error.*`)
}
}
handler.help = ['creategroup *<nombre>*']
handler.tags = ['owner']
handler.command = /^(creargrupo|creargroup|creargc|gccreate)$/
//handler.owner = true
handler.premium = true
export default handler