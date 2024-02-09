import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen7;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const url = global.md
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `*╭✨️⸽⃕𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯🍁⃨፝⃕✰*
┃➸ 𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯🍓
┃➸ 🍓𝖢𝗈𝗅𝖺𝖻𝗈𝗋𝖺𝖽𝗈𝗋𝖾𝗌
╰◆━━━━━━◆❃◆━━━━━━◆

*╭✨️⸽⃕𝗥𝗲𝗽𝗼𝘀𝗶𝘁𝗼𝗿𝗶𝗼𝘀 𝗚𝗶𝘁𝗵𝘂𝗯🍁⃨፝⃕✰*
┃
┃✣➸ 𝖣𝗂𝖾𝗀𝗈:
┃ https://github.com/diegojadibot
┃
┃✣➸ 𝖠𝗓𝖺𝗆𝗂:
┃ https://github.com/AZamijs
┃
┃✣➸ 𝖤𝗇𝖽𝖾𝗋:
┃ https://github.com/Ender-GB-Isis777
┃
┃✣➸ 𝖬𝖺𝗋𝗂𝗈:
┃ https://github.com/elrebelde21
┃
┃✣➸ 𝖤𝗇𝗓𝗈:
┃ https://github.com/Enzito-Vase
╰◆━━━━━━◆❃◆━━━━━━◆

╭✨️⸽⃕𝗡𝘂𝗺𝗲𝗿𝗼𝘀 𝗢𝘄𝗻𝗲𝗿🍁⃨፝⃕✰ 
┋𝖣𝗂𝖾𝗀𝗈: @573013482814
┋𝖠𝗓𝖺𝗆𝗂: @5217294888993
┋𝖤𝗇𝖽𝖾𝗋: @50558124470
┋𝖤𝗇𝗓𝗈: @5491168758497
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

 `.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '[❕] 𝗔𝗹𝗴𝗼 𝘀𝗮𝗹𝗶𝗼 𝗺𝗮𝗹, 𝗽𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁𝗲𝗹𝗼 𝗮𝗹 𝗦𝘁𝗮𝗳𝗳', m);
  }
};
handler.command = /^(colab|colaboradores)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}