export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`> "🍧 𝙃𝙤𝙡𝙖 @${m.sender.split`@`[0]}, 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙞𝙧𝙢𝙚 𝙥𝙤𝙧 𝙥𝙧𝙞𝙫𝙖𝙙𝙤\n\n> 🍓 𝙋𝙪𝙚𝙙𝙚𝙨 𝙪𝙣𝙞𝙧𝙩𝙚 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 𝙙𝙚𝙡 𝘽𝙤𝙩 👇\n\n\n${gp1}`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}