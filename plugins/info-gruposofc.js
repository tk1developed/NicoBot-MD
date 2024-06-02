let media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let str = `*◜🍬 GRUPOS OFICIALES 🍬◞*

❏ ${gp1}_*

❏ ${gp2}_*

 *◜🌸 COLABORACIÓN 🌸◞*

❏ ${gp3}_*

❏ ${gp4}_*

❏ ${gp5}_*

❏ ${gp6}_*

 *◜🌺 CANAL OFICIAL 🌺◞*

❏ ${channel}_*`
m.react('🔵') 
    await conn.sendFile(m.chat, media, 'yoshiko.mp4', str, fkontak)}

handler.command = /^grupos|linksk|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler