/*let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `• Total de Funciones: ${totalf}`,m)
}

handler.help = ['totalfunciones']
handler.tags = ['info']
handler.command = ['totalfunciones']
handler.register = true
export default handler*/

let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `🦋 𝘛𝘰𝘵𝘢𝘭 𝘍𝘶𝘯𝘤𝘪𝘰𝘯𝘦𝘴: ${totalf}`,m)
}

handler.help = ['totalf']
handler.tags = ['info']
handler.command = ['totalf']
handler.register = true
export default handler