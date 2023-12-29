import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '*🌵 Rᴇsᴘᴏɴᴅᴀ A Uɴᴀ Iᴍᴀɢᴇɴ O Uɴ Vɪᴅᴇᴏ Eʟ Cᴜᴀʟ Sᴇʀᴀ́ Cᴏɴᴠᴇʀᴛɪᴅᴏ Eɴ Eɴʟᴀᴄᴇ✨*';
  const media = await q.download();
  const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  const link = await (isTele ? uploadImage : uploadFile)(media);
  m.reply(`*𝙴𝙽𝙻𝙰𝙲𝙴 𝙰 𝚂𝚄 𝙰𝚁𝙲𝙷𝙸𝚅𝙾:* ${link}`);
};
handler.help = ['tourl <reply image>'];
handler.tags = ['sticker'];
handler.command = /^(upload|tourl)$/i;
export default handler;
