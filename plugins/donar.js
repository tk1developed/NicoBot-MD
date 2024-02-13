import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    /*await conn.reply(m.chat, '*!𝗣𝗿𝗼𝘅𝗶𝗺𝗮𝗺𝗲𝗻𝘁𝗲 𝗦𝗲 𝗘𝗻𝘃𝗶𝗮𝗿𝗮́ 𝗘𝗹 𝗠𝗲𝗻𝘂́.*',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋🏻 ¡𝐇𝐨𝐥𝐚!', body: '🦋 𝖫𝗂𝗇𝖽𝗈 𝖠𝗆𝖺𝗇𝖾𝖼𝖾𝗋 🌤', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})*/
//m.react('🍓');
    await conn.sendMessage(m.chat, { react: { text: '🐈', key: m.key } })
  let txt =`╭━━━━━━━ •♬• ━━━━━━━
┊
┊     「 𝐃𝐎𝐍𝐀𝐑 」
╰━━━━━━━ •♬• ━━━━━━━
╭━━━━━━━ •♬• ━━━━━━━
┇➻ 🦋𝘗𝘶𝘦𝘥𝘦𝘴 𝘋𝘰𝘯𝘢𝘳 𝘈𝘱𝘰𝘺𝘢𝘯𝘥𝘰𝘮𝘦 𝘠 𝘋𝘢𝘯𝘥𝘰𝘭𝘦 𝘜𝘯𝘢 𝘌𝘴𝘵𝘳𝘦𝘭𝘭𝘢 𝘈 𝘔𝘪 𝘙𝘦𝘱𝘰𝘴𝘪𝘵𝘰𝘳𝘪𝘰 𝘖𝘧𝘪𝘤𝘪𝘢𝘭 💖
┇
┇➻ 😻𝘊𝘰𝘮𝘱𝘢𝘳𝘵𝘦 𝘕𝘶𝘦𝘴𝘵𝘳𝘰 𝘉𝘰𝘵 𝘗𝘢𝘳𝘢 𝘘𝘶𝘦 𝘓𝘰 𝘜𝘴𝘦𝘯 𝘔𝘢𝘴 𝘗𝘦𝘳𝘴𝘰𝘯𝘢𝘴 𝘠 𝘝𝘦𝘢𝘯 𝘌𝘭 𝘔𝘢𝘳𝘢𝘷𝘪𝘭𝘭𝘰𝘴𝘰 𝘉𝘰𝘵! 💖
┇
┇➻ ✨𝘚𝘪 𝘛𝘪𝘦𝘯𝘦𝘴 𝘋𝘶𝘥𝘢 𝘗𝘶𝘦𝘥𝘦𝘴 𝘌𝘴𝘤𝘳𝘪𝘣𝘪𝘳𝘭𝘦 𝘈𝘭 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 𝘋𝘦𝘭 𝘉𝘰𝘵: +57 301 3482814
┇
┇➻ 🟢𝘌𝘭 𝘉𝘰𝘵 𝘕𝘰 𝘗𝘦𝘳𝘮𝘢𝘯𝘦𝘤𝘦 24/7 𝘈𝘴𝘵𝘢 𝘘𝘶𝘦 𝘌𝘭 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 𝘓𝘰 𝘋𝘦𝘴𝘪𝘥𝘢 𝘗𝘰𝘯𝘦𝘳𝘭𝘰 24/7 🟢
┇
┇➻ ✨𝘜𝘴𝘢 !menu 𝘗𝘢𝘳𝘢 𝘝𝘦𝘳 𝘓𝘰𝘴 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘘𝘶𝘦 𝘋𝘪𝘴𝘱𝘰𝘯𝘨𝘰. 🙌
┇
┇➻ 🍓𝘓𝘪𝘯𝘥𝘰 𝘈𝘮𝘢𝘯𝘦𝘤𝘦𝘳 😻
╰━━━━━━━ •♬• ━━━━━━━`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🍓⸽⃕  𝕾𝖆𝖐𝖚𝖗𝖆 - 𝕭𝖔𝖙 - 𝕷𝖎𝖙𝖊 - 𝕸𝕯 🦋⸽⃕✰', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🔥');
  } catch {
    conn.reply(m.chat, '⚠️ 𝑬𝒍 𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝑻𝒊𝒆𝒏𝒆 𝑼𝒏 𝑬𝒓𝒓𝒐𝒓 𝑪𝒐𝒎𝒖𝒏𝒊𝒒𝒖𝒆𝒍𝒐 𝑨𝒍 𝑪𝒓𝒆𝒂𝒅𝒐𝒓 𝑶 𝑨𝒍 𝑺𝒕𝒂𝒇𝒇.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|allmenu|menú|help|ayuda)$/i;
handler.register = true
export default handler;