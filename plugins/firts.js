export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`👋 Hola ${username}¡!
 *${saludo}*

*🚩 Nota:* No Envié Spam Al Bot!
📇 Escriba !menu Para Ver Los Comandos Que Dispongo!

*💧 Si Tienes Duda O Sugerencia Contacta A Mi Creador: 💚*
💖 +57 301 2482597 💜

*🧿 Escribe !grupos Para Ver Los Grupos Oficiales Del Bot 🔮*

_🌼 ¿Quieres Apoyar En El Proyecto Del Bot Para Que Siempre Tenga Actualizaciones? Puedes Apoyarnos Con Una Estrellita🌟 Al Repositorio._`)

user.pc = new Date * 1
}