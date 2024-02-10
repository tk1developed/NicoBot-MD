/*import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen6;
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
    const str = `┏━━━━━━━━━━━━━━━━━━
┣┅⟣✦ 𝗛𝗼𝗹𝗮👋
┣┅⟣✦ 𝗠𝗲𝗻𝘂 𝗮𝘆𝘂𝗱𝗮/𝗛𝗲𝗹𝗽
┗━━━━━━━━━━━━━━━━━━┛
━━━━━━━━━━━━━━━━━━━━
┣❕𝗦𝗶 𝗱𝗲𝘀𝗽𝘂𝗲𝘀 𝗱𝗲 𝗹𝗲𝗲𝗿 𝗲𝘀𝘁𝗼 𝘀𝗶𝗴𝘂𝗲𝘀 
𝗰𝗼𝗻 𝗱𝘂𝗱𝗮𝘀, 𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝗮 𝗮 𝗹𝗼𝘀 𝗼𝘄𝗻𝗲𝗿𝘀❕
━━━━━━━━━━━━━━━━━━━
┣ 𝗠𝗲𝗻𝘂𝘀 𝗱𝗶𝘀𝗽𝗼𝗻𝗶𝗯𝗹𝗲𝘀 𝘆 𝗮𝘆𝘂𝗱𝗮 
┏━━━━━━━━━━━━━━━━━━
┣┅⟣☆ 📔.𝗠𝗲𝗻𝘂𝗼𝘄𝗻𝗲𝗿
┣┅⟣☆ 🎨.𝗠𝗲𝗻𝘂𝗷𝘂𝗲𝗴𝗼𝘀
┣┅⟣☆ 🔞.𝗟𝗮𝗯𝗶𝗯𝗹𝗶𝗮
┣┅⟣☆ 🗒️.𝗠𝗲𝗻𝘂
┣┅⟣☆ 🧱.𝗖𝗮𝗷𝗮𝗳𝘂𝗲𝗿𝘁𝗲
┣┅⟣☆ 💖.𝗖𝗼𝗹𝗮𝗯𝗼𝗿𝗮𝗱𝗼𝗿𝗲𝘀
┣┅⟣☆ 🔮.𝗢𝘄𝗻𝗲𝗿
┣┅⟣☆ 🛡️.𝗧𝗲𝗿𝗺𝗶𝗻𝗼𝘀
┣┅⟣☆ 📝.𝗥𝗲𝗴𝗹𝗮𝘀 
┗━━━━━━━━━━━━━━━━━━┛
┣ 𝗥𝗲𝗰𝗼𝗿𝗱𝗮𝘁𝗼𝗿𝗶𝗼
┏━━━━━━━━━━━━━━━━━━
┣┅⟣☆❕ 𝗨𝘀𝗮 (𝗧𝗿𝘂𝗲 𝗼 𝗙𝗮𝗹𝘀𝗲) 𝗣𝗮𝗿𝗮 𝘃𝗲𝗿 
 𝗲𝗹 𝗽𝗮𝗻𝗲𝗹 𝗱𝗲 𝗼𝗽𝗰𝗶𝗼𝗻𝗲𝘀 𝗮 𝗮𝗰𝘁𝗶𝘃𝗮𝗿.

┣┅⟣☆❕ 𝗨𝘀𝗮 (𝗚𝗿𝘂𝗽𝗼𝘀) 𝗽𝗮𝗿𝗮 𝘃𝗲𝗿 𝗹𝗼𝘀
 𝗴𝗿𝘂𝗽𝗼𝘀 𝗢𝗙𝗖 𝗱𝗲𝗹 𝗯𝗼𝘁.

┣┅⟣☆❕ 𝗨𝘀𝗮 (𝗜𝗻𝗳𝗼𝗯𝗼𝘁) 𝗽𝗮𝗿𝗮 𝘃𝗲𝗿 𝗹𝗼𝘀
 𝗱𝗮𝘁𝗼𝘀 𝘀𝗼𝗯𝗿𝗲 𝗲𝗹 𝗯𝗼𝘁.

┣┅⟣☆❕ 𝗨𝘀𝗮 (𝗝𝗼𝗶𝗻) 𝗽𝗮𝗿𝗮 𝘀𝗼𝗹𝗶𝗰𝗶𝘁𝗮𝗿 𝗲𝗹 𝗯𝗼𝘁
 𝗲𝗻 𝘁𝘂 𝗴𝗿𝘂𝗽𝗼.
┗━━━━━━━━━━━━━━━━━━┛
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
handler.command = /^(no|si)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}*/