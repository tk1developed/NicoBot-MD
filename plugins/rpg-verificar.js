import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')

if (user.registered === true) throw `*『✦』Ya estas registrado, para volver a registrarte, usa el comando: #unreg*`

if (!Reg.test(text)) throw `*『✦』El comando ingresado es incorrecto, uselo de la siguiente manera:*\n\n#reg *Nombre.edad*\n\n\`\`\`Ejemplo:\`\`\`\n${usedPrefix + command} *${name2}.18*`

let [_, name, splitter, edad] = text.match(Reg)
if (!name) throw '*『✦』No puedes registrarte sin nombre, el nombre es obligatorio. Inténtelo de nuevo.*'
if (!edad) throw '*『✦』No puedes registrarte sin la edad, la edad es opcional. Inténtelo de nuevo.*'
if (name.length >= 30) throw '*『✦』El nombre no debe de tener mas de 30 caracteres.*' 
edad = parseInt(edad)
if (age > 100) throw '*『😏』Viejo/a Sabroso/a*'
if (age < 5) throw '*『🍼』Ven aquí, te adoptare!!*'
user.name = name.trim()
user.edad = edad
user.regtime = + new Date
user.registrado = true
global.db.data.users[m.sender].money += 12
global.db.data.users[m.sender].diamond += 10
global.db.data.users[m.sender].exp += 245
global.db.data.users[m.sender].joincount += 5
let sn = createHash('md5').update(m.sender).digest('hex')
m.react('📩')

let regbot = `👤 𝗥 𝗘 𝗚 𝗜 𝗦 𝗧 𝗥 𝗢 👤
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
「💭」𝗡𝗼𝗺𝗯𝗿𝗲: ${name}
「✨️」𝗘𝗱𝗮𝗱: ${edad} años
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
「🎁」𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗮𝘀:
• 10 Diamantes 💎
• 5 YoshiCoins 💰
• 245 Experiencia 💸
• 12 Tokens 🪙
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
${packname}
`
await conn.reply(m.chat, regbot, m, fake, )
conn.reply(m.chat, sn, fkontak, m, )

}

handler.help = ['reg <nombre.edad>']
handler.tags = ['info', 'rpg']
handler.command = ['reg', 'verificar', 'registrar'] 

export default handler