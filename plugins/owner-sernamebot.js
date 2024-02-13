let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `🦋 𝑸𝒖𝒆 𝑵𝒐𝒎𝒃𝒓𝒆 𝑴𝒆 𝑸𝒖𝒊𝒆𝒓𝒆𝒔 𝑷𝒐𝒏𝒆𝒓? 🍓`
  try {
    await conn.updateProfileName(text)
    m.reply('🦋 𝐿𝑖𝑠𝑡𝑜 𝑃𝑟𝑜𝑝𝑖𝑒𝑡𝑎𝑟𝑖𝑜 𝐸𝑙 𝑁𝑜𝑚𝑏𝑟𝑒 𝐷𝑒𝑙 𝑁𝑢𝑚𝑒𝑟𝑜 𝐷𝑒𝑙 𝐵𝑜𝑡 𝑆𝑒 𝐴𝑐𝑡𝑢𝑎𝑙𝑖𝑧𝑜 𝐶𝑜𝑛 𝐸𝑥𝑖𝑡𝑜 🍓')
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