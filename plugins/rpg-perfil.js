import {createHash} from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, participants, isPrems}) => {
  let pp = 'https://en.idei.club/uploads/posts/2023-06/1686810490_en-idei-club-p-sakura-ena-dizain-instagram-2.jpg';
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`;
  try {
    pp = await conn.profilePictureUrl(who);
  } catch (e) {
  } finally {
    const {name, limit, lastclaim, registered, regTime, age, premiumTime} = global.db.data.users[who];
    const username = conn.getName(who);
    const prem = global.prems.includes(who.split `@` [0]);
    const sn = createHash('md5').update(who).digest('hex');
    const str = `. . . *🌸 P E R F I L 🌹* . . .
🌹 • *Nombre:* ${username}

🌼 • *Tag:* @${who.replace(/@.+/, '')}

📞 • *Numero:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 • *Link:* Wa.me/${who.split`@`[0]}${registered ? '\n🧃 • *Edad:* ' + age + ' años' : ''}
💎 • *Limite: ${limit} Usos*
📇 • *Registrado:* ${registered ? '✅': '❎'}
🔮 • *Premium:* ${premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❎') || ''}`;
    conn.sendMessage(m.chat, {image: {url: pp}, caption: str}, {quoted: m});
  }
};
handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^perfil|profile?$/i;
handler.register = true
export default handler;
