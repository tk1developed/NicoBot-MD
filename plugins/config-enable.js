const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

  const optionsFull = `
• 𝗗𝗮𝗿 𝗯𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗮 𝗮𝗹 𝘂𝘀𝘂𝗮𝗿𝗶𝗼
⦑🪛⦒ ⤷ *_${usedPrefix}on welcome_*

• 𝘿𝙚𝙩𝙚𝙘𝙩𝙤𝙧 𝙙𝙚 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙘𝙞𝙤𝙣
⦑🪛⦒ ⤷ *_${usedPrefix}on detect_*

• 𝗥𝗲𝗲𝗻𝘃𝗶𝗮𝗿 𝗺𝗲𝗻𝘀𝗮𝗷𝗲𝘀 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗱𝗼𝘀
⦑🪛⦒ ⤷ *_${usedPrefix}on antidelete_*

• 𝗕𝗼𝘁 𝗽𝘂𝗯𝗹𝗶𝗰𝗼
⦑🪛⦒ ⤷ *_${usedPrefix}on public_*

• 𝗘𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝗲𝗻𝗹𝗮𝗰𝗲𝘀 𝗴𝗿𝘂𝗽𝗮𝗹𝗲𝘀
⦑🪛⦒ ⤷ *_${usedPrefix}on antilink_*

• 𝗘𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝘁𝗼𝗱𝗼𝘀 𝗹𝗼𝘀 𝗲𝗻𝗹𝗮𝗰𝗲𝘀
⦑🪛⦒ ⤷ *_${usedPrefix}on antilink2_*

• 𝗠𝗼𝗱𝗼 𝗵𝗼𝘁
⦑🪛⦒ ⤷ *_${usedPrefix}on modohorny_*

• 𝗥𝗲𝗮𝗰𝗰𝗶𝗼𝗻 𝗰𝗼𝗻 𝘀𝘁𝗶𝗰𝗸𝗲𝗿𝘀
⦑🪛⦒ ⤷ *_${usedPrefix}on stickers_*

• 𝗣𝗲𝗿𝗺𝗶𝘁𝗶𝗿 𝗷𝘂𝗲𝗴𝗼𝘀
⦑🪛⦒ ⤷ *_${usedPrefix}on game • game2_*

• 𝗕𝗼𝘁 𝘁𝗲𝗺𝗽𝗼𝗿𝗮𝗹
⦑🪛⦒ ⤷ *_${usedPrefix}on temporal_*

• 𝗦𝘂𝗯𝗶𝗿 𝗱𝗲 𝗻𝗶𝘃𝗲𝗹 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗮𝗺𝗲𝗻𝘁𝗲
⦑🪛⦒ ⤷ *_${usedPrefix}on autolevelup_*

• 𝗖𝗿𝗲𝗮𝗿 𝘀𝘁𝗶𝗰𝗸𝗲𝗿𝘀 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗼𝘀 (𝘮𝘢𝘯𝘥𝘢𝘳 𝘪𝘮𝘢𝘨𝘦𝘯)
⦑🪛⦒ ⤷ *_${usedPrefix}on autosticker_*

• 𝙍𝙚𝙖𝙘𝙘𝙞𝙤𝙣 𝙚𝙣 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨
⦑🪛⦒ ⤷ *_${usedPrefix}on reaction_*

• 𝘼𝙣𝙩𝙞 𝙩𝙤𝙭𝙞𝙘𝙤𝙨
⦑🪛⦒ ⤷ *_${usedPrefix}on antitoxic_*

• 𝙋𝙚𝙧𝙢𝙞𝙩𝙞𝙧 𝙖𝙪𝙙𝙞𝙤𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩
⦑🪛⦒ ⤷ *_${usedPrefix}on audios_*

• 𝙍𝙚𝙚𝙣𝙫𝙞𝙖𝙧 𝙪𝙡𝙩𝙞𝙢𝙖 𝙫𝙚𝙯
⦑🪛⦒ ⤷ *_${usedPrefix}on antiver_*

• 𝘼𝙣𝙩𝙞 𝙣𝙪𝙢𝙚𝙧𝙤𝙨
⦑🪛⦒ ⤷ *_${usedPrefix}on antifake_*

• 𝙋𝙚𝙧𝙢𝙞𝙩𝙞𝙧 𝙨𝙪𝙗 𝙗𝙤𝙩𝙨 𝙚𝙣 𝙚𝙡 𝙗𝙤𝙩
⦑🪛⦒ ⤷ *_${usedPrefix}on serbot_*

• 𝘼𝙘𝙩𝙞𝙫𝙖𝙧 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙘𝙞𝙤𝙣𝙚𝙨
⦑🪛⦒ ⤷ *_${usedPrefix}on restrict_*

• 𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙞𝙣𝙖𝙙𝙚𝙘𝙪𝙖𝙙𝙤
⦑🪛⦒ ⤷ *_${usedPrefix}on antiporno_*

• 𝙇𝙚𝙚𝙧 𝙖𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚 𝙡𝙤𝙨 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨
⦑🪛⦒ ⤷ *_${usedPrefix}on autoread_*

• 𝙇𝙚𝙚𝙧 𝙖𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚 𝙡𝙤𝙨 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨
⦑🪛⦒ ⤷ *_${usedPrefix}on autoread2_*

• 𝙉𝙤 𝙡𝙡𝙖𝙢𝙖𝙧 𝙖𝙡 𝙗𝙤𝙩
⦑🪛⦒ ⤷ *_${usedPrefix}on antillamar_*

• 𝙉𝙤 𝙝𝙖𝙘𝙚𝙧 𝙨𝙥𝙖𝙢 𝙚𝙣 𝙚𝙡 𝙘𝙝𝙖𝙩
⦑🪛⦒ ⤷ *_${usedPrefix}on antispam_*

• 𝙀𝙡 𝙗𝙤𝙩 𝙨𝙤𝙡𝙤 𝙘𝙤𝙣𝙩𝙚𝙨𝙩𝙖𝙧𝙖 𝙖 𝙡𝙤𝙨 𝙖𝙙𝙢𝙞𝙣𝙨
⦑🪛⦒ ⤷ *_${usedPrefix}on modoadmin_*

• 𝙀𝙡 𝙗𝙤𝙩 𝙨𝙤𝙡𝙤 𝙝𝙖𝙗𝙡𝙖𝙧𝙖 𝙚𝙣 𝙘𝙝𝙖𝙩𝙨 𝙥𝙧𝙞𝙫𝙖𝙙𝙤𝙨
⦑🪛⦒ ⤷ *_${usedPrefix}on pconly_*

• 𝙀𝙡 𝙗𝙤𝙩 𝙨𝙤𝙡𝙤 𝙝𝙖𝙗𝙡𝙖𝙧𝙖 𝙚𝙣 𝙘𝙝𝙖𝙩𝙨 𝙜𝙧𝙪𝙥𝙖𝙡𝙚𝙨
⦑🪛⦒ ⤷ *_${usedPrefix}on gconly_*

• 𝙉𝙤 𝙝𝙖𝙗𝙡𝙖𝙧 𝙖𝙡 𝙗𝙤𝙩 𝙚𝙣 𝙥𝙧𝙞𝙫𝙖𝙙𝙤
⦑🪛⦒ ⤷ *_${usedPrefix}on antiprivado_*

• 𝘾𝙝𝙖𝙩𝙜𝙥𝙩 𝙖𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙤
⦑🪛⦒ ⤷ *_${usedPrefix}on modoia_*
  `.trim();

const isEnable = /true|enable|(turn)?on|1/i.test(command);
const chat = global.db.data.chats[m.chat];
const user = global.db.data.users[m.sender];
const bot = global.db.data.settings[conn.user.jid] || {};
const type = (args[0] || '').toLowerCase();
let isAll = false; const isUser = false;
switch (type) {
case 'welcome': case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break

case 'detect': case 'avisos':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break

case 'antidelete': case 'antieliminar': case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break

case 'public': case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break

case 'antilink': case 'antienlace':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break

case 'antilink2': case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break

case 'antitiktok': case 'antitk': case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break

case 'antiyoutube': case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break

case 'antitelegram': case 'antitl': case 'antitele': case 'antitg': case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break

case 'antifacebook': case 'antifb': case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break

case 'antiinstagram': case 'antinstagram': case 'antiig': case 'antig': case 'antiinsta': case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break

case 'antitwitter': case 'antitw': case 'antitwit': case 'antitwter': case 'antitwiter': case 'antix':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break

case 'antidiscord':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiDiscord = isEnable 
break

case 'antithreads':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiThreads = isEnable 
break

case 'antitwitch':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitch = isEnable 
break

case 'modohorny': case 'modocaliente': case 'modehorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break

case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break

case 'game': case 'juegos': case 'fun':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game = isEnable          
break

case 'ruleta': case 'game2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game2 = isEnable          
break

case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break

case 'autolevelup': case 'autonivel': case 'nivelautomatico':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autolevelup = isEnable          
break

case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break

case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break

case 'antitoxic': case 'antitoxicos': case 'antimalos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitoxic = isEnable
break

case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break

case 'antiver': case 'modover': case 'modoobservar': case 'modobservar': case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break

case 'antiinternacional': case 'antinternacional': case 'antinternational': case 'antifake': case 'antifalsos': case 'antivirtuales': case 'antiextranjeros':                
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break

case 'jadibot': case 'modojadibot': case 'serbot': case 'modoserbot': 
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.jadibotmd = isEnable
break 

case 'restrict': case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break

case 'antiporn': case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiPorn = isEnable          
break

case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break

case 'autoread': case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break

case 'anticall': case 'antillamar':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break

case 'antispam':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.antiSpam = isEnable
break

case 'antispam2':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.antiSpam2 = isEnable
break

case 'modoadmin': case 'soloadmin': case 'modeadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    

case 'pconly': case 'privateonly': case 'soloprivados':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break

case 'gconly': case 'grouponly': case 'sologrupos':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'antiprivado': case 'antiprivate':
case 'privado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'antitrabas': case 'antitraba': case 'antilag':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'simi': case 'chatbot':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break
case 'modoia': case 'chatgpt': case 'ia':
isAll = true;
if (!isOwner) {
global.dfail('owner', m, conn);
throw false;
}
bot.modoia = isEnable;      
break;      

case 'swonly': case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: fkontak});
throw false;
}
await conn.reply(m.chat, `╭━〔  𝐘𝐎𝐒𝐇𝐈𝐊𝐎 𝐁𝐎𝐓 🍄  〕⬣
┃֪࣪🍁 𝙾𝙿𝙲𝙸𝙾𝙽: ${type} 
┃֪࣪━━━━━━━━━━━━━━━
┃֪࣪🌳 𝙴𝚂𝚃𝙰𝙳𝙾: ${isEnable ? '𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾' : '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾'}
┃֪࣪━━━━━━━━━━━━━━━
┃֪࣪🌻 𝙿𝙰𝚁𝙰: ${isAll ? '𝚈𝙾𝚂𝙷𝙸𝙺𝙾𝙱𝙾𝚃-𝙼𝙳' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'} 
╰━━━━━━━━━━━━━━━⬣`, fkontak, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: titulowm,
body: `ꪶໍٜ߭۫ިׅ࣪۬߭ׄ🍫̸̷᮫ᨘ۬ׄ߭ᤢꫂꥈ Hola! ` + nombre, previewType: 0, thumbnail: yoshiImg, sourceUrl: redesYoshi}}})} 

handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i;
export default handler;