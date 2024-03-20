let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*📍 GRUPO OFICIAL*

    *_╭━━━⊜ SakuraBotLite-MD_*
  *_┃🧸❏ ${gp1}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

 *🥀 GRUPOS EN COLABORACIÓN*

    *_╭━━━⊜ Curiosity y SakuraBot_*
  *_┃🧸❏ ${gp2}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

    *_╭━━━⊜ NovaBot & SakuraBot_*
  *_┃📍❏ ${gp3}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

  *🥀 CANAL OFICIAL*

    *_╭━━━⊜ Canal SakuraLite_*
  *_┃📍❏ ${channel}_*
*_╰━━━━━━━━━━━━━━━━⊜_*`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: `${wm}`,
body: '', previewType: 0, thumbnail: imagen2, sourceUrl: nna}}})
//conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿', 'status@broadcast')
}
handler.command = /^grupos$/i
export default handler

