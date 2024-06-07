const items = [
    'limit', 'exp', 'joincount', 'money', 'potion', 'trash', 'wood',
    'rock', 'string', 'petFood', 'emerald',
    'diamond', 'gold', 'iron', 'common',
    'inycoins', 'infinitypaquete', 'infinityserver'
    'uncoommon', 'mythic', 'legendary', 'pet',
]
let confirmation = {} 
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('𝙀𝙨𝙩𝙖𝙨 𝙝𝙖𝙘𝙞𝙚𝙣𝙙𝙤 𝙪𝙣𝙖 𝙩𝙧𝙖𝙣𝙨𝙛𝙚𝙧𝙚𝙣𝙘𝙞𝙖.')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')

    let lol = `
᥀·࣭࣪̇˖☁️◗ 𝙋𝙖𝙧𝙖 𝙩𝙧𝙖𝙣𝙨𝙛𝙚𝙧𝙞𝙧𝙡𝙚 𝙖 𝙖𝙡𝙜𝙪𝙞𝙚𝙣 𝙩𝙪𝙨 𝙧𝙚𝙘𝙪𝙧𝙨𝙤𝙨, 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙚 𝙖 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖.

• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:
*${usedPrefix + command} limit 50 @${m.sender.split('@')[0]}*
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
*TRANSFERENCIAS DISPONIBLES:*

💎 *limit* (diamante)
💰 *money* (botcoins)
⭐ *exp* (experiencia)
🧪 *potion* (poción)
💵 *joincount* (tokens)

*ESPECIALES:*

☁️ *infinityserver* (servercoins)
💻 *inycoins* (servidores)
🎁 *infinitypaquete* (paquetes)
`.trim()

    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply(`᥀·࣭࣪̇˖👤◗ 𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙚 𝙖 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`)
    if (!(who in global.db.data.users)) return m.reply(`᥀·࣭࣪̇˖🎩◗ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤: ${who} • 𝙉𝙤 𝙚𝙨𝙩𝙨 𝙚𝙣 𝙢𝙞 𝙗𝙖𝙨𝙚 𝙙𝙚 𝙙𝙖𝙩𝙤𝙨, 𝙩𝙞𝙚𝙣𝙚 𝙦𝙪𝙚 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧𝙨𝙚.`)
    if (user[type] * 1 < count) return m.reply(`᥀·࣭࣪̇˖👝◗ 𝙉𝙤 𝙩𝙞𝙚𝙣𝙚𝙨 𝙡𝙤 𝙨𝙪𝙛𝙞𝙘𝙞𝙚𝙣𝙩𝙚 𝙥𝙖𝙧𝙖 𝙩𝙧𝙖𝙣𝙨𝙛𝙚𝙧𝙞𝙧: *${type}*`)
    let mentionedJid = [who]
    let username = conn.getName(who)

    let confirm = `
᥀·࣭࣪̇˖❕◗ ESTAS SEGURO DE HACER
ESTA TRANSFERENCIA DE RECURSOS?
•┄┄┄┄┄┄┄┄┄┄┄┄┄•
• *_PRUEBAS:_*
*${count} ${type} para: @${(who || '').replace(/@s\.whatsapp\.net/g, '')}*
•┄┄┄┄┄┄┄┄┄┄┄┄┄•
Mande (si) para confirmar.
Mande (no) para cancelar.
•┄┄┄┄┄┄┄┄┄┄┄┄┄•
60 segundos para confirmar...`.trim()

    let c = `Tienes 60 segundos!!`
    await conn.reply(m.chat, confirm, m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('᥀·࣭࣪̇˖❌◗ 𝙏𝙞𝙚𝙢𝙥𝙤 𝙙𝙚 𝙚𝙨𝙥𝙚𝙧𝙖 𝙘𝙖𝙙𝙪𝙘𝙖𝙙𝙖, 𝙨𝙚 𝙘𝙖𝙣𝙘𝙚𝙡𝙖 𝙡𝙖 𝙩𝙧𝙖𝙣𝙨𝙛𝙚𝙧𝙚𝙣𝙘𝙞𝙖 𝙙𝙚 𝙧𝙚𝙘𝙪𝙧𝙨𝙤𝙨.'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/^No|no$/i.test(m.text) ) { 
  //  if (/No?/m.text(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('᥀·࣭࣪̇˖✅◗ 𝘾𝙖𝙣𝙘𝙚𝙡𝙖𝙙𝙤, 𝙩𝙧𝙖𝙣𝙨𝙛𝙚𝙧𝙚𝙣𝙘𝙞𝙖 𝙣𝙤 𝙧𝙚𝙖𝙡𝙞𝙯𝙖𝙙𝙖.')
    }
    if (/^Si|si$/i.test(m.text) ) { 
  //  if (/Si?/m.text(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`᥀·࣭࣪̇˖✅◗ 𝘼𝙥𝙧𝙤𝙗𝙖𝙙𝙖, 𝙩𝙧𝙖𝙣𝙨𝙛𝙚𝙧𝙚𝙣𝙘𝙞𝙖 𝙙𝙚 𝙧𝙚𝙘𝙪𝙧𝙨𝙤𝙨.\n\n• *${count} ${type} para* @${(to || '').replace(/@s\.whatsapp\.net/g, '')}\n\n• 𝙎𝙚 𝙩𝙧𝙖𝙣𝙨𝙛𝙞𝙧𝙞𝙚𝙧𝙤𝙣 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤, 𝙢𝙞𝙧𝙖 𝙚𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙙𝙚: #minfo`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`᥀·࣭࣪̇˖⚠️◗ 𝙀𝙍𝙍𝙊𝙍 𝘿𝙀 𝙏𝙍𝘼𝙉𝙎𝙁𝙀𝙍𝙀𝙉𝘾𝙄𝘼:\n\n• *${count} ${type} para* *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*\n\n• 𝙉𝙤 𝙨𝙚 𝙥𝙪𝙙𝙤 𝙩𝙧𝙖𝙣𝙨𝙛𝙚𝙧𝙞𝙧, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transfer'].map(v => v + ' [tipo] [cantidad] [@tag]')
handler.tags = ['xp']
handler.command = ['payrecurso', 'transfer', 'darerencia', 'dar', 'enviar', 'transferir'] 

handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncoommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}