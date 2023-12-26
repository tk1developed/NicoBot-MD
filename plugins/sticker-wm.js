import {addExif} from '../lib/sticker.js';
const handler = async (m, {conn, text}) => {
  if (!m.quoted) throw '*⚠️𝘉𝘦𝘣𝘦́ 𝘛𝘦 𝘍𝘢𝘭𝘵𝘰́ 𝘜𝘯 𝘚𝘵𝘪𝘬𝘦𝘳✨*';
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) throw '*⚠️𝘉𝘦𝘣𝘦́ 𝘛𝘦 𝘍𝘢𝘭𝘵𝘰́ 𝘜𝘯 𝘚𝘵𝘪𝘬𝘦𝘳✨*';
    const img = await m.quoted.download();
    if (!img) throw '*⚠️𝘉𝘦𝘣𝘦́ 𝘛𝘦 𝘍𝘢𝘭𝘵𝘰́ 𝘜𝘯 𝘚𝘵𝘪𝘬𝘦𝘳✨*';
    stiker = await addExif(img, packname || global.packname, author || global.author);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {asSticker: true});
    else throw '*❗ 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙰𝙻𝙶𝙾 𝙵𝙰𝙻𝙻𝙾.. 𝙲𝙾𝚁𝚁𝙾𝙱𝙾𝚁𝙴 𝚀𝚄𝙴 𝙷𝙰𝚈𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙸𝙳𝙾 𝙰 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚈 𝙷𝙰𝚈𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝚈 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*';
  }
};
handler.help = ['wm <packname>|<author>'];
handler.tags = ['sticker'];
handler.command = /^take|robar|wm$/i;
export default handler;
