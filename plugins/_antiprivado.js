export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`🦋𝑯𝒐𝒍𝒂 @${m.sender.split`@`[0]}, 🍓 𝐋𝐨 𝐒𝐢𝐞𝐧𝐭𝐨 𝐍𝐨 𝐄𝐬𝐭𝐚 𝐏𝐞𝐫𝐦𝐢𝐭𝐢𝐝𝐨 𝐄𝐬𝐜𝐫𝐢𝐛𝐢𝐫𝐦𝐞 𝐀𝐥 𝐏𝐫𝐢𝐯𝐚𝐝𝐨 𝐏𝐨𝐫 𝐋𝐨 𝐂𝐮𝐚𝐥 𝐒𝐞𝐫𝐚𝐬 𝐁𝐥𝐨𝐪𝐮𝐞𝐚𝐝𝐨, 𝐏𝐮𝐞𝐝𝐞𝐬 𝐔𝐧𝐢𝐫𝐭𝐞 𝐀𝐥 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝐃𝐞𝐥 𝐁𝐨𝐭: https://chat.whatsapp.com/DUAS7osnQ2h3tlYT4bnbfU`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
