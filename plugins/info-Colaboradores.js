let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './Menu.png'

let menu = `╭─────────────────────⪩
╏┏─━━━━━━⊱✿⊰━━━━━━━─╮
╏┋ 🌩 *SakuraBotLite-MD*
╏┋${name}
╏┗━━━━ • ✿ • ━━━━╯
╏┏━━━━ • ✿ • ━━━━╮
╏┋ *COLABORADORES*
╏┋━━━━ • ✿ • ━━━━╯
╏┋𝖣𝗂𝖾𝗀𝗈:
╏┋https://github.com/diegojadibot
╏┋
╏┋𝖣𝖺𝗇𝗂𝖾𝗅:
╏┋https://github.com/MoonContentCreator
╏┋
╏┋𝖠𝗓𝖺𝗆𝗂:
╏┋https://github.com/AzamiJs
╏┋
╏┋𝖬𝖺𝗋𝗂𝗈:
╏┋https://github.com/elrebelde21
╏┋
╏┋
╏┗─━━━━━━⊱✿⊰━━━━━━━─╯
╰─────────────────────⪩ `

conn.sendMessage(m.chat, {text: menu, mentions: [m.sender]}, {quoted: m})

//conn.reply(m.chat, `*🚩 Ocurrió un fallo*`)

}
handler.help = ['menu']
handler.tags = ['help']
handler.command = /^(creditos|colaboradores)$/i

handler.register = true

export default handler 