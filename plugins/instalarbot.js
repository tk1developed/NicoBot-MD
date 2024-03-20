//import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let { generateWAMessageFromContent } = (await import(global.baileys)).default 
let handler  = async (m, { conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let texto = `🧸 *Instalación Automatica* (Termux)
   
➪ termux-setup-storage

➪ apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/diegojadibot/SakuraBotLite-MD/master/sakura.sh | bash

🧸 *Instalación Manual* (Termux) 📍

➪ cd && termux-setup-storage

➪ apt-get update -y && apt-get upgrade -y

➪ pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 

➪ git clone https://github.com/diegojadibot/SakuraBotLite-MD.git && cd SakuraBotLite-MD

➪ yarn install

➪ npm install

➪ npm update

➪ npm start

🟢 *Activar El Bot* 🟢

➪ cd

➪ cd SakuraBotLite-MD

➪ npm start

🧸 *Obtener Otro Codigo Qr* 📍

➪ cd SakuraBotLite-MD

➪ rm -rf SakuraBotSession

➪ npm start

🟢 (Comandos 1 Por 1) 📍` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: '𝗦𝗮𝗸𝘂𝗿𝗮𝗕𝗼𝘁𝗟𝗶𝘁𝗲-𝗠𝗗', body: null, thumbnail: imagen6, sourceUrl: 'https://whatsapp.com/channel/0029VaQD7LAJP216tu9liI2A' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.command = /^(instalarbot)/i
handler.register = true
export default handler