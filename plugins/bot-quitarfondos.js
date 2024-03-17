//Comando  De: GataBot-MD By: GataNina-Li

import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, args }) => {
let stiker = false
let json, key

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()
let media = await (uploadImage)(buffer)
json = await (await fetch(`https://aemt.me/removebg?url=${media}`)).json()
stiker = await sticker(false, json.url.result, global.packname, global.author)
} else if (text) {
json = await (await fetch(`https://aemt.me/removebg?url=${text.trim()}`)).json()
} else return m.reply(`*Responda A Una Imagen Que Quieras Quitarle El Fondo*`)

await mensajesEditados(conn, m, key)
await conn.sendMessage(m.chat, { text: waitt, edit: key })
await conn.sendMessage(m.chat, { image: { url: json.url.result }, caption: null }, { quoted: m })
await conn.sendFile(m.chat, stiker ? stiker : await sticker(false, json.url.result, global.packname, global.author), 'sticker.webp', '', null, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: packname, body: 'By: Diego 🌹', mediaType: 2, sourceUrl: global.channel, thumbnail: imagen4}}})
}
handler.command = /^(s?removesb)$/i
export default handler

const isUrl = (text) => {
const urlRegex = /^(https?):\/\/[^\s/$.?#]+\.(jpe?g|png)$/i
return urlRegex.test(text)
}

async function mensajesEditados(conn, m, key) {
const mensajes = [ waitt ]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}