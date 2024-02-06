import { Low, JSONFile } from 'lowdb'

const adapter = new JSONFile('./jadibts/connections/stop.json')
const db = new Low(adapter)

db.data = db.data === undefined || db.data === null ? { stop: {} } : db.data;
let handler = async (m, { usedPrefix, conn, args, participants })=> {
  let users = [...new Set([...global.conns.filter(conn => conn.isInit && conn.state !== 'close').map(conn => conn.user)])];

  //let stop = db.data.stop;

  //users = users.filter(user => !stop[user]); // filtra los usuarios que han usado el comando 'stop'

  let int = '';
  let count = 0;
  let resp = `*🚀Aǫᴜɪ Tɪᴇɴᴇs Lᴀs Lɪsᴛᴀs Dᴇ Sᴜʙʙᴏᴛs Aᴄᴛɪᴠᴏs🚀*

*🌻 𝑷𝒖𝒆𝒅𝒆𝒔 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒂𝒓 𝑷𝒂𝒓𝒂 𝑸𝒖𝒆 𝑼𝒏 𝑩𝒐𝒕 𝑺𝒆 𝑼𝒏𝒂 𝑨𝒍 𝑮𝒓𝒖𝒑𝒐 𝑸𝒖𝒆 𝑼𝒔𝒕𝒆𝒅 𝑫𝒆𝒔𝒆𝒂 𝑼𝒔𝒂𝒓 𝑬𝒍 𝑩𝒐𝒕 🌼*

*🚀🌻  𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯 𝐍𝐨 𝐒𝐞 𝐇𝐚𝐜𝐞 𝐂𝐚𝐫𝐠𝐨 𝐃𝐞 𝐌𝐚𝐥 𝐔𝐬𝐨 𝐃𝐞𝐥 𝐁𝐨𝐭 𝐀 𝐒𝐮 𝐍𝐮𝐦𝐞𝐫𝐨»!!*

*🌻 𝙇𝙖𝙨 𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙨 𝙌𝙪𝙚 𝙎𝙚 𝘾𝙤𝙣𝙚𝙘𝙩𝙖𝙣 𝘼𝙡 𝘽𝙤𝙩 𝙉𝙤 𝘾𝙤𝙣𝙤𝙘𝙚𝙢𝙤𝙨 𝘼 𝙀𝙨𝙖𝙨 𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙨, 𝘼𝙨𝙞 𝙌𝙪𝙚 𝖣𝗂𝖾𝗀𝗈𝖮𝖿𝗂𝖼𝗂𝖺𝗅 𝙉𝙤 𝙎𝙚 𝙃𝙖𝙘𝙚 𝘾𝙖𝙧𝙜𝙤 𝘿𝙚 𝙇𝙤 𝙌𝙪𝙚 𝙋𝙪𝙚𝙙𝙖 𝙋𝙖𝙨𝙖𝙧 𝙀𝙣 𝙇𝙤𝙨 𝘽𝙤𝙩𝙨 𝘿𝙚 𝙉𝙪𝙢𝙚𝙧𝙤𝙨 𝙉𝙤 𝘾𝙤𝙣𝙤𝙘𝙞𝙙𝙤𝙨. 🌼*\n\n`
  let uniqueUsers = users.filter((v, i, a) => a.findIndex(t => (t.jid === v.jid)) === i)

  let SB = uniqueUsers.map((v, i) => `${i + 1}.  👉🏻 ${'@'}${v.jid.split`@`[0]}`).join`\n`

for (const c of resp) {
      await new Promise(resolve => setTimeout(resolve, 15));
      int += c;
      count++;

      if (count % 10 === 0) {
          conn.sendPresenceUpdate('composing' , m.chat);
      }
  }
  await conn.sendMessage(m.chat, { text: int, mentions: conn.parseMention(resp) }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100} )
  for (const c of SB) {
    await new Promise(resolve => setTimeout(resolve, 50));
    int += c;
    count++;

    if (count % 10 === 0) {
        conn.sendPresenceUpdate('composing' , m.chat);
    }
}
  await conn.sendMessage(m.chat, { text: SB, mentions: conn.parseMention(SB) }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100} )
}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler                                