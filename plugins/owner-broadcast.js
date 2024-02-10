import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
const delay = time => new Promise(res => setTimeout(res, time))
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
if(!text) throw '*🍓 𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝑬𝒍 𝑻𝒆𝒙𝒕𝒐 𝑸𝒖𝒆 𝑸𝒖𝒊𝒆𝒓𝒆𝒔 𝑻𝒓𝒂𝒏𝒔𝒎𝒊𝒕𝒊𝒓 𝑨 𝑻𝒐𝒅𝒐 𝑪𝒉𝒂𝒕𝒔.*'
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let i of chats) {
await delay(500)
conn.relayMessage(i, 
{ liveLocationMessage: {
  degreesLatitude: 35.685506276233525,
  degreesLongitude: 139.75270667105852,
  accuracyInMeters: 0,
degreesClockwiseFromMagneticNorth: 2,
caption: '◈ ━━━━━━━ ⸙ ━━━━━━━ ◈\n\n' + teks + '\n\n*🦋 Texto Del Creador Del Bot*',
sequenceNumber: 2,
timeOffset: 3,
contextInfo: m,
}}, {}).catch(_ => _)
    }
m.reply(`*📑 𝑴𝒆𝒏𝒔𝒂𝒋𝒆 𝑬𝒏𝒗𝒊𝒂𝒅𝒐 𝑨 ${chats.length} 𝑪𝒉𝒂𝒕𝒔 𝑷𝒓𝒊𝒗𝒂𝒅𝒐𝒔*\n\n*🔔 𝑷𝒖𝒆𝒅𝒆 𝑷𝒓𝒐𝒃𝒐𝒄𝒂𝒓 𝑺𝒐𝒑𝒐𝒓𝒕𝒆 𝑨𝒔𝒊 𝑸𝒖𝒆 𝑵𝒐 𝑷𝒖𝒆𝒅𝒆 𝑬𝒏𝒗𝒊𝒂𝒓𝒔𝒆 𝑨 𝑻𝒐𝒅𝒐 𝑳𝒐𝒔 𝑪𝒉𝒂𝒕𝒔*`)
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastchats?|bc(hats?)?)$/i
handler.rowner = true
export default handler