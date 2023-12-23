const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const BANtext = `🦁Etiqueta El Usuario Para Banearlo:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, {mentions: conn.parseMention(BANtext)});
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].banned = true;
  m.reply('*🦁Listo Amo Ya Está Baneado*');
};
handler.command = /^banuser$/i;
handler.rowner = true;
export default handler;
