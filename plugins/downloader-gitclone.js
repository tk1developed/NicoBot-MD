import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `*⏳️𝐸𝑛𝑣𝑖𝑎 𝐸𝑙 𝐿𝑖𝑛𝑘 𝐷𝑒𝑙 𝐺𝑖𝑡ℎ𝑢𝑏 𝐷𝑒𝑙 𝐵𝑜𝑡 𝑄𝑢𝑒 𝑄𝑢𝑖𝑒𝑟𝑎𝑠 𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝐿𝑜𝑠 𝐴𝑟𝑐ℎ𝑖𝑣𝑜𝑧 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${usedPrefix + command} https://github.com/diegojadibot/SakuraBotLite-MD*`;
  if (!regex.test(args[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙸𝙽𝙺 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾!*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`*🌼 𝑬𝒔𝒑𝒆𝒓𝒆 𝑬𝒍 𝑨𝒓𝒄𝒉𝒊𝒗𝒐 𝑺𝒆 𝑬𝒔𝒕𝒂 𝑬𝒏𝒗𝒊𝒂𝒏𝒅𝒐....*`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone <url>'];
handler.tags = ['downloader'];
handler.command = /gitclone/i;
export default handler;
