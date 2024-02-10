const handler = async (m, {conn, text}) => {
  if (!text) throw '💖 𝘗𝘰𝘳 𝘍𝘢𝘷𝘰𝘳 𝘌𝘵𝘪𝘲𝘶𝘦𝘵𝘢 𝘓𝘢 𝘗𝘦𝘳𝘴𝘰𝘯𝘢 𝘘𝘶𝘦 𝘋𝘦𝘴𝘦𝘢 𝘋𝘦𝘴𝘣𝘢𝘯𝘦𝘢𝘳';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '💖 𝘗𝘰𝘳 𝘍𝘢𝘷𝘰𝘳 𝘌𝘵𝘪𝘲𝘶𝘦𝘵𝘢 𝘓𝘢 𝘗𝘦𝘳𝘴𝘰𝘯𝘢 𝘘𝘶𝘦 𝘋𝘦𝘴𝘦𝘢 𝘋𝘦𝘴𝘣𝘢𝘯𝘦𝘢𝘳';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `🍓 𝖯𝖾𝗋𝖿𝖾𝖼𝗍𝗈, 𝖤𝗅 𝖴𝗌𝗎𝖺𝗋𝗂𝗈 𝖸𝖺 𝖤𝗌𝗍𝖺 𝖣𝖾𝗌𝖻𝖺𝗇𝖾𝖺𝖽𝗈, 𝖸𝖺 𝖯𝗎𝖾𝖽𝖾 𝖴𝗌𝖺𝗋 𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿🌹`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^unbanuser$/i;
handler.rowner = true;
export default handler;