const handler = async (m, {conn}) => {
  const vn = './media/gay2.mp3';
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  await conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/gay', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'error.png', '*🏳️‍🌈 𝐐𝐮𝐢𝐞𝐧 𝐐𝐮𝐢𝐞𝐫𝐞 𝐕𝐢𝐨𝐥𝐚𝐫 𝐀 𝐄𝐬𝐭𝐞 𝐆𝐚𝐲 𝐄𝐬 100% 𝐆𝐚𝐲 𝐕𝐢𝐨𝐥𝐞𝐧𝐥𝐨 🏳️‍🌈*', m);
  await conn.sendMessage(m.chat, {audio: {url: vn}, fileName: `error.mp3`, mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
};
handler.help = ['gay'];
handler.tags = ['maker'];
handler.command = /^(gay)$/i;
export default handler;
