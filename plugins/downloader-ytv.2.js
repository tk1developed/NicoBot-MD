import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
const handler = async (m, {conn, args}) => {
  if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 / 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*';
  await m.reply(`*_⏳𝘗𝘳𝘰𝘤𝘦𝘴𝘢𝘯𝘥𝘰 𝘝𝘪𝘥𝘦𝘰...⏳_*\n\n*◉ 𝘚𝘪 𝘌𝘭 𝘝𝘪𝘥𝘦𝘰 𝘕𝘰 𝘚𝘦 𝘌𝘯𝘷𝘪𝘢 𝘗𝘳𝘶𝘦𝘣𝘦 𝘓𝘰𝘴 𝘚𝘪𝘨𝘶𝘪𝘦𝘯𝘵𝘦𝘴 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 #playdoc ᴏ #play.2 ᴏ #ytmp4doc ◉*`);
  try {
    const qu = args[1] || '360';
    const q = qu + 'p';
    const v = args[0];
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.video[q].download();
    const ttl = await yt.title;
    const size = await yt.video[q].fileSizeH;
    const cap = `*◉—⌈📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥⌋—◉*\n❏ *𝚃𝙸𝚃𝚄𝙻𝙾:* ${ttl}\n❏ *𝙿𝙴𝚂𝙾:* ${size}\n  ❥ᰰຼ ⃟ᬽ៸𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿༒★»`.trim();
    await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m});
  } catch {
    try {
      const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`);
      const lolh = await lolhuman.json();
      const n = lolh.result.title || 'error';
      const n2 = lolh.result.link;
      const n3 = lolh.result.size;
      const cap2 = `*◉—⌈📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥⌋—◉*\n❏ *𝚃𝙸𝚃𝚄𝙻𝙾:* ${n}\n❏ *𝙿𝙴𝚂𝙾:* ${n3}\n  ❥ᰰຼ ⃟ᬽ𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿༒★»`.trim();
      await conn.sendMessage(m.chat, {document: {url: n2}, caption: cap2, mimetype: 'video/mp4', fileName: n + `.mp4`}, {quoted: m});
    } catch {
      await conn.reply(m.chat, '*[❗] 𝒆𝓵 𝓿𝓲𝓭𝒆𝓸 𝓷𝓸 𝓼𝒆 𝓹𝓾𝓭𝓸 𝓭𝒆𝓼𝓬𝓪𝓻𝓰𝓪𝓻*', m);
    }
  }
};
handler.command = /^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i;
export default handler;
