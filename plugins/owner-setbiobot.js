let handler = async (m, { conn, text }) => {
   if (!text) throw `📍 Ingrese Un Texto`
     try {
                await conn.updateProfileStatus(text).catch(_ => _)
                conn.reply(m.chat, `🧸 Info Cambiada Con Exito!`, m)
} catch {
       throw 'Well, Error Sis...'
     }
}
handler.help = ['setbotbio <teks>']
handler.tags = ['owner']
handler.command = /^setbiobot|setbotbio$/i
handler.owner = true

export default handler