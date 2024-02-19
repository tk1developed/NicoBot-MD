import {sticker} from '../lib/sticker.js';

const handler = (m) => m;

handler.all = async function(m) {
  const chat = db.data.chats[m.chat];
  const user = db.data.users[m.sender];

  if (chat.autosticker && m.isGroup) {
    const q = m;
    let stiker = false;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/webp/g.test(mime)) return;
    if (/image/g.test(mime)) {
      const img = await q.download?.();
      if (!img) return;
      stiker = await sticker(img, false, packname, author);
    } else if (/video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return await m.reply(`*🐈 𝑬𝒍 𝑽𝒊𝒅𝒆𝒐 𝑵𝒐 𝑷𝒖𝒆𝒅𝒆 𝑫𝒖𝒓𝒂𝒓 𝑴𝒂𝒔 𝑫𝒆 7 𝑺𝒆𝒈𝒖𝒏𝒅𝒐𝒔*\n\n𝑃𝑎𝑟𝑎 𝐷𝑒𝑠𝑎𝑐𝑡𝑖𝑣𝑎𝑟 𝐸𝑙 𝐴𝑢𝑡𝑜𝑠𝑡𝑖𝑐𝑘𝑒𝑟 𝐸𝑠𝑐𝑟𝑖𝑏𝑎: (#𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚊𝚞𝚝𝚘𝚜𝚝𝚒𝚌𝚔𝚎𝚛)`);
      // await this.sendButton(m.chat, '*🐱 𝑯𝒆𝒚 𝑬𝒍 𝑽𝒊𝒅𝒆𝒐 𝑵𝒐 𝑷𝒖𝒆𝒅𝒆 𝑫𝒖𝒓𝒂𝒓 𝑴𝒂𝒅 𝑫𝒆 7 𝑺𝒆𝒈𝒖𝒏𝒅𝒐𝒔*', wm, [['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝚄𝚃𝙾𝚂𝚃𝙸𝙲𝙺𝙴𝚁', '/disable autosticker']], m)
      const img = await q.download();
      if (!img) return;
      stiker = await sticker(img, false, packname, author);
    } else if (m.text.split(/\n| /i)[0]) {
      if (isUrl(m.text)) stiker = await sticker(false, m.text.split(/\n| /i)[0], packname, author);
      else return;
    }
    if (stiker) {
      await mconn.conn.sendFile(m.chat, stiker, null, {asSticker: true});
    }
  }
  return !0;
};
export default handler;

const isUrl = (text) => {
  return text.match(new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'));
};
