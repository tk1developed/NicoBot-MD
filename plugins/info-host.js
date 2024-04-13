import { totalmem, freemem } from 'os'
import os from 'os'
import util from 'util'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'
const format = sizeFormatter({ std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B` })

var handler = async (m, { conn }) => {

let timestamp = speed()
let latensi = speed() - timestamp

let _muptime = process.uptime() * 1000
let muptime = clockString(_muptime)

let chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])


let texto = `> 𝗜𝗻𝗳𝗶𝗻𝗶𝘁𝘆-𝗪𝗮 𝗛𝗼𝘀𝘁 ᙭ 𝗦𝗮𝗸𝘂𝗿𝗮 - 𝗕𝗼𝘁 - 𝗟𝗶𝘁𝗲 - 𝗠𝗗\n

🟢 \`\`\`𝖴𝗌𝖺 𝖲𝖺𝗄𝗎𝗋𝖺𝖡𝗈𝗍 𝖤𝗇 𝖨𝗇𝖿𝗂𝗇𝗂𝗍𝗒-𝖧𝗈𝗌𝗍T\`\`\`

Que esperas para usar *𝖲𝖺𝗄𝗎𝗋𝖺𝖡𝗈𝗍* en los mejores servidores de alto rendimiento y de bajo precio. El Staff de *𝖲𝖺𝗄𝗎𝗋𝖺𝖡𝗈𝗍* y *𝖨𝗇𝖿𝗂𝗇𝗂𝗍𝗒-𝖧𝗈𝗌𝗍* hacen posible que puedas ejecutar las funciones que tanto te gusta usar de *𝖲𝖺𝗄𝗎𝗋𝖺𝖡𝗈𝗍* sintiendo una experiencia fluida y de calidad.

👇🏻 \`\`\`𝗜𝗡𝗙𝗢 𝗗𝗘𝗟 𝗛𝗢𝗦𝗧\`\`\`

💻 *Página*
https://host.panel-infinitywa.store

🏖 *Canal*
https://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A

🌐 *Grupo*
https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV

💸 *Precios :*
* 1GB, 100 CPU = 1Dolar
* 2GB, 120 CPU = 2Dolar
* 3GB, 140 CPU = 3Dolar
* 4GB, 175 CPU = 4Dolar
* 5GB, 200 CPU = 5 Dólar. 

📦 *Método de pago:*
*• PayPal 🌍*
*• Mercado pago 🇦🇷*
*• Tigo Money 🇧🇴*
*• Cuenta Rut 🇨🇱*
*• *Naranja x, alías:* OficialGL*
*• Yape 🇵🇪*

📱 *Contactos para mayor información*
https://wa.me/573218138672
https://wa.me/5492266613038
`.trim()

conn.sendMessage(m.chat, { text: texto, contextInfo: { externalAdReply: { title: '', body: '💻 𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩 𝙀𝙣 𝙄𝙣𝙛𝙞𝙣𝙞𝙩𝙮-𝙒𝙖', thumbnailUrl: 'https://telegra.ph/file/402a282532bc2fd2dc880.jpg', sourceUrl: '', mediaType: 1, renderLargerThumbnail: true }}})

}
handler.help = ['ping']
handler.tags = ['bot']
handler.command = ['infinity', 'host']

handler.register = true

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}