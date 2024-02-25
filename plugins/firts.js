export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`🥀 *Hola ${saludo} ${username}, Bienvenido A 𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿* 🥷🏻
🚀 _Si Deseas Escribe !menu Para Ver Mis Comandos_ 🌤

📌 *Si Tienes Algun Problema Puedes Contactar A Mi Creador:* 📍
📩 +57 301 3482814 ⚡️

📍 Quieres Apoyar El Proyecto SakuraBotLite, Puedes Compartir Mi Bot Y Dejando Una Estrellita 🌟 El Repositorio Oficial Del Bot. 🥀`) 
user.pc = new Date * 1
}