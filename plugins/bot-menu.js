let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './storage/logos/Menu2.jpg'

let menu = `╭─────────────────────⪩
╏┏─━━━━━━━⊱✿⊰━━━━━━━─╮
╏┋ ┏━━━━ • ✿ • ━━━━╮
╏┋ ┋ 🌸 BIENVENIDO
╏┋ ┋${name}
╏┋ ┗━━━━ • ✿ • ━━━━╯
╏┋ ┏━━━━ • ✿ • ━━━━╮
╏┋ ┋ *LISTAS DE MENU*
╏┋ ┋━━━━ • ✿ • ━━━━╯
╏┋ ┋#allmenu
╏┋ ┋#menujuegos
╏┋ ┋#menuowner
╏┋ ┋#menuanimes
╏┋ ┋#menu2
╏┋ ┋#hornymenu 
╏┋ ┗━━━━ • ✿ • ━━━━╯
╏┗─━━━━━━⊱✿⊰━━━━━━━─╯
╰─────────────────────⪩ `

conn.sendMessage(m.chat, {text: menu, mentions: [m.sender]}, {quoted: m})

//conn.reply(m.chat, `*🚩 Ocurrió un fallo*`)

}
handler.help = ['menu']
handler.tags = ['help']
handler.command = /^(menu|comandos)$/i

handler.register = true

export default handler