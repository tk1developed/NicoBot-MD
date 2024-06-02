let media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let str = `*◜🍬 GRUPOS OFICIALES 🍬◞*

_❏ ${gp1}_

_❏ ${gp2}_

 *◜🌸 COLABORACIÓN 🌸◞*

_❏ ${gp3}_

_❏ ${gp4}_

_❏ ${gp5}_

_❏ ${gp6}_

 *◜🌺 CANAL OFICIAL 🌺◞*

_❏ ${channel}_`
m.react('🔵') 
    await conn.sendFile(m.chat, media, 'yoshiko.mp4', str, fkontak)}

handler.command = /^grupos|linksk|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler