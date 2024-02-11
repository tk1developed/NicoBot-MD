let media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `🍓𝐺𝑅𝑈𝑃𝑂 𝑂𝐹𝐼𝐶𝐼𝐴𝐿

▢ 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊
https://chat.whatsapp.com/L69Ok8LTIJNCTNsJydkXaE

🦋𝐺𝑅𝑈𝑃𝑂𝑆 𝐸𝑁 𝐶𝑂𝐿𝐴𝐵𝑂𝑅𝐴𝐶𝐼𝑂𝑁:

▢ 𝑪𝒖𝒓𝒊𝒐𝒔𝒊𝒕𝒚𝑩𝒐𝒕 & 𝑺𝒂𝒌𝒖𝒓𝒂𝑩𝒐𝒕 
https://chat.whatsapp.com/JNdlCEUKLqHAw87sOqfKmO

▢ 𝑴𝒂𝒅𝒐𝒌𝒂 & 𝑺𝒂𝒌𝒖𝒓𝒂𝑩𝒐𝒕
https://chat.whatsapp.com/C5BRS176QMqKFaZlAiqFfo

▢ 𝑵𝒐𝒗𝒂𝑩𝒐𝒕 & 𝑺𝒂𝒌𝒖𝒓𝒂
https://chat.whatsapp.com/IstOAq2RnBx687WhQpOYK8

▢ ᰔᩚ♕︎🅜︎🅤︎🅛︎🅣︎🅘︎.🅑︎🅞︎🅣︎🅢︎♕︎ᰔᩚ 
https://chat.whatsapp.com/HXOGzELFOVXFM1KrSoKdqH

🌤𝐶𝐴𝑁𝐴𝐿 𝑂𝐹𝐼𝐶𝐼𝐴𝐿

▢ Canal _*SakuraBotLite-MD*_
https://whatsapp.com/channel/0029VaHdt8oJENxtNExL8z2n`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.command = /^grupos|linksk|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler