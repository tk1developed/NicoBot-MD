let media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `💧𝐺𝑅𝑈𝑃𝑂𝑆 𝑂𝐹𝐼𝐶𝐼𝐴𝐿𝐸𝑆

▢ 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊 
https://chat.whatsapp.com/DUAS7osnQ2h3tlYT4bnbfU

▢ 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊 https://chat.whatsapp.com/L69Ok8LTIJNCTNsJydkXaE

🌹𝐺𝑅𝑈𝑃𝑂𝑆 𝐸𝑁 𝐶𝑂𝐿𝐴𝐵𝑂𝑅𝐴𝐶𝐼𝑂𝑁:

▢ 𝐍𝐞𝐱𝐮𝐬 𝐁𝐨𝐭 & 𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭  https://chat.whatsapp.com/C7rJdO0tWjRBr37onmz1vS

▢ 𝑺𝒂𝒌𝒖𝒓𝒂𝑩𝒐𝒕 & 𝑺𝒉𝒂𝒏𝒂-𝑩𝒐𝒕 https://chat.whatsapp.com/HjtosKShIYcE0xldUFSnkF

▢ 𝑪𝒖𝒓𝒊𝒐𝒔𝒊𝒕𝒚𝑩𝒐𝒕 & 𝑺𝒂𝒌𝒖𝒓𝒂𝑩𝒐𝒕 https://chat.whatsapp.com/EYDr5lgqofw65ml7rejNR7

▢ 𝑵𝒐𝒗𝒂𝑩𝒐𝒕 & 𝑺𝒂𝒌𝒖𝒓𝒂
https://chat.whatsapp.com/IstOAq2RnBx687WhQpOYK8

▢ 𝑮𝒓𝒖𝒑𝒐 𝑩𝒐𝒕𝒔 𝑴𝒖𝒍𝒕𝒊
https://chat.whatsapp.com/FzW5a9g0nJMIdskszkq0dY

▢ ᰔᩚ♕︎🅜︎🅤︎🅛︎🅣︎🅘︎.🅑︎🅞︎🅣︎🅢︎♕︎ᰔᩚ 
https://chat.whatsapp.com/HXOGzELFOVXFM1KrSoKdqH

✨️𝐶𝐴𝑁𝐴𝐿 𝑂𝐹𝐼𝐶𝐼𝐴𝐿

▢ Canal _*SakuraBotLite-MD*_
https://whatsapp.com/channel/0029VaHdt8oJENxtNExL8z2n`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n\n\n` + wm, media, 'https://github.com/diegojadibot/SakuraBotLite-MD', 'SakuraBotLite-MD', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentassb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|grupossakurabot|sakurabotgrupos|gruposdesakurabot|groupofc|grupossb|gruposb|groupsb$/i
handler.register = true
handler.exp = 33

export default handler