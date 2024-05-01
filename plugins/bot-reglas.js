let handler = async (m, { conn, usedPrefix, command}) => {


let nota = `💫 𝗥𝗘𝗦𝗣𝗘𝗧𝗔 𝗟𝗔𝗦 𝗥𝗘𝗚𝗟𝗔𝗦 💫\n
1: ¡No llamar al bot!,
2: ¡No hacerle spam al bot!,
3: ¡𝙽𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙰𝚂 𝙰𝙻 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃!,
4: ¡Respeta los terminos del bot!,
5: ¡Usa el bot de manera apropiada!,
6: ¡No insultar al bot!

📔𝗶𝗻𝗳𝗼 : Si no cumples las reglas del bot buedes ser bloqueado del bot.

𝚂𝙸 𝚃𝙴 𝙶𝚄𝚂𝚃𝙰 𝙴𝙻 𝙱𝙾𝚃 , 𝚃𝙰𝙼𝙱𝙸𝙴𝙽 𝙿𝚄𝙴𝙳𝙴𝚂 𝙸𝚁 𝙰𝙻 𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝚈 𝙳𝙴𝙹𝙰𝚁 𝚄𝙽𝙰 🌟
${md}
`.trim()
await conn.sendFile(m.chat, imagen1, 'gata.mp4', nota)
}
handler.customPrefix = /reglas|Reglas|reglasbot, botreglas|uso, usobot|uso del bot/i
handler.command = new RegExp
handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}