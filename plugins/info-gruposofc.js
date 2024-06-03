let media = './Menu.png'
let handler = async (m, { conn, command }) => {
let str = `*◜🌸 GRUPOS OFICIALES 🌸◞*

👑 𝐘𝐨𝐬𝐡𝐢𝐤𝐨 𝐁𝐨𝐭 - 𝐌𝐃 1
${gp1}

👑 𝐘𝐨𝐬𝐡𝐢𝐤𝐨 𝐁𝐨𝐭 - 𝐌𝐃 2
${gp2}

 *◜🌸 COLABORACIÓN 🌸◞*

🌺 𝐆𝐚𝐭𝐚𝐁𝐨𝐭 & 𝐘𝐨𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭
${gp3}

🌺 𝐂𝐮𝐫𝐢𝐨𝐬𝐢𝐭𝐲𝐁𝐨𝐭 & 𝐘𝐨𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭
${gp4}

🌺 𝐍𝐨𝐯𝐚𝐁𝐨𝐭 & 𝐘𝐨𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭
${gp5}

🌺 𝐌𝐮𝐥𝐭𝐢 𝐁𝐨𝐭𝐬
${gp6}

 *◜🌸 CANALES OFICIALES 🌸◞*

🌻 𝐘𝐨𝐬𝐡𝐢𝐤𝐨 𝐁𝐨𝐭 - 𝐌𝐃
${channel}

🌻 𝐘𝐨𝐬𝐡𝐢𝐤𝐨 𝐁𝐨𝐭 ¡𝐔𝐩𝐝𝐚𝐭𝐞!
${channel2}

🌻 𝐈𝐧𝐟𝐢𝐧𝐢𝐭𝐲-𝐖𝐚
${channel3}`
m.react('🔵') 
    await conn.sendFile(m.chat, media, 'yoshiko.mp4', str, fkontak)}

handler.command = /^grupos|linksk|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler