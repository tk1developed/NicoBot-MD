let handler = m => m
handler.all = async function (m) {
let setting = global.db.data.settings[this.user.jid]

let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 2000) }) * 1000}
let uptime = clockString(_uptime)
let bio = `𝗕𝗼𝘁: ${[`𝖲𝖺𝗄𝗎𝗋𝖺𝖡𝗈𝗍𝖫𝗂𝗍𝖾-𝖬𝖣 🧿`, `𝖲𝖺𝗄𝗎𝗋𝖺-𝖡𝗈𝗍-𝖫𝗂𝗍𝖾-𝖬𝖣 🌼`].getRandom()}                                        
                                        𝗔𝗰𝘁𝗶𝘃𝗼: ${uptime}                                                                                 𝗢𝘄𝗻𝗲𝗿: ${[`𝖣𝗂𝖾𝗀𝗈 𝖮𝖿𝗂𝖼𝗂𝖺𝗅 💋`, `𝖣𝗂𝖾𝗀𝗈 𝖲𝖪 💜`].getRandom()}` 
await this.updateProfileStatus(bio).catch(_ => _)
setting.status = new Date() * 1
} 
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' » ', h, ' ・ ', m, ' ・ ', s].map(v => v.toString().padStart(2, 0)).join('') 
}