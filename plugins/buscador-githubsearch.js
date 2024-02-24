import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*📍 Ingrese un texto para buscar, Ejemplo: ${usedPrefix + command} SakuraBotLite-MD*`;
  const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
    q: text,
  }));
  const json = await res.json();
  if (res.status !== 200) throw json;
  //const imagen = await conn.getFile(json.items[0].owner.avatar_url).data
  const str = json.items.map((repo, index) => {
  return `
*${1 + index}. ${repo.full_name}${repo.fork ? ' (fork)' : ''}*
🔗 *Url:* ${repo.html_url}
📍 *Creado el:* ${formatDate(repo.created_at)}
🥀 *Actualizado el:* ${formatDate(repo.updated_at)}
⚡️ *Clone:* $ git clone ${repo.clone_url}
🚩 ${repo.watchers} ◉ 🍴 ${repo.forks} ◉ ⭐ ${repo.stargazers_count} ◉ ❓ 
${repo.description ? `⏳️ *Descripción:*\n${repo.description}` : ''}
`.trim()}).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  conn.sendMessage(m.chat, {text: str.trim()}, {quoted: m})
//conn.sendMessage(m.chat, {text: str.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen, "mediaUrl": `https://www.atom.bio/sakuralite`, "sourceUrl": `https://www.atom.bio/sakuralite`}}}, {quoted: m});  
};
handler.help = ['githubs'];
handler.tags = ['buscadores'];
handler.command = /^(ghs|githubs|githubs|githubsearch|gits|gitsearch)$/i;
export default handler;

function formatDate(n, locale = 'es') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
}
