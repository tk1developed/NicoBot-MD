const handler = async (m, {conn, usedPrefix, text, command}) => {
  let hash = text;
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
  if (!hash) throw `☁️ *Para Saber El Texto Use: ${usedPrefix}listcmd*`;
  const sticker = global.db.data.sticker;
  if (sticker[hash] && sticker[hash].locked) throw '*🛑 Solo El Creador Puede Usar Esta Función*';
  delete sticker[hash];
  m.reply(`☁️ *Eliminado Con Exito*`);
};
handler.command = ['delcmd'];
handler.rowner = true;
export default handler;
