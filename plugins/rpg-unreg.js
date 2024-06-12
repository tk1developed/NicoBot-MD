let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]

user.registered = false
m.reply(`𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝘼𝙈𝙀𝙉𝙏𝙀 𝘿𝙀 𝙇𝘼 𝘽𝘼𝙎𝙀 𝘿𝙀 𝘿𝘼𝙏𝙊𝙎『✅』 `)

}
handler.help = ['unreg']
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler