const handler = async (m, {conn, text}) => {
  if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `[💖] 𝐏𝐞𝐫𝐟𝐞𝐜𝐭𝐨, 𝐞𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐟𝐮𝐞 𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐝𝐨 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨, 𝐞𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐲𝐚 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿🌹`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^unbanuser$/i;
handler.rowner = true;
export default handler;