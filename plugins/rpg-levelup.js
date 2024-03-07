import {canLevelUp, xpRange} from '../lib/levelling.js';
import {levelup} from '../lib/canvas.js';

const handler = async (m, {conn}) => {
  const name = conn.getName(m.sender);
  const user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const {min, xp, max} = xpRange(user.level, global.multiplier);
    throw `◆━━━━━━ ✿  *Levelup* 🧸
┋➺ *🧸Nombre:* 
┋➺ *${name}*
┋─── ❖ ── ✦ ── ❖ ───
┋➺ *📍Nivel:* 
┋➺ *${user.level}*
┋─── ❖ ── ✦ ── ❖ ───
┋➺ *🧩Experto:*
┋➺ *${user.exp - min}/${xp}*
◆━━━━━━◆❃◆━━━━━━◆
Te Hace Falta *${max - user.exp}* De Experto  Para Subir Un Nuevo Nivel 🧸📍
`.trim();
  }
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    const teks = `🎊 Bien hecho ${conn.getName(m.sender)}    Nivel:`;
    const str = `★━━━━━━• *Levelup🧸*
┋➺ *🧸Anterior Del Nivel:* 
┋➺ *${before}*
┋─── ❖ ── ✦ ── ❖ ───
┋➺ *📍Nivel Actual:*
┋➺ *${user.level}*
★━━━━━━✩━━━━━━★

Mienstra Mas Uses *SakuraBotLite-MD* Tu Nivel Subirá Mas Rapido🥀📍
`.trim();
    try {
      const img = await levelup(teks, user.level);
      conn.sendFile(m.chat, img, 'levelup.jpg', str, m);
    } catch (e) {
      m.reply(str);
    }
  }
};

handler.help = ['levelup'];
handler.tags = ['xp'];

handler.command = ['nivel', 'lvl', 'levelup', 'level'];

export default handler;