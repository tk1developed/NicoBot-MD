const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `🌼 Iɴɢʀᴇsᴀ Uɴ Rᴇᴘᴏʀᴛᴇ\n\n𝐄𝐣𝐞𝐦𝐩𝐥𝐨:\n*${usedPrefix + command}* 𝐸𝑙 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 𝐶𝑜𝑚𝑎𝑛𝑑𝑜 ${usedPrefix}owner 𝐷𝑖𝑜 𝐸𝑟𝑟𝑜𝑟 𝐴𝑙 𝑈𝑠𝑎𝑟𝑙𝑜`;
  if (text.length < 10) throw `🌼 𝐑𝐞𝐩𝐨𝐫𝐭𝐞 𝐦𝐢𝐧𝐢𝐦𝐨 𝐝𝐞 10 𝐜𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐞𝐬`;
  if (text.length > 1000) throw `🌼 𝐑𝐞𝐩𝐨𝐫𝐭𝐞 𝐦𝐚𝐱𝐢𝐦𝐨 𝐝𝐞 1000 𝐜𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐞𝐬`;
  const teks = `*╭━━[ 𝑹𝑬𝑷𝑶𝑹𝑻𝑬 ]━━━⬣*\n*┃*\n*┃* ➦☬⃝✨𝐶𝑙𝑖𝑒𝑛𝑡𝑒: \n┃ ❁ Wa.me/${m.sender.split`@`[0]}\n*┃*\n*┃* ➦☬⃝✨𝑆𝑚𝑠:\n*┃* ❁ ${text}\n*┃*\n*╰❖────『 𝑆𝑜𝑝𝑜𝑟𝑡𝑒 』────❖*`;
  conn.reply('573004826011@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('51935499065@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedjid: [m.sender]}});
  conn.reply('51939041500@s.whatsapp.net',m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedjid: [m.sender]}});
  m.reply(`[ 🌻 ] ☆𝑬𝒙𝒊𝒕𝒐 𝑬𝒍 𝑺𝒎𝒔 𝑺𝒆 𝑬𝒏𝒗𝒊𝒂𝒓𝒂 𝑨 𝑳𝒐𝒔 𝑪𝒓𝒆𝒂𝒅𝒐𝒓𝒆𝒔 𝑫𝒆𝒍 𝑩𝒐𝒕, 𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯☆`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|reportar|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;