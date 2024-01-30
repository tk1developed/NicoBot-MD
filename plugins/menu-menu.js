import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {        
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = './Menu2.jpg'
//let pp = gataVidMenu.getRandom()
await conn.sendMessage(m.chat, {
        text: `*@${m.sender.split`@`[0]} Espera*.`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m })

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
let menu = `╭✨️⸽⃕SᴀᴋᴜʀᴀBᴏᴛLɪᴛᴇ-MD🍁⃨፝⃕✰
│❢➻ *🧑‍💻Dueño Del Bot:* Diego       
│❢➻ *👤Cliente:* ${taguser}
│❢➻ *🪁Subbot De:* ${(conn.user.jid == global.conn.user.jid ? '' : `@${global.conn.user.jid.split`@`[0]}`) || 'No Soy Subbot'}
│❢➻ *⏰️Tiempo Activo:* ${uptime}
│❢➻ *📅Fecha:* ${date} 
│❢➻ *🧭Versión Actual:* ${vs}
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *INFO USER* ━━─╗
│❢➻ *🎖Nivel:* ${level}
│❢➻ *🧰Experiencia:* ${exp}
│❢➻ *⚓️Rango:* ${role}
│❢➻ *💎Diamantes:* ${limit}
│❢➻ *👾SakuCoins:* ${money}
│❢➻ *🪙Tokens:* ${joincount}
╰━━━━━━━✦✗✦━━━━━━━━


╔─━━ *SOLUCIONES* ━━─╗
│❢➻ 🧭 Mensajes en espera
│❢➻ 🧭 _${usedPrefix}fixmsgespera_
│❢➻ 🧭 Mensajes en espera (owner)
│❢➻ 🧭 _${usedPrefix}dsowner_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *INFO BOT* ━━─╗
│❢➻ 📋 _${usedPrefix}botreglas_
│❢➻ 📋 _${usedPrefix}terminosycondiciones_
│❢➻ 📋 _${usedPrefix}grupos_
│❢➻ 📋 _${usedPrefix}estado_
│❢➻ 📋 _${usedPrefix}infobot_
│❢➻ 📋 _${usedPrefix}speedtest_
│❢➻ 📋 _${usedPrefix}donar_
│❢➻ 📋 _${usedPrefix}owner_
│❢➻ 📋 _${usedPrefix}script_
│❢➻ 📋 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *BOT A TU GRUPO* ━━─╗
│❢➻ 🙀 _${usedPrefix}join *<enlace / link / url>*_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *SER SUBBOT* ━━─╗
│❢➻ 💻 _${usedPrefix}serbot_
│❢➻ 💻 _${usedPrefix}deletebot_
│❢➻ 💻 _${usedPrefix}token_
│❢➻ 💻 _${usedPrefix}stop_
│❢➻ 💻 _${usedPrefix}bots_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *HERRAMIENTAS* ━━─╗
│❢➻ 🛠 _${usedPrefix}enable restrict_
│❢➻ 🛠 _${usedPrefix}disable restrict_
│❢➻ 🛠 _${usedPrefix}enable autoread_
│❢➻ 🛠 _${usedPrefix}disable autoread_
│❢➻ 🛠 _${usedPrefix}enable antispam_
│❢➻ 🛠 _${usedPrefix}disable antispam_
│❢➻ 🛠 _${usedPrefix}enable anticall_
│❢➻ 🛠 _${usedPrefix}disable anticall_
│❢➻ 🛠 _${usedPrefix}enable modoia_
│❢➻ 🛠 _${usedPrefix}disable modoia_
│❢➻ 🛠 _${usedPrefix}enable audios_bot_
│❢➻ 🛠 _${usedPrefix}disable audios_bot_
│❢➻ 🛠 _${usedPrefix}enable antiprivado_
│❢➻ 🛠 _${usedPrefix}disable antiprivado_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *DIVERSIONES* ━━─╗
│❢➻ 🌹 _${usedPrefix}love_
│❢➻ 🌹 _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
│❢➻ 🌹 _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
│❢➻ 🌹 _${usedPrefix}ppt *<papel / tijera /piedra>*_
│❢➻ 🌹 _${usedPrefix}prostituto *<nombre / @tag>*_
│❢➻ 🌹 _${usedPrefix}prostituta *<nombre / @tag>*_
│❢➻ 🌹 _${usedPrefix}gay2 *<nombre / @tag>*_
│❢➻ 🌹 _${usedPrefix}lesbiana *<nombre / @tag>*_
│❢➻ 🌹 _${usedPrefix}pajero *<nombre / @tag>*_
│❢➻ 🌹 _${usedPrefix}pajera *<nombre / @tag>*_
│❢➻ 🌹 _${usedPrefix}follar *<nombre / @tag>*_
│❢➻ 🌹 _${usedPrefix}puto *<nombre / @tag>*_
│❢➻ 🌹 _${usedPrefix}puta *<nombre / @tag>*_
│❢➻ 🌹 _${usedPrefix}manco *<nombre / @tag>*_
│❢➻ 🌹 _${usedPrefix}manca *<nombre / @tag>*_
│❢➻ 🌹 _${usedPrefix}rata *<nombre / @tag>*_
│❢➻ 🌹 _${usedPrefix}love *<nombre / @tag>*_
│❢➻ 🌹 _${usedPrefix}doxear *<nombre / @tag>*_
│❢➻ 🌹 _${usedPrefix}pregunta *<texto>*_
│❢➻ 🌹 _${usedPrefix}suitpvp *<@tag>*_
│❢➻ 🌹 _${usedPrefix}slot *<apuesta>*_
│❢➻ 🌹 _${usedPrefix}ttt *<nombre sala>*_
│❢➻ 🌹 _${usedPrefix}delttt_
│❢➻ 🌹 _${usedPrefix}acertijo_
│❢➻ 🌹 _${usedPrefix}personalidad *<nombre / @tag>*_
│❢➻ 🌹 _${usedPrefix}simi *<texto>*_
│❢➻ 🌹 _${usedPrefix}top *<texto>*_
│❢➻ 🌹 _${usedPrefix}topgays_
│❢➻ 🌹 _${usedPrefix}topotakus_
│❢➻ 🌹 _${usedPrefix}formarpareja_
│❢➻ 🌹 _${usedPrefix}verdad_
│❢➻ 🌹 _${usedPrefix}reto_
│❢➻ 🌹 _${usedPrefix}cancion_
│❢➻ 🌹 _${usedPrefix}pista_
│❢➻ 🌹 _${usedPrefix}akinator_
│❢➻ 🌹 _${usedPrefix}wordfind_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *ON/OFF* ━━─╗
│❢➻ ✨️ _${usedPrefix}enable *welcome*_
│❢➻ ✨️ _${usedPrefix}disable *welcome*_
│❢➻ ✨️ _${usedPrefix}enable *modohorny*_
│❢➻ ✨️ _${usedPrefix}disable *modohorny*_
│❢➻ ✨️ _${usedPrefix}enable *antilink*_
│❢➻ ✨️ _${usedPrefix}disable *antilink*_
│❢➻ ✨️ _${usedPrefix}enable *antilink2*_
│❢➻ ✨️ _${usedPrefix}disable *antilink2*_
│❢➻ ✨️ _${usedPrefix}enable *detect*_
│❢➻ ✨️ _${usedPrefix}disable *detect*_
│❢➻ ✨️ _${usedPrefix}enable *audios*_
│❢➻ ✨️ _${usedPrefix}disable *audios*_
│❢➻ ✨️ _${usedPrefix}enable *autosticker*_
│❢➻ ✨️ _${usedPrefix}disable *autosticker*_
│❢➻ ✨️ _${usedPrefix}enable *antiviewonce*_
│❢➻ ✨️ _${usedPrefix}disable *antiviewonce*_
│❢➻ ✨️ _${usedPrefix}enable *antitoxic*_
│❢➻ ✨️ _${usedPrefix}disable *antitoxic*_
│❢➻ ✨️ _${usedPrefix}enable *antitraba*_
│❢➻ ✨️ _${usedPrefix}disable *antitraba*_
│❢➻ ✨️ _${usedPrefix}enable *antiarabes*_
│❢➻ ✨️ _${usedPrefix}disable *antiarabes*_
│❢➻ ✨️ _${usedPrefix}enable *modoadmin*_
│❢➻ ✨️ _${usedPrefix}disable *modoadmin*_
│❢➻ ✨️ _${usedPrefix}enable *antidelete*_
│❢➻ ✨️ _${usedPrefix}disable *antidelete*_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *REPORTE* ━━─╗
│❢➻ 🖥 _${usedPrefix}reporte *<texto>*_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *DESCARGAS* ━━─╗
│❢➻ 🛰 _${usedPrefix}instagram *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}mediafire *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}gitclone *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}gdrive *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}tiktok *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}tiktokimg *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}xnxxdl *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}xvideosdl *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}twitter *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}fb *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}ytshort *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}ytmp3 *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}ytmp4 *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}videodoc *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}dapk2 *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}stickerpack *<enlace / link / url>*_
│❢➻ 🛰 _${usedPrefix}play *<texto>*_
│❢➻ 🛰 _${usedPrefix}play2 *<texto>*_
│❢➻ 🛰 _${usedPrefix}play.1 *<texto>*_
│❢➻ 🛰 _${usedPrefix}play.2 *<texto>*_
│❢➻ 🛰 _${usedPrefix}playdoc *<texto>*_
│❢➻ 🛰 _${usedPrefix}playdoc2 *<texto>*_
│❢➻b🛰 _${usedPrefix}playlist *<texto>*_
│❢➻ 🛰 _${usedPrefix}spotify *<texto>*_
│❢➻ 🛰 _${usedPrefix}ringtone *<texto>*_
│❢➻ 🛰 _${usedPrefix}soundcloud *<texto>*_
│❢➻ 🛰 _${usedPrefix}imagen *<texto>*_
│❢➻ 🛰 _${usedPrefix}pinterest *<texto>*_
│❢➻ 🛰 _${usedPrefix}wallpaper *<texto>*_
│❢➻ 🛰 _${usedPrefix}pptiktok *<nombre de usuario>*_
│❢➻ 🛰 _${usedPrefix}igstalk *<nombre de usuario>*_
│❢➻ 🛰 _${usedPrefix}igstory *<nombre de usuario>*_
│❢➻ 🛰 _${usedPrefix}tiktokstalk *<username>*_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *BUSCADORES* ━━─╗
│❢➻ 🔎 _${usedPrefix}githubsearch *<texto>*_
│❢➻ 🔎 _${usedPrefix}pelisplus *<texto>*_
│❢➻ 🔎 _${usedPrefix}modapk *<texto>*_
│❢➻ 🔎 _${usedPrefix}stickersearch *<texto>*_
│❢➻ 🔎 _${usedPrefix}stickersearch2 *<texto>*_
│❢➻ 🔎 _${usedPrefix}xnxxsearch *<texto>*_
│❢➻ 🔎 _${usedPrefix}animeinfo *<texto>*_
│❢➻ 🔎 _${usedPrefix}google *<texto>*_
│❢➻ 🔎 _${usedPrefix}letra *<texto>*_
│❢➻ 🔎 _${usedPrefix}wikipedia *<texto>*_
│❢➻ 🔎 _${usedPrefix}ytsearch *<texto>*_
│❢➻ 🔎 _${usedPrefix}playstore *<texto>*_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *GRUPO AJUSTES* ━━─╗
│❢➻ ⚙️ _${usedPrefix}salir *<admins>*_
│❢➻ ⚙️ _${usedPrefix}add *<numero>*_
│❢➻ ⚙️ _${usedPrefix}kick *<@tag>*_
│❢➻ ⚙️ _${usedPrefix}kick2 *<@tag>*_
│❢➻ ⚙️ _${usedPrefix}listanum *<texto>*_
│❢➻ ⚙️ _${usedPrefix}kicknum *<texto>*_
│❢➻ ⚙️ _${usedPrefix}grupo *<abrir / cerrar>*_
│❢➻ ⚙️ _${usedPrefix}grouptime *<opcion> <tiempo>*_
│❢➻ ⚙️ _${usedPrefix}promote *<@tag>*_
│❢➻ ⚙️ _${usedPrefix}demote *<@tag>*_
│❢➻ ⚙️ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
│❢➻ ⚙️ _${usedPrefix}demote *<@tag>*_
│❢➻ ⚙️ _${usedPrefix}infogroup_
│❢➻ ⚙️ _${usedPrefix}resetlink_
│❢➻ ⚙️ _${usedPrefix}link_
│❢➻ ⚙️ _${usedPrefix}setname *<texto>*_
│❢➻ ⚙️ _${usedPrefix}setdesc *<texto>*_
│❢➻ ⚙️ _${usedPrefix}invocar *<texto>*_
│❢➻ ⚙️ _${usedPrefix}setwelcome *<texto>*_
│❢➻ ⚙️ _${usedPrefix}setbye *<texto>*_
│❢➻ ⚙️ _${usedPrefix}hidetag *<texto>*_
│❢➻ ⚙️ _${usedPrefix}hidetag *<audio>*_
│❢➻ ⚙️ _${usedPrefix}hidetag *<video>*_
│❢➻ ⚙️ _${usedPrefix}hidetag *<imagen>*_
│❢➻ ⚙️ _${usedPrefix}warn *<@tag>*_
│❢➻ ⚙️ _${usedPrefix}unwarn *<@tag>*_
│❢➻ ⚙️ _${usedPrefix}listwarn_
│❢➻ ⚙️ _${usedPrefix}fantasmas_
│❢➻ ⚙️ _${usedPrefix}destraba_
│❢➻ ⚙️ _${usedPrefix}setpp *<imagen>*_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *CONVERTIDORES* ━━─╗
│❢➻ 🧶 _${usedPrefix}toanime *<imagen>*_
│❢➻ 🧶 _${usedPrefix}togifaud *<video>*_
│❢➻ 🧶 _${usedPrefix}toimg *<sticker>*_
│❢➻ 🧶 _${usedPrefix}tomp3 *<video>*_
│❢➻ 🧶 _${usedPrefix}tomp3 *<nota de voz>*_
│❢➻ 🧶 _${usedPrefix}toptt *<video / audio>*_
│❢➻ 🧶 _${usedPrefix}tovideo *<sticker>*_
│❢➻ 🧶 _${usedPrefix}tourl *<video / imagen / audio>*_
│❢➻ 🧶 _${usedPrefix}tts *<idioma> <texto>*_
│❢➻ 🧶 _${usedPrefix}tts *<efecto> <texto>*_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *LOGOS Y EFECTOS* ━━─╗
│❢➻ 🖼 _${usedPrefix}logos *<efecto> <texto>*_
│❢➻ 🖼 _${usedPrefix}logochristmas *<texto>*_
│❢➻ 🖼 _${usedPrefix}logocorazon *<texto>*_
│❢➻ 🖼 _${usedPrefix}ytcomment *<texto>*_
│❢➻ 🖼 _${usedPrefix}hornycard *<@tag>*_
│❢➻ 🖼 _${usedPrefix}simpcard *<@tag>*_
│❢➻ 🖼 _${usedPrefix}lolice *<@tag>*_
│❢➻ 🖼 _${usedPrefix}itssostupid_
│❢➻ 🖼 _${usedPrefix}pixelar_
│❢➻ 🖼 _${usedPrefix}blur_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *PIROPOS* ━━─╗
│❢➻ ✏️  _${usedPrefix}piropo_
│❢➻ ✏️  _${usedPrefix}consejo_
│❢➻ ✏️  _${usedPrefix}fraseromantica_
│❢➻ ✏️  _${usedPrefix}historiaromantica_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *RAND ANIMES* ━━─╗
│❢➻ 📓 _${usedPrefix}menuanimes_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *RANDOM* ━━─╗
│❢➻ 📺 _${usedPrefix}kpop *<blackpink / exo / bts>*_
│❢➻ 📺 _${usedPrefix}cristianoronaldo_
│❢➻ 📺 _${usedPrefix}messi_
│❢➻ 📺 _${usedPrefix}cat_
│❢➻ 📺 _${usedPrefix}dog_
│❢➻ 📺 _${usedPrefix}meme_
│❢➻ 📺 _${usedPrefix}itzy_
│❢➻ 📺 _${usedPrefix}blackpink_
│❢➻ 📺 _${usedPrefix}navidad_
│❢➻ 📺 _${usedPrefix}wpmontaña_
│❢➻ 📺 _${usedPrefix}pubg_
│❢➻ 📺 _${usedPrefix}wpgaming_
│❢➻ 📺 _${usedPrefix}wpaesthetic_
│❢➻ 📺 _${usedPrefix}wpaesthetic2_
│❢➻ 📺 _${usedPrefix}wprandom_
│❢➻ 📺 _${usedPrefix}wallhp_
│❢➻ 📺 _${usedPrefix}wpvehiculo_
│❢➻ 📺 _${usedPrefix}wpmoto_
│❢➻ 📺 _${usedPrefix}coffee_
│❢➻ 📺 _${usedPrefix}pentol_
│❢➻ 📺 _${usedPrefix}caricatura_
│❢➻ 📺 _${usedPrefix}ciberespacio_
│❢➻ 📺 _${usedPrefix}technology_
│❢➻ 📺 _${usedPrefix}doraemon_
│❢➻ 📺 _${usedPrefix}hacker_
│❢➻ 📺 _${usedPrefix}planeta_
│❢➻ 📺 _${usedPrefix}randomprofile_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *COMANDO +18* ━━─╗
│❢➻ 📒 _${usedPrefix}hornymenu_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *EFECTOS DE AUDIOS* ━━─╗
│❢➻ 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘈 𝘜𝘯𝘢 𝘕𝘰𝘵𝘢 𝘋𝘦 𝘈𝘶𝘥𝘪𝘰
│❢➻ 🔊 _${usedPrefix}bass_
│❢➻ 🔊 _${usedPrefix}blown_
│❢➻ 🔊 _${usedPrefix}deep_
│❢➻ 🔊 _${usedPrefix}earrape_
│❢➻ 🔊 _${usedPrefix}fast_
│❢➻ 🔊 _${usedPrefix}fat_
│❢➻ 🔊 _${usedPrefix}nightcore_
│❢➻ 🔊 _${usedPrefix}reverse_
│❢➻ 🔊 _${usedPrefix}robot_
│❢➻ 🔊 _${usedPrefix}slow_
│❢➻ 🔊 _${usedPrefix}smooth_
│❢➻ 🔊 _${usedPrefix}tupai_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *CHAT ANONIMO* ━━─╗
│❢➻ ✔️ _${usedPrefix}start_
│❢➻ ✔️ _${usedPrefix}next_
│❢➻ ✔️ _${usedPrefix}leave_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *MENU AUDIOS* ━━─╗
│❢➻ 📒 _${usedPrefix}menuaudios_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *UTILIDADES* ━━─╗
│❢➻ 🌾 _${usedPrefix}inspect *<link wa_gc>*_
│❢➻ 🌾 _${usedPrefix}chatgpt *<texto>*_
│❢➻ 🌾 _${usedPrefix}delchatgpt_
│❢➻ 🌾 _${usedPrefix}gptvoz *<texto>*_
│❢➻ 🌾 _${usedPrefix}dall-e *<texto>*_
│❢➻ 🌾 _${usedPrefix}spamwa *<numero|texto|cantidad>*_
│❢➻ 🌾 _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
│❢➻ 🌾 _${usedPrefix}readviewonce *<imagen / video>*_
│❢➻ 🌾 _${usedPrefix}clima *<país> <ciudad>*_
│❢➻ 🌾 _${usedPrefix}encuesta *<texto1|texto2...>*_
│❢➻ 🌾 _${usedPrefix}afk *<motivo>*_
│❢➻ 🌾 _${usedPrefix}ocr *<responde a imagen>*_
│❢➻ 🌾 _${usedPrefix}hd *<responde a imagen>*_
│❢➻ 🌾 _${usedPrefix}acortar *<enlace / link / url>*_
│❢➻ 🌾 _${usedPrefix}calc *<operacion math>*_
│❢➻ 🌾 _${usedPrefix}del *<mensaje>*_
│❢➻ 🌾 _${usedPrefix}whatmusic *<audio>*_
│❢➻ 🌾 _${usedPrefix}readqr *<imagen (QR)>*_
│❢➻ 🌾 _${usedPrefix}qrcode *<texto>*_
│❢➻ 🌾 _${usedPrefix}readmore *<texto1| texto2>*_
│❢➻ 🌾 _${usedPrefix}styletext *<texto>*_
│❢➻ 🌾 _${usedPrefix}traducir *<texto>*_
│❢➻ 🌾 _${usedPrefix}nowa *<numero>*_
│❢➻ 🌾 _${usedPrefix}covid *<pais>*_
│❢➻ 🌾 _${usedPrefix}horario_
│❢➻ 🌾 _${usedPrefix}dropmail_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *LIMITES/ECONOMIAS* ━━─╗
│❢➻ 🎪 _${usedPrefix}adventure_
│❢➻ 🎪 _${usedPrefix}cazar_
│❢➻ 🎪 _${usedPrefix}cofre_
│❢➻ 🎪 _${usedPrefix}balance_
│❢➻ 🎪 _${usedPrefix}claim_
│❢➻ 🎪 _${usedPrefix}heal_
│❢➻ 🎪 _${usedPrefix}lb_
│❢➻ 🎪 _${usedPrefix}levelup_
│❢➻ 🎪 _${usedPrefix}myns_
│❢➻ 🎪 _${usedPrefix}perfil_
│❢➻ 🎪 _${usedPrefix}work_
│❢➻ 🎪 _${usedPrefix}minar_
│❢➻ 🎪 _${usedPrefix}minar2_
│❢➻ 🎪 _${usedPrefix}buy_
│❢➻ 🎪 _${usedPrefix}buyall_
│❢➻ 🎪 _${usedPrefix}verificar_
│❢➻ 🎪 _${usedPrefix}robar *<cantidad> <@tag>*_
│❢➻ 🎪 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
│❢➻ 🎪 _${usedPrefix}unreg *<numero de serie>*_
╰━━━━━━━✦✗✦━━━━━━━━

╔─━━ *STICKERS* ━━─╗
│❢➻ 🍭 _${usedPrefix}sticker *<responder a imagen o video>*_
│❢➻ 🍭 _${usedPrefix}sticker *<enlace / link / url>*_
│❢➻ 🍭 _${usedPrefix}sticker2 *<responder a imagen o video>*_
│❢➻ 🍭 _${usedPrefix}sticker2 *<enlace / link / url>*_
│❢➻ 🍭 _${usedPrefix}s *<responder a imagen o video>*_
│❢➻ 🍭 _${usedPrefix}s *<enlace / link / url>*_
│❢➻ 🍭 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
│❢➻ 🍭 _${usedPrefix}scircle *<imagen>*_
│❢➻ 🍭 _${usedPrefix}sremovebg *<imagen>*_
│❢➻ 🍭 _${usedPrefix}semoji *<tipo> <emoji>*_
│❢➻ 🍭 _${usedPrefix}qc *<texto>*_
│❢➻ 🍭 _${usedPrefix}attp *<texto>*_
│❢➻ 🍭 _${usedPrefix}attp2 *<texto>*_
│❢➻ 🍭 _${usedPrefix}attp3 *<texto>*_
│❢➻ 🍭 _${usedPrefix}ttp *<texto>*_
│❢➻ 🍭 _${usedPrefix}ttp2 *<texto>*_
│❢➻ 🍭 _${usedPrefix}ttp3 *<texto>*_
│❢➻ 🍭 _${usedPrefix}ttp4 *<texto>*_
│❢➻ 🍭 _${usedPrefix}ttp5 *<texto>*_
│❢➻ 🍭 _${usedPrefix}pat *<@tag>*_
│❢➻ 🍭 _${usedPrefix}slap *<@tag>*_
│❢➻ 🍭 _${usedPrefix}kiss *<@tag>*_
│❢➻ 🍭 _${usedPrefix}dado_
│❢➻ 🍭 _${usedPrefix}wm *<packname> <author>*_
│❢➻ 🍭 _${usedPrefix}stickermarker *<efecto> <imagen>*_
│❢➻ 🍭 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
╰━━━━━━━✦✗✦━━━━━━━━


╔─━━ *FUNCIÓN-CREADOR* ━━─╗
│❢➻ 👑 > *<funcion>*
│❢➻ 👑 => *<funcion>*
│❢➻ 👑 $ *<funcion>*
│❢➻ 👑 _${usedPrefix}reunion_ *<texto>*
│❢➻ 👑 _${usedPrefix}setprefix *<prefijo>*_
│❢➻ 👑 _${usedPrefix}resetprefix_
│❢➻ 👑 _${usedPrefix}autoadmin_
│❢➻ 👑 _${usedPrefix}grouplist_
│❢➻ 👑 _${usedPrefix}chetar_
│❢➻ 👑 _${usedPrefix}leavegc_
│❢➻ 👑 _${usedPrefix}cajafuerte_
│❢➻ 👑 _${usedPrefix}blocklist_
│❢➻ 👑 _${usedPrefix}addowner *<@tag / numero>*_
│❢➻ 👑 _${usedPrefix}delowner *<@tag / numero>*_
│❢➻ 👑 _${usedPrefix}block *<@tag / numero>*_
│❢➻ 👑 _${usedPrefix}unblock *<@tag / numero>*_
│❢➻ 👑 _${usedPrefix}enable *restrict*_
│❢➻ 👑 _${usedPrefix}disable *restrict*_
│❢➻ 👑 _${usedPrefix}enable *autoread*_
│❢➻ 👑 _${usedPrefix}disable *autoread*_
│❢➻ 👑 _${usedPrefix}enable *public*_
│❢➻ 👑 _${usedPrefix}disable *public*_
│❢➻ 👑 _${usedPrefix}enable *pconly*_
│❢➻ 👑 _${usedPrefix}disable *pconly*_
│❢➻ 👑 _${usedPrefix}enable *gconly*_
│❢➻ 👑 _${usedPrefix}disable *gconly*_
│❢➻ 👑 _${usedPrefix}enable *anticall*_
│❢➻ 👑 _${usedPrefix}disable *anticall*_
│❢➻ 👑 _${usedPrefix}enable *antiprivado*_
│❢➻ 👑 _${usedPrefix}disable *antiprivado*_
│❢➻ 👑 _${usedPrefix}enable *antispam*_
│❢➻ 👑 _${usedPrefix}disable *antispam*_
│❢➻ 👑 _${usedPrefix}msg *<texto>*_
│❢➻ 👑 _${usedPrefix}banchat_
│❢➻ 👑 _${usedPrefix}unbanchat_
│❢➻ 👑 _${usedPrefix}resetuser *<@tag>*_
│❢➻ 👑 _${usedPrefix}banuser *<@tag>*_
│❢➻ 👑 _${usedPrefix}unbanuser *<@tag>*_
│❢➻ 👑 _${usedPrefix}dardiamantes *<@tag> <cantidad>*_
│❢➻ 👑 _${usedPrefix}añadirxp *<@tag> <cantidad>*_
│❢➻ 👑 _${usedPrefix}banuser *<@tag>*_
│❢➻ 👑 _${usedPrefix}bc *<texto>*_
│❢➻ 👑 _${usedPrefix}bcchats *<texto>*_
│❢➻ 👑 _${usedPrefix}bcgc *<texto>*_
│❢➻ 👑 _${usedPrefix}bcgc2 *<audio>*_
│❢➻ 👑 _${usedPrefix}bcgc2 *<video>*_
│❢➻ 👑 _${usedPrefix}bcgc2 *<imagen>*_
│❢➻ 👑 _${usedPrefix}bcbot *<texto>*_
│❢➻ 👑 _${usedPrefix}cleartpm_
│❢➻ 👑 _${usedPrefix}restart_
│❢➻ 👑 _${usedPrefix}update_
│❢➻ 👑 _${usedPrefix}banlist_
│❢➻ 👑 _${usedPrefix}addprem *<@tag> <tiempo>*_
│❢➻ 👑 _${usedPrefix}addprem2 *<@tag> <tiempo>*_
│❢➻ 👑 _${usedPrefix}addprem3 *<@tag> <tiempo>*_
│❢➻ 👑 _${usedPrefix}addprem4 *<@tag> <tiempo>*_
│❢➻ 👑 _${usedPrefix}delprem *<@tag>*_
│❢➻ 👑 _${usedPrefix}listcmd_
│❢➻ 👑 _${usedPrefix}setppbot *<responder a imagen>*_
│❢➻ 👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
│❢➻ 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
│❢➻ 👑 _${usedPrefix}saveimage_
│❢➻ 👑 _${usedPrefix}viewimage_
╰━━━━━━━✦✗✦━━━━━━━━`.trim()
//conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
let img = await (await fetch(`https://telegra.ph/file/99b0491dde885e3775050.jpg`)).buffer()  
await conn.sendMessage(m.chat, {
text: menu,
contextInfo: { 
mentionedJid: [m.sender],
forwardingScore: 9, 
externalAdReply: {
title: '❁» 𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯 «❁\n𝑩𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 - 𝑴𝒖𝒍𝒕𝒊 𝑭𝒖𝒏𝒄𝒊𝒐𝒏𝒆𝒔',
//body: 'Wʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ - Mᴜʟᴛɪ Dᴇᴠɪᴄᴇ',
thumbnail: img,
sourceUrl: 'https://whatsapp.com/channel/0029VaHdt8oJENxtNExL8z2n',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)        
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|ayuda|allmenu|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}