// manden porno test
const linkRegex = /https:/i;
export async function before(m, {conn, isAdmin, isBotAdmin, text}) {
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
  if (chat.antiLink2 && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      const linkThisGroup2 = `https://www.youtube.com/`;
      const linkThisGroup3 = `https://youtu.be/`;
      if (m.text.includes(linkThisGroup)) return !0;
      if (m.text.includes(linkThisGroup2)) return !0;
      if (m.text.includes(linkThisGroup3)) return !0;
    }
    await this.sendMessage(m.chat, {text: `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*𝓐𝓓𝓘𝓞𝓢 ℬ𝓐𝓠𝓤𝓔ℛ𝓞 👋 ${user} ℛ𝓞ℳ𝓟𝓘𝓢𝓣𝓔 ℒ𝓐𝓢 ℛ𝓔𝓖ℒ𝓐𝓢 𝓓𝓔ℒ 𝓖ℛ𝓤𝓟𝓞, 𝓝𝓞𝓢 𝓥𝓔ℳ𝓞𝓢 𝓔𝓝 𝓔ℒ 𝓞𝓣ℛ𝓞 ℳ𝓤𝓝𝓓𝓞...!!*`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝓔ℒ ℬ𝓞𝓣 𝓝𝓞 𝓔𝓢 𝓐𝓓ℳ𝓘𝓝, 𝓝𝓞 𝓟𝓤𝓔𝓓𝓔 𝓔𝓧𝓟𝓤ℒ𝓢𝓐ℛ 𝓖𝓔𝓝𝓣𝓔*');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝓔ℒ 𝓟ℛ𝓞𝓟𝓘𝓔𝓣𝓐ℛ𝓘𝓞 𝓓𝓔ℒ ℬ𝓞𝓣 𝓝𝓞 𝓣𝓘𝓔𝓝𝓔 𝓐𝓒𝓣𝓘𝓥𝓐𝓓𝓞 ℒ𝓐𝓢 ℛ𝓔𝓢𝓣ℛ𝓘𝓒𝓒𝓘𝓞𝓝𝓔𝓢 (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝓔𝓢𝓒ℛ𝓘ℬ𝓔ℒ𝓔 𝓟𝓐ℛ𝓐 𝓠𝓤𝓔 ℒ𝓞 𝓐𝓒𝓣𝓘𝓥𝓔*');
  }
  return !0;
}
