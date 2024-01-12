import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export function before(m) {
    let user = db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        m.reply(`
⤴ Bot Tiburón🦈 | ⚠️ *「 LEVEL-UP v2 」*

Felicitaciones, has subido de nivel!
*${before}* ↣ *${user.level}*
usa *.profile* para revisar
        `.trim())
    }
}
export const disabled = true