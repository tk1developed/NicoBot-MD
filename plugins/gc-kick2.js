const handler = async (m, {conn, participants, usedPrefix, command}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '*¡Este Comando Esta Desabilitado Por El Propietario Del Bot!*';
  const kicktext = `🌻 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚 𝐀 𝐋𝐚 𝐏𝐞𝐫𝐬𝐨𝐧𝐚 𝐎 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐀𝐥 𝐌𝐞𝐧𝐬𝐚𝐣𝐞 𝐏𝐚𝐫𝐚 𝐄𝐥𝐢𝐦𝐢𝐧𝐚𝐫𝐥𝐨.\n\n*🦋 𝑬𝒋𝒆𝒎𝒑𝒍𝒐:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  const owr = m.chat.split`-`[0];
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};
handler.command = /^(kick2|echar2|hechar2|sacar2)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
