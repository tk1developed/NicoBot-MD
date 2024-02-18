import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import {mediafiredl} from '@bochilteam/scraper';

const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `*😻 𝑃𝑜𝑟 𝐹𝑎𝑣𝑜𝑟 𝐸𝑛𝑣𝑖𝑒 𝑈𝑛 𝐸𝑛𝑙𝑎𝑐𝑒 𝐷𝑒 𝑀𝑒𝑑𝑖𝑎𝑓𝑖𝑟𝑒, 𝑺𝒊𝒎𝒊𝒍𝒂𝒓 𝑨: ${usedPrefix + command} https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE*`;
  try {
    const resEX = await mediafiredl(args[0]);
    const captionES = `
*📓 Nᴏᴍʙʀᴇ:* ${resEX.filename}
*📁 Pᴇsᴏ:* ${resEX.filesizeH}
*📄 Tɪᴘᴏ:* ${resEX.ext}

*⏳ 𝘌𝘴𝘱𝘦𝘳𝘦 𝘌𝘯 𝘓𝘰 𝘘𝘶𝘦 𝘌𝘯𝘷𝘪𝘰 𝘚𝘶 𝘈𝘳𝘤𝘩𝘪𝘷𝘰 𝘋𝘦 𝘔𝘦𝘥𝘪𝘢𝘧𝘪𝘳𝘦. . . .* 
`.trim();
    m.reply(captionES);
    await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, {mimetype: resEX.ext, asDocument: true});
  } catch {
    try {
      const res = await mediafireDl(args[0]);
      const {name, size, date, mime, link} = res;
      const caption = `
*📓 Nᴏᴍʙʀᴇ:* ${name}
*📁 Pᴇsᴏ:* ${size}
*📄 Tɪᴘᴏ:* ${mime}

*⏳ 𝘌𝘴𝘱𝘦𝘳𝘦 𝘌𝘯 𝘓𝘰 𝘘𝘶𝘦 𝘌𝘯𝘷𝘪𝘰 𝘚𝘶 𝘈𝘳𝘤𝘩𝘪𝘷𝘰 𝘋𝘦 𝘔𝘦𝘥𝘪𝘢𝘧𝘪𝘳𝘦. . . .* 
`.trim();
      await m.reply(caption);
      await conn.sendFile(m.chat, link, name, '', m, null, {mimetype: mime, asDocument: true});
    } catch {
      await m.reply('*😻 𝑃𝑜𝑟 𝐹𝑎𝑣𝑜𝑟 𝐸𝑛𝑣𝑖𝑒 𝑈𝑛 𝐸𝑛𝑙𝑎𝑐𝑒 𝐷𝑒 𝑀𝑒𝑑𝑖𝑎𝑓𝑖𝑟𝑒, 𝑺𝒊𝒎𝒊𝒍𝒂𝒓 𝑨:*\n*◉ https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE*');
    }
  }
};
handler.help = ['mediafire'].map((v) => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i;
handler.register = true
export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return {name, size, date, mime, link};
}
