const ro = 3000;
const handler = async (m, {conn, usedPrefix, command}) => {
  const time = global.db.data.users[m.sender].lastrob + 7200000;
  if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `*⏱️¡Hey! Espera ${msToTime(time - new Date())} para volver a robar*`;
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  if (!who) throw `*😻 𝖤𝗍𝗂𝗊𝗎𝖾𝗍𝖺 𝖠𝗅𝗀𝗎𝗇 𝖴𝗌𝗎𝖺𝗋𝗂𝗈 𝖯𝖺𝗋𝖺 𝖱𝗈𝖻𝖺𝗋𝗅𝖾.*`;
  if (!(who in global.db.data.users)) throw `*💖 𝖰𝗎𝗂𝖾𝗇 𝖤𝗌 𝖤𝗌𝖾 𝖴𝗌𝗎𝗌𝖺𝗋𝗂𝗈? 𝖭𝗈 𝖫𝗈 𝖳𝖾𝗇𝗀𝗈 𝖤𝗇 𝖬𝗂 𝖡𝖺𝗌𝖾 𝖣𝖾 𝖣𝖺𝗍𝗈𝗌!.*`;
  const users = global.db.data.users[who];
  const rob = Math.floor(Math.random() * ro);
  if (users.exp < rob) return m.reply(`😔 @${who.split`@`[0]} tiene menos de *${ro} xp*\nNo robes a un indigena v":`, null, {mentions: [who]});
  global.db.data.users[m.sender].exp += rob;
  global.db.data.users[who].exp -= rob;
  m.reply(`*‣ Acabas de realizar un robo ${rob} XP a @${who.split`@`[0]}*`, null, {mentions: [who]});
  global.db.data.users[m.sender].lastrob = new Date * 1;
};
handler.help = ['rob'];
handler.tags = ['econ'];
handler.command = ['robar', 'rob'];
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return hours + ' Hora(s) ' + minutes + ' Minuto(s)';
}
