const handler = async (m, {conn, text}) => {
  if (!text) throw '🧸 *Etiqueta Al Usuario Baneado*';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '🧸 *Etiqueta Al Usuario Baneado*';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `🧸 *Perfecto El Usuario Ya Me Pudde Usar*`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^unbanuser$/i;
handler.rowner = true;
export default handler;