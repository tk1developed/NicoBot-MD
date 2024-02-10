/*Codigo Para El Menu De Audios, Para El Bot SakuraBotLite-MD
editado y actualizado por: ender-gb*/

import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '🔊 𝑬𝒏𝒗𝒊𝒂𝒏𝒅𝒐 𝑬𝒍 𝑴𝒆𝒏𝒖 𝑫𝒆 𝑨𝒖𝒅𝒊𝒐𝒔...',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '🦋 𝑀𝑒𝑛𝑢 𝐷𝑒 𝐴𝑢𝑑𝑖𝑜𝑠', body: '👋🏻 𝚂𝙰𝙻𝚄𝙳𝙾 𝙰𝙼𝙸𝙶𝙾', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
m.react('🚩');
    await conn.sendMessage(m.chat, { react: { text: '🙌🏻', key: m.key } })
  let txt =`╭∴━━━ *AUDIOS-BOT* ━━━∴╮
┃🕊️ 𝖧𝗈𝗅𝖺👋🏻, 𝖲𝗈𝗒 𝖲𝖺𝗄𝗎𝗋𝖺𝖫𝗂𝗍𝖾
┃🕊️ 𝐄𝐥 𝐌𝐞𝐧𝐮 𝐃𝐞 𝐀𝐮𝐝𝐢𝐨𝐬.
┃🕊️ 𝐍𝐨 𝐀𝐠𝐚𝐬 𝐒𝐩𝐚𝐦 𝐂𝐨𝐧 𝐋𝐨𝐬 𝐀𝐮𝐝𝐢𝐨𝐬.
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭✨️⸽⃕𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯🍁⃨፝⃕✰
┃✣➸ 🦋 𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝑺𝒊𝒏 𝑵𝒊𝒏𝒈𝒖𝒏 𝑷𝒓𝒆𝒇𝒊𝒋𝒐.
┃✣➸ 🦋 _Quien es tu sempai botsito 7w7_
┃✣➸ 🦋 _Te diagnostico con gay_
┃✣➸ 🦋 _No digas eso papu_
┃✣➸ 🦋 _A nadie le importa_
┃✣➸ 🦋 _Fiesta del admin_
┃✣➸ 🦋 _Fiesta del administrador_ 
┃✣➸ 🦋 _Vivan los novios_
┃✣➸ 🦋 _Feliz cumpleaños_
┃✣➸ 🦋 _Noche de paz_
┃✣➸ 🦋 _Buenos dias_
┃✣➸ 🦋 _Buenos tardes_
┃✣➸ 🦋 _Buenos noches_
┃✣➸ 🦋 _Audio hentai_
┃✣➸ 🦋 _Chica lgante_
┃✣➸ 🦋 _Feliz navidad_
┃✣➸ 🦋 _Vete a la vrg_
┃✣➸ 🦋 _Pasa pack Bot_
┃✣➸ 🦋 _Atencion grupo_
┃✣➸ 🦋 _Marica quien_
┃✣➸ 🦋 _Murio el grupo_
┃✣➸ 🦋 _Oh me vengo_
┃✣➸ 🦋 _tio que rico_
┃✣➸ 🦋 _Viernes_
┃✣➸ 🦋 _Baneado_
┃✣➸ 🦋 _Sexo_
┃✣➸ 🦋 _Nyanpasu_
┃✣➸ 🦋 _Te amo_
┃✣➸ 🦋 _Yamete_
┃✣➸ 🦋 _Bañate_
┃✣➸ 🦋 _La biblia_
┃✣➸ 🦋 _Mierda de Bot_
┃✣➸ 🦋 _Siuuu_
┃✣➸ 🦋 _Epico_
┃✣➸ 🦋 _Shitpost_
┃✣➸ 🦋 _Rawr_
┃✣➸ 🦋 _:c_
┃✣➸ 🦋 _a_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🦋⸽⃕   𝐌𝐄𝐍𝐔 - 𝐀𝐔𝐃𝐈𝐎𝐒 🚀⸽⃕✰', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🍓');
  } catch {
    conn.reply(m.chat, '🦋 𝑬𝒍 𝑴𝒆𝒏𝒖 𝑫𝒆 𝑨𝒖𝒅𝒊𝒐𝒔 𝑵𝒐 𝑺𝒆 𝑷𝒖𝒅𝒐 𝑬𝒏𝒗𝒊𝒂𝒓 𝑷𝒐𝒓 𝑼𝒏 𝑬𝒓𝒓𝒐𝒓 𝑷𝒐𝒓 𝑭𝒂𝒗𝒐𝒓 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒂 𝑨 𝑴𝒊 𝑪𝒓𝒆𝒂𝒅𝒐𝒓 𝑷𝒂𝒓𝒂 𝑸𝒖𝒆 𝑨𝒓𝒓𝒆𝒈𝒍𝒆 𝑬𝒍 𝑪𝒐𝒎𝒂𝒏𝒅𝒐. 🕊️', m);
  }
};
handler.help = ['help'];
handler.tags = ['menu'];
handler.command = /^(menu2|menuaudios)$/i;
handler.register = true
export default handler;