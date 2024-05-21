import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')
if (user.registered === true) throw `🏷 𝐄𝐑𝐑𝐎𝐑 🏷 *Ya ᥱs𝗍ᥲ́s registrado*\n\n¿𝗊ᥙіᥱrᥱ ᥎᥆ᥣ᥎ᥱr ᥲ rᥱgіs𝗍rᥲrsᥱ?\n\n✏️ ᥙsᥱ ᥱs𝗍ᥱ ᥴ᥆mᥲᥒძ᥆ para *eliminar su registro*\n*.unreg* <ᥒᥙ́mᥱr᥆ ძᥱ serie>`
if (!Reg.test(text)) throw `*✏️ Formato incorrecto*\n\n📩 Uso del comamdo: *${usedPrefix + command} nombre.edad*\n💡 Ejemplo : *${usedPrefix + command}* ${name2}.18`
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw '*📝 El nombre no puede estar vacío*'
if (!age) throw '*📝 La edad no puede estar vacía*'
if (name.length >= 30) throw '*⚠️ El nombre es demasiado largo*' 
age = parseInt(age)
if (age > 100) throw '*👴🏻 Wow el abuelo quiere jugar al bot*'
if (age < 5) throw '*👀 hay un bebé jsjsj*'
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
global.db.data.users[m.sender].money += 600
global.db.data.users[m.sender].limit += 10
global.db.data.users[m.sender].exp += 245
global.db.data.users[m.sender].joincount += 5
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)        
await conn.sendMessage(m.chat, { react: { text: '📩', key: m.key } } 
let regbot = `╭━〔  𝐑 𝐄 𝐆 𝐈 𝐒 𝐓 𝐑 𝐎 📇  〕⬣
┃ • 🌺 Nombre: ${name}
┃ • 🔮 Edad : ${age} años
╰━━━━━━━━━━━━⬣

╭━〔  𝐑𝐄𝐂𝐎𝐌𝐏𝐄𝐍𝐒𝐀𝐒 ✏️  〕⬣
┃ • 10 Diamantes 💎
┃ • 600 YoshiCoins 💰
┃ • 245 Exp 💸
┃ • 5 Monedas 🪙
╰━━━━━━━━━━━━⬣

╭━〔  𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄 𝐒𝐄𝐑𝐈𝐄 ✏️  〕⬣
┃ ${sn}
╰━━━━━━━━━━━━⬣`
await m.reply(regbot)
// await conn.sendUrl(m.chat, regbot, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: pp, thumbnailUrl: pp, title: 'Registrado 📩', }})

}
handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'reg'] 

export default handler