const { useMultiFileAuthState, DisconnectReason, makeCacheableSignalKeyStore, fetchLatestBaileysVersion} = (await import('@whiskeysockets/baileys'))
import qrcode from 'qrcode'
import NodeCache from 'node-cache'
import fs from 'fs'
import path from 'path'
import pino from 'pino'
import util from 'util' 
import * as ws from 'ws'
const { child, spawn, exec } = await import('child_process')
const { CONNECTING } = ws
import { makeWASocket } from '../lib/simple.js'

let check1 = 'NjBhZGVmZWI4N2M2'
let check2 = 'ZThkMmNkOGVlMDFmZD'
let check3 = 'UzYTI1MTQgIGluZ'
let check4 = 'm8tZG9uYXIuanMK'
let check5 = 'NzZjM2ZmMzU2MTEyMzM3OTczOWU5ZmFmMDZjYzUzO'
let check6 = 'DcgIF9hdXRvcmVzcG9uZGVyLmpzCjU5Yzc0ZjFjNmEz'
let check8 = 'NjNmYmJjYzA1YmFiY2MzZGU4MGRlICBpbmZvLWJvdC5qcwo'

let crm1 = 'Y2QgcGx1Z2lucy'
let crm2 = 'A7IG1kNXN1b'
let crm3 = 'SBpbmZvLWRvbmFyLmpz'
let crm4 = 'IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz'
let drm1 = ''
let drm2 = ''
let rtx = `╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•\n│⌑╔•  •───────────────────•  •╗\n│⌑║ \`SUBBOT QR - ExoticoBot-MD\`\n│⌑╚•  •───────────────────•  •╝\n│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ\n│⌑┃https://atom.bio/exotico-ofc\n│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ\n╰────────────────────────•\n\n_*╭❲1️⃣❳╯ Ingrese a WhatsApp y presioné los 3 puntos ubicados en la parte superior de WhatsApp.*_\n•───────────────•\n*_╭❲2️⃣❳╯ Seleccione la opcion de_* \`Dispositivos Vinculados\`\n•───────────────•\n*_╭❲3️⃣❳╯ Y seleccione en_* \`Vincular un Dispositivo\`\n•───────────────•\n*_╭❲4️⃣❳╯ Escanea el_* \`codigo QR\` *_para contectarte._*\n•───────────────•\n*_╭❲5️⃣❳╯ Ya estarias conectado exitosamente!!_*\n• *_De lo contrario, reporta el error ocurrente._*\n•───────────────•\n©By: ExoticoBot-MD` 
let rtx2 = `╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•\n│⌑╔•  •───────────────────•  •╗\n│⌑║ \`SUBBOTCODE - ExoticoBot-MD\`\n│⌑╚•  •───────────────────•  •╝\n│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ\n│⌑┃https://atom.bio/exotico-ofc\n│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ\n╰────────────────────────•\n\n_*╭❲1️⃣❳╯ Copie el código de 8 dígitos que se enviara a continuación.*_\n•───────────────•\n*_╭❲2️⃣❳╯ Presiona la notificación que sale arriba, y pega el codigo de 8 digitos._*\n•───────────────•\n*_╭❲3️⃣❳╯ Ya estarías conectado al bot con éxito._*\n•───────────────•\n*_╭❲4️⃣❳╯ De lo contrario, si no sale la notificación o no se pudo vincular, reportalo al creador del bot._*\n•───────────────•\n©By: ExoticoBot-MD` 

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
let parentw = conn
if (conn.user.jid !== global.conn.user.jid) return parentw.reply(m.chat, `┕❲📢❳┙ 𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤𝙡𝙤 𝙡𝙤 𝙥𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 𝙚𝙣 𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 𝙙𝙚 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩\n\n┕❲🌐❳┙ 𝙉𝙐𝙈𝙀𝙍𝙊: Wa.me/${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}`, fkontak)
const mcode = args[0] && args[0].includes('--code') ? true : args[1] && args[1].includes('--code') ? true : false


let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`
if (mcode) {
args[0] = args[0].replace('--code', '').trim()
if (args[1]) args[1] = args[1].replace('--code', '').trim()
if (args[0] == '') args[0] = undefined
console.log(args[0])}
if (!fs.existsSync('./MultiBotOFC/'+ id)){
fs.mkdirSync('./MultiBotOFC/'+ id, { recursive: true })}
args[0] && args[0] != undefined ? fs.writeFileSync('./MultiBotOFC/' + id + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0], 'base64').toString('utf-8')), null, '\t')) : ''

if (fs.existsSync('./MultiBotOFC/' + id + '/creds.json')) {
let creds = JSON.parse(fs.readFileSync("./MultiBotOFC/" + id + "/creds.json"))
if (creds) {
if (creds.registered = false) {
fs.unlinkSync('./MultiBotOFC/' + id + '/creds.json')
}}}

const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, 'base64')
exec(comb.toString('utf-8'), async (err, stdout, stderr) => {
const drmer = Buffer.from(drm1 + drm2, `base64`)
async function jddt() {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`
if (!fs.existsSync('./MultiBotOFC/'+ id)){
fs.mkdirSync('./MultiBotOFC/'+ id, { recursive: true })
}
args[0] ? fs.writeFileSync('./MultiBotOFC/' + id + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0], 'base64').toString('utf-8')), null, `\t`)) : ''

let { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
const { state, saveState, saveCreds } = await useMultiFileAuthState("./MultiBotOFC/" + id)

const connectionOptions = {
printQRInTerminal: false,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
msgRetry,
msgRetryCache,
version,
syncFullHistory: true,
browser: mcode ? ['Ubuntu', 'Chrome', '110.0.5585.95'] : ['Sub-Bot', 'Opera', '5.0'],
defaultQueryTimeoutMs: undefined,
getMessage: async (key) => {
if (store) {
const msg = store.loadMessage(key.remoteJid, key.id)
return msg.message && undefined
} return {
conversation: 'ExoticoBot-MD',
}}}

let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) conn.isInit = false
if (qr && !mcode) return parentw.sendMessage(m.chat, { image: await qrcode.toBuffer(qr, { scale: 8 }), caption: rtx + drmer.toString('utf-8')}, { quoted: fkontak})
if (qr && mcode) {
parentw.sendMessage(m.chat, {text : rtx2 + drmer.toString('utf-8')}, { quoted: fkontak })
await sleep(5000)
let secret = await conn.requestPairingCode((m.sender.split`@`[0]))
await m.reply(secret)}
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
console.log(code)
const endSesion = async (loaded) => {
if (!loaded) {
try {
conn.ws.close()
} catch {
}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)                
if (i < 0) return 
delete global.conns[i]
global.conns.splice(i, 1)
}}

const reason = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (connection === 'close') {
console.log(reason)
if (reason == 405) {
await fs.unlinkSync('./MultiBotOFC/' + id + '/creds.json')

return await conn.reply(m.chat, '┕❲♻️❳┙ 𝘾𝙚𝙧𝙧𝙖𝙣𝙙𝙤 𝙡𝙖 𝙨𝙚𝙨𝙞𝙤𝙣 𝙙𝙚𝙡 𝙗𝙤𝙩...', fkontak)
}
if (reason === DisconnectReason.restartRequired) {
jddt()
return console.log('┕❲☁️❳┙ 𝘼𝙗𝙧𝙞𝙨𝙩𝙚 𝙪𝙣𝙖 𝙣𝙪𝙚𝙫𝙖 𝙨𝙚𝙨𝙞𝙤𝙣, 𝙗𝙤𝙧𝙧𝙖 𝙡𝙖 𝙨𝙚𝙨𝙞𝙤𝙣 𝙖𝙘𝙩𝙪𝙖𝙡 𝙙𝙚 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩 𝙚𝙣 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝙥𝙖𝙧𝙖 𝙚𝙫𝙞𝙩𝙖𝙧 𝙚𝙧𝙧𝙤𝙧𝙚𝙨.')
} else if (reason === DisconnectReason.loggedOut) {
sleep(4000)
return conn.reply(m.chat, '┕❲💻❳┙ 𝘾𝙤𝙣𝙚𝙭𝙞𝙤𝙣 𝙘𝙚𝙧𝙧𝙖𝙙𝙖, 𝙪𝙨𝙖 𝙚𝙨𝙩𝙤𝙨 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨:\n\n_#deletesession_\n\n_#esubbot_\n_#esubbot --code_', fkontak)
} else if (reason == 428) {
await endSesion(false)
return conn.reply(m.chat, '┕❲📢❳┙ 𝘾𝙤𝙣𝙚𝙭𝙞𝙤𝙣 𝙘𝙚𝙧𝙧𝙖𝙙𝙖, 𝙧𝙚𝙘𝙤𝙣𝙚𝙘𝙩𝙖𝙣𝙙𝙤...', fkontak)
} else if (reason === DisconnectReason.connectionLost) {
await jddt()
return console.log('┕❲⚠️❳┙ 𝘾𝙤𝙣𝙚𝙭𝙞𝙤𝙣 𝙥𝙚𝙧𝙙𝙞𝙙𝙖 𝙘𝙤𝙣 𝙚𝙡 𝙨𝙚𝙧𝙫𝙞𝙙𝙤𝙧, 𝙧𝙚𝙘𝙤𝙣𝙚𝙘𝙩𝙖𝙣𝙙𝙤...')
} else if (reason === DisconnectReason.badSession) {
return await conn.reply(m.chat, '┕❲📢❳┙ 𝘾𝙤𝙣𝙚𝙭𝙞𝙤𝙣 𝙘𝙚𝙧𝙧𝙖𝙙𝙖 𝙥𝙤𝙧 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤, 𝙩𝙚𝙣𝙙𝙧𝙖𝙨 𝙦𝙪𝙚 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙘𝙤𝙣𝙚𝙘𝙩𝙖𝙧𝙩𝙚 𝙪𝙨𝙖𝙣𝙙𝙤 𝙡𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨...', fkontak)
} else if (reason === DisconnectReason.timedOut) {
await endSesion(false)
return console.log('┕❲☁️❳┙ 𝙏𝙞𝙚𝙢𝙥𝙤 𝙙𝙚 𝙚𝙨𝙥𝙚𝙧𝙖 𝙘𝙖𝙙𝙪𝙘𝙖𝙙𝙖, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤...')
} else {
console.log('┕❲⚠️❳┙ 𝙍𝙖𝙯𝙤𝙣 𝙙𝙚 𝙚𝙧𝙧𝙤𝙧 𝙙𝙚𝙨𝙘𝙤𝙣𝙤𝙘𝙞𝙙𝙤: ${reason || ""} >> ${connection || ""}')
}}
if (global.db.data == null) loadDatabase()
if (connection == `open`) {
conn.isInit = true
global.conns.push(conn)
await parentw.sendMessage(m.chat, {text : args[0] ? `┕❲✅❳┙ 𝘾𝙤𝙣𝙚𝙘𝙩𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤 𝙖 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿` : `┕❲✅❳┙ 𝙎𝙚𝙧𝘽𝙤𝙩 𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!`}, { quoted: fkontak })
await parentw.sendMessage(m.chat, {text : `┕❲♻️❳┙ 𝘽𝙤𝙩 𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤...`}, { quoted: fkontak })
await sleep(5000)
if (!args[0]) parentw.sendMessage(m.chat, {text : usedPrefix + command + ' ' + Buffer.from(fs.readFileSync('./MultiBotOFC/' + id + '/creds.json'), 'utf-8').toString('base64')}, { quoted: fkontak })    

}}
setInterval(async () => {
if (!conn.user) {
try { conn.ws.close() } catch (e) {      
console.log(await creloadHandler(true).catch(console.error))
}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)                
if (i < 0) return
delete global.conns[i]
global.conns.splice(i, 1)
}}, 60000)

let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler

} catch (e) {
console.error(e)
}
if (restatConn) {
const oldChats = conn.chats
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions, { chats: oldChats })
isInit = true
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
conn.welcome = `╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•\n│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ\n│⌑┃ ⧏❪̣࣭̇࣪𝆭·ฺ۪۟𖡎𝆭｡𝆹𝅥𝘌ฺ𝙭𝆭𝙤𝘵ฺ𝘪𝘤𝆭𝙤𝘉𝆭𝙤ฺ𝙩-𝗠ฺ𝖣𝆹𝅥𖣠ᮬ𝆭·̣̇͜᭺⧐\n│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ\n╰────────────────────────•\n\n❮🎉❯ 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤(𝙖) @user\n𝙜𝙧𝙖𝙘𝙞𝙖𝙨 𝙥𝙤𝙧 𝙚𝙨𝙩𝙖𝙧 𝙖𝙦𝙪𝙞.\n\n⎔ GRUPO: @subject\n\n❮🍁❯ 𝙇𝙚𝙖 𝙡𝙖 𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤:\n${String.fromCharCode(8206).repeat(850)}\n@desc`
conn.bye = `╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•\n│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ\n│⌑┃ ⧏❪̣࣭̇࣪𝆭·ฺ۪۟𖡎𝆭｡𝆹𝅥𝘌ฺ𝙭𝆭𝙤𝘵ฺ𝘪𝘤𝆭𝙤𝘉𝆭𝙤ฺ𝙩-𝗠ฺ𝖣𝆹𝅥𖣠ᮬ𝆭·̣̇͜᭺⧐\n│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ\n╰────────────────────────•\n\n❮👋🏻❯ 𝘼𝙙𝙞𝙤𝙨 𝙪𝙨𝙪𝙖𝙧𝙞𝙤(𝙖): @user\n\n• No te extrañaremos.`
conn.spromote = `╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•\n│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ\n│⌑┃ ⧏❪̣࣭̇࣪𝆭·ฺ۪۟𖡎𝆭｡𝆹𝅥𝘌ฺ𝙭𝆭𝙤𝘵ฺ𝘪𝘤𝆭𝙤𝘉𝆭𝙤ฺ𝙩-𝗠ฺ𝖣𝆹𝅥𖣠ᮬ𝆭·̣̇͜᭺⧐\n│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ\n╰────────────────────────•\n\n❮🐦‍🔥❯ 𝙉𝙪𝙚𝙫𝙤 𝙖𝙙𝙢𝙞𝙣 𝙖𝙨𝙞𝙜𝙣𝙖𝙙𝙤 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤!!!\n\n⎕ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢: @user`
conn.sdemote = `╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•\n│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ\n│⌑┃ ⧏❪̣࣭̇࣪𝆭·ฺ۪۟𖡎𝆭｡𝆹𝅥𝘌ฺ𝙭𝆭𝙤𝘵ฺ𝘪𝘤𝆭𝙤𝘉𝆭𝙤ฺ𝙩-𝗠ฺ𝖣𝆹𝅥𖣠ᮬ𝆭·̣̇͜᭺⧐\n│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ\n╰────────────────────────•\n\n❮🐦‍🔥❯ 𝙉𝙪𝙚𝙫𝙤 𝙖𝙙𝙢𝙞𝙣 𝙙𝙚𝙨𝙘𝙖𝙧𝙩𝙖𝙙𝙤(𝙖) 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤!!!\n\n⎕ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢: @user` 
conn.sDesc = `❪👥ฺ࣭࣪͘ꕸ▸ 𝙎𝙚 𝙝𝙖 𝙘𝙖𝙢𝙗𝙞𝙖𝙙𝙤 𝙡𝙖 𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙡𝙖 𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣 𝙖𝙝𝙤𝙧𝙖 𝙚𝙨: @desc`
conn.sSubject = `❪🌎ฺ࣭࣪͘ꕸ▸ 𝙎𝙚 𝙝𝙖 𝙘𝙖𝙢𝙗𝙞𝙖𝙙𝙤 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙖𝙝𝙤𝙧𝙖 𝙚𝙨: @subject`
conn.sIcon = `❪🌆ฺ࣭࣪͘ꕸ▸ 𝙎𝙀 𝙃𝘼 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙇𝘼 𝙁𝙊𝙏𝙊 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝘾𝙊𝙉 𝙀𝙓𝙄𝙏𝙊` 
conn.sRevoke = `❪🌐ฺ࣭࣪͘ꕸ▸ 𝙎𝙚 𝙝𝙖 𝙧𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙜𝙧𝙪𝙥𝙖𝙡, 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙖𝙝𝙤𝙧𝙖 𝙚𝙨: @revoke` 

conn.handler = handler.handler.bind(conn)
conn.participantsUpdate = handler.participantsUpdate.bind(conn)
conn.groupsUpdate = handler.groupsUpdate.bind(conn)
conn.onDelete = handler.deleteUpdate.bind(conn)
conn.onCall = handler.callUpdate.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

const currentDateTime = new Date()
const messageDateTime = new Date(conn.ev * 1000)
if (currentDateTime.getTime() - messageDateTime.getTime() <= 300000) {
console.log('┕❲☁️❳┙ 𝙀𝙭𝙖𝙢𝙞𝙣𝙖𝙣𝙙𝙤 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙣𝙩𝙧𝙨𝙣𝙩𝙧𝙚𝙨...', conn.ev)
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = false
})
} else {
console.log(conn.chats, `┕❲⌨️❳┙ 𝙇𝙚𝙮𝙚𝙣𝙙𝙤 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙧𝙚𝙨𝙩𝙖𝙣𝙩𝙚𝙨, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤...`, conn.ev)
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = true
})
}

conn.ev.on(`messages.upsert`, conn.handler)
conn.ev.on(`group-participants.update`, conn.participantsUpdate)
conn.ev.on(`groups.update`, conn.groupsUpdate)
conn.ev.on(`message.delete`, conn.onDelete)
conn.ev.on(`call`, conn.onCall)
conn.ev.on(`connection.update`, conn.connectionUpdate)
conn.ev.on(`creds.update`, conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
jddt()
})

} 
handler.help = [`esubbot`, `exotic`, `sersubbot`]
handler.tags = [`exoticosubbots`]
handler.command = /^(esubbot|exotic|sersubbot)/i
handler.register = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));}