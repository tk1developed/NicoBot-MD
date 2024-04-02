import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
  //  let vn = './media/menu.mp3'
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

 await conn.sendMessage(m.chat, { react: { text: '👑', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `╭━━━━･❪ *PROPIETARIO* ❫ ･━━━━╮
┃💧 > *<funcion>*
┃💧 => *<funcion>*
┃💧 $ *<funcion>*
┃💧 _!cajafuerte_
┃💧 _!reunion_ *<texto>*
┃💧 _!setprefix *<prefijo>*_
┃💧 _!resetprefix_
┃💧 _!autoadmin_
┃💧 _!grouplist_
┃💧 _!chetar_
┃💧 _!leavegc_
┃💧 _!cajafuerte_
┃💧 _!blocklist_
┃💧 _!addowner *<@tag / numero>*_
┃💧 _!delowner *<@tag / numero>*_
┃💧 _!block *<@tag / numero>*_
┃💧 _!unblock *<@tag / numero>*_
┃💧 _!enable *restrict*_
┃💧 _!disable *restrict*_
┃💧 _!enable *autoread*_
┃💧 _!disable *autoread*_
┃💧 _!enable *public*_
┃💧 _!disable *public*_
┃💧 _!enable *pconly*_
┃💧 _!disable *pconly*_
┃💧 _!enable *gconly*_
┃💧 _!disable *gconly*_
┃💧 _!enable *anticall*_
┃💧 _!disable *anticall*_
┃💧 _!enable *antiprivado*_
┃💧 _!disable *antiprivado*_
┃💧 _!enable *antispam*_
┃💧 _!disable *antispam*_
┃💧 _!msg *<texto>*_
┃💧 _!banchat_
┃💧 _!unbanchat_
┃💧 _!resetuser *<@tag>*_
┃💧 _!banuser *<@tag>*_
┃💧 _!unbanuser *<@tag>*_
┃💧 _!dardiamantes *<@tag> <cantidad>*_
┃💧 _!añadirxp *<@tag> <cantidad>*_
┃💧 _!banuser *<@tag>*_
┃💧 _!bc *<texto>*_
┃💧 _!bcchats *<texto>*_
┃💧 _!bcgc *<texto>*_
┃💧 _!bcgc2 *<audio>*_
┃💧 _!bcgc2 *<video>*_
┃💧 _!bcgc2 *<imagen>*_
┃💧 _!bcbot *<texto>*_
┃💧 _!cleartpm_
┃💧 _!restart_
┃💧 _!update_
┃💧 _!banlist_
┃💧 _!addprem *<@tag> <tiempo>*_
┃💧 _!addprem2 *<@tag> <tiempo>*_
┃💧 _!addprem3 *<@tag> <tiempo>*_
┃💧 _!addprem4 *<@tag> <tiempo>*_
┃💧 _!delprem *<@tag>*_
┃💧 _!listcmd_
┃💧 _!setppbot *<responder a imagen>*_
┃💧 _!addcmd *<texto> <responder a sticker/imagen>*_
┃💧 _!delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┃💧 _!saveimage_
│❢ _!pviewimage_
╰•°• ✾ •°••°• ✾ •°••°• ✾ •°•°••°• ✾ •°•`.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '📍 *Ocurrió Un Error*', m);
  }
};
handler.command = /^(ownermenu|menucreador|creadormenu|menuowner)$/i;
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