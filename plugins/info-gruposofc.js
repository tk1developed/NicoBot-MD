let media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '💦', key: m.key } })
let str = `🍓𝐺𝑅𝑈𝑃𝑂𝑆 𝑂𝐹𝐼𝐶𝐼𝐴𝐿𝐸𝑆

▢ 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊
${gp1}

▢ 𝘚𝘢𝘬𝘶𝘳𝘢𝘓𝘪𝘵𝘦 - 𝘎𝘭𝘰𝘣𝘢𝘭
${gp2}

🦋𝐺𝑅𝑈𝑃𝑂𝑆 𝐸𝑁 𝐶𝑂𝐿𝐴𝐵𝑂𝑅𝐴𝐶𝐼𝑂𝑁:

▢ 𝑪𝒖𝒓𝒊𝒐𝒔𝒊𝒕𝒚𝑩𝒐𝒕 & 𝑺𝒂𝒌𝒖𝒓𝒂𝑩𝒐𝒕 
${gp3}

▢ 𝑵𝒐𝒗𝒂𝑩𝒐𝒕 & 𝑺𝒂𝒌𝒖𝒓𝒂
${gp4}

▢ ᰔᩚ♕︎🅜︎🅤︎🅛︎🅣︎🅘︎.🅑︎🅞︎🅣︎🅢︎♕︎ᰔᩚ 
${gp5}

🌤𝐶𝐴𝑁𝐴𝐿 𝑂𝐹𝐼𝐶𝐼𝐴𝐿

▢ Canal _*SakuraBotLite-MD*_
${channel}`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.command = /^grupos|linksk|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler