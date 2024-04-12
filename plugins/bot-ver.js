var handler = async (m, { conn }) => {

if (!/viewOnce/.test(m.quoted?.mtype)) throw '╰⊱🧿⊱ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 ⊱🧿⊱╮\n\n𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙫𝙞𝙙𝙚𝙤 𝙤 𝙛𝙤𝙩𝙤 𝙦𝙪𝙚 𝙚𝙨𝙩𝙖́ 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙨𝙤𝙡𝙤 𝙪𝙣𝙖 𝙫𝙚𝙯'
let mtype = Object.keys(m.quoted.message)[0]
let buffer = await m.quoted.download()
let caption = m.quoted.message[mtype].caption || ''
conn.sendMessage(m.chat, { [mtype.replace(/Message/, '')]: buffer, caption }, { quoted: m })

}
handler.help = ['readviewonce']
handler.tags = ['implementos']
handler.command = /^retrieve|readviewonce|ver/i

export default handler