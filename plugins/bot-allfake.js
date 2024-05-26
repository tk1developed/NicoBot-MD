import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
//let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')

/* 
Mensajes Fakes
*/

global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

var img = 'https://telegra.ph/file/990a21926fc608ec26dd3.jpg';
var img1 = 'https://telegra.ph/file/335eba6ffc2f8e2197cc3.jpg';
var img2 = 'https://telegra.ph/file/c435c48a55edbfe4f390b.jpg';
var img3 = 'https://telegra.ph/file/2ce374abef0541010a65d.jpg';
var img4 = 'https://telegra.ph/file/986b010ced2811f300abb.jpg';

global.yoshiImg = [img, img1, img2, img3, img4].getRandom()

const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: yoshiImg, sellerJid: '0@s.whatsapp.net' }}}

const moji = (await axios.get(`https://raw.githubusercontent.com/AzamiJs/CuriosityBot-MD/main/storage/juegos/emojis.json`)).data
const emoji = await moji[Math.floor(moji.length * Math.random())]

var credit = 'X8KpIFJlcXVlc3RlZCBieSBDdXJpb3NpdHlCb3Rf'
global.cred = Buffer.from(credit, 'base64')

global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")

//global.fake = { contextInfo:{ forwardingScore: 0, externalAdReply: {title: '👋 Hola ' + nombre, body: team, sourceUrl: yt, thumbnailUrl: imagen6 }}} //Fake simple

global.fake = { contextInfo: { mentionedJid: conn.parseMention(wm), forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363263466636910@newsletter', serverMessageId: '', newsletterName: '👋 Hola ' + nombre }, externalAdReply: { title: wm + ` 💫`, body: team, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: imagen6, thumbnail: imagen6, sourceUrl: yt }}}, { quoted: m } //fake con reenviado de canal
}

export default handler