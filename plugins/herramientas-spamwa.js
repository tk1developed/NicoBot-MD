const handler = async (m, {conn, text}) => {
  const [nomor, pesan, jumlah] = text.split('|');
  if (!nomor) throw '*🐈 𝑬𝒏𝒗𝒊𝒆 𝑼𝒏 𝑵𝒖𝒎𝒆𝒓𝒐 𝑬𝒍 𝑪𝒖𝒂𝒍 𝑺𝒆 𝑳𝒆 𝑨𝒓𝒂 𝑺𝒑𝒂𝒎 𝑫𝒆 𝑴𝒆𝒏𝒔𝒂𝒋𝒆𝒔!*\n*𝑈𝑠𝑜 𝐶𝑜𝑟𝑟𝑒𝑐𝑡𝑜:*\n*🐱 #spamwa numero|texto|cantidad*\n*Eᴊᴇᴍᴘʟᴏ:*\n*🐱 #spamwa 5219999999999|responde :v|25*';
  if (!pesan) throw '*🐈 𝑬𝒏𝒗𝒊𝒆 𝑼𝒏 𝑵𝒖𝒎𝒆𝒓𝒐 𝑬𝒍 𝑪𝒖𝒂𝒍 𝑺𝒆 𝑳𝒆 𝑨𝒓𝒂 𝑺𝒑𝒂𝒎 𝑫𝒆 𝑴𝒆𝒏𝒔𝒂𝒋𝒆𝒔!*\n*𝑈𝑠𝑜 𝐶𝑜𝑟𝑟𝑒𝑐𝑡𝑜:*\n*🐱 #spamwa numero|texto|cantidad*\n*Eᴊᴇᴍᴘʟᴏ:*\n*🐱 #spamwa 5219999999999|responde :v|25*';
  if (jumlah && isNaN(jumlah)) throw '*🐈 Lᴀ Cᴀɴᴛɪᴅᴀᴅ Dᴇᴠᴇ Sᴇʀ Nᴜᴍᴇʀᴏ!*\n*𝑈𝑠𝑜 𝐶𝑜𝑟𝑟𝑒𝑐𝑡𝑜:*\n*🐱 #spamwa numero|texto|cantidad*\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*🐱 #spamwa 5219999999999|responde :v|25*';

  const fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net';
  const fixedJumlah = jumlah ? jumlah * 1 : 10;
  if (fixedJumlah > 50) throw '*⚠️ 𝙳𝙴𝙼𝙰𝚂𝙸𝙰𝙳𝙾𝚂 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂! 𝙻𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙼𝙴𝙽𝙾𝚁 𝙰 𝟻0 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂*️';
  await m.reply(`*🌥 𝙴𝙻 𝚂𝙿𝙰𝙼 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝙰𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 ${nomor} 𝙵𝚄𝙴 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*\n*𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙴𝙽𝚅𝙸𝙰𝙳𝙰:*\n*😻 ${fixedJumlah} 𝚟𝚎𝚌𝚎𝚜!*`);
  for (let i = fixedJumlah; i > 1; i--) {
    if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m);
  }
};
handler.help = ['spamwa <number>|<mesage>|<no of messages>'];
handler.tags = ['General'];
handler.command = /^spam(wa)?$/i;
handler.group = false;
handler.premium = true;
// handler.private = true
// handler.limit = true
export default handler;
