let media = './Menu.png'
let handler = async (m, { conn, command }) => {
let str = `*◜🌸 GRUPOS OFICIALES 🌸◞*

👑 Nico Bot - MD 1
${gp1}

👑 Nico Bot - MD 2
${gp2}

 *◜🌸 COLABORACIÓN 🌸◞*

🌺 GataBot & NicoBot
${gp3}

🌺 NicoBot & NicoBot
${gp4}

🌺 NovaBot & NicoBot
${gp5}

🌺 𝐌𝐮𝐥𝐭𝐢 𝐁𝐨𝐭𝐬
${gp6}

 *◜🌸 CANALES OFICIALES 🌸◞*

🌻 Nico Bot - MD
${channel}

🌻 Nico Bot ¡𝐔𝐩𝐝𝐚𝐭𝐞!
${channel2}

🌻 𝐈𝐧𝐟𝐢𝐧𝐢𝐭𝐲-𝐖𝐚
${channel3}`
m.react('🔵') 
    await conn.sendFile(m.chat, media, 'yoshiko.mp4', str, fkontak)}

handler.command = /^grupos|linkyl|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler