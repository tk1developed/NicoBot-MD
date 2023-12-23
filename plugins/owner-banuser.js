const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const BANtext = `🦁Hola Por Favor Etiqueta A Alguien Para Banearlo⚡️\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, {mentions: conn.parseMention(BANtext)});
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].banned = true;
  m.reply('* ⃟ᬽ៸𝕊𝔸𝕂𝕌ℝ𝔸𝔹𝕆𝕋-𝕄𝔻༒★» El Usuario Ya A Sido Baneado⏳️,No Puede Usarme.*');
};
handler.command = /^banuser$/i;
handler.rowner = true;
export default handler;
