//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    //user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
        m.reply(`╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍃₎۬۟〬𝙰𝚄𝚃𝙾𝙽𝙸𝚅𝙴𝙻░⃟⃜🌺」        
╏• 
┃֪࣪➺  *🍂 𝐅𝐞𝐥𝐢𝐜𝐢𝐝𝐚𝐝𝐞𝐬 𝐒𝐮𝐛𝐢𝐬𝐭𝐞 𝐃𝐞 𝐍𝐢𝐯𝐞𝐥 🍁*
┃֪࣪➺  *Nɪᴠᴇʟ Aɴᴛɪɢᴜᴏ : ${before}* 
┃֪࣪➺  *Nᴜᴇᴠᴏ Nɪᴠᴇʟ : ${user.level}*
┃֪࣪➺  *Rᴀɴɢᴏ : ${user.role}*
┃֪࣪➺  *Fᴇᴄʜᴀ : ${new Date().toLocaleString('id-ID')}*
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`.trim())
    }
} 