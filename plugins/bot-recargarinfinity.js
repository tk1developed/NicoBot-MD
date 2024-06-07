let MessageType = (await import(global.baileys)).default
let pajak = 0
let handler = async (m, { conn, text, usedPrefix, command}) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `᥀·࣭࣪̇˖💰◗ 𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙚 𝙤 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `᥀·࣭࣪̇˖💻◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙡𝙖 𝙘𝙖𝙣𝙩𝙞𝙙𝙖𝙙 𝙙𝙚 𝙨𝙚𝙧𝙫𝙞𝙙𝙤𝙧𝙚𝙨 𝙥𝙖𝙧𝙖 𝙙𝙖𝙧𝙡𝙚 𝙖𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤.`
if (isNaN(txt)) throw `᥀·࣭࣪̇˖🚫◗ 𝙎𝙤𝙡𝙤 𝙨𝙚 𝙖𝙙𝙢𝙞𝙩𝙚𝙣 𝙣𝙪𝙢𝙚𝙧𝙤𝙨, 𝙣𝙤 𝙨𝙞𝙢𝙗𝙤𝙡𝙤𝙨...\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} @${global.owner[0][0]} 50`
try {
let dmt = parseInt(txt)
let infinityserver = dmt
let pjk = Math.ceil(dmt * pajak)
infinityserver += pjk
if (infinityserver < 100) throw `᥀·࣭࣪̇˖⚠️◗ 𝙀𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙙𝙚 𝙨𝙚𝙧𝙫𝙞𝙙𝙤𝙧𝙚𝙨 𝙩𝙞𝙚𝙣𝙚 𝙪𝙣 𝙡𝙞𝙢𝙞𝙩𝙚 𝙙𝙚 *100*, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`
let users = global.db.data.users
users[who].infinityserver += dmt
conn.reply(m.chat,  `𝗖𝗢𝗠𝗣𝗥𝗔 𝗗𝗘𝗟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢: *${text}*\n\n𝗦𝗘𝗥𝗩𝗜𝗗𝗢𝗥 𝗗𝗔𝗗𝗢:\n• *${dmt} Servidor(es)* 💻`, m, {contextInfo: {mentionedJid: conn.parseMention(text)}})
} catch (e) {
await conn.reply(m.chat, `᥀·࣭࣪̇˖⚠️◗ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙛𝙖𝙡𝙡𝙖𝙙𝙤, 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩.`, m)
console.log(`᥀·࣭࣪̇˖🚫◗ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙣𝙚𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`)
console.log(e)}}
handler.help = ['addserver <@user>']
handler.tags = ['xp']
handler.command = ['recargarservidor', 'addservidor', 'darservidor'] 
handler.group = true
handler.rowner = true
export default handler