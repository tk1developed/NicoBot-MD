//Total funciones

let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `📍 𝘛𝘰𝘵𝘢𝘭 𝘍𝘶𝘯𝘤𝘪𝘰𝘯𝘦𝘴: ${totalf}`,m, fake,)
}

handler.help = ['totalf']
handler.tags = ['info']
handler.command = ['totalf']
handler.register = true
export default handler