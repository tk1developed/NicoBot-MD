/*import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'*/
let handler = async (m, { conn, usedPrefix, command}) => {


let Reglas = ` *🕊️ 𝑴𝑬𝑵𝑼 𝑪𝑨𝑴𝑩𝑰𝑨𝑫𝑶 🦎*\n
🍁𝐍𝐨𝐭𝐚: 🍓 𝐼𝑛𝑡𝑒𝑛𝑡𝑎𝑠𝑡𝑒𝑠 𝑉𝑒𝑟 𝐸𝑙 𝑀𝑒𝑛𝑢 𝐷𝑒𝑙 𝑆𝑎𝑘𝑢𝑟𝑎𝐵𝑜𝑡𝐿𝑖𝑡𝑒-𝑀𝐷, 𝐸𝑠𝑡𝑒 𝐶𝑜𝑚𝑎𝑛𝑑𝑜 𝐶𝑎𝑚𝑏𝑖𝑜 𝐴ℎ𝑜𝑟𝑎 𝐸𝑠:\n
.*#configuracion*\n
*𝑻𝒆 𝑨𝒈𝒓𝒂𝒅𝒆𝒔𝒄𝒐 𝑺𝒊 𝑴𝒆 𝑺𝒊𝒈𝒖𝒆𝒔 𝑬𝒏 𝑬𝒍 𝑪𝒂𝒏𝒂𝒍 𝑫𝒆 𝑺𝒂𝒌𝒖𝒓𝒂𝑩𝒐𝒕𝑳𝒊𝒕𝒆-𝑴𝑫 🍓*\n
${gp1}
`.trim()  
await conn.sendFile(m.chat, imagen1, 'gata.mp4', Reglas)
}
handler.command = /^(menu|menú|COMANDOS|comandos)$/i;
handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}