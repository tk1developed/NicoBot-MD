let foto = imagen4
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let text = `❤️ Waoz Ese Es Mi Propietario. 🌼`
await conn.sendButton(m.chat, text, `👋🏻 ¡Hola! ` + nombre, foto, [
['⌨️ Menu Oficial ⌨️', '!allmenu'],
['🍧 Waoz', '!sc'],
['❤️ Propietario', '#owner'],
['🌼 Bot', '!bot Hola']], null, [
['🇦🇲 Canal', `${channel}`]], m)}
handler.customPrefix = /Diego|diego/i;
handler.command = new RegExp;
export default handler;
