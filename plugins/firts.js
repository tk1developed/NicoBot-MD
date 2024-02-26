export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`👋 Hola ${username}¡!
 *${saludo}*

*⚠️ Nota:* No Envié Spam Al Bot, Si Envias Te Bloquea!
⚡️ Escriba !menu Para Ver Los Comandos Que Dispongo!

📍 ¿Quieres Apoyar En El Proyecto Del Bot Para Que Siempre Tenga Actualizaciones? Puedes Apoyarnos Con Una Estrellita🌟 Al Repositorio.`) 
user.pc = new Date * 1
}