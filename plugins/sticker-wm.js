import {addExif} from '../lib/sticker.js';
const handler = async (m, {conn, text}) => {
  if (!m.quoted) throw '🧿 『𝐄𝐑𝐑𝐎𝐑』 🧿\n\n𝗘𝗡𝗩𝗜𝗘 𝗨𝗡 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗤𝗨𝗘 𝗗𝗘𝗦𝗘𝗔 𝗖𝗔𝗠𝗕𝗜𝗔𝗥𝗟𝗘 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘 𝗬 𝗟𝗨𝗘𝗚𝗢 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗖𝗢𝗡 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢.';
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) throw '🧿 『𝐄𝐑𝐑𝐎𝐑』 🧿\n\n𝗘𝗡𝗩𝗜𝗘 𝗨𝗡 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗤𝗨𝗘 𝗗𝗘𝗦𝗘𝗔 𝗖𝗔𝗠𝗕𝗜𝗔𝗥𝗟𝗘 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘 𝗬 𝗟𝗨𝗘𝗚𝗢 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗖𝗢𝗡 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢.';
    const img = await m.quoted.download();
    if (!img) throw '🧿 『𝐄𝐑𝐑𝐎𝐑』 🧿\n\n𝗘𝗡𝗩𝗜𝗘 𝗨𝗡 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗤𝗨𝗘 𝗗𝗘𝗦𝗘𝗔 𝗖𝗔𝗠𝗕𝗜𝗔𝗥𝗟𝗘 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘 𝗬 𝗟𝗨𝗘𝗚𝗢 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗖𝗢𝗡 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢.';
    stiker = await addExif(img, packname || global.packname, author || global.author);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {asSticker: true});
    else throw '*🥀 Ocurrió Un Error*';
  }
};
handler.help = ['wm <packname>|<author>'];
handler.tags = ['sticker'];
handler.command = /^take|robar|wm$/i;
export default handler;
