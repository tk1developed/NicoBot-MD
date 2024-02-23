let media = ''
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '😝', key: m.key } })
let str = `⚡️ *Hola Usuario Como As Estado! ⚘️

!allmenu
(Para Ver El Menu Completo)`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.command = /^menu$/i
handler.register = true

export default handler