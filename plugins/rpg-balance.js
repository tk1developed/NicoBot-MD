const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`╭━〔  𝐍𝐈𝐂𝐎 𝐁𝐎𝐓 🍄  〕⬣
┋📩 *Usuario:* ${name}
┋💎 *Diamantes*: ${global.db.data.users[who].diamond} 💎
┋🪙 *Experiencia:* ${global.db.data.users[who].exp}
╰━━━━━━━━━━━━⬣

╭━〔  𝐍𝐈𝐂𝐎 𝐁𝐎𝐓 🍄  〕⬣
┃ _Puedes Comprar Mas 💎_
┃ _Usando Los Siguentes Comandos_
┃ *${usedPrefix}buy <cantidad>*
┃ *${usedPrefix}buyall*
╰━━━━━━━━━━━━⬣`)
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'diamantes', 'diamond', 'balance'];
export default handler;
