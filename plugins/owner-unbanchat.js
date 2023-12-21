const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('*👊Esᴛᴇ Cʜᴀᴛ Yᴀ Esᴛᴀ Dᴇsʙᴀɴᴇᴀᴅᴏ, Pᴜᴇᴅᴇɴ Usᴀʀᴍᴇ*');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat$/i;
handler.rowner = true;
export default handler;
