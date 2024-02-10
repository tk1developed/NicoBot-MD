/*function handler(m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}

handler.command = ['contacto', 'contact']  
export default handler*/

const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default
var handler = async(m, { conn, text, usedPrefix, command }) => {

conn.relayMessage(m.chat, {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: `ni funca esto`,
 address: wm,
  url: `https://puto.com/si.lees.esto`,
  isLive: true,
 scheduledCallCreationMessage: {
    callvideoType: 'AUDIO',
    scheduledTimestampMs: 1698430542887,
    title: `😇                                                                                                                                                                                                                                                                                              