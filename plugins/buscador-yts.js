import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, {conn, text}) => {
  if (!text) throw '🛑 *Que Deseas Que Busque En Youtube?*';
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
 🚩 Titulo :_ ${v.title}
 🔗 Enlace :_ ${v.url}
 🕒 Duración :_ ${v.timestamp}
 📥 Subido :_ ${v.ago}
 👁 Vista :_ ${v.views}`;
    }                            
  }).filter((v) => v).join('\n\nꙬꙬꙬꙬꙬꙬꙬꙬꙬꙬ\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m);
};
handler.help = ['ytsearch *<texto>*'];
handler.tags = ['search'];
handler.command = ['ytsearch', 'yts'];
export default handler;
