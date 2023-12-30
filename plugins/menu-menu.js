import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `${conn.user.jid == global.conn.user.jid ? '' : `➪𝖲𝖡-𝖲𝖴𝖡 𝖡𝖮𝖳: @${global.conn.user.jid.split`@`[0]}`}

╭═══〘✯✯✯✯✯✯✯✯✯〙═══╮
║    ◉— *𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭 - 𝐌𝐃* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ola, ${taguser}*
╰═══╡✯✯✯✯✯✯✯✯✯╞════╯

*╔════❖•ೋ° °ೋ•❖════╗*
┃*👑Creador:* Diego
┃ *✨️Numero Owner:* +573013114854
┃🌵 *Bot Oficial:* +51935499065
┃🕑 *Tiempo activo:* ${uptime}
┃📂 *Usuarios regs:* ${rtotalreg}
┃🗂 *Usuarios totales:* ${rtotal}
┃🗓 ${date}
*╚════❖•ೋ° °ೋ•❖════╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃  INFO - USER
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ *🎖️ Nivel:* ${level}
┃ *🧰 Experiencia:* ${exp}
┃ *⚓ Rango:* ${role}
┃ *💎 Diamantes:* ${limit}
┃ *🌵 SakuCoins:* ${money}
┃ *🪙 Tokens:* ${joincount}
┃ *🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
*╚═══❖•ೋ° °ೋ•❖═══╝*
${readMore}
*╔═══❖•ೋ° °ೋ•❖═══╗* 
┃SOLUCIONES
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ Mensajes en espera
┃↻ _${usedPrefix}fixmsgespera_
┃ඬ⃟ ✨ Mensajes en espera (owner)
┃↺ _${usedPrefix}dsowner_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃FUNCIÓN SUB BOT
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}serbot --code_
┃ඬ⃟ ⚡ _${usedPrefix}serbot_
┃ඬ⃟ ⚡ _${usedPrefix}deletebot_
┃ඬ⃟ ⚡ _${usedPrefix}token_
┃ඬ⃟ ⚡ _${usedPrefix}stop_
┃ඬ⃟ ⚡ _${usedPrefix}bots_
┃ඬ⃟ ⚡ _${usedPrefix}terminosycondiciones_
┃ඬ⃟ ⚡ _${usedPrefix}grupos_
┃ඬ⃟ ⚡ _${usedPrefix}estado_
┃ඬ⃟ ⚡ _${usedPrefix}infobot_
┃ඬ⃟ ⚡ _${usedPrefix}speedtest_
┃ඬ⃟ ⚡ _${usedPrefix}donar_
┃ඬ⃟ ⚡ _${usedPrefix}owner_
┃ඬ⃟ ⚡ _${usedPrefix}script_
┃ඬ⃟ ⚡ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃BOT A TU GRUPO
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ _${usedPrefix}join *<enlace / link / url>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃COMANDOS 
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}enable restrict_
┃ඬ⃟ ⚡ _${usedPrefix}disable restrict_
┃ඬ⃟ ⚡ _${usedPrefix}enable autoread_
┃ඬ⃟ ⚡ _${usedPrefix}disable autoread_
┃ඬ⃟ ⚡ _${usedPrefix}enable antispam_
┃ඬ⃟ ⚡ _${usedPrefix}disable antispam_
┃ඬ⃟ ⚡ _${usedPrefix}enable anticall_
┃ඬ⃟ ⚡ _${usedPrefix}disable anticall_
┃ඬ⃟ ⚡ _${usedPrefix}enable modoia_
┃ඬ⃟ ⚡ _${usedPrefix}disable modoia_
┃ඬ⃟ ⚡ _${usedPrefix}enable audios_bot_
┃ඬ⃟ ⚡ _${usedPrefix}disable audios_bot_
┃ඬ⃟ ⚡ _${usedPrefix}enable antiprivado_
┃ඬ⃟ ⚡ _${usedPrefix}disable antiprivado_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃ DIVERSIONES
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┃ඬ⃟ ✨ _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
┃ඬ⃟ ✨ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┃ඬ⃟ ✨ _${usedPrefix}prostituto *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}prostituta *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}gay2 *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}lesbiana *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}pajero *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}pajera *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}follar *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}puto *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}puta *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}manco *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}manca *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}rata *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}love *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}doxear *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}pregunta *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}suitpvp *<@tag>*_
┃ඬ⃟ ✨  _${usedPrefix}slot *<apuesta>*_
┃ඬ⃟ ✨ _${usedPrefix}ttt *<nombre sala>*_
┃ඬ⃟ ✨ _${usedPrefix}delttt_
┃ඬ⃟ ✨ _${usedPrefix}acertijo_
┃ඬ⃟ ✨ _${usedPrefix}personalidad *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}simi *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}top *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}topgays_
┃ඬ⃟ ✨ _${usedPrefix}topotakus_
┃ඬ⃟ ✨ _${usedPrefix}formarpareja_
┃ඬ⃟ ✨ _${usedPrefix}verdad_
┃ඬ⃟ ✨ _${usedPrefix}reto_
┃ඬ⃟ ✨ _${usedPrefix}cancion_
┃ඬ⃟ ✨ _${usedPrefix}pista_
┃ඬ⃟ ✨ _${usedPrefix}akinator_
┃ඬ⃟ ✨ _${usedPrefix}wordfind_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃FUNCIÓN ON/OFF
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}enable *welcome*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *welcome*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *modohorny*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *modohorny*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *antilink*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *antilink*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *antilink2*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *antilink2*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *detect*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *detect*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *audios*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *audios*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *autosticker*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *autosticker*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *antiviewonce*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *antiviewonce*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *antitoxic*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *antitoxic*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *antitraba*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *antitraba*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *antiarabes*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *antiarabes*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *modoadmin*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *modoadmin*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *antidelete*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *antidelete*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃REPORTAR - ERROR
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ _${usedPrefix}reporte *<texto>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃OPCIÓN - DESCARGA
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}instagram *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}mediafire *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}gitclone *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}gdrive *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}tiktok *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}tiktokimg *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}xnxxdl *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}xvideosdl *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}twitter *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}fb *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}ytshort *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}ytmp3 *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}ytmp4 *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}videodoc *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}dapk2 *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}stickerpack *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}play *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}play2 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}play.1 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}play.2 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}playdoc *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}playdoc2 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}playlist *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}spotify *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}ringtone *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}soundcloud *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}imagen *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}pinterest *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}wallpaper *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}pptiktok *<nombre de usuario>*_
┃ඬ⃟ ⚡ _${usedPrefix}igstalk *<nombre de usuario>*_
┃ඬ⃟ ⚡ _${usedPrefix}igstory *<nombre de usuario>*_
┃ඬ⃟ ⚡ _${usedPrefix}tiktokstalk *<username>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃BUSCADOR
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ _${usedPrefix}githubsearch *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}pelisplus *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}modapk *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}stickersearch *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}stickersearch2 *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}xnxxsearch *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}animeinfo *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}google *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}letra *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}wikipedia *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}ytsearch *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}playstore *<texto>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃CONFIG - GRUPOS
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}salir *<admins>*_
┃ඬ⃟ ⚡ _${usedPrefix}add *<numero>*_
┃ඬ⃟ ⚡ _${usedPrefix}kick *<@tag>*_
┃ඬ⃟ ⚡ _${usedPrefix}kick2 *<@tag>*_
┃ඬ⃟ ⚡ _${usedPrefix}listanum *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}kicknum *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}grupo *<abrir / cerrar>*_
┃ඬ⃟ ⚡ _${usedPrefix}grouptime *<opcion> <tiempo>*_
┃ඬ⃟ ⚡ _${usedPrefix}promote *<@tag>*_
┃ඬ⃟ ⚡ _${usedPrefix}demote *<@tag>*_
┃ඬ⃟ ⚡ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┃ඬ⃟ ⚡ _${usedPrefix}demote *<@tag>*_
┃ඬ⃟ ⚡ _${usedPrefix}infogroup_
┃ඬ⃟ ⚡ _${usedPrefix}resetlink_
┃ඬ⃟ ⚡ _${usedPrefix}link_
┃ඬ⃟ ⚡ _${usedPrefix}setname *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}setdesc *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}invocar *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}setwelcome *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}setbye *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}hidetag *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}hidetag *<audio>*_
┃ඬ⃟ ⚡ _${usedPrefix}hidetag *<video>*_
┃ඬ⃟ ⚡ _${usedPrefix}hidetag *<imagen>*_
┃ඬ⃟ ⚡ _${usedPrefix}warn *<@tag>*_
┃ඬ⃟ ⚡ _${usedPrefix}unwarn *<@tag>*_
┃ඬ⃟ ⚡ _${usedPrefix}listwarn_
┃ඬ⃟ ⚡ _${usedPrefix}fantasmas_
┃ඬ⃟ ⚡ _${usedPrefix}destraba_
┃ඬ⃟ ⚡ _${usedPrefix}setpp *<imagen>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃FUNCIÓN CÓNVERTIR
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ _${usedPrefix}toanime *<imagen>*_
┃ඬ⃟ ✨ _${usedPrefix}togifaud *<video>*_
┃ඬ⃟ ✨ _${usedPrefix}toimg *<sticker>*_
┃ඬ⃟ ✨ _${usedPrefix}tomp3 *<video>*_
┃ඬ⃟ ✨ _${usedPrefix}tomp3 *<nota de voz>*_
┃ඬ⃟ ✨ _${usedPrefix}toptt *<video / audio>*_
┃ඬ⃟ ✨ _${usedPrefix}tovideo *<sticker>*_
┃ඬ⃟ ✨ _${usedPrefix}tourl *<video / imagen / audio>*_
┃ඬ⃟ ✨ _${usedPrefix}tts *<idioma> <texto>*_
┃ඬ⃟ ✨ _${usedPrefix}tts *<efecto> <texto>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃LOGOS & EFECTOS
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}logos *<efecto> <texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}logochristmas *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}logocorazon *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}ytcomment *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}hornycard *<@tag>*_
┃ඬ⃟ ⚡ _${usedPrefix}simpcard *<@tag>*_
┃ඬ⃟ ⚡ _${usedPrefix}lolice *<@tag>*_
┃ඬ⃟ ⚡ _${usedPrefix}itssostupid_
┃ඬ⃟ ⚡ _${usedPrefix}pixelar_
┃ඬ⃟ ⚡ _${usedPrefix}blur_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃ FRACES - HISTORIAS
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ _${usedPrefix}piropo_
┃ඬ⃟ ✨ _${usedPrefix}consejo_
┃ඬ⃟ ✨ _${usedPrefix}fraseromantica_
┃ඬ⃟ ✨ _${usedPrefix}historiaromantica_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃ FUNCIÓN ANIME
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}menuanimes_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃ALEATORIO/EXTRA
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}kpop *<blackpink / exo / bts>*_
┃ඬ⃟ ✨ _${usedPrefix}cristianoronaldo_
┃ඬ⃟ ✨ _${usedPrefix}messi_
┃ඬ⃟ ✨ _${usedPrefix}cat_
┃ඬ⃟ ✨ _${usedPrefix}dog_
┃ඬ⃟ ✨ _${usedPrefix}meme_
┃ඬ⃟ ✨ _${usedPrefix}itzy_
┃ඬ⃟ ✨ _${usedPrefix}blackpink_
┃ඬ⃟ ✨ _${usedPrefix}navidad_
┃ඬ⃟ ✨ _${usedPrefix}wpmontaña_
┃ඬ⃟ ✨ _${usedPrefix}pubg_
┃ඬ⃟ ✨ _${usedPrefix}wpgaming_
┃ඬ⃟ ✨ _${usedPrefix}wpaesthetic_
┃ඬ⃟ ✨ _${usedPrefix}wpaesthetic2_
┃ඬ⃟ ✨ _${usedPrefix}wprandom_
┃ඬ⃟ ✨ _${usedPrefix}wallhp_
┃ඬ⃟ ✨ _${usedPrefix}wpvehiculo_
┃ඬ⃟ ✨ _${usedPrefix}wpmoto_
┃ඬ⃟ ✨ _${usedPrefix}coffee_
┃ඬ⃟ ✨ _${usedPrefix}pentol_
┃ඬ⃟ ✨ _${usedPrefix}caricatura_
┃ඬ⃟ ✨ _${usedPrefix}ciberespacio_
┃ඬ⃟ ✨ _${usedPrefix}technology_
┃ඬ⃟ ✨ _${usedPrefix}doraemon_
┃ඬ⃟ ✨ _${usedPrefix}hacker_
┃ඬ⃟ ✨ _${usedPrefix}planeta_
┃ඬ⃟ ✨ _${usedPrefix}randomprofile_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃FÚNCIONES +18
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}labiblia_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃EFECTOS DE AUDIOS
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘈 𝘜𝘯𝘢 𝘕𝘰𝘵𝘢 𝘋𝘦 𝘈𝘶𝘥𝘪𝘰
┃ඬ⃟ ✨ _${usedPrefix}bass_
┃ඬ⃟ ✨ _${usedPrefix}blown_
┃ඬ⃟ ✨ _${usedPrefix}deep_
┃ඬ⃟ ✨ _${usedPrefix}earrape_
┃ඬ⃟ ✨ _${usedPrefix}fast_
┃ඬ⃟ ✨ _${usedPrefix}fat_
┃ඬ⃟ ✨ _${usedPrefix}nightcore_
┃ඬ⃟ ✨ _${usedPrefix}reverse_
┃ඬ⃟ ✨ _${usedPrefix}robot_
┃ඬ⃟ ✨ _${usedPrefix}slow_
┃ඬ⃟ ✨ _${usedPrefix}smooth_
┃ඬ⃟ ✨ _${usedPrefix}tupai_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃ CHAT ANONIMO
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}start_
┃ඬ⃟ ⚡ _${usedPrefix}next_
┃ඬ⃟ ⚡ _${usedPrefix}leave_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃ SONIDOS
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ _${usedPrefix}menuaudios_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃UTILIDADES
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}inspect *<link wa_gc>*_
┃ඬ⃟ ⚡ _${usedPrefix}chatgpt *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}delchatgpt_
┃ඬ⃟ ⚡ _${usedPrefix}gptvoz *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}dall-e *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┃ඬ⃟ ⚡ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┃ඬ⃟ ⚡ _${usedPrefix}readviewonce *<imagen / video>*_
┃ඬ⃟ ⚡ _${usedPrefix}clima *<país> <ciudad>*_
┃ඬ⃟ ⚡ _${usedPrefix}encuesta *<texto1|texto2...>*_
┃ඬ⃟ ⚡ _${usedPrefix}afk *<motivo>*_
┃ඬ⃟ ⚡ _${usedPrefix}ocr *<responde a imagen>*_
┃ඬ⃟ ⚡ _${usedPrefix}hd *<responde a imagen>*_
┃ඬ⃟ ⚡ _${usedPrefix}acortar *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}calc *<operacion math>*_
┃ඬ⃟ ⚡ _${usedPrefix}del *<mensaje>*_
┃ඬ⃟ ⚡ _${usedPrefix}whatmusic *<audio>*_
┃ඬ⃟ ⚡ _${usedPrefix}readqr *<imagen (QR)>*_
┃ඬ⃟ ⚡ _${usedPrefix}qrcode *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}readmore *<texto1| texto2>*_
┃ඬ⃟ ⚡ _${usedPrefix}styletext *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}traducir *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}nowa *<numero>*_
┃ඬ⃟ ⚡ _${usedPrefix}covid *<pais>*_
┃ඬ⃟ ⚡ _${usedPrefix}horario_
┃ඬ⃟ ⚡ _${usedPrefix}dropmail_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃LIMITES-ECONOMIA
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ _${usedPrefix}adventure_
┃ඬ⃟ ✨ _${usedPrefix}cazar_
┃ඬ⃟ ✨ _${usedPrefix}cofre_
┃ඬ⃟ ✨ _${usedPrefix}balance_
┃ඬ⃟ ✨ _${usedPrefix}claim_
┃ඬ⃟ ✨ _${usedPrefix}heal_
┃ඬ⃟ ✨ _${usedPrefix}lb_
┃ඬ⃟ ✨ _${usedPrefix}levelup_
┃ඬ⃟ ✨ _${usedPrefix}myns_
┃ඬ⃟ ✨ _${usedPrefix}perfil_
┃ඬ⃟ ✨ _${usedPrefix}work_
┃ඬ⃟ ✨ _${usedPrefix}minar_
┃ඬ⃟ ✨ _${usedPrefix}minar2_
┃ඬ⃟ ✨ _${usedPrefix}buy_
┃ඬ⃟ ✨ _${usedPrefix}buyall_
┃ඬ⃟ ✨ _${usedPrefix}verificar_
┃ඬ⃟ ✨ _${usedPrefix}robar *<cantidad> <@tag>*_
┃ඬ⃟ ✨ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┃ඬ⃟ ✨ _${usedPrefix}unreg *<numero de serie>*_
**╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃FUNCIÓN STIKERS
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}sticker *<responder a imagen o video>*_
┃ඬ⃟ ⚡ _${usedPrefix}sticker *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}sticker2 *<responder a imagen o video>*_
┃ඬ⃟ ⚡ _${usedPrefix}sticker2 *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}s *<responder a imagen o video>*_
┃ඬ⃟ ⚡ _${usedPrefix}s *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┃ඬ⃟ ⚡ _${usedPrefix}scircle *<imagen>*_
┃ඬ⃟ ⚡ _${usedPrefix}sremovebg *<imagen>*_
┃ඬ⃟ ⚡ _${usedPrefix}semoji *<tipo> <emoji>*_
┃ඬ⃟ ⚡ _${usedPrefix}qc *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}attp *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}attp2 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}attp3 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}ttp *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}ttp2 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}ttp3 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}ttp4 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}ttp5 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}pat *<@tag>*_
┃ඬ⃟ ⚡ _${usedPrefix}slap *<@tag>*_
┃ඬ⃟ ⚡ _${usedPrefix}kiss *<@tag>*_
┃ඬ⃟ ⚡ _${usedPrefix}dado_
┃ඬ⃟ ⚡ _${usedPrefix}wm *<packname> <author>*_
┃ඬ⃟ ⚡ _${usedPrefix}stickermarker *<efecto> <imagen>*_
┃ඬ⃟ ⚡ _${usedPrefix}stickerfilter *<efecto> <imagen>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃FUNCIÓN - CREADOR
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨  > *<funcion>*
┃ඬ⃟ ✨ => *<funcion>*
┃ඬ⃟ ✨ $ *<funcion>*
┃ඬ⃟ ✨ _${usedPrefix}setprefix *<prefijo>*_
┃ඬ⃟ ✨ _${usedPrefix}resetprefix_
┃ඬ⃟ ✨ _${usedPrefix}autoadmin_
┃ඬ⃟ ✨ _${usedPrefix}grouplist_
┃ඬ⃟ ✨ _${usedPrefix}chetar_
┃ඬ⃟ ✨ _${usedPrefix}leavegc_
┃ඬ⃟ ✨ _${usedPrefix}cajafuerte_
┃ඬ⃟ ✨ _${usedPrefix}blocklist_
┃ඬ⃟ ✨ _${usedPrefix}addowner *<@tag / numero>*_
┃ඬ⃟ ✨ _${usedPrefix}delowner *<@tag / numero>*_
┃ඬ⃟ ✨ _${usedPrefix}block *<@tag / numero>*_
┃ඬ⃟ ✨ _${usedPrefix}unblock *<@tag / numero>*_
┃ඬ⃟ ✨ _${usedPrefix}enable *restrict*_
┃ඬ⃟ ✨ _${usedPrefix}disable *restrict*_
┃ඬ⃟ ✨ _${usedPrefix}enable *autoread*_
┃ඬ⃟ ✨ _${usedPrefix}disable *autoread*_
┃ඬ⃟ ✨ _${usedPrefix}enable *public*_
┃ඬ⃟ ✨ _${usedPrefix}disable *public*_
┃ඬ⃟ ✨ _${usedPrefix}enable *pconly*_
┃ඬ⃟ ✨ _${usedPrefix}disable *pconly*_
┃ඬ⃟ ✨ _${usedPrefix}enable *gconly*_
┃ඬ⃟ ✨ _${usedPrefix}disable *gconly*_
┃ඬ⃟ ✨ _${usedPrefix}enable *anticall*_
┃ඬ⃟ ✨ _${usedPrefix}disable *anticall*_
┃ඬ⃟ ✨ _${usedPrefix}enable *antiprivado*_
┃ඬ⃟ ✨ _${usedPrefix}disable *antiprivado*_
┃ඬ⃟ ✨ _${usedPrefix}enable *modejadibot*_
┃ඬ⃟ ✨ _${usedPrefix}disable *modejadibot*_
┃ඬ⃟ ✨ _${usedPrefix}enable *audios_bot*_
┃ඬ⃟ ✨ _${usedPrefix}disable *audios_bot*_
┃ඬ⃟ ✨ _${usedPrefix}enable *antispam*_
┃ඬ⃟ ✨ _${usedPrefix}disable *antispam*_
┃ඬ⃟ ✨ _${usedPrefix}msg *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}banchat_
┃ඬ⃟ ✨ _${usedPrefix}unbanchat_
┃ඬ⃟ ✨ _${usedPrefix}resetuser *<@tag>*_
┃ඬ⃟ ✨ _${usedPrefix}banuser *<@tag>*_
┃ඬ⃟ ✨ _${usedPrefix}unbanuser *<@tag>*_
┃ඬ⃟ ✨ _${usedPrefix}dardiamantes *<@tag> <cantidad>*_
┃ඬ⃟ ✨ _${usedPrefix}añadirxp *<@tag> <cantidad>*_
┃ඬ⃟ ✨ _${usedPrefix}banuser *<@tag>*_
┃ඬ⃟ ✨ _${usedPrefix}bc *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}bcchats *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}bcgc *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}bcgc2 *<audio>*_
┃ඬ⃟ ✨ _${usedPrefix}bcgc2 *<video>*_
┃ඬ⃟ ✨ _${usedPrefix}bcgc2 *<imagen>*_
┃ඬ⃟ ✨ _${usedPrefix}bcbot *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}cleartpm_
┃ඬ⃟ ✨ _${usedPrefix}restart_
┃ඬ⃟ ✨ _${usedPrefix}update_
┃ඬ⃟ ✨ _${usedPrefix}banlist_
┃ඬ⃟ ✨ _${usedPrefix}addprem *<@tag> <tiempo>*_
┃ඬ⃟ ✨ _${usedPrefix}addprem2 *<@tag> <tiempo>*_
┃ඬ⃟ ✨ _${usedPrefix}addprem3 *<@tag> <tiempo>*_
┃ඬ⃟ ✨ _${usedPrefix}addprem4 *<@tag> <tiempo>*_
┃ඬ⃟ ✨ _${usedPrefix}delprem *<@tag>*_
┃ඬ⃟ ✨ _${usedPrefix}listcmd_
┃ඬ⃟ ✨ _${usedPrefix}setppbot *<responder a imagen>*_
┃ඬ⃟ ✨ _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┃ඬ⃟ ✨ _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┃ඬ⃟ ✨ _${usedPrefix}saveimage_
┃ඬ⃟ ✨ _${usedPrefix}viewimage_
*╚═══❖•ೋ° °ೋ•❖═══╝*`.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}