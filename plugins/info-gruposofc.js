let media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let str = `*🔮 GRUPOS OFICIALES*

    *_╭━━━⊜ YoshikoBot-MD_*
  *_┃🌻❏ ${gp1}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

   *_╭━━━⊜ YoshikoBot-MD2_*
  *_┃🌻❏ ${gp2}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

 *☁️ GRUPOS EN COLABORACIÓN*

    *_╭━━━⊜ Curiosity y Yoshiko_*
  *_┃🍃❏ ${gp3}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

    *_╭━━━⊜ NovaBot & Yoshiko_*
  *_┃🍃❏ ${gp4}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

    *_╭━━━⊜ MultiBots_*
  *_┃🍃❏ ${gp5}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

 *☁️ CANAL OFICIAL*

    *_╭━━━⊜ Canal Ofc De Yoshiko_*
  *_┃🌺❏ ${channel}_*
*_╰━━━━━━━━━━━━━━━━⊜_*`
m.react('🧰') 
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.command = /^grupos|linksk|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler