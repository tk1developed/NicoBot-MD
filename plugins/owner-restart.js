import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (conn.user.jid == conn.user.jid) {
    await m.reply('╰⊱🌩⊱ *CORRECTO* ⊱🌩⊱╮\n\n```🚀 REINICIANDO 🚀```\n*⌛ AGUARDE UN MOMENTO POR FAVOR...*', m, fake, )
    process.send('reset')
  } else throw 'eh'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 

handler.rowner = true
export default handler