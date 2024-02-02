export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*⚓ 𝐻𝑜𝑙𝑎 @${m.sender.split`@`[0]}, 𝑀𝑖 𝐶𝑟𝑒𝑎𝑑𝑜𝑟 𝑇𝑖𝑒𝑛𝑒 𝐿𝑎 𝑂𝑝𝑐𝑖𝑜𝑛 𝐴𝑛𝑡𝑖𝑝𝑟𝑖𝑣𝑎𝑑𝑜 𝑃𝑜𝑟 𝐸𝑙 𝑀𝑜𝑡𝑖𝑣𝑜 𝐷𝑒𝑏𝑜 𝐵𝑙𝑜𝑞𝑢𝑒𝑎𝑟𝑡𝑒 𝐴𝑑𝑖𝑜𝑠👋🏻.*`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
