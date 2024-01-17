export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`🌟 *Hola ${username}, Bienvenido A 𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿* 🥷🏻
📲 _Si Deseas Escribe .menu Para Ver Mis Comandos_ 🌤

📌 *Cualquier Duda O Sugerencia Puedes Contactar A Mi Creador:* 🎉
📩 wa.me/573013114854 📭

🙏❣️ *Si desea apoyar el proyecto Sakura Bot  Lite Puedes Recomendar Mi Bot 🌻🪁`) 
user.pc = new Date * 1
}