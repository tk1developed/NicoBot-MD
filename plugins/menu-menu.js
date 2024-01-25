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

 await m.reply(`😸 Eɴᴠɪᴀɴᴅᴏ Eʟ Mᴇɴᴜ Dᴇʟ Bᴏᴛ, SᴀᴋᴜʀᴀBᴏᴛLɪᴛᴇ-MD....`);

const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `${conn.user.jid == global.conn.user.jid ? '' : `𝐒𝐎𝐘 𝐒𝐔𝐁𝐁𝐎𝐓 » 𝐃𝐄: *@${global.conn.user.jid.split`@`[0]}*`}

╭✨️⸽⃕SᴀᴋᴜʀᴀBᴏᴛLɪᴛᴇ-MD🍁⃨፝⃕✰
⦚𖡸❥ *🧑‍💻Dueño Del Bot:* Diego       
⦚𖡸❥ *👤Cliente:* ${taguser}
⦚𖡸❥ *🧭Bot:* ${packname}
⦚𖡸❥ *🪁Subbot De:* ${(conn.user.jid == global.conn.user.jid ? '' : `@${global.conn.user.jid.split`@`[0]}`) || 'No Soy Subbot'}
⦚𖡸❥ *🔋Bateria:* ${conn.battery ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Cargando...' : '⚡ Desconectado'}` : 'Desconocido'}
⦚𖡸❥ *⚕️Prefijo Usado:* ${usedPrefix}
⦚𖡸❥ *⏰️Tiempo Activo:* ${uptime}
⦚𖡸❥ *💻Usuarios Regs:* ${rtotalreg}
⦚𖡸❥ *🗃Usuarios Totales:* ${rtotal}
⦚𖡸❥ *📅Fecha:* ${date} 
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *INFO USER* ★·.·´¯`·.·★
⦚𖡸❥ *😼 Registrado:* ${user.registered === true ? '✅' : '❌ _#verificar_'}
⦚𖡸❥ *🎖Nivel:* ${level}
⦚𖡸❥ *🧰Experiencia:* ${exp}
⦚𖡸❥ *⚓️Rango:* ${role}
⦚𖡸❥ *💎Diamantes:* ${limit}
⦚𖡸❥ *👾SakuCoins:* ${money}
⦚𖡸❥ *🪙Tokens:* ${joincount}
⦚𖡸❥ *🎟Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
╰• ────── ✾ ────── •
${readMore}
*★·.·´¯`·.·★ *SOLUCIONES* ★·.·´¯`·.·★
⦚𖡸❥ 🧭 Mensajes en espera
⦚𖡸❥ 🧭 _${usedPrefix}fixmsgespera_
⦚𖡸❥ 🧭 Mensajes en espera (owner)
⦚𖡸❥ 🧭 _${usedPrefix}dsowner_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *INFO BOT* ★·.·´¯`·.·★
⦚𖡸❥ 📋 _${usedPrefix}terminosycondiciones_
⦚𖡸❥ 📋 _${usedPrefix}grupos_
⦚𖡸❥ 📋 _${usedPrefix}estado_
⦚𖡸❥ 📋 _${usedPrefix}infobot_
⦚𖡸❥ 📋 _${usedPrefix}speedtest_
⦚𖡸❥ 📋 _${usedPrefix}donar_
⦚𖡸❥ 📋 _${usedPrefix}owner_
⦚𖡸❥ 📋 _${usedPrefix}script_
⦚𖡸❥ 📋 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *BOT A TU GRUPO* ★·.·´¯`·.·★
⦚𖡸❥ 🙀 _${usedPrefix}join *<enlace / link / url>*_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *SER SUBBOT* ★·.·´¯`·.·★
⦚𖡸❥ 💻 _${usedPrefix}serbot_
⦚𖡸❥ 💻 _${usedPrefix}deletebot_
⦚𖡸❥ 💻 _${usedPrefix}token_
⦚𖡸❥ 💻 _${usedPrefix}stop_
⦚𖡸❥ 💻 _${usedPrefix}bots_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *HERRAMIENTAS* ★·.·´¯`·.·★
⦚𖡸❥ 🛠 _${usedPrefix}enable restrict_
⦚𖡸❥ 🛠 _${usedPrefix}disable restrict_
⦚𖡸❥ 🛠 _${usedPrefix}enable autoread_
⦚𖡸❥ 🛠 _${usedPrefix}disable autoread_
⦚𖡸❥ 🛠 _${usedPrefix}enable antispam_
⦚𖡸❥ 🛠 _${usedPrefix}disable antispam_
⦚𖡸❥ 🛠 _${usedPrefix}enable anticall_
⦚𖡸❥ 🛠 _${usedPrefix}disable anticall_
⦚𖡸❥ 🛠 _${usedPrefix}enable modoia_
⦚𖡸❥ 🛠 _${usedPrefix}disable modoia_
⦚𖡸❥ 🛠 _${usedPrefix}enable audios_bot_
⦚𖡸❥ 🛠 _${usedPrefix}disable audios_bot_
⦚𖡸❥ 🛠 _${usedPrefix}enable antiprivado_
⦚𖡸❥ 🛠 _${usedPrefix}disable antiprivado_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *DIVERSIONES* ★·.·´¯`·.·★
⦚𖡸❥ 🌹 _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
⦚𖡸❥ 🌹 _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
⦚𖡸❥ 🌹 _${usedPrefix}ppt *<papel / tijera /piedra>*_
⦚𖡸❥ 🌹 _${usedPrefix}prostituto *<nombre / @tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}prostituta *<nombre / @tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}gay2 *<nombre / @tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}lesbiana *<nombre / @tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}pajero *<nombre / @tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}pajera *<nombre / @tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}follar *<nombre / @tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}puto *<nombre / @tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}puta *<nombre / @tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}manco *<nombre / @tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}manca *<nombre / @tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}rata *<nombre / @tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}love *<nombre / @tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}doxear *<nombre / @tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}pregunta *<texto>*_
⦚𖡸❥ 🌹 _${usedPrefix}suitpvp *<@tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}slot *<apuesta>*_
⦚𖡸❥ 🌹 _${usedPrefix}ttt *<nombre sala>*_
⦚𖡸❥ 🌹 _${usedPrefix}delttt_
⦚𖡸❥ 🌹 _${usedPrefix}acertijo_
⦚𖡸❥ 🌹 _${usedPrefix}personalidad *<nombre / @tag>*_
⦚𖡸❥ 🌹 _${usedPrefix}simi *<texto>*_
⦚𖡸❥ 🌹 _${usedPrefix}top *<texto>*_
⦚𖡸❥ 🌹 _${usedPrefix}topgays_
⦚𖡸❥ 🌹 _${usedPrefix}topotakus_
⦚𖡸❥ 🌹 _${usedPrefix}formarpareja_
⦚𖡸❥ 🌹 _${usedPrefix}verdad_
⦚𖡸❥ 🌹 _${usedPrefix}reto_
⦚𖡸❥ 🌹 _${usedPrefix}cancion_
⦚𖡸❥ 🌹 _${usedPrefix}pista_
⦚𖡸❥ 🌹 _${usedPrefix}akinator_
⦚𖡸❥ 🌹 _${usedPrefix}wordfind_
╰• ────── ✾ ────── •

★·.·´¯`·.·★ *ON/OFF* ★·.·´¯`·.·★
⦚𖡸❥ ✨️ _${usedPrefix}enable *welcome*_
⦚𖡸❥ ✨️ _${usedPrefix}disable *welcome*_
⦚𖡸❥ ✨️ _${usedPrefix}enable *modohorny*_
⦚𖡸❥ ✨️ _${usedPrefix}disable *modohorny*_
⦚𖡸❥ ✨️ _${usedPrefix}enable *antilink*_
⦚𖡸❥ ✨️ _${usedPrefix}disable *antilink*_
⦚𖡸❥ ✨️ _${usedPrefix}enable *antilink2*_
⦚𖡸❥ ✨️ _${usedPrefix}disable *antilink2*_
⦚𖡸❥ ✨️ _${usedPrefix}enable *detect*_
⦚𖡸❥ ✨️ _${usedPrefix}disable *detect*_
⦚𖡸❥ ✨️ _${usedPrefix}enable *audios*_
⦚𖡸❥ ✨️ _${usedPrefix}disable *audios*_
⦚𖡸❥ ✨️ _${usedPrefix}enable *autosticker*_
⦚𖡸❥ ✨️ _${usedPrefix}disable *autosticker*_
⦚𖡸❥ ✨️ _${usedPrefix}enable *antiviewonce*_
⦚𖡸❥ ✨️ _${usedPrefix}disable *antiviewonce*_
⦚𖡸❥ ✨️ _${usedPrefix}enable *antitoxic*_
⦚𖡸❥ ✨️ _${usedPrefix}disable *antitoxic*_
⦚𖡸❥ ✨️ _${usedPrefix}enable *antitraba*_
⦚𖡸❥ ✨️ _${usedPrefix}disable *antitraba*_
⦚𖡸❥ ✨️ _${usedPrefix}enable *antiarabes*_
⦚𖡸❥ ✨️ _${usedPrefix}disable *antiarabes*_
⦚𖡸❥ ✨️ _${usedPrefix}enable *modoadmin*_
⦚𖡸❥ ✨️ _${usedPrefix}disable *modoadmin*_
⦚𖡸❥ ✨️ _${usedPrefix}enable *antidelete*_
⦚𖡸❥ ✨️ _${usedPrefix}disable *antidelete*_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *REPORTE* ★·.·´¯`·.·★
⦚𖡸❥ 🖥 _${usedPrefix}reporte *<texto>*_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *DESCARGAS* ★·.·´¯`·.·★
⦚𖡸❥ 🛰 _${usedPrefix}instagram *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}mediafire *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}gitclone *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}gdrive *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}tiktok *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}tiktokimg *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}xnxxdl *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}xvideosdl *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}twitter *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}fb *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}ytshort *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}ytmp3 *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}ytmp4 *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}videodoc *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}dapk2 *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}stickerpack *<enlace / link / url>*_
⦚𖡸❥ 🛰 _${usedPrefix}play *<texto>*_
⦚𖡸❥ 🛰 _${usedPrefix}play2 *<texto>*_
⦚𖡸❥ 🛰 _${usedPrefix}play.1 *<texto>*_
⦚𖡸❥ 🛰 _${usedPrefix}play.2 *<texto>*_
⦚𖡸❥ 🛰 _${usedPrefix}playdoc *<texto>*_
⦚𖡸❥ 🛰 _${usedPrefix}playdoc2 *<texto>*_
⦚𖡸❥b🛰 _${usedPrefix}playlist *<texto>*_
⦚𖡸❥ 🛰 _${usedPrefix}spotify *<texto>*_
⦚𖡸❥ 🛰 _${usedPrefix}ringtone *<texto>*_
⦚𖡸❥ 🛰 _${usedPrefix}soundcloud *<texto>*_
⦚𖡸❥ 🛰 _${usedPrefix}imagen *<texto>*_
⦚𖡸❥ 🛰 _${usedPrefix}pinterest *<texto>*_
⦚𖡸❥ 🛰 _${usedPrefix}wallpaper *<texto>*_
⦚𖡸❥ 🛰 _${usedPrefix}pptiktok *<nombre de usuario>*_
⦚𖡸❥ 🛰 _${usedPrefix}igstalk *<nombre de usuario>*_
⦚𖡸❥ 🛰 _${usedPrefix}igstory *<nombre de usuario>*_
⦚𖡸❥ 🛰 _${usedPrefix}tiktokstalk *<username>*_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *BUSCADORES* ★·.·´¯`·.·★
⦚𖡸❥ 🔎 _${usedPrefix}githubsearch *<texto>*_
⦚𖡸❥ 🔎 _${usedPrefix}pelisplus *<texto>*_
⦚𖡸❥ 🔎 _${usedPrefix}modapk *<texto>*_
⦚𖡸❥ 🔎 _${usedPrefix}stickersearch *<texto>*_
⦚𖡸❥ 🔎 _${usedPrefix}stickersearch2 *<texto>*_
⦚𖡸❥ 🔎 _${usedPrefix}xnxxsearch *<texto>*_
⦚𖡸❥ 🔎 _${usedPrefix}animeinfo *<texto>*_
⦚𖡸❥ 🔎 _${usedPrefix}google *<texto>*_
⦚𖡸❥ 🔎 _${usedPrefix}letra *<texto>*_
⦚𖡸❥ 🔎 _${usedPrefix}wikipedia *<texto>*_
⦚𖡸❥ 🔎 _${usedPrefix}ytsearch *<texto>*_
⦚𖡸❥ 🔎 _${usedPrefix}playstore *<texto>*_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *GRUPO AJUSTES* ★·.·´¯`·.·★
⦚𖡸❥ ⚙️ _${usedPrefix}salir *<admins>*_
⦚𖡸❥ ⚙️ _${usedPrefix}add *<numero>*_
⦚𖡸❥ ⚙️ _${usedPrefix}kick *<@tag>*_
⦚𖡸❥ ⚙️ _${usedPrefix}kick2 *<@tag>*_
⦚𖡸❥ ⚙️ _${usedPrefix}listanum *<texto>*_
⦚𖡸❥ ⚙️ _${usedPrefix}kicknum *<texto>*_
⦚𖡸❥ ⚙️ _${usedPrefix}grupo *<abrir / cerrar>*_
⦚𖡸❥ ⚙️ _${usedPrefix}grouptime *<opcion> <tiempo>*_
⦚𖡸❥ ⚙️ _${usedPrefix}promote *<@tag>*_
⦚𖡸❥ ⚙️ _${usedPrefix}demote *<@tag>*_
⦚𖡸❥ ⚙️ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
⦚𖡸❥ ⚙️ _${usedPrefix}demote *<@tag>*_
⦚𖡸❥ ⚙️ _${usedPrefix}infogroup_
⦚𖡸❥ ⚙️ _${usedPrefix}resetlink_
⦚𖡸❥ ⚙️ _${usedPrefix}link_
⦚𖡸❥ ⚙️ _${usedPrefix}setname *<texto>*_
⦚𖡸❥ ⚙️ _${usedPrefix}setdesc *<texto>*_
⦚𖡸❥ ⚙️ _${usedPrefix}invocar *<texto>*_
⦚𖡸❥ ⚙️ _${usedPrefix}setwelcome *<texto>*_
⦚𖡸❥ ⚙️ _${usedPrefix}setbye *<texto>*_
⦚𖡸❥ ⚙️ _${usedPrefix}hidetag *<texto>*_
⦚𖡸❥ ⚙️ _${usedPrefix}hidetag *<audio>*_
⦚𖡸❥ ⚙️ _${usedPrefix}hidetag *<video>*_
⦚𖡸❥ ⚙️ _${usedPrefix}hidetag *<imagen>*_
⦚𖡸❥ ⚙️ _${usedPrefix}warn *<@tag>*_
⦚𖡸❥ ⚙️ _${usedPrefix}unwarn *<@tag>*_
⦚𖡸❥ ⚙️ _${usedPrefix}listwarn_
⦚𖡸❥ ⚙️ _${usedPrefix}fantasmas_
⦚𖡸❥ ⚙️ _${usedPrefix}destraba_
⦚𖡸❥ ⚙️ _${usedPrefix}setpp *<imagen>*_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *CONVERTIDORES* ★·.·´¯`·.·★
⦚𖡸❥ 🧶 _${usedPrefix}toanime *<imagen>*_
⦚𖡸❥ 🧶 _${usedPrefix}togifaud *<video>*_
⦚𖡸❥ 🧶 _${usedPrefix}toimg *<sticker>*_
⦚𖡸❥ 🧶 _${usedPrefix}tomp3 *<video>*_
⦚𖡸❥ 🧶 _${usedPrefix}tomp3 *<nota de voz>*_
⦚𖡸❥ 🧶 _${usedPrefix}toptt *<video / audio>*_
⦚𖡸❥ 🧶 _${usedPrefix}tovideo *<sticker>*_
⦚𖡸❥ 🧶 _${usedPrefix}tourl *<video / imagen / audio>*_
⦚𖡸❥ 🧶 _${usedPrefix}tts *<idioma> <texto>*_
⦚𖡸❥ 🧶 _${usedPrefix}tts *<efecto> <texto>*_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *LOGOS Y EFECTOS* ★·.·´¯`·.·★
⦚𖡸❥ 🖼 _${usedPrefix}logos *<efecto> <texto>*_
⦚𖡸❥ 🖼 _${usedPrefix}logochristmas *<texto>*_
⦚𖡸❥ 🖼 _${usedPrefix}logocorazon *<texto>*_
⦚𖡸❥ 🖼 _${usedPrefix}ytcomment *<texto>*_
⦚𖡸❥ 🖼 _${usedPrefix}hornycard *<@tag>*_
⦚𖡸❥ 🖼 _${usedPrefix}simpcard *<@tag>*_
⦚𖡸❥ 🖼 _${usedPrefix}lolice *<@tag>*_
⦚𖡸❥ 🖼 _${usedPrefix}itssostupid_
⦚𖡸❥ 🖼 _${usedPrefix}pixelar_
⦚𖡸❥ 🖼 _${usedPrefix}blur_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *PIROPOS* ★·.·´¯`·.·★
⦚𖡸❥ ✏️  _${usedPrefix}piropo_
⦚𖡸❥ ✏️  _${usedPrefix}consejo_
⦚𖡸❥ ✏️  _${usedPrefix}fraseromantica_
⦚𖡸❥ ✏️  _${usedPrefix}historiaromantica_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *RAND ANIMES* ★·.·´¯`·.·★
⦚𖡸❥ 📓 _${usedPrefix}menuanimes_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *RANDOM* ★·.·´¯`·.·★
⦚𖡸❥ 📺 _${usedPrefix}kpop *<blackpink / exo / bts>*_
⦚𖡸❥ 📺 _${usedPrefix}cristianoronaldo_
⦚𖡸❥ 📺 _${usedPrefix}messi_
⦚𖡸❥ 📺 _${usedPrefix}cat_
⦚𖡸❥ 📺 _${usedPrefix}dog_
⦚𖡸❥ 📺 _${usedPrefix}meme_
⦚𖡸❥ 📺 _${usedPrefix}itzy_
⦚𖡸❥ 📺 _${usedPrefix}blackpink_
⦚𖡸❥ 📺 _${usedPrefix}navidad_
⦚𖡸❥ 📺 _${usedPrefix}wpmontaña_
⦚𖡸❥ 📺 _${usedPrefix}pubg_
⦚𖡸❥ 📺 _${usedPrefix}wpgaming_
⦚𖡸❥ 📺 _${usedPrefix}wpaesthetic_
⦚𖡸❥ 📺 _${usedPrefix}wpaesthetic2_
⦚𖡸❥ 📺 _${usedPrefix}wprandom_
⦚𖡸❥ 📺 _${usedPrefix}wallhp_
⦚𖡸❥ 📺 _${usedPrefix}wpvehiculo_
⦚𖡸❥ 📺 _${usedPrefix}wpmoto_
⦚𖡸❥ 📺 _${usedPrefix}coffee_
⦚𖡸❥ 📺 _${usedPrefix}pentol_
⦚𖡸❥ 📺 _${usedPrefix}caricatura_
⦚𖡸❥ 📺 _${usedPrefix}ciberespacio_
⦚𖡸❥ 📺 _${usedPrefix}technology_
⦚𖡸❥ 📺 _${usedPrefix}doraemon_
⦚𖡸❥ 📺 _${usedPrefix}hacker_
⦚𖡸❥ 📺 _${usedPrefix}planeta_
⦚𖡸❥ 📺 _${usedPrefix}randomprofile_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *COMANDO +18* ★·.·´¯`·.·★
⦚𖡸❥ 📒 _${usedPrefix}hornymenu_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *EFECTOS DE AUDIOS* ★·.·´¯`·.·★
⦚𖡸❥ 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘈 𝘜𝘯𝘢 𝘕𝘰𝘵𝘢 𝘋𝘦 𝘈𝘶𝘥𝘪𝘰
⦚𖡸❥ 🔊 _${usedPrefix}bass_
⦚𖡸❥ 🔊 _${usedPrefix}blown_
⦚𖡸❥ 🔊 _${usedPrefix}deep_
⦚𖡸❥ 🔊 _${usedPrefix}earrape_
⦚𖡸❥ 🔊 _${usedPrefix}fast_
⦚𖡸❥ 🔊 _${usedPrefix}fat_
⦚𖡸❥ 🔊 _${usedPrefix}nightcore_
⦚𖡸❥ 🔊 _${usedPrefix}reverse_
⦚𖡸❥ 🔊 _${usedPrefix}robot_
⦚𖡸❥ 🔊 _${usedPrefix}slow_
⦚𖡸❥ 🔊 _${usedPrefix}smooth_
⦚𖡸❥ 🔊 _${usedPrefix}tupai_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *CHAT ANONIMO* ★·.·´¯`·.·★
⦚𖡸❥ ✔️ _${usedPrefix}start_
⦚𖡸❥ ✔️ _${usedPrefix}next_
⦚𖡸❥ ✔️ _${usedPrefix}leave_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *MENU AUDIOS* ★·.·´¯`·.·★
⦚𖡸❥ 📒 _${usedPrefix}menuaudios_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *UTILIDADES* ★·.·´¯`·.·★
⦚𖡸❥ 🌾 _${usedPrefix}inspect *<link wa_gc>*_
⦚𖡸❥ 🌾 _${usedPrefix}chatgpt *<texto>*_
⦚𖡸❥ 🌾 _${usedPrefix}delchatgpt_
⦚𖡸❥ 🌾 _${usedPrefix}gptvoz *<texto>*_
⦚𖡸❥ 🌾 _${usedPrefix}dall-e *<texto>*_
⦚𖡸❥ 🌾 _${usedPrefix}spamwa *<numero|texto|cantidad>*_
⦚𖡸❥ 🌾 _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
⦚𖡸❥ 🌾 _${usedPrefix}readviewonce *<imagen / video>*_
⦚𖡸❥ 🌾 _${usedPrefix}clima *<país> <ciudad>*_
⦚𖡸❥ 🌾 _${usedPrefix}encuesta *<texto1|texto2...>*_
⦚𖡸❥ 🌾 _${usedPrefix}afk *<motivo>*_
⦚𖡸❥ 🌾 _${usedPrefix}ocr *<responde a imagen>*_
⦚𖡸❥ 🌾 _${usedPrefix}hd *<responde a imagen>*_
⦚𖡸❥ 🌾 _${usedPrefix}acortar *<enlace / link / url>*_
⦚𖡸❥ 🌾 _${usedPrefix}calc *<operacion math>*_
⦚𖡸❥ 🌾 _${usedPrefix}del *<mensaje>*_
⦚𖡸❥ 🌾 _${usedPrefix}whatmusic *<audio>*_
⦚𖡸❥ 🌾 _${usedPrefix}readqr *<imagen (QR)>*_
⦚𖡸❥ 🌾 _${usedPrefix}qrcode *<texto>*_
⦚𖡸❥ 🌾 _${usedPrefix}readmore *<texto1| texto2>*_
⦚𖡸❥ 🌾 _${usedPrefix}styletext *<texto>*_
⦚𖡸❥ 🌾 _${usedPrefix}traducir *<texto>*_
⦚𖡸❥ 🌾 _${usedPrefix}nowa *<numero>*_
⦚𖡸❥ 🌾 _${usedPrefix}covid *<pais>*_
⦚𖡸❥ 🌾 _${usedPrefix}horario_
⦚𖡸❥ 🌾 _${usedPrefix}dropmail_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *LIMITES/ECONOMIAS* ★·.·´¯`·.·★
⦚𖡸❥ 🎪 _${usedPrefix}adventure_
⦚𖡸❥ 🎪 _${usedPrefix}cazar_
⦚𖡸❥ 🎪 _${usedPrefix}cofre_
⦚𖡸❥ 🎪 _${usedPrefix}balance_
⦚𖡸❥ 🎪 _${usedPrefix}claim_
⦚𖡸❥ 🎪 _${usedPrefix}heal_
⦚𖡸❥ 🎪 _${usedPrefix}lb_
⦚𖡸❥ 🎪 _${usedPrefix}levelup_
⦚𖡸❥ 🎪 _${usedPrefix}myns_
⦚𖡸❥ 🎪 _${usedPrefix}perfil_
⦚𖡸❥ 🎪 _${usedPrefix}work_
⦚𖡸❥ 🎪 _${usedPrefix}minar_
⦚𖡸❥ 🎪 _${usedPrefix}minar2_
⦚𖡸❥ 🎪 _${usedPrefix}buy_
⦚𖡸❥ 🎪 _${usedPrefix}buyall_
⦚𖡸❥ 🎪 _${usedPrefix}verificar_
⦚𖡸❥ 🎪 _${usedPrefix}robar *<cantidad> <@tag>*_
⦚𖡸❥ 🎪 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
⦚𖡸❥ 🎪 _${usedPrefix}unreg *<numero de serie>*_
╰• ────── ✾ ────── •

*★·.·´¯`·.·★ *STICKERS* ★·.·´¯`·.·★
⦚𖡸❥ 🍭 _${usedPrefix}sticker *<responder a imagen o video>*_
⦚𖡸❥ 🍭 _${usedPrefix}sticker *<enlace / link / url>*_
⦚𖡸❥ 🍭 _${usedPrefix}sticker2 *<responder a imagen o video>*_
⦚𖡸❥ 🍭 _${usedPrefix}sticker2 *<enlace / link / url>*_
⦚𖡸❥ 🍭 _${usedPrefix}s *<responder a imagen o video>*_
⦚𖡸❥ 🍭 _${usedPrefix}s *<enlace / link / url>*_
⦚𖡸❥ 🍭 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
⦚𖡸❥ 🍭 _${usedPrefix}scircle *<imagen>*_
⦚𖡸❥ 🍭 _${usedPrefix}sremovebg *<imagen>*_
⦚𖡸❥ 🍭 _${usedPrefix}semoji *<tipo> <emoji>*_
⦚𖡸❥ 🍭 _${usedPrefix}qc *<texto>*_
⦚𖡸❥ 🍭 _${usedPrefix}attp *<texto>*_
⦚𖡸❥ 🍭 _${usedPrefix}attp2 *<texto>*_
⦚𖡸❥ 🍭 _${usedPrefix}attp3 *<texto>*_
⦚𖡸❥ 🍭 _${usedPrefix}ttp *<texto>*_
⦚𖡸❥ 🍭 _${usedPrefix}ttp2 *<texto>*_
⦚𖡸❥ 🍭 _${usedPrefix}ttp3 *<texto>*_
⦚𖡸❥ 🍭 _${usedPrefix}ttp4 *<texto>*_
⦚𖡸❥ 🍭 _${usedPrefix}ttp5 *<texto>*_
⦚𖡸❥ 🍭 _${usedPrefix}pat *<@tag>*_
⦚𖡸❥ 🍭 _${usedPrefix}slap *<@tag>*_
⦚𖡸❥ 🍭 _${usedPrefix}kiss *<@tag>*_
⦚𖡸❥ 🍭 _${usedPrefix}dado_
⦚𖡸❥ 🍭 _${usedPrefix}wm *<packname> <author>*_
⦚𖡸❥ 🍭 _${usedPrefix}stickermarker *<efecto> <imagen>*_
⦚𖡸❥ 🍭 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
╰• ────── ✾ ────── •


★·.·´¯`·.·★ *FUNCIÓN-CREADOR* ★·.·´¯`·.·★
⦚𖡸❥ 👑 > *<funcion>*
⦚𖡸❥ 👑 => *<funcion>*
⦚𖡸❥ 👑 $ *<funcion>*
⦚𖡸❥ 👑 _${usedPrefix}setprefix *<prefijo>*_
⦚𖡸❥ 👑 _${usedPrefix}resetprefix_
⦚𖡸❥ 👑 _${usedPrefix}autoadmin_
⦚𖡸❥ 👑 _${usedPrefix}grouplist_
⦚𖡸❥ 👑 _${usedPrefix}chetar_
⦚𖡸❥ 👑 _${usedPrefix}leavegc_
⦚𖡸❥ 👑 _${usedPrefix}cajafuerte_
⦚𖡸❥ 👑 _${usedPrefix}blocklist_
⦚𖡸❥ 👑 _${usedPrefix}addowner *<@tag / numero>*_
⦚𖡸❥ 👑 _${usedPrefix}delowner *<@tag / numero>*_
⦚𖡸❥ 👑 _${usedPrefix}block *<@tag / numero>*_
⦚𖡸❥ 👑 _${usedPrefix}unblock *<@tag / numero>*_
⦚𖡸❥ 👑 _${usedPrefix}enable *restrict*_
⦚𖡸❥ 👑 _${usedPrefix}disable *restrict*_
⦚𖡸❥ 👑 _${usedPrefix}enable *autoread*_
⦚𖡸❥ 👑 _${usedPrefix}disable *autoread*_
⦚𖡸❥ 👑 _${usedPrefix}enable *public*_
⦚𖡸❥ 👑 _${usedPrefix}disable *public*_
⦚𖡸❥ 👑 _${usedPrefix}enable *pconly*_
⦚𖡸❥ 👑 _${usedPrefix}disable *pconly*_
⦚𖡸❥ 👑 _${usedPrefix}enable *gconly*_
⦚𖡸❥ 👑 _${usedPrefix}disable *gconly*_
⦚𖡸❥ 👑 _${usedPrefix}enable *anticall*_
⦚𖡸❥ 👑 _${usedPrefix}disable *anticall*_
⦚𖡸❥ 👑 _${usedPrefix}enable *antiprivado*_
⦚𖡸❥ 👑 _${usedPrefix}disable *antiprivado*_
⦚𖡸❥ 👑 _${usedPrefix}enable *antispam*_
⦚𖡸❥ 👑 _${usedPrefix}disable *antispam*_
⦚𖡸❥ 👑 _${usedPrefix}msg *<texto>*_
⦚𖡸❥ 👑 _${usedPrefix}banchat_
⦚𖡸❥ 👑 _${usedPrefix}unbanchat_
⦚𖡸❥ 👑 _${usedPrefix}resetuser *<@tag>*_
⦚𖡸❥ 👑 _${usedPrefix}banuser *<@tag>*_
⦚𖡸❥ 👑 _${usedPrefix}unbanuser *<@tag>*_
⦚𖡸❥ 👑 _${usedPrefix}dardiamantes *<@tag> <cantidad>*_
⦚𖡸❥ 👑 _${usedPrefix}añadirxp *<@tag> <cantidad>*_
⦚𖡸❥ 👑 _${usedPrefix}banuser *<@tag>*_
⦚𖡸❥ 👑 _${usedPrefix}bc *<texto>*_
⦚𖡸❥ 👑 _${usedPrefix}bcchats *<texto>*_
⦚𖡸❥ 👑 _${usedPrefix}bcgc *<texto>*_
⦚𖡸❥ 👑 _${usedPrefix}bcgc2 *<audio>*_
⦚𖡸❥ 👑 _${usedPrefix}bcgc2 *<video>*_
⦚𖡸❥ 👑 _${usedPrefix}bcgc2 *<imagen>*_
⦚𖡸❥ 👑 _${usedPrefix}bcbot *<texto>*_
⦚𖡸❥ 👑 _${usedPrefix}cleartpm_
⦚𖡸❥ 👑 _${usedPrefix}restart_
⦚𖡸❥ 👑 _${usedPrefix}update_
⦚𖡸❥ 👑 _${usedPrefix}banlist_
⦚𖡸❥ 👑 _${usedPrefix}addprem *<@tag> <tiempo>*_
⦚𖡸❥ 👑 _${usedPrefix}addprem2 *<@tag> <tiempo>*_
⦚𖡸❥ 👑 _${usedPrefix}addprem3 *<@tag> <tiempo>*_
⦚𖡸❥ 👑 _${usedPrefix}addprem4 *<@tag> <tiempo>*_
⦚𖡸❥ 👑 _${usedPrefix}delprem *<@tag>*_
⦚𖡸❥ 👑 _${usedPrefix}listcmd_
⦚𖡸❥ 👑 _${usedPrefix}setppbot *<responder a imagen>*_
⦚𖡸❥ 👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
⦚𖡸❥ 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
⦚𖡸❥ 👑 _${usedPrefix}saveimage_
⦚𖡸❥ 👑 _${usedPrefix}viewimage_
╰• ────── ✾ ────── •`.trim();     if (m.isGroup) { 
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