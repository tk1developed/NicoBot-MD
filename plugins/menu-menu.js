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

 await conn.sendMessage(m.chat, { react: { text: '🔥', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `${conn.user.jid == global.conn.user.jid ? '' : `𝐒𝐎𝐘 𝐒𝐔𝐁𝐁𝐎𝐓 » 𝐃𝐄: *@${global.conn.user.jid.split`@`[0]}*`}

╭✨️⸽⃕SᴀᴋᴜʀᴀBᴏᴛLɪᴛᴇ-MD🍁⃨፝⃕✰
│𖢭➸ *🧑‍💻Dueño Del Bot:* Diego       
│𖢭➸ *👤Cliente:* ${taguser}
│𖢭➸ *🪁Subbot De:* ${(conn.user.jid == global.conn.user.jid ? '' : `@${global.conn.user.jid.split`@`[0]}`) || 'No Soy Subbot'}
│𖢭➸ *⏰️Tiempo Activo:* ${uptime}
│𖢭➸ *💻Usuarios Reg:* ${rtotalreg}
│𖢭➸ *🗃Usuarios Totales:* ${rtotal}
│𖢭➸ *📅Fecha:* ${date} 
│𖢭➸ *🧭Versión Actual:* ${vs}
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *INFO USER* ━━─╮
│𖢭➸ *🔥 Registrado:* ${user.registered === true ? '✅' : '❌ _#verificar_'}
│𖢭➸ *🎖Nivel:* ${level}
│𖢭➸ *🧰Experiencia:* ${exp}
│𖢭➸ *⚓️Rango:* ${role}
│𖢭➸ *💎Diamantes:* ${limit}
│𖢭➸ *👾SakuCoins:* ${money}
│𖢭➸ *🪙Tokens:* ${joincount}
│𖢭➸ *🎟Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
╰━━━━━━━✦✗✦━━━━━━━━
${readMore}
╭─━━ *SOLUCIONES* ━━─╮
│𖢭➸ 🧭 Mensajes en espera
│𖢭➸ 🧭 _${usedPrefix}fixmsgespera_
│𖢭➸ 🧭 Mensajes en espera (owner)
│𖢭➸ 🧭 _${usedPrefix}dsowner_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *INFO - BOT* ━━─╮
│𖢭➸ 🌻 _${usedPrefix}botreglas_
│𖢭➸ 🌻 _${usedPrefix}instalarbot_
│𖢭➸ 🌻 _${usedPrefix}terminosycondiciones_
│𖢭➸ 🌻 _${usedPrefix}grupos_
│𖢭➸ 🌻 _${usedPrefix}sakurita_
│𖢭➸ 🌻 _${usedPrefix}antiguo_
│𖢭➸ 🌻 _${usedPrefix}estado_
│𖢭➸ 🌻 _${usedPrefix}infobot_
│𖢭➸ 🌻 _${usedPrefix}speedtest_
│𖢭➸ 🌻 _${usedPrefix}donar_
│𖢭➸ 🌻 _${usedPrefix}owner_
│𖢭➸ 🌻 _${usedPrefix}script_
│𖢭➸ 🌻 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *BOT A TU GRUPO* ━━─╮
│𖢭➸ 🙀 _${usedPrefix}join *<enlace / link / url>*_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *SER SUBBOT* ━━─╮
│𖢭➸ 💻 _${usedPrefix}serbot_
│𖢭➸ 💻 _${usedPrefix}deletebot_
│𖢭➸ 💻 _${usedPrefix}token_
│𖢭➸ 💻 _${usedPrefix}stop_
│𖢭➸ 💻 _${usedPrefix}bots_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *HERRAMIENTAS* ━━─╮
│𖢭➸ 🛠 _${usedPrefix}enable restrict_
│𖢭➸ 🛠 _${usedPrefix}disable restrict_
│𖢭➸ 🛠 _${usedPrefix}enable autoread_
│𖢭➸ 🛠 _${usedPrefix}disable autoread_
│𖢭➸ 🛠 _${usedPrefix}enable antispam_
│𖢭➸ 🛠 _${usedPrefix}disable antispam_
│𖢭➸ 🛠 _${usedPrefix}enable anticall_
│𖢭➸ 🛠 _${usedPrefix}disable anticall_
│𖢭➸ 🛠 _${usedPrefix}enable modoia_
│𖢭➸ 🛠 _${usedPrefix}disable modoia_
│𖢭➸ 🛠 _${usedPrefix}enable audios_bot_
│𖢭➸ 🛠 _${usedPrefix}disable audios_bot_
│𖢭➸ 🛠 _${usedPrefix}enable antiprivado_
│𖢭➸ 🛠 _${usedPrefix}disable antiprivado_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *DIVERSIONES/JUEGOS* ━━─╮
│𖢭➸ 🔥 _${usedPrefix}karolg_
│𖢭➸ 🔥 _${usedPrefix}love_
│𖢭➸ 🔥 _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
│𖢭➸ 🔥 _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
│𖢭➸ 🔥 _${usedPrefix}ppt *<papel / tijera /piedra>*_
│𖢭➸ 🔥 _${usedPrefix}prostituto *<nombre / @tag>*_
│𖢭➸ 🔥 _${usedPrefix}prostituta *<nombre / @tag>*_
│𖢭➸ 🔥 _${usedPrefix}gay2 *<nombre / @tag>*_
│𖢭➸ 🔥 _${usedPrefix}lesbiana *<nombre / @tag>*_
│𖢭➸ 🔥 _${usedPrefix}pajero *<nombre / @tag>*_
│𖢭➸ 🔥 _${usedPrefix}pajera *<nombre / @tag>*_
│𖢭➸ 🔥 _${usedPrefix}follar *<nombre / @tag>*_
│𖢭➸ 🔥 _${usedPrefix}puto *<nombre / @tag>*_
│𖢭➸ 🔥 _${usedPrefix}puta *<nombre / @tag>*_
│𖢭➸ 🔥 _${usedPrefix}manco *<nombre / @tag>*_
│𖢭➸ 🔥 _${usedPrefix}manca *<nombre / @tag>*_
│𖢭➸ 🔥 _${usedPrefix}rata *<nombre / @tag>*_
│𖢭➸ 🔥 _${usedPrefix}love *<nombre / @tag>*_
│𖢭➸ 🔥 _${usedPrefix}doxear *<nombre / @tag>*_
│𖢭➸ 🔥 _${usedPrefix}pregunta *<texto>*_
│𖢭➸ 🔥 _${usedPrefix}suitpvp *<@tag>*_
│𖢭➸ 🔥 _${usedPrefix}slot *<apuesta>*_
│𖢭➸ 🔥 _${usedPrefix}ttt *<nombre sala>*_
│𖢭➸ 🔥 _${usedPrefix}delttt_
│𖢭➸ 🔥 _${usedPrefix}acertijo_
│𖢭➸ 🔥 _${usedPrefix}personalidad *<nombre / @tag>*_
│𖢭➸ 🔥 _${usedPrefix}simi *<texto>*_
│𖢭➸ 🔥 _${usedPrefix}top *<texto>*_
│𖢭➸ 🔥 _${usedPrefix}topgays_
│𖢭➸ 🔥 _${usedPrefix}topotakus_
│𖢭➸ 🔥 _${usedPrefix}formarpareja_
│𖢭➸ 🔥 _${usedPrefix}verdad_
│𖢭➸ 🔥 _${usedPrefix}reto_
│𖢭➸ 🔥 _${usedPrefix}cancion_
│𖢭➸ 🔥 _${usedPrefix}pista_
│𖢭➸ 🔥 _${usedPrefix}akinator_
│𖢭➸ 🔥 _${usedPrefix}wordfind_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *ENABLE/DISABLE* ━━─╮
│𖢭➸ 💧 _${usedPrefix}enable *welcome*_
│𖢭➸ 💧 _${usedPrefix}disable *welcome*_
│𖢭➸ 💧 _${usedPrefix}enable *modohorny*_
│𖢭➸ 💧 _${usedPrefix}disable *modohorny*_
│𖢭➸ 💧 _${usedPrefix}enable *antilink*_
│𖢭➸ 💧 _${usedPrefix}disable *antilink*_
│𖢭➸ 💧 _${usedPrefix}enable *antilink2*_
│𖢭➸ 💧 _${usedPrefix}disable *antilink2*_
│𖢭➸ 💧 _${usedPrefix}enable *detect*_
│𖢭➸ 💧 _${usedPrefix}disable *detect*_
│𖢭➸ 💧 _${usedPrefix}enable *audios*_
│𖢭➸ 💧 _${usedPrefix}disable *audios*_
│𖢭➸ 💧 _${usedPrefix}enable *autosticker*_
│𖢭➸ 💧 _${usedPrefix}disable *autosticker*_
│𖢭➸ 💧 _${usedPrefix}enable *antiviewonce*_
│𖢭➸ 💧 _${usedPrefix}disable *antiviewonce*_
│𖢭➸ 💧 _${usedPrefix}enable *antitoxic*_
│𖢭➸ 💧 _${usedPrefix}disable *antitoxic*_
│𖢭➸ 💧 _${usedPrefix}enable *antitraba*_
│𖢭➸ 💧 _${usedPrefix}disable *antitraba*_
│𖢭➸ 💧 _${usedPrefix}enable *antiarabes*_
│𖢭➸ 💧 _${usedPrefix}disable *antiarabes*_
│𖢭➸ 💧 _${usedPrefix}enable *modoadmin*_
│𖢭➸ 💧 _${usedPrefix}disable *modoadmin*_
│𖢭➸ 💧 _${usedPrefix}enable *antidelete*_
│𖢭➸ 💧 _${usedPrefix}disable *antidelete*_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *COMANDO REPORTE* ━━─╮
│𖢭➸ 🖥 _${usedPrefix}reporte *<texto>*_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *DESCARGAS* ━━─╮
│𖢭➸ 🛰 _${usedPrefix}instagram *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}mediafire *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}gitclone *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}gdrive *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}tiktok *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}tiktokimg *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}xnxxdl *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}xvideosdl *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}twitter *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}fb *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}ytshort *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}ytmp3 *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}ytmp4 *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}videodoc *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}dapk2 *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}stickerpack *<enlace / link / url>*_
│𖢭➸ 🛰 _${usedPrefix}play *<texto>*_
│𖢭➸ 🛰 _${usedPrefix}play2 *<texto>*_
│𖢭➸ 🛰 _${usedPrefix}play.1 *<texto>*_
│𖢭➸ 🛰 _${usedPrefix}play.2 *<texto>*_
│𖢭➸ 🛰 _${usedPrefix}playdoc *<texto>*_
│𖢭➸ 🛰 _${usedPrefix}playdoc2 *<texto>*_
│𖢭➸b🛰 _${usedPrefix}playlist *<texto>*_
│𖢭➸ 🛰 _${usedPrefix}spotify *<texto>*_
│𖢭➸ 🛰 _${usedPrefix}ringtone *<texto>*_
│𖢭➸ 🛰 _${usedPrefix}soundcloud *<texto>*_
│𖢭➸ 🛰 _${usedPrefix}imagen *<texto>*_
│𖢭➸ 🛰 _${usedPrefix}pinterest *<texto>*_
│𖢭➸ 🛰 _${usedPrefix}wallpaper *<texto>*_
│𖢭➸ 🛰 _${usedPrefix}pptiktok *<nombre de usuario>*_
│𖢭➸ 🛰 _${usedPrefix}igstalk *<nombre de usuario>*_
│𖢭➸ 🛰 _${usedPrefix}igstory *<nombre de usuario>*_
│𖢭➸ 🛰 _${usedPrefix}tiktokstalk *<username>*_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *BUSCADORES* ━━─╮
│𖢭➸ 🔎 _${usedPrefix}githubsearch *<texto>*_
│𖢭➸ 🔎 _${usedPrefix}pelisplus *<texto>*_
│𖢭➸ 🔎 _${usedPrefix}modapk *<texto>*_
│𖢭➸ 🔎 _${usedPrefix}stickersearch *<texto>*_
│𖢭➸ 🔎 _${usedPrefix}stickersearch2 *<texto>*_
│𖢭➸ 🔎 _${usedPrefix}xnxxsearch *<texto>*_
│𖢭➸ 🔎 _${usedPrefix}animeinfo *<texto>*_
│𖢭➸ 🔎 _${usedPrefix}google *<texto>*_
│𖢭➸ 🔎 _${usedPrefix}letra *<texto>*_
│𖢭➸ 🔎 _${usedPrefix}wikipedia *<texto>*_
│𖢭➸ 🔎 _${usedPrefix}ytsearch *<texto>*_
│𖢭➸ 🔎 _${usedPrefix}playstore *<texto>*_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *GRUPO AJUSTES* ━━─╮
│𖢭➸ ⚙️ _${usedPrefix}salir *<admins>*_
│𖢭➸ ⚙️ _${usedPrefix}add *<numero>*_
│𖢭➸ ⚙️ _${usedPrefix}kick *<@tag>*_
│𖢭➸ ⚙️ _${usedPrefix}kick2 *<@tag>*_
│𖢭➸ ⚙️ _${usedPrefix}listanum *<texto>*_
│𖢭➸ ⚙️ _${usedPrefix}kicknum *<texto>*_
│𖢭➸ ⚙️ _${usedPrefix}grupo *<abrir / cerrar>*_
│𖢭➸ ⚙️ _${usedPrefix}grouptime *<opcion> <tiempo>*_
│𖢭➸ ⚙️ _${usedPrefix}promote *<@tag>*_
│𖢭➸ ⚙️ _${usedPrefix}demote *<@tag>*_
│𖢭➸ ⚙️ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
│𖢭➸ ⚙️ _${usedPrefix}demote *<@tag>*_
│𖢭➸ ⚙️ _${usedPrefix}infogroup_
│𖢭➸ ⚙️ _${usedPrefix}resetlink_
│𖢭➸ ⚙️ _${usedPrefix}link_
│𖢭➸ ⚙️ _${usedPrefix}setname *<texto>*_
│𖢭➸ ⚙️ _${usedPrefix}setdesc *<texto>*_
│𖢭➸ ⚙️ _${usedPrefix}invocar *<texto>*_
│𖢭➸ ⚙️ _${usedPrefix}setwelcome *<texto>*_
│𖢭➸ ⚙️ _${usedPrefix}setbye *<texto>*_
│𖢭➸ ⚙️ _${usedPrefix}hidetag *<texto>*_
│𖢭➸ ⚙️ _${usedPrefix}hidetag *<audio>*_
│𖢭➸ ⚙️ _${usedPrefix}hidetag *<video>*_
│𖢭➸ ⚙️ _${usedPrefix}hidetag *<imagen>*_
│𖢭➸ ⚙️ _${usedPrefix}warn *<@tag>*_
│𖢭➸ ⚙️ _${usedPrefix}unwarn *<@tag>*_
│𖢭➸ ⚙️ _${usedPrefix}listwarn_
│𖢭➸ ⚙️ _${usedPrefix}fantasmas_
│𖢭➸ ⚙️ _${usedPrefix}destraba_
│𖢭➸ ⚙️ _${usedPrefix}setpp *<imagen>*_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *CONVERTIDORES* ━━─╮
│𖢭➸ 🧶 _${usedPrefix}toanime *<imagen>*_
│𖢭➸ 🧶 _${usedPrefix}togifaud *<video>*_
│𖢭➸ 🧶 _${usedPrefix}toimg *<sticker>*_
│𖢭➸ 🧶 _${usedPrefix}tomp3 *<video>*_
│𖢭➸ 🧶 _${usedPrefix}tomp3 *<nota de voz>*_
│𖢭➸ 🧶 _${usedPrefix}toptt *<video / audio>*_
│𖢭➸ 🧶 _${usedPrefix}tovideo *<sticker>*_
│𖢭➸ 🧶 _${usedPrefix}tourl *<video / imagen / audio>*_
│𖢭➸ 🧶 _${usedPrefix}tts *<idioma> <texto>*_
│𖢭➸ 🧶 _${usedPrefix}tts *<efecto> <texto>*_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *LOGOS Y EFECTOS* ━━─╮
│𖢭➸ 🖼 _${usedPrefix}logos *<efecto> <texto>*_
│𖢭➸ 🖼 _${usedPrefix}logochristmas *<texto>*_
│𖢭➸ 🖼 _${usedPrefix}logocorazon *<texto>*_
│𖢭➸ 🖼 _${usedPrefix}ytcomment *<texto>*_
│𖢭➸ 🖼 _${usedPrefix}hornycard *<@tag>*_
│𖢭➸ 🖼 _${usedPrefix}simpcard *<@tag>*_
│𖢭➸ 🖼 _${usedPrefix}lolice *<@tag>*_
│𖢭➸ 🖼 _${usedPrefix}itssostupid_
│𖢭➸ 🖼 _${usedPrefix}pixelar_
│𖢭➸ 🖼 _${usedPrefix}blur_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *PIROPOS LOVE* ━━─╮
│𖢭➸ ✏️  _${usedPrefix}piropo_
│𖢭➸ ✏️  _${usedPrefix}consejo_
│𖢭➸ ✏️  _${usedPrefix}fraseromantica_
│𖢭➸ ✏️  _${usedPrefix}historiaromantica_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *RAND ANIMES* ━━─╮
│𖢭➸ 📓 _${usedPrefix}menuanimes_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *IMAGEN RANDOM* ━━─╮
│𖢭➸ 📺 _${usedPrefix}kpop *<blackpink / exo / bts>*_
│𖢭➸ 📺 _${usedPrefix}cristianoronaldo_
│𖢭➸ 📺 _${usedPrefix}messi_
│𖢭➸ 📺 _${usedPrefix}cat_
│𖢭➸ 📺 _${usedPrefix}dog_
│𖢭➸ 📺 _${usedPrefix}meme_
│𖢭➸ 📺 _${usedPrefix}itzy_
│𖢭➸ 📺 _${usedPrefix}blackpink_
│𖢭➸ 📺 _${usedPrefix}navidad_
│𖢭➸ 📺 _${usedPrefix}wpmontaña_
│𖢭➸ 📺 _${usedPrefix}pubg_
│𖢭➸ 📺 _${usedPrefix}wpgaming_
│𖢭➸ 📺 _${usedPrefix}wpaesthetic_
│𖢭➸ 📺 _${usedPrefix}wpaesthetic2_
│𖢭➸ 📺 _${usedPrefix}wprandom_
│𖢭➸ 📺 _${usedPrefix}wallhp_
│𖢭➸ 📺 _${usedPrefix}wpvehiculo_
│𖢭➸ 📺 _${usedPrefix}wpmoto_
│𖢭➸ 📺 _${usedPrefix}coffee_
│𖢭➸ 📺 _${usedPrefix}pentol_
│𖢭➸ 📺 _${usedPrefix}caricatura_
│𖢭➸ 📺 _${usedPrefix}ciberespacio_
│𖢭➸ 📺 _${usedPrefix}technology_
│𖢭➸ 📺 _${usedPrefix}doraemon_
│𖢭➸ 📺 _${usedPrefix}hacker_
│𖢭➸ 📺 _${usedPrefix}planeta_
│𖢭➸ 📺 _${usedPrefix}randomprofile_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *COMANDO +18* ━━─╮
│𖢭➸ 📒 _${usedPrefix}hornymenu_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *EFECTOS DE AUDIOS* ━━─╮
│𖢭➸ 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘈 𝘜𝘯𝘢 𝘕𝘰𝘵𝘢 𝘋𝘦 𝘈𝘶𝘥𝘪𝘰
│𖢭➸ 🔊 _${usedPrefix}bass_
│𖢭➸ 🔊 _${usedPrefix}blown_
│𖢭➸ 🔊 _${usedPrefix}deep_
│𖢭➸ 🔊 _${usedPrefix}earrape_
│𖢭➸ 🔊 _${usedPrefix}fast_
│𖢭➸ 🔊 _${usedPrefix}fat_
│𖢭➸ 🔊 _${usedPrefix}nightcore_
│𖢭➸ 🔊 _${usedPrefix}reverse_
│𖢭➸ 🔊 _${usedPrefix}robot_
│𖢭➸ 🔊 _${usedPrefix}slow_
│𖢭➸ 🔊 _${usedPrefix}smooth_
│𖢭➸ 🔊 _${usedPrefix}tupai_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *CHAT ANONIMO* ━━─╮
│𖢭➸ ✔️ _${usedPrefix}start_
│𖢭➸ ✔️ _${usedPrefix}next_
│𖢭➸ ✔️ _${usedPrefix}leave_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *MENU AUDIOS* ━━─╮
│𖢭➸ 📒 _${usedPrefix}menuaudios_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *UTILIDADES* ━━─╮
│𖢭➸ ⚓️ _${usedPrefix}inspect *<link wa_gc>*_
│𖢭➸ ⚓️ _${usedPrefix}chatgpt *<texto>*_
│𖢭➸ ⚓️ _${usedPrefix}delchatgpt_
│𖢭➸ ⚓️ _${usedPrefix}gptvoz *<texto>*_
│𖢭➸ ⚓️ _${usedPrefix}dall-e *<texto>*_
│𖢭➸ ⚓️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
│𖢭➸ ⚓️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
│𖢭➸ ⚓️ _${usedPrefix}readviewonce *<imagen / video>*_
│𖢭➸ ⚓️ _${usedPrefix}clima *<país> <ciudad>*_
│𖢭➸ ⚓️ _${usedPrefix}encuesta *<texto1|texto2...>*_
│𖢭➸ ⚓️ _${usedPrefix}afk *<motivo>*_
│𖢭➸ ⚓️ _${usedPrefix}ocr *<responde a imagen>*_
│𖢭➸ ⚓️ _${usedPrefix}hd *<responde a imagen>*_
│𖢭➸ ⚓️ _${usedPrefix}acortar *<enlace / link / url>*_
│𖢭➸ ⚓️ _${usedPrefix}calc *<operacion math>*_
│𖢭➸ ⚓️ _${usedPrefix}del *<mensaje>*_
│𖢭➸ ⚓️ _${usedPrefix}whatmusic *<audio>*_
│𖢭➸ ⚓️ _${usedPrefix}readqr *<imagen (QR)>*_
│𖢭➸ ⚓️ _${usedPrefix}qrcode *<texto>*_
│𖢭➸ ⚓️ _${usedPrefix}readmore *<texto1| texto2>*_
│𖢭➸ ⚓️ _${usedPrefix}styletext *<texto>*_
│𖢭➸ ⚓️ _${usedPrefix}traducir *<texto>*_
│𖢭➸ ⚓️ _${usedPrefix}nowa *<numero>*_
│𖢭➸ ⚓️ _${usedPrefix}covid *<pais>*_
│𖢭➸ ⚓️ _${usedPrefix}horario_
│𖢭➸ ⚓ _${usedPrefix}dropmail_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *LIMITES/ECONOMIAS* ━━─╮
│𖢭➸ 🌿 _${usedPrefix}adventure_
│𖢭➸ 🌿 _${usedPrefix}cazar_
│𖢭➸ 🌿 _${usedPrefix}cofre_
│𖢭➸ 🌿 _${usedPrefix}balance_
│𖢭➸ 🌿 _${usedPrefix}claim_
│𖢭➸ 🌿 _${usedPrefix}heal_
│𖢭➸ 🌿 _${usedPrefix}lb_
│𖢭➸ 🌿 _${usedPrefix}levelup_
│𖢭➸ 🌿 _${usedPrefix}myns_
│𖢭➸ 🌿 _${usedPrefix}perfil_
│𖢭➸ 🌿 _${usedPrefix}work_
│𖢭➸ 🌿 _${usedPrefix}minar_
│𖢭➸ 🌿 _${usedPrefix}minar2_
│𖢭➸ 🌿 _${usedPrefix}buy_
│𖢭➸ 🌿 _${usedPrefix}buyall_
│𖢭➸ 🌿 _${usedPrefix}verificar_
│𖢭➸ 🌿 _${usedPrefix}robar *<cantidad> <@tag>*_
│𖢭➸ 🌿 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
│𖢭➸ 🌿 _${usedPrefix}unreg *<numero de serie>*_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *STICKERS* ━━─╮
│𖢭➸ 🌺 _${usedPrefix}sticker *<responder a imagen o video>*_
│𖢭➸ 🌺 _${usedPrefix}sticker *<enlace / link / url>*_
│𖢭➸ 🌺 _${usedPrefix}sticker2 *<responder a imagen o video>*_
│𖢭➸ 🌺 _${usedPrefix}sticker2 *<enlace / link / url>*_
│𖢭➸ 🌺 _${usedPrefix}s *<responder a imagen o video>*_
│𖢭➸ 🌺 _${usedPrefix}s *<enlace / link / url>*_
│𖢭➸ 🌺 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
│𖢭➸ 🌺 _${usedPrefix}scircle *<imagen>*_
│𖢭➸ 🌺 _${usedPrefix}sremovebg *<imagen>*_
│𖢭➸ 🌺 _${usedPrefix}semoji *<tipo> <emoji>*_
│𖢭➸ 🌺 _${usedPrefix}qc *<texto>*_
│𖢭➸ 🌺 _${usedPrefix}attp *<texto>*_
│𖢭➸ 🌺 _${usedPrefix}attp2 *<texto>*_
│𖢭➸ 🌺 _${usedPrefix}attp3 *<texto>*_
│𖢭➸ 🌺 _${usedPrefix}ttp *<texto>*_
│𖢭➸ 🌺 _${usedPrefix}ttp2 *<texto>*_
│𖢭➸ 🌺 _${usedPrefix}ttp3 *<texto>*_
│𖢭➸ 🌺 _${usedPrefix}ttp4 *<texto>*_
│𖢭➸ 🌺 _${usedPrefix}ttp5 *<texto>*_
│𖢭➸ 🌺 _${usedPrefix}pat *<@tag>*_
│𖢭➸ 🌺 _${usedPrefix}slap *<@tag>*_
│𖢭➸ 🌺 _${usedPrefix}kiss *<@tag>*_
│𖢭➸ 🌺 _${usedPrefix}dado_
│𖢭➸ 🌺 _${usedPrefix}wm *<packname> <author>*_
│𖢭➸ 🌺 _${usedPrefix}stickermarker *<efecto> <imagen>*_
│𖢭➸ 🌺 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
╰━━━━━━━✦✗✦━━━━━━━━

╭─━━ *FUNCIÓN-CREADOR* ━━─╮
│𖢭➸ 🐢 > *<funcion>*
│𖢭➸ 🐢 => *<funcion>*
│𖢭➸ 🐢 $ *<funcion>*
│𖢭➸ 🐢 _${usedPrefix}reunion_ *<texto>*
│𖢭➸ 🐢 _${usedPrefix}setprefix *<prefijo>*_
│𖢭➸ 🐢 _${usedPrefix}resetprefix_
│𖢭➸ 🐢 _${usedPrefix}autoadmin_
│𖢭➸ 🐢 _${usedPrefix}grouplist_
│𖢭➸ 🐢 _${usedPrefix}chetar_
│𖢭➸ 🐢 _${usedPrefix}leavegc_
│𖢭➸ 🐢 _${usedPrefix}cajafuerte_
│𖢭➸ 🐢 _${usedPrefix}blocklist_
│𖢭➸ 🐢 _${usedPrefix}addowner *<@tag / numero>*_
│𖢭➸ 🐢 _${usedPrefix}delowner *<@tag / numero>*_
│𖢭➸ 🐢 _${usedPrefix}block *<@tag / numero>*_
│𖢭➸ 🐢 _${usedPrefix}unblock *<@tag / numero>*_
│𖢭➸ 🐢 _${usedPrefix}enable *restrict*_
│𖢭➸ 🐢 _${usedPrefix}disable *restrict*_
│𖢭➸ 🐢 _${usedPrefix}enable *autoread*_
│𖢭➸ 🐢 _${usedPrefix}disable *autoread*_
│𖢭➸ 🐢 _${usedPrefix}enable *public*_
│𖢭➸ 🐢 _${usedPrefix}disable *public*_
│𖢭➸ 🐢 _${usedPrefix}enable *pconly*_
│𖢭➸ 🐢 _${usedPrefix}disable *pconly*_
│𖢭➸ 🐢 _${usedPrefix}enable *gconly*_
│𖢭➸ 🐢 _${usedPrefix}disable *gconly*_
│𖢭➸ 🐢 _${usedPrefix}enable *anticall*_
│𖢭➸ 🐢 _${usedPrefix}disable *anticall*_
│𖢭➸ 🐢 _${usedPrefix}enable *antiprivado*_
│𖢭➸ 🐢 _${usedPrefix}disable *antiprivado*_
│𖢭➸ 🐢 _${usedPrefix}enable *antispam*_
│𖢭➸ 🐢 _${usedPrefix}disable *antispam*_
│𖢭➸ 🐢 _${usedPrefix}msg *<texto>*_
│𖢭➸ 🐢 _${usedPrefix}banchat_
│𖢭➸ 🐢 _${usedPrefix}unbanchat_
│𖢭➸ 🐢 _${usedPrefix}resetuser *<@tag>*_
│𖢭➸ 🐢 _${usedPrefix}banuser *<@tag>*_
│𖢭➸ 🐢 _${usedPrefix}unbanuser *<@tag>*_
│𖢭➸ 🐢 _${usedPrefix}dardiamantes *<@tag> <cantidad>*_
│𖢭➸ 🐢 _${usedPrefix}añadirxp *<@tag> <cantidad>*_
│𖢭➸ 🐢 _${usedPrefix}banuser *<@tag>*_
│𖢭➸ 🐢 _${usedPrefix}bc *<texto>*_
│𖢭➸ 🐢 _${usedPrefix}bcchats *<texto>*_
│𖢭➸ 🐢 _${usedPrefix}bcgc *<texto>*_
│𖢭➸ 🐢 _${usedPrefix}bcgc2 *<audio>*_
│𖢭➸ 🐢 _${usedPrefix}bcgc2 *<video>*_
│𖢭➸ 🐢 _${usedPrefix}bcgc2 *<imagen>*_
│𖢭➸ 🐢 _${usedPrefix}bcbot *<texto>*_
│𖢭➸ 🐢 _${usedPrefix}cleartpm_
│𖢭➸ 🐢 _${usedPrefix}restart_
│𖢭➸ 🐢 _${usedPrefix}update_
│𖢭➸ 🐢 _${usedPrefix}banlist_
│𖢭➸ 🐢 _${usedPrefix}addprem *<@tag> <tiempo>*_
│𖢭➸ 🐢 _${usedPrefix}addprem2 *<@tag> <tiempo>*_
│𖢭➸ 🐢 _${usedPrefix}addprem3 *<@tag> <tiempo>*_
│𖢭➸ 🐢 _${usedPrefix}addprem4 *<@tag> <tiempo>*_
│𖢭➸ 🐢 _${usedPrefix}delprem *<@tag>*_
│𖢭➸ 🐢 _${usedPrefix}listcmd_
│𖢭➸ 🐢 _${usedPrefix}setppbot *<responder a imagen>*_
│𖢭➸ 🐢 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
│𖢭➸ 🐢 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
│𖢭➸ 🐢 _${usedPrefix}saveimage_
│𖢭➸ 🐢 _${usedPrefix}viewimage_
╰━━━━━━━✦✗✦━━━━━━━━`.trim();     if (m.isGroup) { 
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