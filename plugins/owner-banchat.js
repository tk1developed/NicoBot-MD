const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*[🌼]𝗖𝗵𝗮𝘁 𝗕𝗮𝗻𝗲𝗮𝗱𝗼 𝗖𝗼𝗻 𝗘𝘅𝗶𝘁𝗼,𝗡𝗼 𝗣𝗼𝗱𝗿𝗮𝗻 𝗨𝘀𝗮𝗿 𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿☘️*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;
