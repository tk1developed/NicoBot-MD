import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
    let fkon = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
   await conn.reply(m.chat, '𝗘𝗻𝘃𝗶𝗮𝗻𝗱𝗼 𝗨𝗻 𝗠𝗲𝗻𝘂 𝗦𝗶𝗺𝗽𝗹𝗲. 🗒️', fkon, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: wm, body: team, sourceUrl: global.yt, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐺');
    await conn.sendMessage(m.chat, { react: { text: '🏷', key: m.key } })
  let txt =`╭─ׅ─ׅ┈ ─๋︩︪─☁️⚡️☁️─ׅ─ׅ┈ ─๋︩︪─╮
┃֪࣪ ${packname}
┃֪࣪ 𝗠𝗲𝗻𝘂 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 🎋
╰─ׅ─ׅ┈ ─๋︩︪─☁️✨️☁️─ׅ─ׅ┈ ─๋︩︪─╯

╭╼🪷 Mᴇɴᴜs Dɪsᴘᴏɴɪʙʟᴇs 🪷
┃֪࣪📔 .allmenu
┃֪࣪🍁 .colaboradores
┃֪࣪🛡️ .terminosycondiciones
┃֪࣪📝 .reglas 
╰─ׅ─ׅ┈ ─๋︩︪─☁️✨️☁️─ׅ─ׅ┈ ─๋︩︪─╯

╭╼🍂 Iɴғᴏʀᴍᴀᴄɪᴏɴ 🍂
┃֪࣪🏷 Para Contactar Al Creador
┃֪࣪🏷 Utilice !owner
┃֪࣪🏷 No Hagas Spam.
╰─ׅ─ׅ┈ ─๋︩︪─☁️✨️☁️─ׅ─ׅ┈ ─๋︩︪─╯
 `;   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": packname, body: team, "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.yt, "sourceUrl": global.yt}}}, {quoted: fkon});
 // m.react('🏷');
  } catch {
    conn.reply(m.chat, '🏷 El Menu Tiene Un Error Utilizé !allmenu', m);
  }
};
handler.help = ['menu'];
handler.tags = ['main'];
handler.command = /^(menu|comandos|comando|help|ayuda)$/i;
handler.register = true
export default handler;