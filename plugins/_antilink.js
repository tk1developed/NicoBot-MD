const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
export async function before(m, {conn, isAdmin, isBotAdmin}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  const grupo = `https://chat.whatsapp.com`;
  if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*Oye!!! El antilink es activado, Woo!!.. eres admin te salvaste!*');
  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return !0;
    }
    await this.sendMessage(m.chat, {text: `*⚓𝑅𝑎𝑡𝑎 𝐴𝑐𝑎𝑏𝑎𝑠𝑡𝑒𝑠 𝐷𝑒 𝑅𝑜𝑚𝑝𝑒𝑟 𝐿𝑎 𝑅𝑒𝑔𝑙𝑎 𝐷𝑒 𝐸𝑠𝑡𝑒 𝐺𝑟𝑢𝑝𝑜, 𝐸𝑙 𝐺𝑟𝑢𝑝𝑜 𝑇𝑖𝑒𝑛𝑒 𝐸𝑙 𝐴𝑛𝑡𝑖𝑙𝑖𝑛𝑘 𝑃𝑜𝑟 𝑀𝑜𝑡𝑖𝑣𝑜 𝑃𝑟𝑜𝑐𝑒𝑑𝑜 𝐴 𝐸𝑙𝑖𝑚𝑖𝑛𝑎𝑟𝑡𝑒. 𝐴𝑑𝑖𝑜𝑠 𝑅𝑎𝑡𝑎👋🏻...!!*`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('*𝑆𝑎𝑘𝑢𝑟𝑎𝐵𝑜𝑡𝐿𝑖𝑡𝑒 𝑁𝑜 𝐸𝑠 𝐴𝑑𝑚𝑖𝑛 𝑁𝑜 𝑃𝑢𝑒𝑑𝑜 𝐸𝑙𝑖𝑚𝑖𝑛𝑎𝑟 𝐴 𝐿𝑎𝑠 𝑅𝑎𝑡𝑎𝑠⚓*');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('*🌱 𝐸𝑙 𝑃𝑟𝑜𝑝𝑖𝑒𝑡𝑎𝑟𝑖𝑜 𝑇𝑖𝑒𝑛𝑒 𝐷𝑒𝑠𝑎𝑐𝑡𝑖𝑣𝑎𝑑𝑜 𝐸𝑙 𝑅𝑒𝑠𝑡𝑟𝑖𝑛𝑔𝑖𝑟 𝑃𝑜𝑟 𝑀𝑜𝑡𝑖𝑣𝑜 𝑁𝑜 𝑃𝑢𝑒𝑑𝑜 𝐸𝑙𝑖𝑚𝑖𝑛𝑎𝑟 𝐴 𝑅𝑎𝑡𝑎𝑠. 𝑃𝑢𝑒𝑑𝑒𝑠 𝐴𝑐𝑡𝑖𝑣𝑎𝑟𝑙𝑜 𝐶𝑜𝑛: !enable restrict ⚓*');
  }
  return !0;
}