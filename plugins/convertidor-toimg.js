import {webp2png} from '../lib/webp2mp4.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const notStickerMessage = `*🦋 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘢 𝘈 𝘜𝘯 𝘚𝘵𝘪𝘤𝘬𝘦𝘳 𝘗𝘢𝘳𝘢 𝘊𝘰𝘯𝘷𝘦𝘳𝘵𝘪𝘳𝘭𝘰 𝘌𝘯 𝘐𝘮𝘢𝘨𝘦𝘯 𝘠 𝘓𝘶𝘦𝘨𝘰 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘢 𝘊𝘰𝘯 𝘌𝘭 𝘊𝘰𝘮𝘢𝘯𝘥𝘰 ${usedPrefix + command}*`;
  if (!m.quoted) throw notStickerMessage;
  const q = m.quoted || m;
  const mime = q.mediaType || '';
  if (!/sticker/.test(mime)) throw notStickerMessage;
  const media = await q.download();
  const out = await webp2png(media).catch((_) => null) || Buffer.alloc(0);
  await conn.sendFile(m.chat, out, 'error.png', null, m);
};
handler.help = ['toimg (reply)'];
handler.tags = ['sticker'];
handler.command = ['toimg', 'jpg', 'img'];
export default handler;
