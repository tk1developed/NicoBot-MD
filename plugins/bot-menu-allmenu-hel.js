let handler = (m) => m;
handler.all = async function (m) {


  if (/^diego|SK|sk|Diego|zumy$/i.test(m.text)) {
    var GB = `𝑶𝒘𝒏𝒆𝒓  @${global.suittag} 𝑻𝒆 𝑨𝒏 𝑰𝒏𝒗𝒐𝒄𝒂𝒅𝒐 🍓`;

    m.reply(GB, m.chat, { mentions: conn.parseMention(GB)});
    //sem prefixo
    /*conn.reply(
      m.chat,
      `ᴏᴡɴᴇʀ @${global.suittag} ᴛᴇ ᴀ ɪɴᴠᴏᴄᴀᴅᴏ`,
      m
    );*/ //wm, null, [['Menu', '#menu']], m) botones :V
  }
  return !0;
};
export default handler;