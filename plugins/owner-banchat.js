const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*Porfin Baneastes El Chat Me Asian Mucho Spam Mejor Asi Baneado* *\n\n*—◉ 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝚁𝙴𝙰𝙲𝙲𝙸𝙾𝙽𝙰𝚁𝙰 𝙰 𝙽𝙸𝙽𝙶𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙷𝙰𝚂𝚃𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;
