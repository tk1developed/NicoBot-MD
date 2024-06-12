let linkRegex = /\b((https?:\/\/|www\.)?[\w-]+\.[\w-]+(?:\.[\w-]+)*(\/[\w\.\-\/]*)?)\b/i
export async function before(m, {isAdmin, isBotAdmin, text}) {
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
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
      const linkThisGroup2 = `https://www.youtube.com/`;
      const linkThisGroup3 = `https://youtu.be/`;
      if (m.text.includes(linkThisGroup)) return !0;
      if (m.text.includes(linkThisGroup2)) return !0;
      if (m.text.includes(linkThisGroup3)) return !0;
    }
    await this.sendMessage(m.chat, {text: `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊 」*\n𝙉𝙊 𝘼𝙋𝙍𝙀𝙉𝘿𝙀𝙉 😴  ${user} 𝙀𝙉𝙑𝙄𝘼𝙎𝙏𝙀 𝙐𝙉 𝙇𝙄𝙉𝙆 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊, 𝙎𝙀𝙍𝘼𝙎 𝘽𝘼𝙉𝙀𝘼𝘿𝙊 𝘼𝙐𝙏𝙊𝙈𝘼𝙏𝙄𝘾𝘼𝙈𝙀𝙉𝙏𝙀 🏳️‍🌈`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('𝙉𝙊 𝙎𝙊𝙔 𝘼𝘿𝙈𝙄𝙉, 𝙉𝙊 𝙋𝙐𝙀𝘿𝙊 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝘽𝘼𝙉𝙀𝙊𝙎 🍓');
    // await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊 」*\n𝙉𝙊 𝘼𝙋𝙍𝙀𝙉𝘿𝙀𝙉 😴 ${await this.getName(m.sender) 𝙀𝙉𝙑𝙄𝘼𝙎𝙏𝙀 𝙐𝙉 𝙇𝙄𝙉𝙆 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊, 𝙎𝙀𝙍𝘼𝙎 𝘽𝘼𝙉𝙀𝘼𝘿𝙊 𝘼𝙐𝙏𝙊𝙈𝘼𝙏𝙄𝘾𝘼𝙈𝙀𝙉𝙏𝙀 🏳️‍🌈*${isBotAdmin ? '' : '\n\n*𝙉𝙊 𝙎𝙊𝙔 𝘼𝘿𝙈𝙄𝙉, 𝙉𝙊 𝙋𝙐𝙀𝘿𝙊 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝘽𝘼𝙉𝙀𝙊𝙎 🍓'}`, author, ['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺', '/disable antilink'], m)
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('*[🚫] 𝐄𝐥 𝐎𝐰𝐧𝐞𝐫 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞 𝐚𝐜𝐭𝐢𝐯𝐚 𝐥𝐚 𝐨𝐩𝐜𝐢𝐨́𝐧 𝐝𝐞 𝐫𝐞𝐬𝐭𝐫𝐢𝐧𝐠𝐢𝐫, 𝐍𝐨 𝐩𝐮𝐞𝐝𝐨 𝐞𝐣𝐞𝐜𝐮𝐭𝐚𝐫 𝐥𝐚 𝐚𝐜𝐜𝐢𝐨́𝐧');
  }
  return !0;
}