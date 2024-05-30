let media = './Menu.png'
let handler = async (m, { conn, command }) => {
let str = `*🧃 GRUPOS OFICIALES*

    *_╭━━━⊜ YoshikoBot-MD_*
  *_┃🌻❏ ${gp1}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

   *_╭━━━⊜ YoshikoBot-MD2_*
  *_┃🌻❏ ${gp2}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

 *☁️ GRUPOS EN COLABORACIÓN*

    *_╭━━━⊜ GataBot Y Yoshiko_*
  *_┃🌸❏ ${gp3}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

    *_╭━━━⊜ Curiosity y Yoshiko_*
  *_┃🌸❏ ${gp4}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

    *_╭━━━⊜ NovaBot & Yoshiko_*
  *_┃🌸❏ ${gp5}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

    *_╭━━━⊜ MultiBots_*
  *_┃🌸❏ ${gp6}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

 *☁️ CANAL OFICIAL*

    *_╭━━━⊜ Canal Ofc De Yoshiko_*
  *_┃👑❏ ${channel}_*
*_╰━━━━━━━━━━━━━━━━⊜_*`
m.react('🧰') 
    conn.sendMessage(m.chat, { video: { url: media, gifPlayback: true, caption: text.trim(), mentions: [m.sender] }, { quoted: estilo })

handler.command = /^grupos|linksk|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler