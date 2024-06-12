let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return conn.reply(m.chat, `✅ 𝙀𝙉𝙇𝘼𝘾𝙀 (𝙋𝙀𝙍𝙈𝙄𝙏𝙄𝘿𝙊) 𝙀𝙍𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 !`, m, fake, )
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}
await conn.reply(m.chat, `❌ 𝙀𝙉𝙇𝘼𝘾𝙀 (𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊)*\n\n*${await this.getName(m.sender)} 𝙀𝙉𝙑𝙄𝘼𝙎𝙏𝙀 𝙐𝙉 𝙇𝙄𝙉𝙆 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊, 𝙎𝙀𝙍𝘼𝙎 𝘽𝘼𝙉𝙀𝘼𝘿𝙊 𝘼𝙐𝙏𝙊𝙈𝘼𝙏𝙄𝘾𝘼𝙈𝙀𝙉𝙏𝙀 🏳️‍🌈`, m, fake, )
if (!isBotAdmin) return conn.reply(m.chat, `🌼 𝙉𝙊 𝙎𝙊𝙔 𝘼𝘿𝙈𝙄𝙉, 𝙉𝙊 𝙋𝙐𝙀𝘿𝙊 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝘽𝘼𝙉𝙀𝙊𝙎 🍓`, m, fake, )
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return conn.reply(m.chat, `*¡Esta característica esta desactivada!*`, m, fake, )
}
return !0

}