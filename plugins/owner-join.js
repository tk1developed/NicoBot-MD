import fs from 'fs' 
import { execSync } from 'child_process'
import { spawn } from 'child_process'
import chalk from "chalk" 
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, command, usedPrefix, text, isAdmin, isOwner, isROwner, participants, groupMetadata  }) => {
let fkontak, who, user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img
fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${conn.user.jid.split('@')[0]}:${conn.user.jid.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const isCommand1 = /^(join|nuevogrupo|newgrupo|unete)$/i.test(command)

async function reportError(e) {
await m.reply(`🍃 Error`)
console.log(`🍃 Error`)
console.log(e)
}

case isCommand1:
user = m.sender.split('@')[0] 
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_1, code1] = link.match(linkRegex) || []
if (!code1) return m.reply(lenguajeYL.smsJoin1(usedPrefix, command))
try {      
if ( isOwner || m.fromMe) {
await m.reply(lenguajeYL.smsJoin2())
let res1 = await conn.groupAcceptInvite(code1)
await conn.sendMessage(res1, { text: lenguajeYL.smsJoin(user), mentions: (await conn.groupMetadata(`${res1}`)).participants.map(v => v.id) }, [user], { quoted: fkontak })
}} catch (e) {
reportError(e)
}        
break

}}
handler.command = /^(join|nuevogrupo|newgrupo|unete)$/i
handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const delay = time => new Promise(res => setTimeout(res, time))