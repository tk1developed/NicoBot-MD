const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `🍧 *Ingresa Algun Reporte*\n\n*Ejemplo:*\n*${usedPrefix + command}* El Siguiente Comando ${usedPrefix}menu Tiene Un Error`;
  if (text.length < 10) throw `🛑 *Reporte Minimo De 10 Caracteres*`;
  if (text.length > 1000) throw `🛑 *Reporte Maxímo De 1000 Caracteres*`;
  const teks = `╭━〔  𝐑𝐄𝐏𝐎𝐑𝐓𝐄 ⚙️  〕⬣\n┃🍄 *Cliente:* \n┃✏️ Wa.me/${m.sender.split`@`[0]}\n┃\n┃📮 *Mensaje:*\n┃📩 ${text}\n╰━━━━━━━━━━━━⬣`;

  conn.reply('573012482597@s.whatsapp.net', teks, m, fake, );

conn.reply('120363289173968879@g.us', teks, m, fake, );

  m.reply(`✅️ *El Reporte Se Envió A Mi Creador, Tendrá Una Respuesta Más Tarde*`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|reportar|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;