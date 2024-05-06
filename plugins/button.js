let foto = imagen4
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let text = `❤️ Waoz Ese Es Mi Propietario. 🌼`
await conn.sendButton(m.chat, text, `👋🏻 ¡Hola! ` + nombre, foto, [
['🎋 𝗠𝗲𝗻𝘂 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗼 💫', '!allmenu'],
['🌻 𝗦𝗰𝗿𝗶𝗽𝘁 🔥', '!sc'],
['❤️ 𝗣𝗿𝗼𝗽𝗶𝗲𝘁𝗮𝗿𝗶𝗼 🍄', '#owner'],
['🌼 𝗕𝗼𝘁 🏝️', '!bot Hola']], null, [
['🇦🇲 𝗖𝗮𝗻𝗮𝗹 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 🌹', `${channel}`]], m)}
handler.customPrefix = /Diego|diego/i;
handler.command = new RegExp;
export default handler;
