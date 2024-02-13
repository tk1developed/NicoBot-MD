import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '*⚓ 𝐻𝑒𝑦 𝑅𝑒𝑠𝑝𝑜𝑛𝑑𝑒 𝐴 𝑈𝑛𝑎 𝐼𝑚𝑎𝑔𝑒𝑛 𝑂 𝑈𝑛 𝑉𝑖𝑑𝑒𝑜 𝐸𝑙 𝐶𝑢𝑎𝑙 𝑄𝑢𝑖𝑒𝑟𝑎𝑠 𝐶𝑜𝑛𝑣𝑒𝑟𝑡𝑖𝑟𝑙𝑜 𝐸𝑛 𝑈𝑛 𝐸𝑛𝑙𝑎𝑐𝑒🌱.*';
  const media = await q.download();
  const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  const link = await (isTele ? uploadImage : uploadFile)(media);
  m.reply(`*⚓ 𝑆𝑢 𝐸𝑛𝑙𝑎𝑐𝑒 𝐷𝑒𝑙 𝐴𝑟𝑐ℎ𝑖𝑣𝑜:* ${link}`);
};
handler.help = ['tourl <reply image>'];
handler.tags = ['sticker'];
handler.command = /^(upload|tourl)$/i;
export default handler;
