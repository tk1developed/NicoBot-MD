let media = './Menu.png'
let handler = async (m, { conn, command }) => {
let str = `*◜🍬 GRUPOS OFICIALES 🍬◞*

❏ *YoshikoBot-MD 1*
_${gp1}_

❏ *YoshikoBot-MD 2*
_${gp2}_

 *◜🌸 COLABORACIÓN 🌸◞*

❏ *GataBot & YoshikoBot*
_${gp3}_

❏ *CuriosityBot & YoshikoBot*
_${gp4}_

❏ *NovaBot & Yoshiko*
_${gp5}_

❏ *Multi Bots*
_${gp6}_

 *◜🌺 CANAL OFICIAL 🌺◞*

❏ *YoshikoBot-MD*
_${channel}_`
m.react('🔵') 
    await conn.sendFile(m.chat, media, 'yoshiko.mp4', str, fkontak)}

handler.command = /^grupos|linksk|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler