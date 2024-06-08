mlet linkRegex = /whatsapp.com|wa.me|whatsapp.com\/channel/i

let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (isAdmin || isOwner || isROwner || m.fromMe) return
if (m.isBaileys && m.fromMe) return
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
const user = `@${m.sender.split`@`[0]}`
//const groupAdmins = participants.filter(p => p.admin)
//const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (chat.antiLink && isGroupLink) {
if (!isBotAdmin) return m.reply('᥀·࣭࣪̇˖👑◗ 𝙀𝙡 𝙖𝙙𝙢𝙞𝙣 𝙖𝙘𝙖𝙗𝙖 𝙙𝙚 𝙚𝙣𝙫𝙞𝙖𝙧 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚, 𝙣𝙤 𝙨𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙥𝙤𝙧 𝙨𝙚𝙧 𝙖𝙙𝙢𝙞𝙣. ✨️')
if (chat.delete) return m.reply('᥀·࣭࣪̇˖🎩◗ 𝘼𝙥𝙖𝙜𝙖 𝙚𝙡 𝙖𝙣𝙩𝙞𝙙𝙚𝙡𝙚𝙩𝙚 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙧𝙚𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙞𝙣𝙣𝙚𝙘𝙚𝙨𝙖𝙧𝙞𝙤𝙨.')   
if (isBotAdmin) {
if (m.text.includes(linkThisGroup)) return
await conn.sendMessage(m.chat, { text: `᥀·࣭࣪̇˖✨️◗ 𝙀𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤 𝙣𝙤 𝙨𝙚 𝙖𝙙𝙢𝙞𝙩𝙚 𝙚𝙣𝙫𝙞𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙜𝙧𝙪𝙥𝙖𝙡𝙚𝙨.`, mentions: [m.sender] }, { quoted: m })    
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}
return !0
}
export default handler