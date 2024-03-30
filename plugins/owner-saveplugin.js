import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, `*Y EL TEXTO?*`)
    if (!m.quoted.text) return conn.reply(m.chat, `*Y EL TEXTO?*`)
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    await conn.reply(m.chat, `Guardado en ${path}`)
}
handler.help = ['saveplugin'].map(v => v + ' <nombre>')
handler.tags = ['owner']
handler.command = ["salvar", "saveplugin"]

handler.rowner = true
export default handler