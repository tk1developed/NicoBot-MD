const handler = (m) => m;
handler.before = async function(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
  /* if (m.message) {
    console.log(m.message)
  }*/
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (isBotAdmin && chat.antiArab2 && !isAdmin && !isOwner && !isROwner && bot.restrict) {
    if (m.sender.startsWith('212' || '212')) {
      m.reply(`*[❗] 𝓔𝓝 𝓔𝓢𝓣𝓔 𝓖ℛ𝓤𝓟𝓞 𝓝𝓞 𝓢𝓔 𝓟𝓔ℛℳ𝓘𝓣𝓔𝓝 𝓝𝓤ℳ𝓔ℛ𝓞𝓢 ℛ𝓐ℛ𝓞𝓢 𝓞 𝓐ℛ𝓐ℬ𝓔𝓢, 𝓟𝓞ℛ ℒ𝓞 𝓠𝓤𝓔 ℳ𝓔 𝓣𝓔𝓝𝓖𝓞 𝓞ℬℒ𝓘𝓖𝓐𝓓𝓞 𝓐 𝓔𝓧𝓟𝓤ℒ𝓢𝓐ℛℒ𝓞 𝓓𝓔ℒ 𝓖ℛ𝓤𝓟𝓞*`);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }

    if (m.sender.startsWith('265' || '265')) {
      m.reply(`*[❗] 𝓔𝓝 𝓔𝓢𝓣𝓔 𝓖ℛ𝓤𝓟𝓞 𝓝𝓞 𝓢𝓔 𝓟𝓔ℛℳ𝓘𝓣𝓔𝓝 𝓝𝓤ℳ𝓔ℛ𝓞𝓢 ℛ𝓐ℛ𝓞𝓢 𝓞 𝓐ℛ𝓐ℬ𝓔𝓢, 𝓟𝓞ℛ ℒ𝓞 𝓠𝓤𝓔 ℳ𝓔 𝓣𝓔𝓝𝓖𝓞 𝓞ℬℒ𝓘𝓖𝓐𝓓𝓞 𝓐 𝓔𝓧𝓟𝓤ℒ𝓢𝓐ℛℒ𝓞 𝓓𝓔ℒ 𝓖ℛ𝓤𝓟𝓞*`);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }

    if (m.sender.startsWith('92' || '92')) {
      m.reply(`*[❗] 𝓔𝓝 𝓔𝓢𝓣𝓔 𝓖ℛ𝓤𝓟𝓞 𝓝𝓞 𝓢𝓔 𝓟𝓔ℛℳ𝓘𝓣𝓔𝓝 𝓝𝓤ℳ𝓔ℛ𝓞𝓢 ℛ𝓐ℛ𝓞𝓢 𝓞 𝓐ℛ𝓐ℬ𝓔𝓢, 𝓟𝓞ℛ ℒ𝓞 𝓠𝓤𝓔 ℳ𝓔 𝓣𝓔𝓝𝓖𝓞 𝓞ℬℒ𝓘𝓖𝓐𝓓𝓞 𝓐 𝓔𝓧𝓟𝓤ℒ𝓢𝓐ℛℒ𝓞 𝓓𝓔ℒ 𝓖ℛ𝓤𝓟𝓞*`);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }
  }
};
export default handler;
