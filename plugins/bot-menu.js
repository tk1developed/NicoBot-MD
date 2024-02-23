import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/231b618729371a4e30f0e.jpg');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '*!𝗣𝗿𝗼𝘅𝗶𝗺𝗮𝗺𝗲𝗻𝘁𝗲 𝗦𝗲 𝗘𝗻𝘃𝗶𝗮𝗿𝗮́ 𝗘𝗹 𝗠𝗲𝗻𝘂́.*',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋🏻 ¡𝐇𝐨𝐥𝐚!', body: '🦋 𝖫𝗂𝗇𝖽𝗈 𝖠𝗆𝖺𝗇𝖾𝖼𝖾𝗋 🌤', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🍓');
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } })
  let txt =``;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🍓⸽⃕  𝕾𝖆𝖐𝖚𝖗𝖆 - 𝕭𝖔𝖙 - 𝕷𝖎𝖙𝖊 - 𝕸𝕯 🦋⸽⃕✰', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🔥');
  } catch {
    conn.reply(m.chat, '⚠️ 𝑬𝒍 𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝑻𝒊𝒆𝒏𝒆 𝑼𝒏 𝑬𝒓𝒓𝒐𝒓 𝑪𝒐𝒎𝒖𝒏𝒊𝒒𝒖𝒆𝒍𝒐 𝑨𝒍 𝑪𝒓𝒆𝒂𝒅𝒐𝒓 𝑶 𝑨𝒍 𝑺𝒕𝒂𝒇𝒇.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menul|allmenul|menúl|helpl|ayudal)$/i;
handler.register = true
export default handler;