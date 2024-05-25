const comandos = /piedra|papel|tijera|estado|verificar|code|jadibot --code|--code|creador|grupos|instalarbot|términos|bots|deletebot|eliminarsesion|serbot|verify|register|registrar|reg|perfil|deletesesion|jadibot/i

let handler = m => m
handler.before = async function (m, { conn, isOwner, isROwner }) {
if (m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
const regexWithPrefix = new RegExp(`^${prefix.source}\\s?${comandos.source}`, 'i')
if (regexWithPrefix.test(m.text.toLowerCase().trim())) return !0

let chat, user, bot, mensaje
chat = global.db.data.chats[m.chat]
user = global.db.data.users[m.sender]
bot = global.db.data.settings[this.user.jid] || {}

if (bot.antiPrivate && !isOwner && !isROwner) {
return await conn.reply(m.chat, mid.mAdvertencia + mid.smsprivado(m, cuentas), m, { mentions: [m.sender] })  
await this.updateBlockStatus(m.sender, 'block')
}
return !1
}
export default handler