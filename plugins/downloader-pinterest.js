import { pinterest } from '@bochilteam/scraper'

var handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🍬 *Debera ingresar un texto*\n\nEjemplo, !${command} Minecraft`, m, fake, )
m.react('🍬')

const json = await pinterest(text)
conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `🍬 *Resultado de* ${text}`.trim(), m)

}
handler.help = ['pinterest']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i

handler.limit = true
handler.register = true

export default handler