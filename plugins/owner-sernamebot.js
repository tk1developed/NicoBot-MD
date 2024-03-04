let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `🧸 *Que Nombre Deseas Ponerme?* 🍭`
  try {
    await conn.updateProfileName(text)
    m.reply('✅️ *Nombre Cambiado Con Éxito*')
  } catch (e) {
    console.log(e)
    throw `𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙲𝙰𝙼𝙱𝙸𝙰𝚁 𝙴𝙻 𝙽𝙰𝙼𝙴`
  }
}
handler.help = ['setbotname <teks>']
handler.tags = ['owner']
handler.command = /^(setbotname|cambianombre)$/i

handler.owner = true
export default handler