import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `🧸 *Envia El Github.*

 𝐄𝐣𝐞𝐦𝐩𝐥𝐨:
 
${usedPrefix + command} https://github.com/diegojadibot/SakuraBotLite-MD`;
  if (!regex.test(args[0])) throw '*📍 Link Incorrecto!*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`⏰️ _Espere, El Archivo Se Está Enviando...._`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone <url>'];
handler.tags = ['downloader'];
handler.command = /gitclone/i;
handler.register = true
export default handler;
