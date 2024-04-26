const handler = async (m, {conn, text, usedPrefix, command}) => {
  global.db.data.sticker = global.db.data.sticker || {};
  if (!m.quoted) throw '*☁️ Faltó Un Sticker E Imagen*';
  if (!m.quoted.fileSha256) throw '🛑 *Solo Sticker E Inagenes*';
  if (!text) throw `*☁️ Faltó Un Stiker O Imagen*`;
  const sticker = global.db.data.sticker;
  const hash = m.quoted.fileSha256.toString('base64');
  if (sticker[hash] && sticker[hash].locked) throw '*🛑 Solo El Creador Puede Usar Esta Función*';
  sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false};
  m.reply(`☁️ *Agregado Con Exito*`);
};
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset'];
handler.rowner = true;
export default handler;
