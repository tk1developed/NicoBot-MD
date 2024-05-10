import fs from 'fs'

var handler = async (m, { text, usedPrefix, command }) => {

 if (!text) return conn.reply(m.chat, `☄️ *Ingresé el nombre del plugin*`)
    if (!m.quoted.text) return conn.reply(m.chat, `🍃 *Ingresa el contenido del plugin*`)
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    await conn.reply(m.chat, `🌺 *Guardado en* ${path}`)
}

}
handler.help = ['saveplugin']
handler.tags = ['owner']
handler.command = ['salvar', 'saveplugin']

handler.rowner = true

export default handler