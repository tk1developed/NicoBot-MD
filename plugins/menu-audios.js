import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen1;
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

 await conn.sendMessage(m.chat, { react: { text: '❤️‍🩹', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `╭∴━━━ *AUDIOS-BOT* ━━━∴╮
┃🕊️ 𝖧𝗈𝗅𝖺👋🏻, 𝖲𝗈𝗒 𝖲𝖺𝗄𝗎𝗋𝖺𝖫𝗂𝗍𝖾
┃🕊️ 𝐄𝐥 𝐌𝐞𝐧𝐮 𝐃𝐞 𝐀𝐮𝐝𝐢𝐨𝐬.
┃🕊️ 𝐍𝐨 𝐀𝐠𝐚𝐬 𝐒𝐩𝐚𝐦 𝐂𝐨𝐧 𝐋𝐨𝐬 𝐀𝐮𝐝𝐢𝐨𝐬.
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭✨️⸽⃕𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯🍁⃨፝⃕✰
┃✣➸ 🦋 𝑺𝒊𝒏 𝑵𝒊𝒏𝒈𝒖𝒏 𝑷𝒓𝒆𝒇𝒊𝒋𝒐.
┃✣➸ 🦋 _Quien es tu sempai botsito 7w7_
┃✣➸ 🦋 _Te diagnostico con gay_
┃✣➸ 🦋 _No digas eso papu_
┃✣➸ 🦋 _Fiesta del admin_
┃✣➸ 🦋 _Fiesta del administrador_ 
┃✣➸ 🦋 _Vivan los novios_
┃✣➸ 🦋 _Noche de paz_
┃✣➸ 🦋 _Buenos dias_
┃✣➸ 🦋 _Buenas tardes_
┃✣➸ 🦋 _Buenas noches_
┃✣➸ 🦋 _Audio hentai_
┃✣➸ 🦋 _Chica lgante_
┃✣➸ 🦋 _Feliz navidad_
┃✣➸ 🦋 _Onichan_
┃✣➸ 🦋 _Vete a la vrg_
┃✣➸ 🦋 _Pasa pack Bot_
┃✣➸ 🦋 _Atencion grupo_
┃✣➸ 🦋 _Marica quien_
┃✣➸ 🦋 _Uwu_
┃✣➸ 🦋 _Murio el grupo_
┃✣➸ 🦋 _Oh me vengo_
┃✣➸ 🦋 _tio que rico_
┃✣➸ 🦋 _Viernes_
┃✣➸ 🦋 _Baneado_
┃✣➸ 🦋 _Sexo_
┃✣➸ 🦋 _Nyanpasu_
┃✣➸ 🦋 _Te amo_
┃✣➸ 🦋 _Yamete_
┃✣➸ 🦋 _La biblia_
┃✣➸ 🦋 _Mierda de Bot_
┃✣➸ 🦋 _Siuuu_
┃✣➸ 🦋 _Epico_
┃✣➸ 🦋 _Shitpost_
┃✣➸ 🦋 _Rawr_
┃✣➸ 🦋 _:c_
┃✣➸ 🦋 _a_
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
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu2|menuaudios)$/i;
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