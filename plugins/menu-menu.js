//CÓDIGO ADAPTADO POR https://github.com/GataNina-Li | @gata_dios & https://github.com/Undefined17 | @Azami

import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let { exp, diamond, level, role, money } = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}
let links = linkSity.getRandom()
    const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2024,
    status: 1,
    surface : 1,
    message: `${name}!`, 
    orderTitle: `▮Menu ▸`,
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }

let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
let d4 = 'application/pdf'
let d5 = 'application/vnd.android.package-archive'
let d6 = 'application/zip'
let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}
    }
    }
    }  
let menu = `╭✨️⸽⃕SAᴋᴜʀᴀBᴏᴛ-MD🍁⃨፝⃕✰
┃⍣ *🧑‍💻Dueño Del Bot:* Diego       
┃⍣ *👤Cliente:* 
┃⍣ *⏰️Tiempo Activo:* ${uptime}
┃⍣ *💻Usuarios Regs:* ${totalreg}
┃⍣ *🗃Usuarios Totales:* ${rtotalreg}
┃⍣ *📅Fecha:* ${date} 
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *INFO USER* ━⊜
┃⍣ *🎖Nivel:* ${level}
┃⍣ *🧰Experiencia:* ${exp}
┃⍣ *⚓️Rango:* ${role}
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *INFORMACIÓN* ━━⊜
┃⍣🌴 ${usedPrefix}estado
┃⍣🌴 ${usedPrefix}owner
┃⍣🌴 ${usedPrefix}grouplist
┃⍣🌴 ${usedPrefix}donar
┃⍣🌴 ${usedPrefix}grupos
┃⍣🌴 ${usedPrefix}infobot
┃⍣🌴 ${usedPrefix}cuentas
┃⍣🌴 ${usedPrefix}reporte
┃⍣🌴 ${usedPrefix}join
┃⍣🌴 ${usedPrefix}bot
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *SER SUBBOT* ━━⊜
┃⍣ 💻 ${usedPrefix}Serbot 
┃⍣ 💻 ${usedPrefix}jadibot
┃⍣ 💻 ${usedPrefix}bots
┃⍣ 💻 ${usedPrefix}deletesesion
┃⍣ 💻 ${usedPrefix}stop
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *DESCARGAS* ━━⊜
┃⍣📥 _${usedPrefix}instagram_
┃⍣📥 _${usedPrefix}mediafire_
┃⍣📥 _${usedPrefix}gitclone_
┃⍣📥 _${usedPrefix}gdrive_
┃⍣📥 _${usedPrefix}tiktok_
┃⍣📥 _${usedPrefix}tiktokimg_
┃⍣📥 _${usedPrefix}twitter_
┃⍣📥 _${usedPrefix}fb_
┃⍣📥 _${usedPrefix}ytshort_
┃⍣📥 _${usedPrefix}ytmp3_
┃⍣📥 _${usedPrefix}ytmp4_
┃⍣📥 _${usedPrefix}ytmp3doc_
┃⍣📥 _${usedPrefix}ytmp4doc_
┃⍣📥 _${usedPrefix}videodoc_
┃⍣📥 _${usedPrefix}dapk2_
┃⍣📥 _${usedPrefix}stickerpack_
┃⍣📥 _${usedPrefix}play *<texto>*_
┃⍣📥 _${usedPrefix}play2 *<texto>*_
┃⍣📥 _${usedPrefix}play.1 *<texto>*_
┃⍣📥 _${usedPrefix}play.2 *<texto>*_
┃⍣📥 _${usedPrefix}playdoc *<texto>*_
┃⍣📥 _${usedPrefix}playdoc2 *<texto>*_
┃⍣📥 _${usedPrefix}playlist *<texto>*_
┃⍣📥 _${usedPrefix}spotify *<texto>*_
┃⍣📥 _${usedPrefix}ringtone *<texto>*_
┃⍣📥 _${usedPrefix}soundcloud *<texto>*_
┃⍣📥 _${usedPrefix}imagen *<texto>*_
┃⍣📥 _${usedPrefix}pinterest *<texto>*_
┃⍣📥 _${usedPrefix}wallpaper *<texto>*_
┃⍣📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
┃⍣📥 _${usedPrefix}igstalk *<nombre de usuario>*_
┃⍣📥 _${usedPrefix}igstory *<nombre de usuario>*_
┃⍣📥 _${usedPrefix}tiktokstalk *<username>*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *BUSCADORES* ━━⊜
┃⍣🔍 _${usedPrefix}githubsearch *<texto>*_
┃⍣🔍 _${usedPrefix}pelisplus *<texto>*_
┃⍣🔍 _${usedPrefix}modapk *<texto>*_
┃⍣🔍 _${usedPrefix}stickersearch *<texto>*_
┃⍣🔍 _${usedPrefix}stickersearch2 *<texto>*_
┃⍣🔍 _${usedPrefix}animeinfo *<texto>*_
┃⍣🔍 _${usedPrefix}google *<texto>*_
┃⍣🔍 _${usedPrefix}letra *<texto>*_
┃⍣🔍 _${usedPrefix}wikipedia *<texto>*_
┃⍣🔍 _${usedPrefix}ytsearch *<texto>*_
┃⍣🔍 _${usedPrefix}playstore *<texto>*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *CONVERTIDORES* ━━⊜
┃⍣🪁 ${usedPrefix}toimg
┃⍣🪁 ${usedPrefix}tomp3
┃⍣🪁 ${usedPrefix}toptt
┃⍣🪁 ${usedPrefix}tourl
┃⍣🪁 ${usedPrefix}tovideo
┃⍣🪁 ${usedPrefix}tts
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *AUDIOS-EFECTOS* ━━⊜
┃⍣🧭 ${usedPrefix}bass
┃⍣🧭 ${usedPrefix}blown
┃⍣🧭 ${usedPrefix}deep
┃⍣🧭 ${usedPrefix}earrape
┃⍣🧭 ${usedPrefix}fas
┃⍣🧭 ${usedPrefix}fast
┃⍣🧭 ${usedPrefix}nightcore
┃⍣🧭 ${usedPrefix}reverse
┃⍣🧭 ${usedPrefix}robot
┃⍣🧭 ${usedPrefix}slow
┃⍣🧭 ${usedPrefix}smooth
┃⍣🧭 ${usedPrefix}tupai
┃⍣🧭 ${usedPrefix}squirrel
┃⍣🧭 ${usedPrefix}chipmunk
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *HERRAMIENTAS* ━━⊜
┃⍣🌥 ${usedPrefix}acortar
┃⍣🌥 ${usedPrefix}qr
┃⍣🌥 ${usedPrefix}delete
┃⍣🌥 ${usedPrefix}readmore
┃⍣🌥 ${usedPrefix}styletext
┃⍣🌥 ${usedPrefix}ia
┃⍣🌥 ${usedPrefix}bard
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *JUEGOS-ANIMES* ━━⊜
┃⍣🎮 ${usedPrefix}mates
┃⍣🎮 ${usedPrefix}math
┃⍣🎮 ${usedPrefix}simi
┃⍣🎮 ${usedPrefix}suerte
┃⍣🎮 ${usedPrefix}ppt
┃⍣🎮 ${usedPrefix}tictactoe
┃⍣🎮️ ${usedPrefix}deltictactoe
┃⍣🎮️ ${usedPrefix}topgays
┃⍣🎮️ ${usedPrefix}topotakus
┃⍣🎮 ${usedPrefix}gay
┃⍣🎮 ${usedPrefix}doxear
┃⍣🎮️ ${usedPrefix}pregunta
┃⍣🎮️ ${usedPrefix}apostar
┃⍣🎮️ ${usedPrefix}slot
┃⍣🎮 ${usedPrefix}dado
┃⍣🎊️ ${usedPrefix}menuanimes 
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *GRUPOS - ON/OFF* ━━⊜
┃⍣🎋 _${usedPrefix}add *<numero>*_
┃⍣🎋 _${usedPrefix}kick *<@tag>*_
┃⍣🎋 _${usedPrefix}kick2 *<@tag>*_
┃⍣🎋 _${usedPrefix}listanum *<texto>*_
┃⍣🎋 _${usedPrefix}kicknum *<texto>*_
┃⍣🎋 _${usedPrefix}grupo *<abrir / cerrar>*_
┃⍣🎋 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┃⍣🎋 _${usedPrefix}promote *<@tag>*_
┃⍣🎋 _${usedPrefix}demote *<@tag>*_
┃⍣🎋 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┃⍣🎋 _${usedPrefix}demote *<@tag>*_
┃⍣🎋 _${usedPrefix}infogroup_
┃⍣🎋 _${usedPrefix}resetlink_
┃⍣🎋 _${usedPrefix}link_
┃⍣🎋 _${usedPrefix}setname *<texto>*_
┃⍣🎋 _${usedPrefix}setdesc *<texto>*_
┃⍣🎋 _${usedPrefix}invocar *<texto>*_
┃⍣🎋 _${usedPrefix}setwelcome *<texto>*_ 
┃⍣🎋 _${usedPrefix}setbye *<texto>*_
┃⍣🎋 _${usedPrefix}hidetag *<texto>*_
┃⍣🎋 _${usedPrefix}hidetag *<audio>*_
┃⍣🎋 _${usedPrefix}hidetag *<video>*_
┃⍣🎋 _${usedPrefix}hidetag *<imagen>*_
┃⍣🎋 _${usedPrefix}warn *<@tag>*_
┃⍣🎋 _${usedPrefix}unwarn *<@tag>*_
┃⍣🎋 _${usedPrefix}listwarn_
┃⍣🎋 _${usedPrefix}fantasmas_
┃⍣🎋 _${usedPrefix}destraba_
┃⍣🎋 _${usedPrefix}setpp *<imagen>*_
┃
┃⍣⚙️ ${usedPrefix}enable welcome
┃⍣⚙️ ${usedPrefix}disable welcome
┃⍣⚙️ ${usedPrefix}enable public
┃⍣⚙️ ${usedPrefix}disable public
┃⍣⚙️ ${usedPrefix}enble antilink
┃⍣⚙️ ${usedPrefix}disable antilink
┃⍣⚙️ ${usedPrefix}enable antilink2
┃⍣⚙️ ${usedPrefix}disable antilink2
┃⍣⚙️ ${usedPrefix}enable restrict
┃⍣⚙️ ${usedPrefix}disable restrict
┃⍣⚙️ ${usedPrefix}enable autoread
┃⍣⚙️ ${usedPrefix}disable autoread
┃⍣⚙️ ${usedPrefix}enable detect
┃⍣⚙️ ${usedPrefix}disable detect
┃⍣⚙️ ${usedPrefix}enable pconly
┃⍣⚙️ ${usedPrefix}disable pconly
┃⍣⚙️ ${usedPrefix}enable gconly
┃⍣⚙️ ${usedPrefix}disable gconly
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *RPG-STICKERS* ━━⊜
┃⍣✨️ ${usedPrefix}minar
┃⍣✨️ ${usedPrefix}minar3
┃⍣✨️ ${usedPrefix}minardiamantes
┃⍣✨️ ${usedPrefix}daily
┃⍣✨️ ${usedPrefix}work
┃⍣✨️ ${usedPrefix}afk
┃⍣✨️ ${usedPrefix}rob
┃⍣✨️ ${usedPrefix}limit
┃⍣✨️ ${usedPrefix}reg
┃⍣✨️ ${usedPrefix}unreg
┃⍣✨️ ${usedPrefix}myns
┃⍣✨️ ${usedPrefix}perfil
┃⍣✨️ ${usedPrefix}levelup
┃⍣⏳️ ${usedPrefix}s
┃⍣⏳️ ${usedPrefix}wm
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *FUNCIÓN-OWNER* ━━⊜
┃⍣🧑🏻‍💻 ${usedPrefix}update
┃⍣🧑🏻‍💻 ${usedPrefix}restart
┃⍣🧑🏻‍💻 ${usedPrefix}autoadmin
┃⍣🧑🏻‍💻 ${usedPrefix}leave
┃⍣🧑🏻‍💻 ${usedPrefix}salir
┃⍣🧑🏻‍💻 ${usedPrefix}cleartpm
┃⍣🧑🏻‍💻 ${usedPrefix}bc
┃⍣🧑🏻‍💻 ${usedPrefix}bcgc
┃⍣🧑🏻‍💻 ${usedPrefix}bcc
┃⍣🧑🏻‍💻 ${usedPrefix}banuser
┃⍣🧑🏻‍💻 ${usedPrefix}unbanuser
┃⍣🧑🏻‍💻 ${usedPrefix}comunicar
╰━━━━━━━━━━━━━━━━⋄`
function _0x2daf() {
    const _0x4c1076 = ['namedoc', 'social', '1017dFLzIP', '11680bWFOeX', 'sendMessage', '1FnTozH', '6qNtNxK', '445374chjKag', '2096504ySppGm', '627669MaFyqj', 'readFileSync', 'En breve se enviará el menú...', '374160lMCurS', '356228pujvOS', './storage/logos/MenuJS.jpg', '1019845zOpQQK', 'pdf', 'chat'];
    _0x2daf = function() {
        return _0x4c1076;
    };
    return _0x2daf();
}
const _0x110137 = _0x13bb; 
(function(_0x14d3d7, _0x67b65e) {
    const _0x3a56bf = {
            _0x2e964c: 0x1b0,
            _0x4fc539: 0x1bd,
            _0x2a1845: 0x1b1,
            _0x2b6724: 0x1b3,
            _0x4293cc: 0x1b8,
            _0x59080a: 0x1b9
        },
        _0x30692c = _0x13bb,
        _0x119b1c = _0x14d3d7();
    while (!![]) {
        try {
            const _0x181128 = parseInt(_0x30692c(0x1bb)) / 0x1 * (parseInt(_0x30692c(_0x3a56bf._0x2e964c)) / 0x2) + parseInt(_0x30692c(_0x3a56bf._0x4fc539)) / 0x3 + parseInt(_0x30692c(_0x3a56bf._0x2a1845)) / 0x4 + parseInt(_0x30692c(_0x3a56bf._0x2b6724)) / 0x5 * (parseInt(_0x30692c(0x1bc)) / 0x6) + -parseInt(_0x30692c(0x1ad)) / 0x7 + -parseInt(_0x30692c(0x1be)) / 0x8 + parseInt(_0x30692c(_0x3a56bf._0x4293cc)) / 0x9 * (-parseInt(_0x30692c(_0x3a56bf._0x59080a)) / 0xa);
            if (_0x181128 === _0x67b65e) break;
            else _0x119b1c['push'](_0x119b1c['shift']());
        } catch (_0x1caf7d) {
            _0x119b1c['push'](_0x119b1c['shift']());
        }
    }
}(_0x2daf, 0x235d2));

function _0x13bb(_0x16c7de, _0x1a27b8) {
const _0x2dafbc = _0x2daf();
return _0x13bb = function(_0x13bbaf, _0x156d41) {
_0x13bbaf = _0x13bbaf - 0x1ad;
let _0x1a2b8a = _0x2dafbc[_0x13bbaf];
return _0x1a2b8a;
}, _0x13bb(_0x16c7de, _0x1a27b8);
}
let buttonMessage = {
    'document': {
     'url': md,
    },
    'mimetype': td,
    'contextInfo': {
    'externalAdReply': {
    'showAdAttribution': !![],
            'mediaType': 0x1,
            'previewType': "PHOTO",
            'title': '𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭-𝐌𝐃!',
            'thumbnail': imagen1,
            'renderLargerThumbnail': !![],
            'sourceUrl': md
        }
    },
  'caption': menu['trim']()
}
await conn.sendMessage(m.chat, buttonMessage, {quoted: fkontak})
} catch {
conn.reply(m.chat, '*⚠️ El Menu Tiene Un Error, No Se Pudo Enviar. Pruebe Con El MenuCompleto: (.menucompleto)*', fpoll, m)
}}
handler.tags = ['main']
handler.command = /^(menu)$/i
handler.register = true
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function ucapan() {
    const time = moment.tz('America/Los_Angeled').format('HH')
    let res = "Hola Soy ZackyBot✨️"
    if (time >= 4) {
        res = "ZackyBot-MD🌻"
    }
    if (time > 10) {
        res = "By: Diego😺"
    }
    if (time >= 15) {
        res = "Siguenos En El Canal🪁"
    }
    if (time >= 18) {
        res = "Siguenos En GitHub🌥"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
    }