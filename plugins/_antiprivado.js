export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*✨️ Hola @${m.sender.split`@`[0]}, 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 𝙋𝙚𝙧𝙤 𝙈𝙚 𝙊𝙗𝙡𝙞𝙜𝙖𝙣 𝘼 𝘽𝙡𝙤𝙦𝙪𝙚𝙖𝙧𝙩𝙚 𝙋𝙤𝙧 𝙀𝙨𝙘𝙧𝙞𝙗𝙞𝙧𝙢𝙚 𝘼𝙡 𝙋𝙧𝙞𝙫𝙖𝙙𝙤 𝘾𝙝𝙖𝙤.*`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
