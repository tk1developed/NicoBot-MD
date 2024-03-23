import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];

 const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
        const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': saludo, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${saludo},;;;\nFN:${saludo},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '*!𝗣𝗿𝗼𝘅𝗶𝗺𝗮𝗺𝗲𝗻𝘁𝗲 𝗦𝗲 𝗘𝗻𝘃𝗶𝗮𝗿𝗮́ 𝗘𝗹 𝗠𝗲𝗻𝘂́.*',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋🏻 ¡𝐇𝐨𝐥𝐚!', body: '🦋 𝖫𝗂𝗇𝖽𝗈 𝖠𝗆𝖺𝗇𝖾𝖼𝖾𝗋 🧸', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('📍');
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } })
  let txt =`╭─╮︹︹⊹︹︹⊹︹︹⊹︹︹╭─╮
    ⚘݄𖠵⃕⁖𖥔͢Menu ꪶ͢𝑩𝒐𝒕⋆᭄͙̈
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝
  
╭࣭࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🌻⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫╮
     *I N F O*
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐂𝐫𝐞𝐚𝐝𝐨𝐫: Diego
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐂𝐥𝐢𝐞𝐧𝐭𝐞: ${taguser}
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐁𝐨𝐭 𝐎𝐟𝐢𝐜𝐢𝐚𝐥: ${(conn.user.jid == global.conn.user.jid ? '' : `@${global.conn.user.jid.split`@`[0]}`) || '𝚂𝙾𝚈 𝚄𝙽 𝙱𝙾𝚃 𝙾𝙵𝙲'}
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐃𝐚𝐭𝐞: ${date}
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬: ${rtotal}
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐃𝐞 𝐒𝐚𝐤𝐮𝐫𝐚: ${vs}
╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫╯

╭࣭࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🌻⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫╮
  *U S U A R I O*
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬Nɪᴠᴇʟ: ${level}
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬Exᴘ: ${exp}
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬Rᴀɴɢᴏ: ${role}
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬Dɪᴀᴍᴀɴᴛᴇ: ${limit}
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬SᴀᴋᴜCᴏɪɴs: ${money}
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬Mᴏɴᴇᴅᴀs: ${joincount}
╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫╯

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Sᴏʟᴜᴄɪᴏɴ ᴀ ᴇʀʀᴏʀᴇs 」
├━─━─━─≪≪✠≫≫─━─━─━╯
┣➤ Mensajes en espera
├ׁ̟̇❍✎ _!fixmsgespera_
┣➤ Mensajes en espera (owner)
├ׁ̟̇❍✎ _!dsowner_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Iɴғᴏ ʙᴏᴛ 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎ _!cuentas_
├ׁ̟̇❍✎ _!saludo_
├ׁ̟̇❍✎ _!velocidad_
├ׁ̟̇❍✎ _!metodo_
├ׁ̟̇❍✎ _!instalarbot_
├ׁ̟̇❍✎ _!terminosycondiciones_
├ׁ̟̇❍✎ _!grupos_
├ׁ̟̇❍✎ _!estado_
├ׁ̟̇❍✎ _!aprender_
├ׁ̟̇❍✎ _!infobot_
├ׁ̟̇❍✎ _!speedtest_
├ׁ̟̇❍✎ _!donar_
├ׁ̟̇❍✎ _!owner_
├ׁ̟̇❍✎ _!contactos_
├ׁ̟̇❍✎ _!database_
├ׁ̟̇❍✎ _!colaboradores_
├ׁ̟̇❍✎ _!script_
├ׁ̟̇❍✎ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇「 Uɴᴇ ᴀ Sᴀᴋᴜʀᴀ ᴀ ᴛᴜ ɢʀᴜᴘᴏ 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎ _!join *<enlace / link / url>*_
╰•°• ✾ •°••°• ✾ •°••°• ✾ •°•°••°• ✾ •°•

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Sᴇʀ ʙᴏᴛ Jᴀᴅɪʙᴏᴛ 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎ _!botclone_
├ׁ̟̇❍✎ _!deletesesion_
├ׁ̟̇❍✎ _!token_
├ׁ̟̇❍✎ _!stop_
├ׁ̟̇❍✎ _!bots_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Hᴇʀʀᴀᴍɪᴇɴᴛᴀs 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎ _!enable restrict_
├ׁ̟̇❍✎ _!disable restrict_
├ׁ̟̇❍✎ _!enable autoread_
├ׁ̟̇❍✎ _!disable autoread_
├ׁ̟̇❍✎ _!enable antispam_
├ׁ̟̇❍✎ _!disable antispam_
├ׁ̟̇❍✎ _!enable anticall_
├ׁ̟̇❍✎ _!disable anticall_
├ׁ̟̇❍✎ _!enable modoia_
├ׁ̟̇❍✎ _!disable modoia_
├ׁ̟̇❍✎ _!enable audios_bot_
├ׁ̟̇❍✎ _!disable audios_bot_
├ׁ̟̇❍✎ _!enable antiprivado_
├ׁ̟̇❍✎ _!disable antiprivado_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Jᴜᴇɢᴏs 」
├━─━─━─≪≪✠≫≫─━─━─━╯
┃🔥 _!menujuegos_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇ 「 Aᴄᴛɪᴠᴀʀ ᴏ ᴅᴇsᴀᴄᴛɪᴠᴀʀ 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎ _!enable *welcome*_
├ׁ̟̇❍✎ _!disable *welcome*_
├ׁ̟̇❍✎ _!enable *modohorny*_
├ׁ̟̇❍✎ _!disable *modohorny*_
├ׁ̟̇❍✎ _!enable *antilink*_
├ׁ̟̇❍✎ _!disable *antilink*_
├ׁ̟̇❍✎ _!enable *antilink2*_
├ׁ̟̇❍✎ _!disable *antilink2*_
├ׁ̟̇❍✎ _!enable *juegos*_
├ׁ̟̇❍✎ _!disable *juegos*_
├ׁ̟̇❍✎ _!enable *detect*_
├ׁ̟̇❍✎ _!disable *detect*_
├ׁ̟̇❍✎ _!enable *audios*_
├ׁ̟̇❍✎ _!disable *audios*_
├ׁ̟̇❍✎ _!enable *autosticker*_
├ׁ̟̇❍✎ _!disable *autosticker*_
├ׁ̟̇❍✎ _!enable *antiviewonce*_
├ׁ̟̇❍✎ _!disable *antiviewonce*_
├ׁ̟̇❍✎ _!enable *antitoxic*_
├ׁ̟̇❍✎ _!disable *antitoxic*_
├ׁ̟̇❍✎ _!enable *antitraba*_
├ׁ̟̇❍✎ _!disable *antitraba*_
├ׁ̟̇❍✎ _!enable *antiarabes*_
├ׁ̟̇❍✎ _!disable *antiarabes*_
├ׁ̟̇❍✎ _!enable *modoadmin*_
├ׁ̟̇❍✎ _!disable *modoadmin*_
├ׁ̟̇❍✎ _!enable *antidelete*_
├ׁ̟̇❍✎ _!disable *antidelete*_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Rᴇᴘᴏʀᴛᴀʀ ᴇʀʀᴏʀᴇs 」
├━─━─━─≪≪✠≫≫─━─━─━╯
┃🌹 _!reporte *<texto>*_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Dᴇsᴄᴀʀɢᴀs 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎ _!instagram *<enlace / link / url>*_
├ׁ̟̇❍✎ _!mediafire *<enlace / link / url>*_
├ׁ̟̇❍✎ _!gitclone *<enlace / link / url>*_
├ׁ̟̇❍✎ _!gdrive *<enlace / link / url>*_
├ׁ̟̇❍✎ _!tiktok *<enlace / link / url>*_
├ׁ̟̇❍✎ _!tiktokimg *<enlace / link / url>*_
├ׁ̟̇❍✎ _!xnxxdl *<enlace / link / url>*_
├ׁ̟̇❍✎ _!xvideosdl *<enlace / link / url>*_
├ׁ̟̇❍✎ _!twitter *<enlace / link / url>*_
├ׁ̟̇❍✎ _!fb *<enlace / link / url>*_
├ׁ̟̇❍✎ _!ytshort *<enlace / link / url>*_
├ׁ̟̇❍✎ _!ytmp3 *<enlace / link / url>*_
├ׁ̟̇❍✎ _!ytmp4 *<enlace / link / url>*_
├ׁ̟̇❍✎ _!ytmp3doc *<enlace / link / url>*_
├ׁ̟̇❍✎ _!ytmp4doc *<enlace / link / url>*_
├ׁ̟̇❍✎ _!videodoc *<enlace / link / url>*_
├ׁ̟̇❍✎ _!dapk2 *<enlace / link / url>*_
├ׁ̟̇❍✎ _!stickerpack *<enlace / link / url>*_
├ׁ̟̇❍✎ _!play *<texto>*_
├ׁ̟̇❍✎ _!play2 *<texto>*_
├ׁ̟̇❍✎ _!play.1 *<texto>*_
├ׁ̟̇❍✎ _!play.2 *<texto>*_
├ׁ̟̇❍✎ _!playdoc *<texto>*_
├ׁ̟̇❍✎ _!playdoc2 *<texto>*_
├ׁ̟̇❍✎ _!playlist *<texto>*_
├ׁ̟̇❍✎ _!spotify *<texto>*_
├ׁ̟̇❍✎ _!ringtone *<texto>*_
├ׁ̟̇❍✎ _!soundcloud *<texto>*_
├ׁ̟̇❍✎ _!imagen *<texto>*_
├ׁ̟̇❍✎ _!pinterest *<texto>*_
├ׁ̟̇❍✎ _!wallpaper *<texto>*_
├ׁ̟̇❍✎ _!pptiktok *<nombre de usuario>*_
├ׁ̟̇❍✎ _!igstalk *<nombre de usuario>*_
├ׁ̟̇❍✎ _!igstory *<nombre de usuario>*_
├ׁ̟̇❍✎ _!tiktokstalk *<username>*_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Bᴜsᴄᴀᴅᴏʀᴇs 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎ _!githubsearch *<texto>*_
├ׁ̟̇❍✎ _!modapk *<texto>*_
├ׁ̟̇❍✎ _!stickersearch *<texto>*_
├ׁ̟̇❍✎ _!stickersearch2 *<texto>*_
├ׁ̟̇❍✎ _!xnxxsearch *<texto>*_
├ׁ̟̇❍✎ _!animeinfo *<texto>*_
├ׁ̟̇❍✎ _!google *<texto>*_
├ׁ̟̇❍✎ _!letra *<texto>*_
├ׁ̟̇❍✎ _!wikipedia *<texto>*_
├ׁ̟̇❍✎ _!ytsearch *<texto>*_
├ׁ̟̇❍✎ _!playstore *<texto>*_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Gʀᴜᴘᴏs 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎️ _!salir *<admins>*_
├ׁ̟̇❍✎️ _!add *<numero>*_
├ׁ̟̇❍✎️ _!kick *<@tag>*_
├ׁ̟̇❍✎️ _!kick2 *<@tag>*_
├ׁ̟̇❍✎️ _!mute *<@tag>*_
├ׁ̟̇❍✎️ _!unmute *<@tag>*_
├ׁ̟̇❍✎️ _!listanum *<texto>*_
├ׁ̟̇❍✎️ _!kicknum *<texto>*_
├ׁ̟̇❍✎️ _!grupo *<abrir / cerrar>*_
├ׁ̟̇❍✎️ _!grouptime *<opcion> <tiempo>*_
├ׁ̟̇❍✎️ _!promote *<@tag>*_
├ׁ̟̇❍✎️ _!demote *<@tag>*_
├ׁ̟̇❍✎️ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
├ׁ̟̇❍✎️ _!demote *<@tag>*_
├ׁ̟̇❍✎️ _!infogroup_
├ׁ̟̇❍✎️ _!resetlink_
├ׁ̟̇❍✎️ _!link_
├ׁ̟̇❍✎️ _!setname *<texto>*_
├ׁ̟̇❍✎️ _!setdesc *<texto>*_
├ׁ̟̇❍✎️ _!invocar *<texto>*_
├ׁ̟̇❍✎️ _!setwelcome *<texto>*_
├ׁ̟̇❍✎️ _!setbye *<texto>*_
├ׁ̟̇❍✎️ _!hidetag *<texto>*_
├ׁ̟̇❍✎️ _!hidetag *<audio>*_
├ׁ̟̇❍✎️ _!hidetag *<video>*_
├ׁ̟̇❍✎️ _!hidetag *<imagen>*_
├ׁ̟̇❍✎️ _!warn *<@tag>*_
├ׁ̟̇❍✎️ _!unwarn *<@tag>*_
├ׁ̟̇❍✎️ _!listwarn_
├ׁ̟̇❍✎️ _!fantasmas_
├ׁ̟̇❍✎️ _!destraba_
├ׁ̟̇❍✎️ _!setpp *<imagen>*_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Cᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎ _!toanime *<imagen>*_
├ׁ̟̇❍✎ _!togifaud *<video>*_
├ׁ̟̇❍✎ _!toimg *<sticker>*_
├ׁ̟̇❍✎ _!tomp3 *<video>*_
├ׁ̟̇❍✎ _!tomp3 *<nota de voz>*_
├ׁ̟̇❍✎ _!toptt *<video / audio>*_
├ׁ̟̇❍✎ _!tovideo *<sticker>*_
├ׁ̟̇❍✎ _!tourl *<video / imagen / audio>*_
├ׁ̟̇❍✎ _!tts *<idioma> <texto>*_
├ׁ̟̇❍✎ _!tts *<efecto> <texto>*_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Eғᴇᴄᴛᴏs ʏ ʟᴏɢᴏs 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎ _!logos *<efecto> <texto>*_
├ׁ̟̇❍✎ _!logochristmas *<texto>*_
├ׁ̟̇❍✎ _!logocorazon *<texto>*_
├ׁ̟̇❍✎ _!ytcomment *<texto>*_
├ׁ̟̇❍✎ _!hornycard *<@tag>*_
├ׁ̟̇❍✎ _!simpcard *<@tag>*_
├ׁ̟̇❍✎ _!lolice *<@tag>*_
├ׁ̟̇❍✎ _!itssostupid_
├ׁ̟̇❍✎ _!pixelar_
├ׁ̟̇❍✎ _!blur_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Fʀᴀsᴇs ʏ ᴛᴇxᴛᴏs 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎️  _!piropo_
├ׁ̟̇❍✎️  _!consejo_
├ׁ̟̇❍✎️  _!fraseromantica_
├ׁ̟̇❍✎️  _!historiaromantica_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Aɴɪᴍᴇs 」
├━─━─━─≪≪✠≫≫─━─━─━╯
┃🍨 _!menuanimes_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Rᴀɴᴅᴏᴍ 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎ _!kpop *<blackpink / exo / bts>*_
├ׁ̟̇❍✎ _!cristianoronaldo_
├ׁ̟̇❍✎ _!messi_
├ׁ̟̇❍✎ _!cat_
├ׁ̟̇❍✎ _!dog_
├ׁ̟̇❍✎ _!meme_
├ׁ̟̇❍✎ _!itzy_
├ׁ̟̇❍✎ _!blackpink_
├ׁ̟̇❍✎ _!navidad_
├ׁ̟̇❍✎ _!wpmontaña_
├ׁ̟̇❍✎ _!pubg_
├ׁ̟̇❍✎ _!wpgaming_
├ׁ̟̇❍✎ _!wpaesthetic_
├ׁ̟̇❍✎ _!wpaesthetic2_
├ׁ̟̇❍✎ _!wprandom_
├ׁ̟̇❍✎ _!wallhp_
├ׁ̟̇❍✎ _!wpvehiculo_
├ׁ̟̇❍✎ _!wpmoto_
├ׁ̟̇❍✎ _!coffee_
├ׁ̟̇❍✎ _!pentol_
├ׁ̟̇❍✎ _!caricatura_
├ׁ̟̇❍✎ _!ciberespacio_
├ׁ̟̇❍✎ _!technology_
├ׁ̟̇❍✎ _!doraemon_
├ׁ̟̇❍✎ _!hacker_
├ׁ̟̇❍✎ _!planeta_
├ׁ̟̇❍✎ _!randomprofile_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Cᴏᴍᴀɴᴅᴏs +𝟷𝟾 」
├━─━─━─≪≪✠≫≫─━─━─━╯
┃🔥 _!hornymenu_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Aᴜᴅɪᴏs ᴇғᴇᴄᴛᴏs 」
├━─━─━─≪≪✠≫≫─━─━─━╯
┃𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘈 𝘜𝘯𝘢 𝘕𝘰𝘵𝘢 𝘋𝘦 𝘈𝘶𝘥𝘪𝘰
├ׁ̟̇❍✎ _!bass_
├ׁ̟̇❍✎ _!blown_
├ׁ̟̇❍✎ _!deep_
├ׁ̟̇❍✎ _!earrape_
├ׁ̟̇❍✎ _!fast_
├ׁ̟̇❍✎ _!fat_
├ׁ̟̇❍✎ _!nightcore_
├ׁ̟̇❍✎ _!reverse_
├ׁ̟̇❍✎ _!robot_
├ׁ̟̇❍✎ _!slow_
├ׁ̟̇❍✎ _!smooth_
├ׁ̟̇❍✎ _!tupai_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Cʜᴀᴛ ᴀɴᴏɴɪᴍᴏ 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎ _!start_
├ׁ̟̇❍✎ _!next_
├ׁ̟̇❍✎ _!leave_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇    「 Aᴜᴅɪᴏs 」
├━─━─━─≪≪✠≫≫─━─━─━╯
┃📒 _!menuaudios_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇  「 Hᴇʀʀᴀᴍɪᴇɴᴛᴀs 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎ _!inspect *<link wa_gc>*_
├ׁ̟̇❍✎ _!chatgpt *<texto>*_
├ׁ̟̇❍✎ _!delchatgpt_
├ׁ̟̇❍✎ _!gptvoz *<texto>*_
├ׁ̟̇❍✎ _!dall-e *<texto>*_
├ׁ̟̇❍✎ _!spamwa *<numero|texto|cantidad>*_
├ׁ̟̇❍✎ _!tamaño *<cantidad> <imagen / video>*_
├ׁ̟̇❍✎ _!readviewonce *<imagen / video>*_
├ׁ̟̇❍✎ _!clima *<país> <ciudad>*_
├ׁ̟̇❍✎ _!encuesta *<texto1|texto2...>*_
├ׁ̟̇❍✎ _!afk *<motivo>*_
├ׁ̟̇❍✎ _!ocr *<responde a imagen>*_
├ׁ̟̇❍✎ _!hd *<responde a imagen>*_
├ׁ̟̇❍✎ _!acortar *<enlace / link / url>*_
├ׁ̟̇❍✎ _!calc *<operacion math>*_
├ׁ̟̇❍✎ _!del *<mensaje>*_
├ׁ̟̇❍✎ _!whatmusic *<audio>*_
├ׁ̟̇❍✎ _!readqr *<imagen (QR)>*_
├ׁ̟̇❍✎ _!qrcode *<texto>*_
├ׁ̟̇❍✎ _!readmore *<texto1| texto2>*_
├ׁ̟̇❍✎ _!styletext *<texto>*_
├ׁ̟̇❍✎ _!traducir *<texto>*_
├ׁ̟̇❍✎ _!nowa *<numero>*_
├ׁ̟̇❍✎ _!covid *<pais>*_
├ׁ̟̇❍✎ _!horario_
├ׁ̟̇❍✎ _!dropmail_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇       「 R ᴘ ɢ 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎️ _!adventure_
├ׁ̟̇❍✎️ _!cazar_
├ׁ̟̇❍✎️ _!cofre_
├ׁ̟̇❍✎️ _!balance_
├ׁ̟̇❍✎️ _!claim_
├ׁ̟̇❍✎ _!heal_
├ׁ̟̇❍✎️ _!lb_
├ׁ̟̇❍✎️ _!levelup_
├ׁ̟̇❍✎️ _!myns_
├ׁ̟̇❍✎️ _!perfil_
├ׁ̟̇❍✎️ _!work_
├ׁ̟̇❍✎️ _!minar_
├ׁ̟̇❍✎️ _!minar2_
├ׁ̟̇❍✎️ _!buy_
├ׁ̟̇❍✎️ _!buyall_
├ׁ̟̇❍✎️ _!verificar_
├ׁ̟̇❍✎️ _!robar *<cantidad> <@tag>*_
├ׁ̟̇❍✎️ _!transfer *<tipo> <cantidad> <@tag>*_
├ׁ̟̇❍✎️ _!unreg *<numero de serie>*_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇      「 Sᴛɪᴄᴋᴇʀ 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎ _!sticker *<responder a imagen o video>*_
├ׁ̟̇❍✎ _!sticker *<enlace / link / url>*_
├ׁ̟̇❍✎ _!sticker2 *<responder a imagen o video>*_
├ׁ̟̇❍✎ _!sticker2 *<enlace / link / url>*_
├ׁ̟̇❍✎ _!s *<responder a imagen o video>*_
├ׁ̟̇❍✎ _!s *<enlace / link / url>*_
├ׁ̟̇❍✎ _!emojimix *<emoji 1>&<emoji 2>*_
├ׁ̟̇❍✎ _!scircle *<imagen>*_
├ׁ̟̇❍✎ _!sremovebg *<imagen>*_
├ׁ̟̇❍✎ _!semoji *<tipo> <emoji>*_
├ׁ̟̇❍✎ _!qc *<texto>*_
├ׁ̟̇❍✎ _!attp *<texto>*_
├ׁ̟̇❍✎ _!attp2 *<texto>*_
├ׁ̟̇❍✎ _!attp3 *<texto>*_
├ׁ̟̇❍✎ _!ttp *<texto>*_
├ׁ̟̇❍✎ _!ttp2 *<texto>*_
├ׁ̟̇❍✎ _!ttp3 *<texto>*_
├ׁ̟̇❍✎ _!ttp4 *<texto>*_
├ׁ̟̇❍✎ _!ttp5 *<texto>*_
├ׁ̟̇❍✎ _!pat *<@tag>*_
├ׁ̟̇❍✎ _!slap *<@tag>*_
├ׁ̟̇❍✎ _!kiss *<@tag>*_
├ׁ̟̇❍✎ _!dado_
├ׁ̟̇❍✎ _!wm *<packname> <author>*_
├ׁ̟̇❍✎ _!stickermarker *<efecto> <imagen>*_
├ׁ̟̇❍✎ _!stickerfilter *<efecto> <imagen>*_
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
├ׁ̟̇       「 Oᴡɴᴇʀ 」
├━─━─━─≪≪✠≫≫─━─━─━╯
├ׁ̟̇❍✎ !menuowner
*໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🌹⸽⃕  𝕾𝖆𝖐𝖚𝖗𝖆 - 𝕭𝖔𝖙 - 𝕷𝖎𝖙𝖊 - 𝕸𝕯 🌸⸽⃕✰', "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🧩');
  } catch {
    conn.reply(m.chat, '🧸 *Ocurrió Un Error*', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|allmenu|menú|help|menucompleto)$/i;
handler.register = true
export default handler;