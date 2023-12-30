const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*⚠️👊 Iɴɢʀᴇsᴇ Uɴ Rᴇᴘᴏʀᴛᴇ*\n\n*Eᴊᴇᴍᴘʟᴏ:*\n*${usedPrefix + command} Eʟ Cᴏᴍᴀɴᴅᴏ ${usedPrefix}play Nᴏ Mᴀɴᴅᴀ Nᴀᴅᴀ*`;
  if (text.length < 10) throw `*⚠️ Eʟ Rᴇᴘᴏʀᴛᴇ Dᴇᴠᴇ Sᴇʀ Mᴀxɪᴍᴏ 10 Cᴀʀᴀᴄᴛᴇʀᴇs!*`;
  if (text.length > 1000) throw `*⚠️ Eʟ Rᴇᴘᴏʀᴛᴇ Dᴇᴠᴇ Sᴇʀ Mᴀxɪᴍᴏ Dᴇ 100 Cᴀʀᴀᴄᴛᴇʀᴇs!*`;
    const teks = `*❒═════[𝑅𝐸𝑃𝑂𝑅𝑇𝐸]═════❒*\n*┬*\n*┃♕︎ 𝘕𝘶𝘮𝘦𝘳𝘰:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*┃♕︎ 𝘔𝘦𝘯𝘴𝘢𝘫𝘦:* ${text}\n*┴*`;
  conn.reply('51935499065@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(`*[⚠️] Exito el reporte ha sido enviado a mí Creador. Tendrá una respuesta pronto. Si se detecta que el reporte es Falso será Ignorado el reporte.*`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;
