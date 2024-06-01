let foto = imagen6
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let menu = `${wm} Versión ${vs} Comandos.`
await conn.sendButton(m.chat, menu, `YoshikoBot-MD\n` + wm, foto, [
['Menu Completo', '.allmenu'],
['Propietario', '#owner'],
['Velocidad', '/ping']], null, [
['Canal', `${channel}`]], m)}
handler.command = /^menu|menú$/i
handler.exp = 80
export default handler