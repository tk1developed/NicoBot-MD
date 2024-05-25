import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  if (!text) return conn.reply(m.chat, '🏷 Inserte el comando mas el nombre de usuario de tiktok', m);
  try {
    const res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`);
    const res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
    const json = await res.json();
    if (res.status !== 200) throw await res.text();
    if (!json.status) throw json;
    const thumb = await (await fetch(json.result.user_picture)).buffer();
    const msg = `
*𝚄𝚂𝚄𝙰𝚁𝙸𝙾:* ${json.result.username}
*𝙽𝙾𝙼𝙱𝚁𝙴:* ${json.result.nickname}
*𝚂𝙴𝙶𝚄𝙸𝙳𝙾𝚁𝙴𝚂:* ${json.result.followers}
*𝚂𝙴𝙶𝚄𝙸𝙳𝙾𝚂:* ${json.result.followings}
*𝙻𝙸𝙺𝙴𝚂:* ${json.result.likes}
*𝚅𝙸𝙳𝙴𝙾𝚂:* ${json.result.video}
*𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* ${json.result.bio}
`.trim();
    conn.sendFile(m.chat, res2, 'error.jpg', msg, m, false);
  } catch (e) {
    throw '🚫 Error, No se encontró ningun usuario con ese nombre';
  }
};
handler.help = ['tiktokstalk'].map((v) => v + ' <username>');
handler.tags = ['stalk'];
handler.command = /^(tiktokstalk|ttstalk)$/i;
export default handler;
