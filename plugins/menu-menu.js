import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '*!𝗣𝗿𝗼𝘅𝗶𝗺𝗮𝗺𝗲𝗻𝘁𝗲 𝗦𝗲 𝗘𝗻𝘃𝗶𝗮𝗿𝗮́ 𝗘𝗹 𝗠𝗲𝗻𝘂́.*',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋🏻 ¡𝐇𝐨𝐥𝐚!', body: '🦋 𝖫𝗂𝗇𝖽𝗈 𝖠𝗆𝖺𝗇𝖾𝖼𝖾𝗋 🌤', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🍓');
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } })
  let txt =`╭✨️⸽⃕𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯🍁⃨፝⃕✰
┋ 🕊️𝐃𝐮𝐞𝐧̃𝐨 𝐃𝐞𝐥 𝐁𝐨𝐭: Diego
┋ 🍓𝐁𝐨𝐭 𝐎𝐟𝐢𝐜𝐢𝐚𝐥: +57 310 6909511
┋ 🍀𝐒𝐨𝐲 𝐒𝐮𝐛𝐛𝐨𝐭 𝐃𝐞: ${(conn.user.jid == global.conn.user.jid ? '' : `@${global.conn.user.jid.split`@`[0]}`) || 'No Soy Subbot'}
┋ 🌿𝐃𝐚𝐭𝐞: ${date} 
┋ 🦋𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐃𝐞 𝐒𝐚𝐤𝐮𝐫𝐚: ${vs}
╰◆━━━━━━◆❃◆━━━━━━◆

╭∴━━━ *INFO USER* ━━━∴╮
┃✣➸ 🐢𝐋𝐞𝐯𝐞𝐥𝐮𝐩: ${level}
┃✣➸ 🌱𝐄𝐱𝐩: ${exp}
┃✣➸ 🍁𝐑𝐚𝐧𝐠𝐨: ${role}
┃✣➸ 💎𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞: ${limit}
┃✣➸ 🌻𝐒𝐚𝐤𝐮𝐂𝐨𝐢𝐧𝐬: ${money}
┃✣➸ 🌼𝐌𝐨𝐧𝐞𝐝𝐚𝐬: ${joincount}
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *SOLUCIONES* ━━━∴╮
┃✣➸ 🐈 Mensajes en espera
┃✣➸ 🐈 _#fixmsgespera_
┃✣➸ 🐈 Mensajes en espera (owner)
┃✣➸ 🐈 _#dsowner_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *INFO BOT* ━━━∴╮
┃✣➸ 🌻 _#velocidad_
┃✣➸ 🌻 _#botreglas_
┃✣➸ 🌻 _#instalarbot_
┃✣➸ 🌻 _#terminosycondiciones_
┃✣➸ 🌻 _#grupos_
┃✣➸ 🌻 _#estado_
┃✣➸ 🌻 _#infobot_
┃✣➸ 🌻 _#speedtest_
┃✣➸ 🌻 _#donar_
┃✣➸ 🌻 _#owner_
┃✣➸ 🌻 _#colaboradores_
┃✣➸ 🌻 _#script_
┃✣➸ 🌻 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *BOT A TU GRUPO* ━━━∴╮
┃✣➸ 🍓 _#join *<enlace / link / url>*_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *SER SUBBOT* ━━━∴╮
┃✣➸ 💻 _#botclone_
┃✣➸ 💻 _#deletebot_
┃✣➸ 💻 _#token_
┃✣➸ 💻 _#stop_
┃✣➸ 💻 _#bots_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *HERRAMIENTAS* ━━━∴╮
┃✣➸ 🛠 _#enable restrict_
┃✣➸ 🛠 _#disable restrict_
┃✣➸ 🛠 _#enable autoread_
┃✣➸ 🛠 _#disable autoread_
┃✣➸ 🛠 _#enable antispam_
┃✣➸ 🛠 _#disable antispam_
┃✣➸ 🛠 _#enable anticall_
┃✣➸ 🛠 _#disable anticall_
┃✣➸ 🛠 _#enable modoia_
┃✣➸ 🛠 _#disable modoia_
┃✣➸ 🛠 _#enable audios_bot_
┃✣➸ 🛠 _#disable audios_bot_
┃✣➸ 🛠 _#enable antiprivado_
┃✣➸ 🛠 _#disable antiprivado_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *DIVERSIONES* ━━━∴╮
┃✣➸ 🔥 _#sakurita_
┃✣➸ 🔥 _#anuel_
┃✣➸ 🔥 _#karolg_
┃✣➸ 🔥 _#antiguo_
┃✣➸ 🔥 _#love_
┃✣➸ 🔥 _#mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┃✣➸ 🔥 _#fake *<texto1> <@tag> <texto2>*_
┃✣➸ 🔥 _#ppt *<papel / tijera /piedra>*_
┃✣➸ 🔥 _#prostituto *<nombre / @tag>*_
┃✣➸ 🔥 _#prostituta *<nombre / @tag>*_
┃✣➸ 🔥 _#gay2 *<nombre / @tag>*_
┃✣➸ 🔥 _#lesbiana *<nombre / @tag>*_
┃✣➸ 🔥 _#pajero *<nombre / @tag>*_
┃✣➸ 🔥 _#pajera *<nombre / @tag>*_
┃✣➸ 🔥 _#follar *<nombre / @tag>*_
┃✣➸ 🔥 _#puto *<nombre / @tag>*_
┃✣➸ 🔥 _#puta *<nombre / @tag>*_
┃✣➸ 🔥 _#manco *<nombre / @tag>*_
┃✣➸ 🔥 _#manca *<nombre / @tag>*_
┃✣➸ 🔥 _#rata *<nombre / @tag>*_
┃✣➸ 🔥 _#love *<nombre / @tag>*_
┃✣➸ 🔥 _#doxear *<nombre / @tag>*_
┃✣➸ 🔥 _#pregunta *<texto>*_
┃✣➸ 🔥 _#suitpvp *<@tag>*_
┃✣➸ 🔥 _#slot *<apuesta>*_
┃✣➸ 🔥 _#ttt *<nombre sala>*_
┃✣➸ 🔥 _#delttt_
┃✣➸ 🔥 _#acertijo_
┃✣➸ 🔥 _#personalidad *<nombre / @tag>*_
┃✣➸ 🔥 _#simi *<texto>*_
┃✣➸ 🔥 _#top *<texto>*_
┃✣➸ 🔥 _#topgays_
┃✣➸ 🔥 _#topotakus_
┃✣➸ 🔥 _#formarpareja_
┃✣➸ 🔥 _#verdad_
┃✣➸ 🔥 _#crime_
┃✣➸ 🔥 _#reto_
┃✣➸ 🔥 _#cancion_
┃✣➸ 🔥 _#pista_
┃✣➸ 🔥 _#akinator_
┃✣➸ 🔥 _#wordfind_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *ON/OFF* ━━━∴╮
┃✣➸ ✨️ _#enable *welcome*_
┃✣➸ ✨️ _#disable *welcome*_
┃✣➸ ✨️ _#enable *modohorny*_
┃✣➸ ✨️ _#disable *modohorny*_
┃✣➸ ✨️ _#enable *antilink*_
┃✣➸ ✨️ _#disable *antilink*_
┃✣➸ ✨️ _#enable *antilink2*_
┃✣➸ ✨️ _#disable *antilink2*_
┃✣➸ ✨️ _#enable *detect*_
┃✣➸ ✨️ _#disable *detect*_
┃✣➸ ✨️ _#enable *audios*_
┃✣➸ ✨️ _#disable *audios*_
┃✣➸ ✨️ _#enable *autosticker*_
┃✣➸ ✨️ _#disable *autosticker*_
┃✣➸ ✨️ _#enable *antiviewonce*_
┃✣➸ ✨️ _#disable *antiviewonce*_
┃✣➸ ✨️ _#enable *antitoxic*_
┃✣➸ ✨️ _#disable *antitoxic*_
┃✣➸ ✨️ _#enable *antitraba*_
┃✣➸ ✨️ _#disable *antitraba*_
┃✣➸ ✨️ _#enable *antiarabes*_
┃✣➸ ✨️ _#disable *antiarabes*_
┃✣➸ ✨️ _#enable *modoadmin*_
┃✣➸ ✨️ _#disable *modoadmin*_
┃✣➸ ✨️ _#enable *antidelete*_
┃✣➸ ✨️ _#disable *antidelete*_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *REPORTE* ━━━∴╮
┃✣➸ 🕊️ _#reporte *<texto>*_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *DESCARGAS* ━━━∴╮
┃✣➸ ☂️ _#instagram *<enlace / link / url>*_
┃✣➸ ☂️ _#mediafire *<enlace / link / url>*_
┃✣➸ ☂️ _#gitclone *<enlace / link / url>*_
┃✣➸ ☂️ _#gdrive *<enlace / link / url>*_
┃✣➸ ☂️ _#tiktok *<enlace / link / url>*_
┃✣➸ ☂️ _#tiktokimg *<enlace / link / url>*_
┃✣➸ ☂️ _#xnxxdl *<enlace / link / url>*_
┃✣➸ ☂️ _#xvideosdl *<enlace / link / url>*_
┃✣➸ ☂️ _#twitter *<enlace / link / url>*_
┃✣➸ ☂️ _#fb *<enlace / link / url>*_
┃✣➸ ☂️ _#ytshort *<enlace / link / url>*_
┃✣➸ ☂️ _#ytmp3 *<enlace / link / url>*_
┃✣➸ ☂️ _#ytmp4 *<enlace / link / url>*_
┃✣➸ ☂️ _#ytmp3doc *<enlace / link / url>*_
┃✣➸ ☂️ _#ytmp4doc *<enlace / link / url>*_
┃✣➸ ☂️ _#videodoc *<enlace / link / url>*_
┃✣➸ ☂️ _#dapk2 *<enlace / link / url>*_
┃✣➸ ☂️ _#stickerpack *<enlace / link / url>*_
┃✣➸ ☂️ _#play *<texto>*_
┃✣➸ ☂️ _#play2 *<texto>*_
┃✣➸ ☂️ _#play.1 *<texto>*_
┃✣➸ ☂️ _#play.2 *<texto>*_
┃✣➸ ☂️ _#playdoc *<texto>*_
┃✣➸ ☂️ _#playdoc2 *<texto>*_
┃✣➸ ☂️ _#playlist *<texto>*_
┃✣➸ ☂️ _#spotify *<texto>*_
┃✣➸ ☂️ _#ringtone *<texto>*_
┃✣➸ ☂️ _#soundcloud *<texto>*_
┃✣➸ ☂️ _#imagen *<texto>*_
┃✣➸ ☂️ _#pinterest *<texto>*_
┃✣➸ ☂️ _#wallpaper *<texto>*_
┃✣➸ ☂️ _#pptiktok *<nombre de usuario>*_
┃✣➸ ☂️ _#igstalk *<nombre de usuario>*_
┃✣➸ ☂️ _#igstory *<nombre de usuario>*_
┃✣➸ ☂️ _#tiktokstalk *<username>*_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *BUSCADORES* ━━━∴╮
┃✣➸ 🔎 _#githubsearch *<texto>*_
┃✣➸ 🔎 _#pelisplus *<texto>*_
┃✣➸ 🔎 _#modapk *<texto>*_
┃✣➸ 🔎 _#stickersearch *<texto>*_
┃✣➸ 🔎 _#stickersearch2 *<texto>*_
┃✣➸ 🔎 _#xnxxsearch *<texto>*_
┃✣➸ 🔎 _#animeinfo *<texto>*_
┃✣➸ 🔎 _#google *<texto>*_
┃✣➸ 🔎 _#letra *<texto>*_
┃✣➸ 🔎 _#wikipedia *<texto>*_
┃✣➸ 🔎 _#ytsearch *<texto>*_
┃✣➸ 🔎 _#playstore *<texto>*_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *GRUPO AJUSTES* ━━━∴╮
┃✣➸ ⚙️ _#salir *<admins>*_
┃✣➸ ⚙️ _#add *<numero>*_
┃✣➸ ⚙️ _#kick *<@tag>*_
┃✣➸ ⚙️ _#kick2 *<@tag>*_
┃✣➸ ⚙️ _#listanum *<texto>*_
┃✣➸ ⚙️ _#kicknum *<texto>*_
┃✣➸ ⚙️ _#grupo *<abrir / cerrar>*_
┃✣➸ ⚙️ _#grouptime *<opcion> <tiempo>*_
┃✣➸ ⚙️ _#promote *<@tag>*_
┃✣➸ ⚙️ _#demote *<@tag>*_
┃✣➸ ⚙️ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┃✣➸ ⚙️ _#demote *<@tag>*_
┃✣➸ ⚙️ _#infogroup_
┃✣➸ ⚙️ _#resetlink_
┃✣➸ ⚙️ _#link_
┃✣➸ ⚙️ _#setname *<texto>*_
┃✣➸ ⚙️ _#setdesc *<texto>*_
┃✣➸ ⚙️ _#invocar *<texto>*_
┃✣➸ ⚙️ _#setwelcome *<texto>*_
┃✣➸ ⚙️ _#setbye *<texto>*_
┃✣➸ ⚙️ _#hidetag *<texto>*_
┃✣➸ ⚙️ _#hidetag *<audio>*_
┃✣➸ ⚙️ _#hidetag *<video>*_
┃✣➸ ⚙️ _#hidetag *<imagen>*_
┃✣➸ ⚙️ _#warn *<@tag>*_
┃✣➸ ⚙️ _#unwarn *<@tag>*_
┃✣➸ ⚙️ _#listwarn_
┃✣➸ ⚙️ _#fantasmas_
┃✣➸ ⚙️ _#destraba_
┃✣➸ ⚙️ _#setpp *<imagen>*_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *CONVERTIDORES* ━━━∴╮
┃✣➸ 🐱 _#toanime *<imagen>*_
┃✣➸ 🐱 _#togifaud *<video>*_
┃✣➸ 🐱 _#toimg *<sticker>*_
┃✣➸ 🐱 _#tomp3 *<video>*_
┃✣➸ 🐱 _#tomp3 *<nota de voz>*_
┃✣➸ 🐱 _#toptt *<video / audio>*_
┃✣➸ 🐱 _#tovideo *<sticker>*_
┃✣➸ 🐱 _#tourl *<video / imagen / audio>*_
┃✣➸ 🐱 _#tts *<idioma> <texto>*_
┃✣➸ 🐱 _#tts *<efecto> <texto>*_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *LOGOS Y EFECTOS* ━━━∴╮
┃✣➸ 🦋 _#logos *<efecto> <texto>*_
┃✣➸ 🦋 _#logochristmas *<texto>*_
┃✣➸ 🦋 _#logocorazon *<texto>*_
┃✣➸ 🦋 _#ytcomment *<texto>*_
┃✣➸ 🦋 _#hornycard *<@tag>*_
┃✣➸ 🦋 _#simpcard *<@tag>*_
┃✣➸ 🦋 _#lolice *<@tag>*_
┃✣➸ 🦋 _#itssostupid_
┃✣➸ 🦋 _#pixelar_
┃✣➸ 🦋 _#blur_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *PIROPOS* ━━━∴╮
┃✣➸ ✏️  _#piropo_
┃✣➸ ✏️  _#consejo_
┃✣➸ ✏️  _#fraseromantica_
┃✣➸ ✏️  _#historiaromantica_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *RAND ANIMES* ━━━∴╮
┃✣➸ 📓 _#menuanimes_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *RANDOM* ━━━∴╮
┃✣➸ 🌥 _#kpop *<blackpink / exo / bts>*_
┃✣➸ 🌥 _#cristianoronaldo_
┃✣➸ 🌥 _#messi_
┃✣➸ 🌥 _#cat_
┃✣➸ 🌥 _#dog_
┃✣➸ 🌥 _#meme_
┃✣➸ 🌥 _#itzy_
┃✣➸ 🌥 _#blackpink_
┃✣➸ 🌥 _#navidad_
┃✣➸ 🌥 _#wpmontaña_
┃✣➸ 🌥 _#pubg_
┃✣➸ 🌥 _#wpgaming_
┃✣➸ 🌥 _#wpaesthetic_
┃✣➸ 🌥 _#wpaesthetic2_
┃✣➸ 🌥 _#wprandom_
┃✣➸ 🌥 _#wallhp_
┃✣➸ 🌥 _#wpvehiculo_
┃✣➸ 🌥 _#wpmoto_
┃✣➸ 🌥 _#coffee_
┃✣➸ 🌥 _#pentol_
┃✣➸ 🌥 _#caricatura_
┃✣➸ 🌥 _#ciberespacio_
┃✣➸ 🌥 _#technology_
┃✣➸ 🌥 _#doraemon_
┃✣➸ 🌥 _#hacker_
┃✣➸ 🌥 _#planeta_
┃✣➸ 🌥 _#randomprofile_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *COMANDO +18* ━━━∴╮
┃✣➸ 🌹 _#hornymenu_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *EFECTOS-AUDIOS* ━━━∴╮
┃✣➸ 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘈 𝘜𝘯𝘢 𝘕𝘰𝘵𝘢 𝘋𝘦 𝘈𝘶𝘥𝘪𝘰
┃✣➸ 🔊 _#bass_
┃✣➸ 🔊 _#blown_
┃✣➸ 🔊 _#deep_
┃✣➸ 🔊 _#earrape_
┃✣➸ 🔊 _#fast_
┃✣➸ 🔊 _#fat_
┃✣➸ 🔊 _#nightcore_
┃✣➸ 🔊 _#reverse_
┃✣➸ 🔊 _#robot_
┃✣➸ 🔊 _#slow_
┃✣➸ 🔊 _#smooth_
┃✣➸ 🔊 _#tupai_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *CHAT ANONIMO* ━━━∴╮
┃✣➸ ✔️ _#start_
┃✣➸ ✔️ _#next_
┃✣➸ ✔️ _#leave_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *MENU AUDIOS* ━━━∴╮
┃✣➸ 📒 _#menuaudios_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *UTILIDADES* ━━━∴╮
┃✣➸ 🐢 _#inspect *<link wa_gc>*_
┃✣➸ 🐢 _#chatgpt *<texto>*_
┃✣➸ 🐢 _#delchatgpt_
┃✣➸ 🐢 _#gptvoz *<texto>*_
┃✣➸ 🐢 _#dall-e *<texto>*_
┃✣➸ 🐢 _#spamwa *<numero|texto|cantidad>*_
┃✣➸ 🐢 _#tamaño *<cantidad> <imagen / video>*_
┃✣➸ 🐢 _#readviewonce *<imagen / video>*_
┃✣➸ 🐢 _#clima *<país> <ciudad>*_
┃✣➸ 🐢 _#encuesta *<texto1|texto2...>*_
┃✣➸ 🐢 _#afk *<motivo>*_
┃✣➸ 🐢 _#ocr *<responde a imagen>*_
┃✣➸ 🐢 _#hd *<responde a imagen>*_
┃✣➸ 🐢 _#acortar *<enlace / link / url>*_
┃✣➸ 🐢 _#calc *<operacion math>*_
┃✣➸ 🐢 _#del *<mensaje>*_
┃✣➸ 🐢 _#whatmusic *<audio>*_
┃✣➸ 🐢 _#readqr *<imagen (QR)>*_
┃✣➸ 🐢 _#qrcode *<texto>*_
┃✣➸ 🐢 _#readmore *<texto1| texto2>*_
┃✣➸ 🐢 _#styletext *<texto>*_
┃✣➸ 🐢 _#traducir *<texto>*_
┃✣➸ 🐢 _#nowa *<numero>*_
┃✣➸ 🐢 _#covid *<pais>*_
┃✣➸ 🐢 _#horario_
┃✣➸ 🐢 _#dropmail_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━ *LIMITES/ECONOMIAS* ━━∴╮
┃✣➸ 🌿 _#adventure_
┃✣➸ 🌿 _#cazar_
┃✣➸ 🌿 _#cofre_
┃✣➸ 🌿 _#balance_
┃✣➸ 🌿 _#claim_
┃✣➸ 🌿 _#heal_
┃✣➸ 🌿 _#lb_
┃✣➸ 🌿 _#levelup_
┃✣➸ 🌿 _#myns_
┃✣➸ 🌿 _#perfil_
┃✣➸ 🌿 _#work_
┃✣➸ 🌿 _#minar_
┃✣➸ 🌿 _#minar2_
┃✣➸ 🌿 _#buy_
┃✣➸ 🌿 _#buyall_
┃✣➸ 🌿 _#verificar_
┃✣➸ 🌿 _#robar *<cantidad> <@tag>*_
┃✣➸ 🌿 _#transfer *<tipo> <cantidad> <@tag>*_
┃✣➸ 🌿 _#unreg *<numero de serie>*_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈

╭∴━━━ *STICKERS* ━━━∴╮
┃✣➸ 🌺 _#sticker *<responder a imagen o video>*_
┃✣➸ 🌺 _#sticker *<enlace / link / url>*_
┃✣➸ 🌺 _#sticker2 *<responder a imagen o video>*_
┃✣➸ 🌺 _#sticker2 *<enlace / link / url>*_
┃✣➸ 🌺 _#s *<responder a imagen o video>*_
┃✣➸ 🌺 _#s *<enlace / link / url>*_
┃✣➸ 🌺 _#emojimix *<emoji 1>&<emoji 2>*_
┃✣➸ 🌺 _#scircle *<imagen>*_
┃✣➸ 🌺 _#sremovebg *<imagen>*_
┃✣➸ 🌺 _#semoji *<tipo> <emoji>*_
┃✣➸ 🌺 _#qc *<texto>*_
┃✣➸ 🌺 _#attp *<texto>*_
┃✣➸ 🌺 _#attp2 *<texto>*_
┃✣➸ 🌺 _#attp3 *<texto>*_
┃✣➸ 🌺 _#ttp *<texto>*_
┃✣➸ 🌺 _#ttp2 *<texto>*_
┃✣➸ 🌺 _#ttp3 *<texto>*_
┃✣➸ 🌺 _#ttp4 *<texto>*_
┃✣➸ 🌺 _#ttp5 *<texto>*_
┃✣➸ 🌺 _#pat *<@tag>*_
┃✣➸ 🌺 _#slap *<@tag>*_
┃✣➸ 🌺 _#kiss *<@tag>*_
┃✣➸ 🌺 _#dado_
┃✣➸ 🌺 _#wm *<packname> <author>*_
┃✣➸ 🌺 _#stickermarker *<efecto> <imagen>*_
┃✣➸ 🌺 _#stickerfilter *<efecto> <imagen>*_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈


╭∴━━━ *CREADOR* ━━━∴╮
┃✣➸ 💧 > *<funcion>*
┃✣➸ 💧 => *<funcion>*
┃✣➸ 💧 $ *<funcion>*
┃✣➸ 💧 _#cajafuerte_
┃✣➸ 💧 _#reunion_ *<texto>*
┃✣➸ 💧 _#setprefix *<prefijo>*_
┃✣➸ 💧 _#resetprefix_
┃✣➸ 💧 _#autoadmin_
┃✣➸ 💧 _#grouplist_
┃✣➸ 💧 _#chetar_
┃✣➸ 💧 _#leavegc_
┃✣➸ 💧 _#cajafuerte_
┃✣➸ 💧 _#blocklist_
┃✣➸ 💧 _#addowner *<@tag / numero>*_
┃✣➸ 💧 _#delowner *<@tag / numero>*_
┃✣➸ 💧 _#block *<@tag / numero>*_
┃✣➸ 💧 _#unblock *<@tag / numero>*_
┃✣➸ 💧 _#enable *restrict*_
┃✣➸ 💧 _#disable *restrict*_
┃✣➸ 💧 _#enable *autoread*_
┃✣➸ 💧 _#disable *autoread*_
┃✣➸ 💧 _#enable *public*_
┃✣➸ 💧 _#disable *public*_
┃✣➸ 💧 _#enable *pconly*_
┃✣➸ 💧 _#disable *pconly*_
┃✣➸ 💧 _#enable *gconly*_
┃✣➸ 💧 _#disable *gconly*_
┃✣➸ 💧 _#enable *anticall*_
┃✣➸ 💧 _#disable *anticall*_
┃✣➸ 💧 _#enable *antiprivado*_
┃✣➸ 💧 _#disable *antiprivado*_
┃✣➸ 💧 _#enable *antispam*_
┃✣➸ 💧 _#disable *antispam*_
┃✣➸ 💧 _#msg *<texto>*_
┃✣➸ 💧 _#banchat_
┃✣➸ 💧 _#unbanchat_
┃✣➸ 💧 _#resetuser *<@tag>*_
┃✣➸ 💧 _#banuser *<@tag>*_
┃✣➸ 💧 _#unbanuser *<@tag>*_
┃✣➸ 💧 _#dardiamantes *<@tag> <cantidad>*_
┃✣➸ 💧 _#añadirxp *<@tag> <cantidad>*_
┃✣➸ 💧 _#banuser *<@tag>*_
┃✣➸ 💧 _#bc *<texto>*_
┃✣➸ 💧 _#bcchats *<texto>*_
┃✣➸ 💧 _#bcgc *<texto>*_
┃✣➸ 💧 _#bcgc2 *<audio>*_
┃✣➸ 💧 _#bcgc2 *<video>*_
┃✣➸ 💧 _#bcgc2 *<imagen>*_
┃✣➸ 💧 _#bcbot *<texto>*_
┃✣➸ 💧 _#cleartpm_
┃✣➸ 💧 _#restart_
┃✣➸ 💧 _#update_
┃✣➸ 💧 _#banlist_
┃✣➸ 💧 _#addprem *<@tag> <tiempo>*_
┃✣➸ 💧 _#addprem2 *<@tag> <tiempo>*_
┃✣➸ 💧 _#addprem3 *<@tag> <tiempo>*_
┃✣➸ 💧 _#addprem4 *<@tag> <tiempo>*_
┃✣➸ 💧 _#delprem *<@tag>*_
┃✣➸ 💧 _#listcmd_
┃✣➸ 💧 _#setppbot *<responder a imagen>*_
┃✣➸ 💧 _#addcmd *<texto> <responder a sticker/imagen>*_
┃✣➸ 💧 _#delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┃✣➸ 💧 _#saveimage_
│❢ _#viewimage_
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🍓⸽⃕  𝕾𝖆𝖐𝖚𝖗𝖆 - 𝕭𝖔𝖙 - 𝕷𝖎𝖙𝖊 - 𝕸𝕯 🦋⸽⃕✰', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🔥');
  } catch {
    conn.reply(m.chat, '⚠️ 𝑬𝒍 𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝑻𝒊𝒆𝒏𝒆 𝑼𝒏 𝑬𝒓𝒓𝒐𝒓 𝑪𝒐𝒎𝒖𝒏𝒊𝒒𝒖𝒆𝒍𝒐 𝑨𝒍 𝑪𝒓𝒆𝒂𝒅𝒐𝒓 𝑶 𝑨𝒍 𝑺𝒕𝒂𝒇𝒇.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|allmenu|menucompleto|help|ayuda)$/i;
handler.register = true
export default handler;