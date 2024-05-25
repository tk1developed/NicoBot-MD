import { createHash } from 'crypto'  
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i 
let handler = async function (m, { conn, text, usedPrefix, command }) {
let codigosIdiomas = ['es']
let nombresIdiomas = {
'es': 'Español',
}

let yoshiImg = ['imagen6', 'imagen2']

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => yoshiImg.getRandom())

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
} 
let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let user = global.db.data.users[m.sender]

if (/^(verify|verificar|reg(ister)?)$/i.test(command)) {
if (user.registered === true) return m.reply('*')
if (!Reg.test(text)) return m.reply('**')
let [_, name, splitter, age] = text.match(Reg)  
if (!name) return m.reply('***')
if (!age) return m.reply('****')
age = parseInt(age)
if (age > 50) return m.reply('*****') 
if (age < 10) return m.reply('******')
if (name.length >= 30) return m.reply('********')
user.name = name + 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'.trim()
user.age = age
let listaIdiomasTexto = ''
listaIdiomasTexto += '*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄୭̥⋆*｡*\n' 
listaIdiomasTexto += '*┆ 🌐 IDIOMA DINÁMICO 🌐*\n' 
listaIdiomasTexto += '*┆┄┄┄┄┄┄┄┄┄┄┄┄┄┄୭̥⋆*｡*\n' 
codigosIdiomas.forEach((codigo, index) => {
listaIdiomasTexto += `*┆* \`\`\`[ ${index + 1} ] » ${nombresIdiomas[codigo]}\`\`\`\n`
})
listaIdiomasTexto += '*╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄୭̥⋆*｡*\n'    
let genText = `🌟 *NUEVA FUNCIÓN - MULTI LENGUAJE DINÁMICO (BETA)*\n
👉 *ESCRIBA EL NÚMERO PARA ELEGIR EL IDIOMA, EJEMPLO:*
✓ \`\`\`${usedPrefix}idiomayl 1️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomayl 1\`\`\`\n
${listaIdiomasTexto}
⚠️ *TENGA EN CONSIDERACIÓN QUE EL IDIOMA QUE SELECCIONE ${packname} SE ENCARGARÁ DE INTERACTUAR EN DICHO IDIOMA, SI SU IDIOMA NO APARECE SOLICITE QUE SE AGREGUE*\n${ig}\n
❇️ *SU REGISTRO ESTÁ EN PAUSA, COMPLETE EL IDIOMA PARA CONTINUAR*`
await conn.sendMessage(m.chat, { text: genText }, { quoted: m })        
} 

if (command == 'idiomayl') {        
if (!user.name || !user.age) return conn.sendMessage(m.chat, { text: `*REGISTRE SU NOMBRE Y EDAD PARA PODER USAR ESTE COMANDO*` }, { quoted: m })   
var emojiANumero = { "0️⃣": "0", "1️⃣": "1" }
text = text.replace(/[\u{0030}-\u{0039}]\u{FE0F}\u{20E3}/gu, function(match) {
return emojiANumero[match] || match
})
let idioma = ''
async function asignarIdioma(text) { 
if (!text) return conn.sendMessage(m.chat, { text: `*ESCRIBA UN NÚMERO PARA ELEGIR EL IDIOMA, EJEMPLO:*\n\n✓ \`\`\`${usedPrefix}idiomayl 1️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomayl 1\`\`\`` }, { quoted: m })          
if (text < 1 || (text > codigosIdiomas.length && text)) {
conn.reply(m.chat, `"${text}" NO ES VÁLIDO PARA ELEGIR, RECUERDE USAR EL EMOJI NUMÉRICO O TEXTO NUMÉRICO PARA SELECCIONAR EL IDIOMA, EJEMPLO:*\n\n✓ \`\`\`${usedPrefix}idiomayl 1️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomayl 1\`\`\``, m) 
}
switch (text) {
case "1️⃣":
case "1":
idioma = 'es'
break
default:
if (text == 0 || text > codigosIdiomas.length) return
return conn.reply(m.chat, `*RECUERDE USAR EL EMOJI NUMÉRICO O TEXTO NUMÉRICO PARA SELECCIONAR EL IDIOMA, EJEMPLO*\n\n✓ \`\`\`${usedPrefix}idiomayl 1️⃣\`\`\`\n✓ \`\`\`${usedPrefix}idiomayl 1\`\`\``, m)
}}
await asignarIdioma(text)
user.GBLanguage = idioma
if (!user.GBLanguage) return m.reply(`*NO SE LOGRÓ CONFIGURAR EL IDIOMA, INTENTE DE NUEVO POR FAVOR*`)
if (codigosIdiomas.includes(user.YLLanguage)) {
nombresIdiomas = nombresIdiomas[user.YLLanguage]
} else {
nombresIdiomas = `IDIOMA NO DETECTADO`
}  
await m.reply(`*EN CASO QUE QUIERA CAMBIAR O ELIMINAR EL IDIOMA DEBE DE ELIMINAR SU REGISTRO PRIMERO*`)
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)        
let caption = `Exito`.trim()
await conn.sendFile(m.chat, pp, 'yoshi.jpg', caption, m, false, { mentions: [aa] }) 
await m.reply('**') 
await m.reply(`${sn}`) 
}
}
handler.command = /^(verify|verificar|reg(ister)?|idiomagb)$/i
export default handler