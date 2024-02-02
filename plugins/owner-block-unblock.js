const handler = async (m, {text, conn, usedPrefix, command}) => {
  const why = `*[❗] 𝚄𝚂𝙾 𝙴𝚁𝚁𝙾𝙽𝙴𝙾, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*—◉ ${usedPrefix + command} @${m.sender.split('@')[0]}*`;
  const who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
  if (!who) conn.reply(m.chat, why, m, {mentions: [m.sender]});
  const res = [];
  switch (command) {
    case 'blok': case 'block':
      if (who) {
        await conn.updateBlockStatus(who, 'block').then(() => {
          res.push(who);
        });
      } else conn.reply(m.chat, why, m, {mentions: [m.sender]});
      break;
    case 'unblok': case 'unblock':
      if (who) {
        await conn.updateBlockStatus(who, 'unblock').then(() => {
          res.push(who);
        });
      } else conn.reply(m.chat, why, m, {mentions: [m.sender]});
      break;
  }
  if (res[0]) conn.reply(m.chat, `*✨𝐸𝑥𝑖𝑡𝑜 𝑆𝑒 𝑈𝑠𝑜 𝐸𝑙 𝐶𝑜𝑚𝑎𝑛𝑑𝑜 ${command} 𝑃𝑎𝑟𝑎 𝐸𝑙 𝑈𝑠𝑢𝑎𝑟𝑖𝑜 ${res ? `${res.map((v) => '@' + v.split('@')[0])}` : ''}*`, m, {mentions: res});
};
handler.command = /^(block|unblock)$/i;
handler.rowner = true;
export default handler;
