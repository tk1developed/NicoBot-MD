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
  if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*ℋ𝓔𝓨!!! 𝓔ℒ 𝓐𝓝𝓣𝓘ℒ𝓘𝓝𝓚 𝓔𝓢𝓣𝓐 𝓐𝓒𝓣𝓘𝓥𝓐𝓓𝓞, 𝓟𝓔ℛ𝓞 𝓒𝓞ℳ𝓞 𝓔ℛ𝓔𝓢 𝓐𝓓ℳ𝓘𝓝 𝓣𝓔 𝓢𝓐ℒ𝓥𝓐𝓢, 𝓢𝓐ℒ𝓥𝓐𝓓𝓞/𝓐!*');
  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return !0;
    }
    await this.sendMessage(m.chat, {text: `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*𝓐𝓓𝓘𝓞𝓢 ℬ𝓐𝓠𝓤𝓔ℛ𝓞👋 ${user} ℛ𝓞ℳ𝓟𝓘𝓢𝓣𝓔 ℒ𝓐𝓢 ℛ𝓔𝓖ℒ𝓐𝓢 𝓓𝓔ℒ 𝓖ℛ𝓤𝓟𝓞, 𝓝𝓞𝓢 𝓥𝓔ℳ𝓞𝓢 𝓔𝓝 𝓔ℒ 𝓞𝓣ℛ𝓞 ℳ𝓤𝓝𝓓𝓞...!!*`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝓔ℒ ℬ𝓞𝓣 𝓝𝓞 𝓔𝓢 𝓐𝓓ℳ𝓘𝓝, 𝓝𝓞 𝓟𝓤𝓔𝓓𝓔 𝓔𝓧𝓟𝓤ℒ𝓢𝓐ℛ 𝓖𝓔𝓝𝓣𝓔*');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝓔ℒ 𝓟ℛ𝓞𝓟𝓘𝓔𝓣𝓐ℛ𝓘𝓞 𝓓𝓔ℒ ℬ𝓞𝓣 𝓝𝓞 𝓣𝓘𝓔𝓝𝓔 𝓐𝓒𝓣𝓘𝓥𝓐𝓓𝓞 ℒ𝓐𝓢 ℛ𝓔𝓢𝓣ℛ𝓘𝓒𝓒𝓘𝓞𝓝𝓔𝓢 (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝓔𝓢𝓒ℛ𝓘ℬ𝓔ℒ𝓔 𝓟𝓐ℛ𝓐 𝓠𝓤𝓔 ℒ𝓞 𝓐𝓒𝓣𝓘𝓥𝓔*');
  }
  return !0;
}
