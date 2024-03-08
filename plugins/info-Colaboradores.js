import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen6;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];

 await conn.sendMessage(m.chat, { react: { text: '🧩', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `╭✨️⸽⃕𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯🍁⃨፝⃕✰*
┃➸ 𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯🧸
┃➸ 📍𝖢𝗈𝗅𝖺𝖻𝗈𝗋𝖺𝖽𝗈𝗋𝖾𝗌
╰◆━━━━━━◆❃◆━━━━━━◆

*╭🧸⸽⃕𝗥𝗲𝗽𝗼𝘀𝗶𝘁𝗼𝗿𝗶𝗼𝘀 𝗚𝗶𝘁𝗵𝘂𝗯📍✰*
┃✣➸ 𝖣𝗂𝖾𝗀𝗈:
┃ https://github.com/diegojadibot
┃
┃✣➸ 𝖤𝗇𝗓𝗂𝗍𝗈:
┃ https://github.com/EnzoVaselevich
┃
┃✣➸ 𝖠𝗓𝖺𝗆𝗂:
┃ https://github.com/AzamiJs
┃
┃✣➸ 𝖬𝖺𝗋𝗂𝗈:
┃ https://github.com/elrebelde21
┃
╰◆━━━━━━◆❃◆━━━━━━◆

╭🧸⸽⃕𝗡𝘂𝗺𝗲𝗿𝗼𝘀 - 𝗖𝗿𝗲𝗮𝗱𝗼𝗿𝗲𝘀📍✰ 
┋➸ 𝖣𝗂𝖾𝗀𝗈: 
┋@573013482814
┋
┋➸ 𝖤𝗇𝗓𝗂𝗍𝗈: 
┋@5491130182250
┋
┋➸ 𝖠𝗓𝖺𝗆𝗂: 
┋@5217294888993
┋
┋➸ 𝖬𝖺𝗋𝗂𝗈: 
┋@5492266466080
┋
╰◈ ━━━━━━━ ⸙ ━━━━━━━`.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*😻 𝘓𝘰𝘴𝘪𝘦𝘯𝘵𝘰, 𝘌𝘳𝘳𝘰𝘳, 𝘕𝘰 𝘗𝘶𝘦𝘥𝘰 𝘌𝘯𝘷𝘪𝘢𝘳 𝘌𝘭 𝘔𝘦𝘯𝘴𝘢𝘫𝘦!*', m);
  }
};
handler.command = /^(colaboradores|Colaboradores)$/i;
handler.register = true
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}