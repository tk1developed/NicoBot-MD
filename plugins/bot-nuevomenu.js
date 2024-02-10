import fetch from 'node-fetch';
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
    const str = `╭✨️⸽⃕𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯🍁⃨፝⃕✰
┋ 👋🏻𝖧𝗈𝗅𝖺, 𝖲𝗈𝗒 𝖲𝖺𝗄𝗎𝗋𝖺𝖡𝗈𝗍
┋ 🦋𝖨𝗇𝗍𝖾𝗇𝗍𝖺𝗌𝗍𝖾𝗌 𝖵𝖾𝗋 𝖬𝗂 𝖬𝖾𝗇𝗎 𝖯𝖾𝗋𝗈 𝖬𝗂 𝖬𝖾𝗇𝗎 𝖢𝖺𝗆𝖻𝗂𝗈 𝖠 𝖮𝗍𝗋𝗈 𝖭𝗎𝖾𝗏𝗈 𝖢𝗈𝗆𝖺𝗇𝖽𝗈.
╰◆━━━━━━◆❃◆━━━━━━◆

╭✨️⸽⃕𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯🍁⃨፝⃕✰
┋ *!𝗆𝖾𝗇𝗎𝖼𝗈𝗆𝗉𝗅𝖾𝗍𝗈*
┋ 𝖯𝖺𝗋𝖺 𝖵𝖾𝗋 𝖤𝗅 𝖭𝗎𝖾𝗏𝗈 𝖬𝖾𝗇𝗎 𝖣𝖾𝗅 𝖡𝗈𝗍
╰◆━━━━━━◆❃◆━━━━━━◆
┏━━━━━━━━━━━━━━━━━━
┋ *🐢 !𝖮𝗐𝗇𝖾𝗋*
┋ *🔞 !𝗁𝗈𝗋𝗇𝗒𝗆𝖾𝗇𝗎*
┋ *🗒️ !𝗆𝖾𝗇𝗎𝖼𝗈𝗆𝗉𝗅𝖾𝗍𝗈*
┋ *🧱 !𝖼𝖺𝗃𝖺𝖿𝗎𝖾𝗋𝗍𝖾*
┋ *💖 !𝖼𝗈𝗅𝖺𝖻𝗈𝗋𝖺𝖽𝗈𝗋𝖾𝗌*
┋ *🔮 !𝗍𝖾𝗋𝗆𝗎𝗇𝗈𝗌𝗒𝖼𝗈𝗇𝖽𝗂𝖼𝗂𝗈𝗇𝖾𝗌*
┋ *📝 !𝖻𝗈𝗍𝗋𝖾𝗀𝗅𝖺𝗌* 
╰◆━━━━━━◆❃◆━━━━━━◆`.trim();
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
handler.command = /^(menu|help)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}