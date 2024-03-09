import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `👊😆Hᴇʏ Yᴀ Esᴛᴀs Rᴇɢɪsᴛʀᴀᴅᴏ, Qᴜɪᴇʀᴇs Rᴇɢɪsᴛʀᴀᴛᴇ Dᴇ Nᴜᴇᴠᴏ?\n\n 📌Usᴇ Esᴛᴇ Cᴏᴍᴀɴᴅᴏ Pᴀʀᴀ Eʟɪᴍɪɴᴀʀ Sᴜ Rᴇɢɪsᴛʀᴏ\n*${usedPrefix}unreg* <Número de serie>`;
  if (!Reg.test(text)) throw `*⚠️ Mal Uso Del Comando*\n\n*🥀 Uso Del Comando:* 
*${usedPrefix + command} nombre.edad*\n\n*📍Ejemplo:*
 ${usedPrefix + command} *${name2}.18*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*🧸 Debes Poner El Nombre*';
  if (!age) throw '*📍 La Edad Es Necesaria Para El Registro*';
  if (name.length >= 30) throw '📍 *Tu Nombre Es Muy Largo*';
  age = parseInt(age);
  if (age > 60) throw '*🧩 Woo, El Abuelo Quiere Jugar Al Bot*';
  if (age < 5) throw '*🧩 Un Bebé Usa WhatsApp?*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `╭━━━ •🧸⸽⃕𝘛𝘶 𝘙𝘦𝘨𝘪𝘴𝘵𝘳𝘰🍁⃨፝⃕✰• ━━━
┃ ${saludo}: ${name}
┃ *🧩Edad:* ${age} años
┃ *📍Numero De Serie:* 
┃ ${sn}
◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;