import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const vn = './media/bot.mp3';
  const chat = global.db.data.chats[m.chat];
  
if (/^bot$/i.test(m.text) && !chat.isBanned) {
  
      if (/^bot$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('recording', m.chat);

conn.reply(m.chat, '😎 *Aquí Estoy, En Que Puedo Ayudar?*', m, fake, )}
  
    m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak});

  }
  return !0;
};
export default handler;