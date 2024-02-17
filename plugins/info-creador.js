let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:𝑾𝒂.𝒕.𝑺𝒊𝒏 𝑷𝒆𝒓𝒇𝒊𝒍/𝑶𝒇𝒄\nFN:𝑾𝒂.𝒕.𝑺𝒊𝒏 𝑷𝒆𝒓𝒇𝒊𝒍/𝑶𝒇𝒄\nORG:𝑾𝒂.𝒕.𝑺𝒊𝒏 𝑷𝒆𝒓𝒇𝒊𝒍/𝑶𝒇𝒄\nTITLE:\nitem1.TEL;waid=573013482814:573013482814\nitem1.X-ABLabel:𝑾𝒂.𝒕.𝑺𝒊𝒏 𝑷𝒆𝒓𝒇𝒊𝒍/𝑶𝒇𝒄\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:𝑾𝒂.𝒕.𝑺𝒊𝒏 𝑷𝒆𝒓𝒇𝒊𝒍/𝑶𝒇𝒄\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '𝑾𝒂.𝒕.𝑺𝒊𝒏 𝑷𝒆𝒓𝒇𝒊𝒍/𝑶𝒇𝒄', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler

/*function handler(m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}

handler.command = ['owner', 'creador']  
export default handler*/