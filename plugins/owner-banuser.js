const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const BANtext = `🍓 𝐏𝐨𝐫 𝐅𝐚𝐯𝐨𝐫 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚 𝐀 𝐔𝐧 𝐔𝐬𝐚𝐫𝐢𝐨 𝐏𝐚𝐫𝐚 𝐁𝐚𝐧𝐞𝐚𝐫𝐥𝐨 𝐃𝐞𝐥 𝐁𝐨𝐭!`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, {mentions: conn.parseMention(BANtext)});
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].banned = true;
  m.reply('*🦋 𝖯𝖾𝗋𝖿𝖾𝖼𝗍𝗈, 𝖤𝗅 𝖴𝗌𝗎𝖺𝗋𝗂𝗈 𝖸𝖺 𝖤𝗌𝗍𝖺 𝖡𝖺𝗇𝖾𝖺𝖽𝗈, 𝖭𝗈 𝖯𝗈𝖽𝗋𝖺 𝖴𝗌𝖺𝗋 ${wm}*');
};
handler.command = /^banuser$/i;
handler.rowner = true;
export default handler;