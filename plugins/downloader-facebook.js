import fetch from 'node-fetch'
import { facebook } from '@xct007/frieren-scraper'

var handler = async (m, { conn, args, command, usedPrefix, text }) => {

let vid
const isCommand7 = /^(facebook|fb|facebookdl|fbdl)$/i.test(command)

async function reportError(e) {
await conn.reply(m.chat, `✏️ 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁`, m, fake, )
console.log(`✏️ 𝙴𝚁𝚁𝙾𝚁 𝙴𝙽: ${usedPrefix + command} ⚠️\n`)
console.log(e)
}

switch (true) {   
case isCommand7:
if (!text) return conn.reply(m.chat, `✏️ *Ingrese un enlace de facebook*\n\nEjemplo, !fb https://fb.watch/kAOXy3wf2L/?mibextid=Nif5oz`, m, fake, )
if (!args[0].match(/www.facebook.com|fb.watch|web.facebook.com|business.facebook.com|video.fb.com/g)) return conn.reply(m.chat, '✏️ *ᥒ᥆ ᥱs ᥙᥒ ᥱᥒᥣᥲᥴᥱ ᥎ᥲ́ᥣіძ᥆*', m, fake, )
await conn.reply(m.chat, '✏️ 𝐄𝐬𝐩𝐞𝐫𝐞 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨...', m, fake, )
m.react('🕒')
let messageType = checkMessageType(args[0])
let message = ''
switch (messageType) {
case 'groups':
message = '𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 ✏️'
break
case 'reel':
message = '𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚁𝙴𝙴𝙻𝚂 𝙳𝙴 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 ✏️'
break
case 'stories':
message = '𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝙷𝙸𝚂𝚃𝙾𝚁𝙸𝙰𝚂 𝙳𝙴 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 ✏️'
break
case 'posts':
message = '𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙴 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 ✏️'
break
default:
message = '𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 ✏️'
break
}
try {
let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=BrunoSobrino&url=${args[0]}`)
let _json = await res.json()
vid = _json.result[0]
if (vid == '' || !vid || vid == null) vid = _json.result[1]
await conn.sendFile(m.chat, vid, 'error.mp4', `*${message}*`, m)
} catch (error1) {
try {
const d2ata = await facebook.v1(args[0])
let r2es = ''
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`
}
await conn.sendFile(m.chat, r2es, 'error.mp4', `*${message}*`, m)
} catch (error2) {
try {
var get = await fetch(`https://api.botcahx.live/api/dowloader/fbdown?url=${args[0]}&apikey=QaepQXxR`)
var js = await get.json()
await conn.sendFile(m.chat, js.result.HD, 'error.mp4', `*${message}*`, m)
} catch (e) {
reportError(e)}
}}}

}
handler.help = ['fb']
handler.tags = ['descargas']
handler.command = /^(facebook|fb|facebookdl|fbdl)$/i

handler.register = true
//handler.diamond = true

export default handler

function checkMessageType(url) {
if (url.includes('www.facebook.com')) {
if (url.includes('/groups/')) {
return 'groups'
} else if (url.includes('/reel/')) {
return 'reel'
} else if (url.includes('/stories/')) {
return 'stories'
} else if (url.includes('/posts/')) {
return 'posts'
}}
return 'default'
}