let handler = async (m, { conn, command, text }) => {
let odio = `────────────────\n𝗖𝗮𝗹𝗰𝘂𝗹𝗮𝗱𝗼𝗿𝗮 𝗗𝗲 𝗢𝗱𝗶𝗼 😡
Odio Entre ${text} Por El Es: ${Math.floor(Math.random() * 100)}%\n────────────────`.trim()
m.reply(odio, null, { mentions: conn.parseMention(odio) })}
handler.command = /^(odio)$/i
export default handler