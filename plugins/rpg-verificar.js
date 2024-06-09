import { createHash } from 'crypto'
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
  await conn.reply(m.chat,  `✅️ *R E G I S T R O*

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
Usuarios Registrados: ${rtotalreg}`, m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: '✅️  R E G I S T R O  ✅️',  body: '👑 Registro Completado', previewType: 0, thumbnail: fotoperfil, sourceUrl: canalesYoshi}}})
await m.reply(`${sn}`)}
handler.help = ['reg']
handler.tags = ['rg']
handler.command = /^(verify|verificar|registrar|reg(ister)?)$/i
export default handler