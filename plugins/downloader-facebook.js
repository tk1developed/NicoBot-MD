import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `⚠️ _Ingrese Un Enlace De Facebook_\n\n*Ejemplo:*\n*${usedPrefix + command}* https://fb.watch/fOTpgn6UFQ/`
try {
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `*Aqui Su Video De Facebook 🚀*`, m)
} catch (e) {
await m.reply('⚠️ _Ingrese Un Enlace De Facebook_\n\n*Ejemplo:*\n*${usedPrefix + command}* https://fb.watch/fOTpgn6UFQ/')
console.log(e)
}}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i

handler.register = true
export default handler