

let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '🧸', key: m.key } })
let str = `𝖡𝗂𝖾𝗇𝗏𝖾𝗇𝖽𝗂𝗈 𝖠 𝖫𝖺𝗌 𝖢𝗎𝖾𝗇𝗍𝖺𝗌 𝖮𝖿𝗂𝖼𝗂𝖺𝗅𝖾𝗌 😻
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌩 *Bot Oficial:*
Wa.me/51939041500
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👑 *Propietario:*
Wa.me/573012482694
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌩 *Github Del Bot:*
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌦 *Grupos Oficiales:*
1) *${gp1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
2) *${gp2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌩 *Canal De Actualización Del Bot:*
 *${channel}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🔮 *Canal De Youtube:*
${yt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🔮 *Facebook:*
${fb}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
handler.command = /^cuentas|cuentasoficiales$/i
handler.exp = 35
handler.register = true
export default handler