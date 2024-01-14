let media = './Menu3.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `*Hola!, te invito a unirte a los grupos oficiales de del Bot para convivir con la comunidad :D*

1- 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊
▢ 
https://chat.whatsapp.com/Gf0jUCgZTdU5pbcKPZPtWk

2- 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊
▢ https://chat.whatsapp.com/L69Ok8LTIJNCTNsJydkXaE

3- 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊
▢ https://chat.whatsapp.com/EHbHSYyZ1ZeCgtl1iO208h

4- 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊
▢ https://chat.whatsapp.com/BBrNUjJXXLAAucWIM3AaXv

5- 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊
▢ https://chat.whatsapp.com/FtbbWbvriEX8D4Buw0pyNL

6- —★ 🎟]「 𝘌𝘯𝘭𝘢𝘤𝘦 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊
▢ https://chat.whatsapp.com/HUav9lEvzPO6uRPS5f6KBz

7- 😻 𝑺𝒐𝒑𝒐𝒓𝒕𝒆 𝑺𝒂𝒌𝒖𝒓𝒂𝑩𝒐𝒕 / 𝑵𝒐 𝑩𝒐𝒕 ♕︎𓅓
▢ https://chat.whatsapp.com/FUDnyZbUkkaLc1L9CgOiwH

🧭Grupos Colaboración

1- ʕ•ᴥ•ʔ 𝑺𝒂𝒌𝒖𝒓𝒂𝑩𝒐𝒕𝑳𝒊𝒕𝒆 & 𝑶𝒏𝒚𝒙𝑩𝒐𝒕 ʕ•ᴥ•ʔ
▢ https://chat.whatsapp.com/HVpXzDdlNrH738WaJIS21C

2- ᰔᩚ♕︎🅜︎🅤︎🅛︎🅣︎🅘︎.🅑︎🅞︎🅣︎🅢︎♕︎ᰔᩚ
▢ https://chat.whatsapp.com/IpkR0weg38U8Q0hFZbG3IV
─────────────
≡ Enlaces Restablecidos? Entra A Este Link!! 

Grupos : 
▢ https://atom.bio/sakuralite

Canal :
▢  https://whatsapp.com/channel/0029VaHYnwaKQuJIlTFuS22l`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n\n\n` + wm, media, 'https://github.com/diegojadibot/SakuraBotLite-MD', 'SakuraBotLite-MD', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentassb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|grupossakurabot|sakurabotgrupos|gruposdesakurabot|groupofc|grupossb|gruposb|groupsb$/i
handler.exp = 33

export default handler