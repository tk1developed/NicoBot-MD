import fetch from 'node-fetch'

var handler = async (m, { conn, usedPrefix, text, args, command }) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => '')
let name = await conn.getName(who)
let biografia = await conn.fetchStatus('5217294888993' +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let biografiaBot = await conn.fetchStatus('5214531287294' +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let bio = biografia.status?.toString() || 'Sin Biografía'
let biobot = biografiaBot.status?.toString() || 'Sin Biografía'

await conn.sendContactArray(m.chat, [
[devnum, `${await conn.getName('573107133321'+'@s.whatsapp.net')}`, `🐢 𝑪𝒓𝒂𝒂𝒅𝒐𝒓`, dev, email, `🇨🇴 Colombia`, `https://www.youtube.com/@SakuraBotLite`, bio],
[`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🍓 𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭𝐋𝐢𝐭𝐞-𝐌𝐃`, `🦋 Es Un Bot No Agas Spam`, email, `🇲🇽 México`, `https://github.com/diegojadibot/SakuraBotLite-MD`, biobot]
], m)

}
handler.help = ['owner', 'contacto', 'creador', 'contactos']
handler.tags = ['info']
handler.command = /^(owner|contacto|creador|contactos)/i

handler.register = true

export default handler