import {canLevelUp, xpRange} from '../lib/levelling.js';
import {levelup} from '../lib/canvas.js';

const handler = async (m, {conn}) => {
  const name = conn.getName(m.sender);
  const user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const {min, xp, max} = xpRange(user.level, global.multiplier);
    throw `◆━━━━━━ ✿ 𝐿𝑒𝑣𝑒𝑙𝑢𝑝🧸
┋➺ 🧸𝐍𝐨𝐦𝐛𝐫𝐞: 
┋➺ *${name}*
┋─── ❖ ── ✦ ── ❖ ───
┋➺ 📍𝐍𝐢𝐯𝐞𝐥: 
┋➺ *${user.level}*
┋─── ❖ ── ✦ ── ❖ ───
┋➺ 🧩𝐄𝐱𝐩𝐞𝐫𝐭𝐨: 
┋➺ *${user.exp - min}/${xp}*
◆━━━━━━◆❃◆━━━━━━◆
𝑇𝑒 𝐻𝑎𝑐𝑒 𝐹𝑎𝑙𝑡𝑎 *${max - user.exp}* 𝐷𝑒 𝐸𝑥𝑝𝑒𝑟𝑡𝑜 𝑃𝑎𝑟𝑎 𝑆𝑢𝑏𝑖𝑟 𝑈𝑛 𝑁𝑢𝑒𝑣𝑜 𝐿𝑒𝑣𝑒𝑙𝑢𝑝🧸📍
`.trim();
  }
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    const teks = `🎊 Bien hecho ${conn.getName(m.sender)}    Nivel:`;
    const str = `★━━━━━━•𝑳𝒆𝒗𝒆𝒍𝒖𝒑🧸
┋➺ 🧸𝐀𝐧𝐭𝐞𝐫𝐢𝐨𝐫 𝐃𝐞𝐥 𝐍𝐢𝐯𝐞𝐥: 
┋➺ *${before}*
┋─── ❖ ── ✦ ── ❖ ───
┋➺ 📍𝐍𝐢𝐯𝐞𝐥 𝐀𝐜𝐭𝐮𝐚𝐥:
┋➺ *${user.level}*
★━━━━━━✩━━━━━━★

𝑀𝑖𝑒𝑛𝑠𝑡𝑟𝑎 𝑀𝑎𝑠 𝑈𝑠𝑒𝑠 𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯 𝑇𝑢 𝐿𝑒𝑣𝑒𝑙𝑢𝑝 𝑆𝑢𝑏𝑖𝑟𝑎 𝑀𝑎𝑠 𝑅𝑎𝑝𝑖𝑑𝑜🥀📍
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