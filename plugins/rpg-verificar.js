import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `👊😆Hᴇʏ Bᴇʙᴇ́ Yᴀ Esᴛᴀs Rᴇɢɪsᴛʀᴀᴅᴏ, Qᴜɪᴇʀᴇs Rᴇɢɪsᴛʀᴀᴛᴇ Dᴇ Nᴜᴇᴠᴏ?\n\n 📌Usᴇ Esᴛᴇ Cᴏᴍᴀɴᴅᴏ Pᴀʀᴀ Eʟɪᴍɪɴᴀʀ Sᴜ Rᴇɢɪsᴛʀᴏ\n*${usedPrefix}unreg* <Número de serie>`;
  if (!Reg.test(text)) throw `*⚠️𝘌𝘭 𝘍𝘰𝘳𝘮𝘢𝘵𝘰 𝘌𝘴 𝘐𝘯𝘤𝘰𝘳𝘳𝘦𝘤𝘵𝘰*\n\n*—◉ 𝘜𝘴𝘰 𝘋𝘦𝘭 𝘊𝘰𝘮𝘢𝘯𝘥𝘰: ${usedPrefix + command} nombre.edad*\n*—◉ Ejemplo: ${usedPrefix + command} Diego.20*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*👊𝘋𝘦𝘷𝘦𝘴 𝘗𝘰𝘯𝘦𝘳 𝘌𝘭 𝘕𝘰𝘮𝘣𝘳𝘦*';
  if (!age) throw '*[❗] 𝘓𝘢 𝘌𝘥𝘢𝘥 𝘌𝘴 𝘕𝘦𝘴𝘦𝘴𝘢𝘳𝘪𝘰 𝘗𝘢𝘳𝘢 𝘌𝘭 𝘙𝘦𝘨𝘪𝘴𝘵𝘳𝘰*';
  if (name.length >= 30) throw '😆𝘞𝘰𝘰 𝘛𝘶 𝘕𝘰𝘮𝘣𝘳𝘦 𝘌𝘴 𝘓𝘢𝘳𝘨𝘰, 𝘜𝘴𝘢 𝘖𝘵𝘳𝘰';
  age = parseInt(age);
  if (age > 60) throw '*[❗] 𝘞𝘩𝘢𝘵𝘴,𝘊𝘰𝘮𝘰 𝘝𝘪𝘷𝘦𝘴 𝘉𝘪𝘦𝘫𝘰? 👴🏻*';
  if (age < 5) throw '*[❗] 𝘊𝘰𝘮𝘰 𝘘𝘶𝘦 𝘜𝘯 𝘉𝘦𝘣𝘦́ 𝘚𝘢𝘣𝘦 𝘜𝘴𝘢𝘳 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱? 😲*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `╭꒱「🐱⸽⃕𝘛𝘶 𝘙𝘦𝘨𝘪𝘴𝘵𝘳𝘰🍁⃨፝⃕✰」━⊜*
┃⋄ *🗃𝑁𝑜𝑚𝑏𝑟𝑒:* ${name}
┃⋄ *🗃𝐸𝑑𝑎𝑑:* ${age} años
┃⋄ *🔰𝑁𝑢𝑚𝑒𝑟𝑜 𝑑𝑒 𝑆𝑒𝑟𝑖𝑒:* 
┃⋄ ${sn}
┗━━◘`;
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
