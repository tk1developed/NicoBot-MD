let handler = m => m 
handler.all = async function (m) {
let setting = global.db.data.settings[this.user.jid]
        
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 2000) }) * 1000}
let uptime = clockString(_uptime)
let bio = `${[`🤖 𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙷𝙰𝙲𝙴 𝚄𝚂𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃 𝚂𝙰𝙺𝚄𝚁𝙰𝙱𝙾𝚃𝙻𝙸𝚃𝙴-𝙼𝙳 🌸 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙰 :  ${uptime}`, `🤖 𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙷𝙰𝙲𝙴 𝚄𝚂𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃 🌸 𝚂𝙰𝙺𝚄𝚁𝙰𝙱𝙾𝚃𝙻𝙸𝚃𝙴-𝙼𝙳 ⏱️ 𝙼𝙸 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝚂 : ${uptime}`].getRandom()}`
await this.updateProfileStatus(bio).catch(_ => _)
//await this.updateProfilePicture(imagen6.catch(_ => _)
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