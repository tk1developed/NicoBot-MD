import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen2;
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

 await conn.sendMessage(m.chat, { react: { text: '🐈', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `╭━━━━━━━ •♬• ━━━━━━━
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
╰━━━━━━━ •♬• ━━━━━━━`.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(donar|apoyar)$/i;
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