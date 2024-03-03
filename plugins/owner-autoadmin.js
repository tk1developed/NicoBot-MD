

const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '✅️ 𝗛𝗢𝗟𝗔,𝗬𝗔 𝗘𝗦 𝗔𝗗𝗠𝗜𝗡 𝗗𝗘 𝗘𝗦𝗧𝗘 𝗚𝗥𝗨𝗣𝗢 𝗠𝗜 𝗢𝗪𝗡𝗘𝗥.';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('📍 *Ocurrió Un Error*');
  }
};
handler.command = /^(tenerpoder|autoadmin)$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;