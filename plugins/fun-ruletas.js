//CÓDIGO CREADO POR elrebelde21 : https://github.com/elrebelde21

const handler = async (m, {conn, text, isPrems}) => {
if (!db.data.chats[m.chat].game) throw `🍓 𝖤𝗌𝗍𝖾 𝖩𝗎𝖾𝗀𝗈 𝖤𝗌𝗍𝖺 𝖬𝗈𝖽𝗈 𝖮𝖿𝖿 𝖯𝗈𝗋 𝖫𝗈𝗌 𝖠𝖽𝗆𝗂𝗇𝗂𝗌𝗍𝗋𝖺𝖽𝗈𝗋𝖾𝗌, 𝖲𝗂 𝖤𝗋𝖾𝗌 𝖠𝖽𝗆𝗂𝗇 𝖴𝗌𝖺: #enable juegos` 
const date = global.db.data.users[m.sender].juegos + 21600000; //21600000 = 6 hs 
if (new Date - global.db.data.users[m.sender].juegos < 21600000) throw `⏰ 𝐄𝐬𝐩𝐞𝐫𝐚 : ${msToTime(date - new Date())} 𝐏𝐚𝐫𝐚 𝐒𝐞𝐠𝐮𝐢𝐫 𝐉𝐮𝐠𝐚𝐧𝐝𝐨 `
let user = global.db.data.users[m.sender]
const prem = Math.floor(Math.random() * 3600000)
const exp = Math.floor(Math.random() * 10000)
const diamond = Math.floor(Math.random() * 300)
const money = Math.floor(Math.random() * 10000)
let rulet = ['text', 'text2', 'text3', 'text4', 'text5', 'text6']; 
let ruleta = rulet[Math.floor(Math.random() * 6)]
global.db.data.users[m.sender].juegos = new Date * 1;
if (ruleta === 'text') return m.reply(`😻 𝑄𝑢𝑒 𝐵𝑢𝑒𝑛𝑎 𝑆𝑢𝑒𝑟𝑡𝑒 𝑇𝑖𝑒𝑛𝑒𝑠 🐞🍀\n*𝑹𝒆𝒄𝒍𝒂𝒎𝒂𝒔 :* ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
if (ruleta === 'text2') return m.reply(`😿 𝑁𝑜𝑜 𝑄𝑢𝑒 𝑀𝑎𝑙𝑎 𝑆𝑢𝑒𝑟𝑡𝑒 𝑇𝑒 𝑄𝑢𝑖𝑡𝑎𝑛: ${exp} 𝐷𝑒 𝑋𝑃`).catch(global.db.data.users[m.sender].exp -= exp) 
if (ruleta === 'text3') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'demote').catch(m.reply(`🚀 𝐸𝑠𝑡𝑎𝑠 𝑅𝑒 𝑀𝑎𝑙𝑎 𝑇𝑒 𝑄𝑢𝑖𝑡𝑜 𝐸𝑙 𝑃𝑜𝑑𝑒𝑟 𝐷𝑒𝑙 𝐴𝑑𝑚𝑖𝑛 😹😹😹`)) 
if (ruleta === 'text4') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote').catch(m.reply(`😼 𝐸𝑟𝑒𝑠 𝐵𝑢𝑒𝑛𝑎 𝑆𝑢𝑒𝑟𝑡𝑒, 𝐴ℎ𝑜𝑟𝑎 𝐸𝑟𝑒𝑠 𝐴𝑑𝑚𝑖𝑛, 𝑆𝑖 𝑄𝑢𝑖𝑡𝑎𝑠 𝐴𝑑𝑚𝑖𝑛 𝐸𝑟𝑒𝑠 𝐹𝑎𝑛𝑠 𝐷𝑒 𝐾𝑢𝑛𝑛𝑜 🌥`)) 
if (ruleta === 'text5') return m.reply(`𝐻𝑜𝑜 𝑆𝑒𝑛̃𝑜𝑟 𝐸𝑠𝑡𝑎 𝐷𝑒 𝐵𝑢𝑒𝑛𝑎 𝑆𝑢𝑒𝑟𝑡𝑒 𝑉𝑒 𝑌 𝐽𝑢𝑒𝑔𝑎 𝐸𝑛 𝐸𝑙 𝐶𝑎𝑛𝑠𝑖𝑛𝑜 🎰\n*𝑮𝒂𝒏𝒂𝒔𝒕𝒆𝒔 :* ${diamond} 💎`).catch(global.db.data.users[m.sender].diamond += diamond) 
if (ruleta === 'text6') return m.reply(`🌹 𝑇𝑎𝑠 𝐷𝑒 𝑆𝑢𝑒𝑟𝑡𝑒 𝑂𝑏𝑡𝑖𝑒𝑛𝑒𝑠 𝑆𝑒𝑟 𝑃𝑟𝑒𝑚𝑖𝑢𝑚 𝑃𝑜𝑟 : 1 𝐻𝑜𝑟𝑎 ⏰`).catch(global.db.data.users[m.sender].premium += prem) 
}
handler.help = ['game'];
handler.tags = ['xp'];
handler.command = /^(ruletas|ruleta|suerte)$/i
handler.fail = null;
handler.group = true
handler.register = true
export default handler;

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}