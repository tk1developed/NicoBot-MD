import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
if (user.registered === true) throw `*『✦』Ya estas registrado, para volver a registrarte, usa el comando: #myns*`
if (!Reg.test(text)) throw `*『✦』El comando ingresado es incorrecto, uselo de la siguiente manera:*\n\n#reg *Nombre.edad*\n\n\`\`\`Ejemplo:\`\`\`\n#reg *Diego.18*`
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw '*『✦』No puedes registrarte sin nombre, el nombre es obligatorio. Inténtelo de nuevo.*'
if (!age) throw '*『✦』No puedes registrarte sin la edad, la edad es opcional. Inténtelo de nuevo.*'
if (name.length >= 30) throw '*『✦』El nombre no debe de tener mas de 30 caracteres.*' 
age = parseInt(age)
if (age > 999) throw '*『😏』Viejo/a Sabroso/a*'
if (age < 5) throw '*『🍼』Ven aquí, te adoptare!!*'
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
global.db.data.users[m.sender].money += 600
global.db.data.users[m.sender].diamond += 10
global.db.data.users[m.sender].exp += 245
global.db.data.users[m.sender].joincount += 5
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)        
m.react('📩') 
let img = yoshiImg;
let regbot = `👤 𝗥 𝗘 𝗚 𝗜 𝗦 𝗧 𝗥 𝗢 👤
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
「💭」𝗡𝗼𝗺𝗯𝗿𝗲:
${name}

「✨️」𝗘𝗱𝗮𝗱:
${age} años
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
「🎁」𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗮𝘀:
• 10 Diamantes 💎
• 5 YoshiCoins 💰
• 245 Experiencia 💸
• 12 Tokens 🪙
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
${packname}`
conn.sendMessage(m.chat, {
text: regbot,
contextInfo: {
externalAdReply: {
title: '⊱『✅𝆺𝅥 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢(𝗔) 𝆹𝅥✅』⊰',
body: wm, 
thumbnaiUrl: img, 
sourceUrl: canalesYoshi,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
}}}, { quoted: fkontak })
await m.reply(`${sn}`)        
}
handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler

/*import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `🏷 𝐄𝐑𝐑𝐎𝐑 🏷 *Ya ᥱs𝗍ᥲ́s registrado*\n\n¿𝗊ᥙіᥱrᥱ ᥎᥆ᥣ᥎ᥱr ᥲ rᥱgіs𝗍rᥲrsᥱ?\n\n✏️ ᥙsᥱ ᥱs𝗍ᥱ ᥴ᥆mᥲᥒძ᥆ para *eliminar su registro*\n*.unreg* <ᥒᥙ́mᥱr᥆ ძᥱ serie>`
  if (!Reg.test(text)) throw `*✏️ Formato incorrecto*\n\n📩 Uso del comamdo: *${usedPrefix + command} nombre.edad*\n💡 Ejemplo : *${usedPrefix + command}* ${name2}.18`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*📝 El nombre no puede estar vacío*'
  if (!age) throw '*📝 La edad no puede estar vacía*'
  if (name.length >= 30) throw '*⚠️ El nombre es demasiado largo*' 
  age = parseInt(age)
  if (age > 100) throw '*👴🏻 Wow el abuelo quiere jugar al bot*'
  if (age < 5) throw '👑 la bebé juega con WhatsApp'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
global.db.data.users[m.sender].money += 12
global.db.data.users[m.sender].diamond += 10
global.db.data.users[m.sender].exp += 245
global.db.data.users[m.sender].joincount += 5
  let sn = createHash('md5').update(m.sender).digest('hex')
m.react('📩')
  await conn.reply(m.chat,  `✅️ *R E G I S T R O - C O M P L E T A D O*

• 💭 *Nombre:* ${name}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
• ✨️ *Edad:* ${age} Años
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👑 *Recompensas de la Bot:*
• 10 Diamantes 💎
• 5 YoshiCoins 💰
• 245 Experiencia 💸
• 12 Tokens 🪙
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
Usuarios Registrados: ${rtotalreg}`, m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: '✅️  R E G I S T R O  ✅️',  body: '👑 Registro Completado', previewType: 0, thumbnail: yoshiImg, sourceUrl: canalesYoshi}}})
await m.reply(`${sn}`)}
handler.help = ['reg']
handler.tags = ['rg']
handler.command = /^(verify|verificar|registrar|reg(ister)?)$/i
export default handler*/