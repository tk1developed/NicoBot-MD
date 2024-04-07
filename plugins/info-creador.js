let handler = async (m, { conn, usedPrefix, isOwner }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:👑 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 ⚡️\nFN:👑 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 ⚡️\nORG:👑 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 ⚡️\nTITLE:\nitem1.TEL;waid=573012482597:573012482597\nitem1.X-ABLabel:👑 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 ⚡️\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:👑 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 ⚡️\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '👑 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 ⚡️', contacts: [{ vcard }] }}, {quoted: fkontak})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creador', 'propietario', 'dueño'] 

handler.register = true
export default handler

/*function handler(m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}

handler.command = ['owner', 'creador']  
handler.register = true
export default handler*/