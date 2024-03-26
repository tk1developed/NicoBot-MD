//jadibot adartado: @skid89
const { default: makeWASocket, makeInMemoryStore, useMultiFileAuthState, DisconnectReason, proto , jidNormalizedUser,WAMessageStubType, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, msgRetryCounterMap, makeCacheableSignalKeyStore, fetchLatestBaileysVersion } = require("@whiskeysockets/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')   
const yargs = require('yargs/yargs')   
const fs = require('fs')   
const FileType = import('file-type')   
const chalk = require('chalk')   
const path = require('path')   
const qrcode = require('qrcode')   
const NodeCache = require('node-cache')
const util = require('util')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/fuctions')   
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'storeV2' }) })   
const crm1 = 'SmFkaWJvdCBoZWNobyBwb3IgQHNraWR5ODkgcGFyYSBza2lkIGJvdCB5IGdhdGFwbHVz'
const crm2 = Buffer.from(crm1, 'base64')
const crm3 = crm2.toString('utf-8')
if (global.listJadibot instanceof Array) console.log()   
else global.listJadibot = []   

const jadibot = async (conn, m, command) => {
const { sendImage, sendMessage, decodeJid, getName } = conn
if (!global.db.data.settings[conn.user.jid].jadibot) return m.reply(`*⚠️ ESTE COMANDO ESTÁ DESACTIVADO POR MÍ PROPIETARIO(A)*`)
if (conn.user.jid !== global.numBot) return m.reply(`*🔵  PARA SER SUB BOT DIRÍJASE AL NÚMERO PRINCIPAL*\n*ღ https://api.whatsapp.com/send/?phone=${global.numBot.split`@`[0]}&text=${prefix}jadibot&type=phone_number&app_absent=0`) 
const { state, saveCreds, saveState } = await useMultiFileAuthState(path.join(__dirname, `./jadibts/${m.sender.split("@")[0]}`), pino({ level: "silent" }));   
try {
async function skBot() {
console.info = () => {}
let { version, isLatest } = await fetchLatestBaileysVersion()
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }), })
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()

const JadibotSettings = {
printQRInTerminal: true,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
msgRetry,
msgRetryCache,
version,
syncFullHistory: true,
browser: ['Sub Bot','Opera','5.0'],
defaultQueryTimeoutMs: undefined,
getMessage: async (key) => {
if (store) {
const msg = store.loadMessage(key.remoteJid, key.id)
return msg.message && undefined
} return {
conversation: 'simple bot',
}}}

const conn = makeWASocket(JadibotSettings)
conn.isBotInit = false
let skmod = conn

skmod.ev.on('messages.upsert', async chatUpdate => {   
try {   
chatUpdate.messages.forEach(async (mek) => {   
try {   
if (!mek.message) return   
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message   
if (mek.key && mek.key.remoteJid === 'status@broadcast') return   
if (!chatUpdate.type === 'notify') return   
m = smsg(conn, mek)   
require("./sakura")(conn, m, chatUpdate, mek)   
} catch (e) {   
console.log(e)   
}})
} catch (err) {   
console.log(err)   
}})   

let countQR = 0
let chatQR
skmod.ev.on('connection.update', async (up) => {     
if (countQR > 3) return; 
console.log('Ejecutar QR (jadibot)....'); 
const { lastDisconnect, connection, isNewLogin } = up; 
if (connection == 'connecting') return
if (connection) { 
if (connection != 'connecting')  
console.log('Connectando a Jadibot.')
}
if (isNewLogin) conn.isBotInit = false
if (up.qr) { 
countQR++;
if (countQR > 3) {
await m.reply(`*Código QR no escaneado, inténtalo de nuevo más tarde.*`, m.sender)    
await sendMessage(m.sender, { delete: chatQR.key })
sleep(5000)
skmod.ev.removeAllListeners()
} else {
try {
const sendQR = await sendImage(m.sender, 
await qrcode.toDataURL(up.qr, { scale: 8 }), '🟢 *_FUNCIÓN SER SUB BOT_* 🟢\n\n*➡️ Con otro celular o en la PC escanea este QR para convertirte en Sub Bot*\njadibot hecho por @Skidy89', m); 
if (chatQR) {
await sendMessage(m.sender, { delete: chatQR.key })
}
chatQR = sendQR
} catch (error) {
m.reply(util.format(error))
}}}

if (connection == "open") {   
let usuario = await conn.user.jid
global.listJadibot.push(skmod)   
await m.reply(`*Conectado con exito*\n\n× Usuario: ${skmod.user.name}\n× ID : ${conn.user.jid}\n\n*NOTA:* el bot se puede reiniciar si deja de recibir comandos use: ${prefix}jadibot para volver a conectarte`)    
}
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
const errorMessages = {
[DisconnectReason.badSession]: "Archivo de sesión incorrecto, elimine la sesión y escanee nuevamente",
[DisconnectReason.connectionClosed]: "Conexión cerrada, reconectando....",
[DisconnectReason.connectionLost]: "Conexión cerrada, reconectando....",
[DisconnectReason.connectionReplaced]: "Conexión reemplazada, otra nueva sesión abierta, cierre la sesión actual primero",
[DisconnectReason.loggedOut]: "Dispositivo desconectado, escanee nuevamente y ejecute....",
[DisconnectReason.restartRequired]: "Reiniciar requerido, reiniciar....",
[DisconnectReason.timedOut]: "CONEXIÓN PERDIDA, CONECTANDO....",
};

if (reason in errorMessages) {
console.log(errorMessages[reason]);
if (reason === DisconnectReason.badSession || reason === DisconnectReason.connectionReplaced || reason === DisconnectReason.loggedOut) {
skmod.logout()
var ur = global.listJadibot.indexOf(skmod) 
if (ur < 0) return
delete global.listJadibot(ur)
global.listJadibot.splice(ur, 1)
} else {
skBot();
}} else {
skmod.end(`Conexion perdida desconocida: ${reason}|${connection}`);
var u = global.listJadibot.indexOf(skmod) 
if (u < 0) return
delete global.listJadibot(u)
global.listJadibot.splice(u, 1)
}}})
skmod.ev.on("groups.update", async (json) => {
console.log(json)
const res = json[0];
let autoDetect = global.db.data.chats[res.id].autoDetect
if (!autoDetect) return
if (res.announce == true) {
await sleep(2000)
try {
ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `*¡Ahora solo los administradores pueden enviar mensajes!*`
skmod.sendMessage(res.id, {text: text,  
contextInfo:{forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": '[ 🔒 ＧＲＵＰＯ ＣＥＲＲＡＤＯ ]',   
"mediaType": 1,   
"thumbnail": global.imagen1,  
"mediaUrl": md,  
"sourceUrl": md 
}}}, { quoted: null })
} else if (res.announce == false) {
await sleep(2000)
try {
ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `*Ahora todos los participantes pueden mandar mensajes 🗣️*`
skmod.sendMessage(res.id, {text: text,  
contextInfo:{forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": '[ 🔓 ＧＲＵＰＯ ＡＢＩＥＲＴＯ ]',   
"mediaType": 1,   
"thumbnail": global.imagen1,  
"mediaUrl": md,  
"sourceUrl": md 
}}}, { quoted: null })
} else if (res.restrict == true) {
await sleep(2000)
try {
ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `*Ahora solo los administradores puede editar los ajuste del grupo*`
skmod.sendMessage(res.id, {text: text,  
contextInfo:{forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": info.advertencia, 
"mediaType": 1,   
"thumbnail": global.imagen1,  
"mediaUrl": md,  
"sourceUrl": md 
}}}, { quoted: null })
} else if (res.restrict == false) {
await sleep(2000)
try {
ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `*Ahora todos los participarte puede editar los ajuste del grupo*`
skmod.sendMessage(res.id, {text: text,  
contextInfo:{forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": info.advertencia, 
"mediaType": 1,   
"thumbnail": global.imagen1,  
"mediaUrl": md,  
"sourceUrl": md 
}}}, { quoted: null })
} else if(!res.desc == ''){
await sleep(2000)
try {
ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `*𝙇𝘼 𝙉𝙐𝙀𝙑𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎:*\n\n*𝙏𝙃𝙀 𝙉𝙀𝙒 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉 𝙊𝙁 𝙏𝙃𝙀 𝙂𝙍𝙊𝙐𝙋 𝙄𝙎 :*\n${res.desc}`
skmod.sendMessage(res.id, {text: text,  
contextInfo:{forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": info.advertencia, 
"mediaType": 1,   
"thumbnail": global.imagen1,  
"mediaUrl": md,  
"sourceUrl": md 
}}}, { quoted: null })
} else {
await sleep(2000)
try {
ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `*𝙀𝙇 𝙉𝙐𝙀𝙑𝙊 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎:*\n\n*𝙏𝙃𝙀 𝙉𝙀𝙒 𝙉𝘼𝙈𝙀 𝙊𝙁 𝙏𝙃𝙀 𝙂𝙍𝙊𝙐𝙋 𝙄𝙎 :*\n${res.subject}`
skmod.sendMessage(res.id, {text: text,  
contextInfo:{forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": info.advertencia, 
"mediaType": 1,   
"thumbnail": global.imagen1,  
"mediaUrl": md,  
"sourceUrl": md 
}}}, { quoted: null })
}})

skmod.ev.on('group-participants.update', async (anu) => {
let isWelcome = global.db.data.chats[anu.id].welcome
if (!isWelcome) return
console.log(anu)
try {
let metadata = await skmod.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
// Get Profile Picture User
try {
ppuser = await skmod.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

//Profile
try {
ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

if (anu.action == 'add') {
skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `*╭┈⊰* ${metadata.subject} *⊰┈ ✦*\n*┃✨ BIENVENIDO(A)!!*\n┃💖 @${num.split("@")[0]}\n┃📄 *LEA LA DESCRIPCIÓN DEL GRUPO*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦\n\n${metadata.desc}`})
} else if (anu.action == 'remove') {
skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┃ @${num.split("@")[0]}\n┃ *NO LE SABE AL GRUPO, CHAO!!* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*`})
} else if (anu.action == 'promote') {
skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `*@${num.split("@")[0]} 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!*\n\n*𝙉𝙊𝙒 𝙃𝙀 𝙄𝙎 𝘼𝘿𝙈𝙄𝙉 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋!!*`})
} else if (anu.action == 'demote') {
skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `*@${num.split("@")[0]} 𝘿𝙀𝙅𝘼 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!*\n\n*𝙎𝙏𝙊𝙋 𝘽𝙀𝙄𝙉𝙂 𝘼𝘿𝙈𝙄𝙉 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋*`})
}}} catch (err) {
console.log(err)
}})
conn.ev.on('creds.update', saveCreds)   
store.bind(conn.ev);   
}

skBot()
} catch (e) {
m.reply(util.format(e))
}}

module.exports = { jadibot, listJadibot }

let file = require.resolve(__filename)   
fs.watchFile(file, () => {   
fs.unwatchFile(file)   
console.log(chalk.redBright(`Update ${__filename}`))   
delete require.cache[file]   
require(file)   
})