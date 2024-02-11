import {webp2mp4} from '../lib/webp2mp4.js';
import {ffmpeg} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*🦋 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘢 𝘌𝘯 𝘜𝘯 𝘚𝘵𝘪𝘤𝘬𝘦𝘳 𝘋𝘦 𝘔𝘰𝘷𝘪𝘮𝘪𝘦𝘯𝘵𝘰 𝘌𝘭 𝘊𝘶𝘢𝘭 𝘘𝘶𝘪𝘦𝘳𝘦𝘴 𝘊𝘰𝘯𝘷𝘦𝘳𝘵𝘪𝘳𝘭𝘰 𝘌𝘯 𝘝𝘪𝘥𝘦𝘰 𝘠 𝘓𝘶𝘦𝘨𝘰 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘊𝘰𝘯 𝘌𝘭 𝘊𝘰𝘮𝘢𝘯𝘥𝘰 ${usedPrefix + command}*`;
  const mime = m.quoted.mimetype || '';
  if (!/webp/.test(mime)) throw `*🦋 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘢 𝘌𝘯 𝘜𝘯 𝘚𝘵𝘪𝘤𝘬𝘦𝘳 𝘋𝘦 𝘔𝘰𝘷𝘪𝘮𝘪𝘦𝘯𝘵𝘰 𝘌𝘭 𝘊𝘶𝘢𝘭 𝘘𝘶𝘪𝘦𝘳𝘦𝘴 𝘊𝘰𝘯𝘷𝘦𝘳𝘵𝘪𝘳𝘭𝘰 𝘌𝘯 𝘝𝘪𝘥𝘦𝘰 𝘠 𝘓𝘶𝘦𝘨𝘰 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘊𝘰𝘯 𝘌𝘭 𝘊𝘰𝘮𝘢𝘯𝘥𝘰 ${usedPrefix + command}*`;
  const media = await m.quoted.download();
  let out = Buffer.alloc(0);
  if (/webp/.test(mime)) {
    out = await webp2mp4(media);
  } else if (/audio/.test(mime)) {
    out = await ffmpeg(media, [
      '-filter_complex', 'color',
      '-pix_fmt', 'yuv420p',
      '-crf', '51',
      '-c:a', 'copy',
      '-shortest',
    ], 'mp3', 'mp4');
  }
  await conn.sendFile(m.chat, out, 'error.mp4', '*DONE*', m, 0, {thumbnail: out});
};
handler.help = ['tovideo'];
handler.tags = ['sticker'];
handler.command = ['tovideo', 'tomp4', 'mp4', 'togif'];
export default handler;
