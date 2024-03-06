const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*📖 Ingresa Algun Reporte*\n\n*Ejemplo:*\n*${usedPrefix + command}* El Siguiente Comando ${usedPrefix}menu Tiene Un Error`;
  if (text.length < 10) throw `🌼 𝐑𝐞𝐩𝐨𝐫𝐭𝐞 𝐦𝐢𝐧𝐢𝐦𝐨 𝐝𝐞 10 𝐜𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐞𝐬`;
  if (text.length > 1000) throw `🌼 𝐑𝐞𝐩𝐨𝐫𝐭𝐞 𝐦𝐚𝐱𝐢𝐦𝐨 𝐝𝐞 1000 𝐜𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐞𝐬`;
  const teks = `*╭━━[ 𝑹𝑬𝑷𝑶𝑹𝑻𝑬 ]━━━⬣*\n*┃*\n*┃* ➦☬⃝✨𝐶𝑙𝑖𝑒𝑛𝑡𝑒: \n┃ ❁ Wa.me/${m.sender.split`@`[0]}\n*┃*\n*┃* ➦☬⃝✨𝑆𝑚𝑠:\n*┃* ❁ ${text}\n*┃*\n*╰❖────『 𝑆𝑜𝑝𝑜𝑟𝑡𝑒 』────❖*`;
  conn.reply('573013482814@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('51935499065@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedjid: [m.sender]}});
  conn.reply('5491168758497@s.whatsapp.net',m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedjid: [m.sender]}});
  m.reply(`📖 ☆Éxito El Reporte Se Envió A Los Propietarios Del Bot`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|reportar|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;