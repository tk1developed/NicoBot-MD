import { tmpdir } from 'os'
import path, { join } from 'path'
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, command, __dirname, args, text }) => {

let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) return conn.reply(m.chat, `*Ejemplo de uso:*\n\n*${_p + command}* owner-deleteplugin.js`)
    if (!ar1.includes(args[0])) return conn.reply(m.chat,  `*😄 NO ENCONTRADO!*\n•••••••••••••••••••••••••••••••••••••••••••••••••••••••\n\n${ar1.map(v => ' ' + v).join`\n`}`)
const file = join(__dirname, '../plugins/' + args[0] + '.js')
unlinkSync(file)
conn.reply(m.chat, `⚠️ *El plugin "plugins/${args[0]}.js" se ha eliminado con éxito.*`)

}
handler.help = ['deleteplugin <nombre>']
handler.tags = ['owner']
handler.command = /^(deleteplugin|dp|deleteplu)$/i

handler.rowner = true

export default handler