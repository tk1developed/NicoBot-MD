import moment from 'moment-timezone'

export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, `👋🏻 Hola ${nombre} Soy YoshikoBot, En Que Te Puedo Ayudar? 🔵!!

🍒 *Nota:* Este bot está en desarrollo puede tener algún error, Si ves algún error Por favor contacta al creador.

📅 Fecha: ${botdate}
⏰ Hora: ${bottime}

🌸 *Aviso:* no envíe spam al bot
🔵 Escriba *.allmenu* para mostrar el menú 
  
📩 *Te invito a que nos regales una 🌟 en el repositorio oficial de la Bot*
https://github.com/Diego-YL-177/YoshikoBot-MD`, m, fake, )


user.pc = new Date * 1
}