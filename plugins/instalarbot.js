var handler  = async (m, { conn }) => {

let texto = `📮 *Instalación de YoshikoBot*

*Requisitos para la instalación ✏️*
⬡ Dudas: Wa.me/573012482597
⬡ Tutoríal: https://youtu.be/9-v4XwMTJYE?si=veqJSgJ4bKi5kSjB
⬡ 1 GB de almacenamiento
⬡ Termux: https://www.mediafire.com/file/3hsvi3xkpq3a64o/termux_118.apk/file
⬡ GitHub: https://github.com/Diego-YL-177/YoshikoBot-MD
⬡ Un whatsapp inmune (secundario)
⬡ Un número 
⬡ Dispositivo o una PC para escanear

*Comandos de instalación via Termux ✏️*

termux-setup-storage

apt-get update -y && apt-get upgrade -y

pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn

git clone https://github.com/Diego-YL-177/YoshikoBot-MD && cd YoshikoBot-MD && yarn install && npm install 

ls

npm start

_Utilice "comandos" para enviarle los comandos uno por uno 📮_

_Utilice "infinity" para instalar el bot mediante el hosting vortexus 📮_`

conn.reply(m.chat, texto, m, fake, )

handler.before = async m => {

if (/^comandos$/i.test(m.text) ) {
m.reply('termux-setup-storage')
await delay(1000 * 1)
m.reply('apt-get update -y && apt-get upgrade -y')
await delay(1000 * 1)
m.reply('pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn')
await delay(1000 * 1)
m.reply('git clone https://github.com/Diego-YL-177/YoshikoBot-MD && cd YoshikoBot-MD && yarn install && npm install ')
await delay(1000 * 1)
m.reply('ls')
await delay(1000 * 1)
m.reply('npm start')
}

if (/^infinity$/i.test(m.text) ) {
conn.reply(m.chat, '✏️ *Instalación por infinityhost*\n(nosotros no tenemos tutorial pero eso les puede ayudar)\n\n• Dashboard:\nhttps://dashboard.infinitywa.xyz\n\n• Panel:\nhttps://live.panel-infinitywa.store/', m, fake )
await delay(2000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/41b8b3e0f536bb8ec1d6c.jpg'}, caption: ''}, {quoted: m})
await delay(1000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/d9ead76219f879bb1e66a.jpg'}, caption: ''}, {quoted: m})
}
}

}
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^(instalarbot)/i

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))