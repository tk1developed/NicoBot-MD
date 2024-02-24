import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (conn.user.jid == conn.user.jid) {
    await m.reply('😼 𝖤𝗌𝗉𝖾𝗋𝖺 𝖴𝗇𝗈𝗌 𝖬𝗂𝗇𝗎𝗍𝗈𝗌, 𝖤𝗅 𝖡𝗈𝗍 𝖲𝖾 𝖤𝗌𝗍𝖺́ 𝖱𝖾𝗂𝗇𝗂𝖼𝗂𝖺𝗇𝖽𝗈🙀...')
    process.send('reset')
  } else throw 'eh'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 

handler.rowner = true

export default handler