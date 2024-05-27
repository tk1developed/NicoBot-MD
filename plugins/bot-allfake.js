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

var img = fs.readFileSync('./media/menus/Alsombra.jpg');
var img2 = fs.readFileSync('./media/menus/Yoshi.jpg');
var img3 = fs.readFileSync('./media/menus/ImagenYoshi.jpg');
var img4 = fs.readFileSync('./media/menus/YoshiBot.jpg');
var img5 = fs.readFileSync('./media/menus/Sombra.jpg');

global.yoshiImg = [img, img2, img3, img4, img5].getRandom()

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: yoshiImg, sellerJid: '0@s.whatsapp.net' }}}

const moji = (await axios.get(`https://raw.githubusercontent.com/AzamiJs/CuriosityBot-MD/main/storage/juegos/emojis.json`)).data
const emoji = await moji[Math.floor(moji.length * Math.random())]

var credit = 'X8KpIFJlcXVlc3RlZCBieSBDdXJpb3NpdHlCb3Rf'
global.cred = Buffer.from(credit, 'base64')

global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")

//global.fake = { contextInfo:{ forwardingScore: 0, externalAdReply: {title: '👋 Hola ' + nombre, body: team, sourceUrl: yt, thumbnailUrl: yoshiImg }}} //Fake simple

global.fake = { contextInfo: { mentionedJid: conn.parseMention(wm), forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363263466636910@newsletter', serverMessageId: '', newsletterName: '✰્᭄͜͡ 𝐘𝐨𝐬𝐡𝐢𝐤𝐨 𝐁𝐨𝐭 - 𝐌𝐃 💖' }, externalAdReply: { title: wm, body: `👋 Hola ` + nombre, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: yoshiImg, thumbnail: yoshiImg, sourceUrl: yt }}}, { quoted: m } //fake con reenviado de canal
}

export default handler