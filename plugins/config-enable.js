var handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn);
throw false;
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn);
throw false;
}
chat.welcome = isEnable;
break;
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn);
throw false;
}
} else if (!isAdmin) {
global.dfail('admin', m, conn);
throw false;
}
chat.detect = isEnable;
break;
case 'detect2':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn);
throw false;
}
} else if (!isAdmin) {
global.dfail('admin', m, conn);
throw false;
}
chat.detect2 = isEnable;
break;
case 'simsimi':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.simi = isEnable;
break;
case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiporno = isEnable;
break;
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antidelete = isEnable;
break;
case 'public':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['self'] = !isEnable;
break;
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiLink = isEnable;
break;
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiLink2 = isEnable;
break;
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiviewonce = isEnable;
break;
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.modohorny = isEnable;
break;
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.modoadmin = isEnable;
break;
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.autosticker = isEnable;
break;
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.audios = isEnable;
break;
case 'restrict':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
      bot.restrict = isEnable;
break;
case 'audios_bot':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
bot.audios_bot = isEnable;      
break;
case 'autoread':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
global.opts['nyimak'] = isEnable;
break;
case 'autoread':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('rowner', m, conn);
throw false;
}
bot.autoread2 = isEnable;
//global.opts['autoread'] = isEnable;
break;
case 'pconly':
case 'privateonly':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['pconly'] = isEnable;
break;
case 'gconly':
case 'grouponly':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['gconly'] = isEnable;
break;
case 'swonly':
case 'statusonly':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['swonly'] = isEnable;
break;
case 'anticall':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
bot.antiCall = isEnable;
break;
case 'antiprivado':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
bot.antiPrivate = isEnable;
break;
case 'modejadibot':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
bot.modejadibot = isEnable;
break;
case 'antispam':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
bot.antispam = isEnable;
break;
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiToxic = isEnable;
break;
case 'game': case 'juegos': case 'fun': case 'ruleta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game = isEnable          
break;
case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break;
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiTraba = isEnable;
break;
case 'autolevelup': case 'autonivel': case 'nivelautomatico':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable;
break;
case 'antiarabes2':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiArab2 = isEnable;
break;
default:
if (!/[01]/.test(command)) return await conn.reply(m.chat, `╭━〔  𝐘𝐎𝐒𝐇𝐈𝐊𝐎 𝐁𝐎𝐓 🍄  〕⬣
┣☆ !enable welcome
┣☆ !disable welcome
┣☆ !enable public
┣☆ !disable public
┣☆ !enable privado
┣☆ !disable privado
┣☆ !enable juegos
┣☆ !disable juegos
┣☆ !enable modohorny
┣☆ !disable modohorny
┣☆ !enable antilink
┣☆ !disable antilink
┣☆ !enable antilink2
┣☆ !disable antilink2
┣☆ !enable detect
┣☆ !disable detect
┣☆ !enable detect2
┣☆ !disable detect2
┣☆ !enable restrict
┣☆ !disable restrict
┣☆ !enable autoread
┣☆ !disable autoread
┣☆ !enable audios
┣☆ !disable audios
┣☆ !enable autosticker
┣☆ !disable autosticker
┣☆ !enable antiviewonce
┣☆ !disable antiviewonce
┣☆ !enable antitoxic
┣☆ !disable antitoxic
┣☆ !enable reaction
┣☆ !disable reaction
┣☆ !enable antitraba
┣☆ !disable antitraba
┣☆ !enable pconly
┣☆ !disable pconly
┣☆ !enable gconly
┣☆ !disable gconly
┣☆ !enable anticall
┣☆ !disable anticall
┣☆ !enable antirabes
┣☆ !disable antirabes
┣☆ !enable antirabes2
┣☆ !disable antirabes
┣☆ !enable modoadmin
┣☆ !disable modoadmin
┣☆ !enable simsimi
┣☆ !disable simsimi
┣☆ !enable antispam
┣☆ !disable antispam
╰━━━━━━━━━━━━⬣`, m, fake, )
throw false
}
conn.reply(m.chat, `*${isEnable ? '❕' : '❗'} La función ${type} se a ${isEnable ? 'activado' : 'desactivado'} en ${isAll ? 'bot' : isUser ? '' : 'este chat.'}*`, m, fake, )

}
handler.help = ['en', 'dis'].map(v => v + 'able')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler