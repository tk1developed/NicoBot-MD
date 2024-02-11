import fs from 'fs';
import acrcloud from 'acrcloud';
const acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu',
});

const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (/audio|video/.test(mime)) {
    if ((q.msg || q).seconds > 20) return m.reply('🌻 El archivo que carga es demasiado grande, le sugerimos que corte el archivo grande a un archivo más pequeño, 10-20 segundos Los datos de audio son suficientes para identificar');
    const media = await q.download();
    const ext = mime.split('/')[1];
    fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media);
    const res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`));
    const {code, msg} = res.status;
    if (code !== 0) throw msg;
    const {title, artists, album, genres, release_date} = res.metadata.music[0];
    const txt = `
𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙳𝙴 𝙻𝙰 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰

🕊️𝐍𝐨𝐦𝐛𝐫𝐞: ${title}
🦋𝐂𝐚𝐧𝐭𝐚𝐧𝐭𝐞: ${artists !== undefined ? artists.map((v) => v.name).join(', ') : 'No encontrado'}
✨𝐀𝐥𝐛𝐮𝐦: ${album.name || 'No encontrado'}
🦎𝐆𝐞𝐧𝐞𝐫𝐨: ${genres !== undefined ? genres.map((v) => v.name).join(', ') : 'No encontrado'}
🌻𝐒𝐮𝐛𝐢𝐝𝐨: ${release_date || 'No encontrado'}
`.trim();
    fs.unlinkSync(`./tmp/${m.sender}.${ext}`);
    m.reply(txt);
  } else throw '*🦋 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘢 𝘈 𝘜𝘯 𝘈𝘶𝘥𝘪𝘰.*';
};
handler.command = /^quemusica|quemusicaes|whatmusic$/i;
export default handler;
