let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 1000)
let info = `*💧 𝑂ℎℎ, 𝐺𝑒𝑛𝑖𝑎𝑙 𝑀𝑖𝑛𝑎𝑠𝑡𝑒𝑠: ${hasil} 𝑋𝑃 🌹*`
let time = global.db.data.users[m.sender].lastmiming + 600000
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `*⚓ 𝐻𝑒𝑦 𝑇𝑒 𝑇𝑜𝑐𝑎 𝐸𝑠𝑝𝑒𝑟𝑎𝑟 ${msToTime(time - new Date())} 𝑃𝑎𝑟𝑎 𝑉𝑜𝑙𝑣𝑒𝑟 𝐴 𝑈𝑠𝑎𝑟 𝐸𝑙 𝐶𝑜𝑚𝑎𝑛𝑑𝑜*`  

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯 🍓*', 'status@broadcast')   
//m.reply(`*[ 🎉 ] 𝙶𝚎𝚗𝚒𝚊𝚕, 𝚖𝚒𝚗𝚊𝚜𝚝𝚎 ${hasil} 𝚇𝙿*`)
global.db.data.users[m.sender].lastmiming = new Date * 1

}
handler.help = ['minar']
handler.tags = ['rg']
handler.command = ['minar', 'miming', 'mine'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}