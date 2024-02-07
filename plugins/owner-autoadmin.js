

const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '🍓 𝗛𝗢𝗟𝗔,𝗬𝗔 𝗘𝗦 𝗔𝗗𝗠𝗜𝗡 𝗗𝗘 𝗘𝗦𝗧𝗘 𝗚𝗥𝗨𝗣𝗢 𝗠𝗜 𝗢𝗪𝗡𝗘𝗥.';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('🍓 𝐋𝐎 𝐒𝐈𝐄𝐍𝐓𝐎, 𝐍𝐎 𝐅𝐔𝐈 𝐂𝐀𝐏𝐀𝐙 𝐃𝐄 𝐃𝐀𝐑𝐋𝐄 𝐀𝐃𝐌𝐈𝐍🦋');
  }
};
handler.command = /^(tenerpoder|seradmin)$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;