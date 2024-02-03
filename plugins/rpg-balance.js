const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`╭━━━━━━ • ✿ • ━━━━━━
├✨ᬽ៸ *𝐂𝐥𝐢𝐞𝐧𝐭𝐞:* ${name}
├🌻ᬽ៸ *𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬*: ${global.db.data.users[who].diamond} 💎
├🌼ᬽ  *𝐄𝐱𝐩:* ${global.db.data.users[who].exp}
◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭━━━━━━ • ✿ • ━━━━━━
├❥ᰰຼ *𝑷𝒖𝒆𝒅𝒆𝒏 𝑪𝒐𝒎𝒑𝒓𝒂𝒓 𝑴𝒂𝒔 💎*
├❥ᰰຼ *𝑼𝒔𝒂 𝑬𝒔𝒕𝒐𝒔 𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝑷𝒂𝒓𝒂 𝑪𝒐𝒎𝒑𝒓𝒂𝒓 𝑴𝒂𝒔 𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔*
├❥ᰰຼ ✰ *${usedPrefix}buy <cantidad>*
├❥ᰰຼ ✰ *${usedPrefix}buyall*
◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`)
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'diamantes', 'diamond', 'balance'];
export default handler;
