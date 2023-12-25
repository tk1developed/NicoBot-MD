const handler = async (m, {conn, text}) => {
  if (!text) throw '*ᴇsᴄʀɪʙᴀ ᴇʟ @𝚝𝚊𝚐 ᴅᴇʟ ᴜsᴜᴀʀɪᴏ ʙᴀɴᴇᴀᴅᴏ*';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*ᴇsᴄʀɪʙᴀ ᴇʟ @𝚝𝚊𝚐 ᴅᴇʟ ᴜsᴜᴀʀɪᴏ ʙᴀɴᴇᴀᴅᴏ*';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `*🦁 Lɪsᴛᴏ Aᴍᴏ*\n*—◉ Eʟ Usᴜᴀʀɪᴏ Yᴀ Pᴜᴇᴅᴇ Usᴀʀ Mɪs Cᴏᴍᴀɴᴅᴏs*`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^unbanuser$/i;
handler.rowner = true;
export default handler;
