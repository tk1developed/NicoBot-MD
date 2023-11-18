export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*[❗] ℋ𝓸𝓵𝓪 @${m.sender.split`@`[0]}, 𝖊𝖘𝖙𝖆 𝖕𝖗𝖔𝖍𝖎𝖇𝖎𝖉𝖔 𝖍𝖆𝖇𝖑𝖆𝖗𝖑𝖊 𝖆𝖑 𝖕𝖗𝖎𝖛𝖆𝖉𝖔 𝖉𝖊𝖑 𝖇𝖔𝖙, 𝖒𝖊 𝖛𝖊𝖔 𝖔𝖇𝖑𝖎𝖌𝖆𝖉𝖔 𝖆 𝖇𝖑𝖔𝖖𝖚𝖊𝖆𝖗𝖑𝖔.*`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
