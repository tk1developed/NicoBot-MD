const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*Bot Apagado*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;