import fetch from 'node-fetch'
var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) throw `🍃 *Ingres Una Petición*\n- Ejemplo: !bard conoces a yotsuba?`
try {
await m.reply('🌺 *C A R G A N D O*\n- 🍃 Cargando Información')
conn.sendPresenceUpdate('composing', m.chat);
var apii = await fetch(`https://aemt.me/gemini?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch (e) {
await conn.reply(m.chat, `*🍃 Ocurrió Un Error Inesperado*`, fkontak, m)
console.log(`❗`)
console.log(e)
}}
handler.command = ['bard', 'gemini']
handler.help = ['bard', 'gemini']
handler.tags = ['herramientas']

handler.premium = false

export default handler

/*var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) throw `🍃 *Ingres Una Petición*\n- Ejemplo: !bard conoces a yotsuba?`

try {

await m.reply('🌺 *C A R G A N D O*\n- 🍃 Cargando Información')
conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://vihangayt.me/tools/bard?q=${encodeURIComponent(text)`)
var res = await apii.json()
await m.reply(res.result)

} catch (error) {
console.error(error)
throw '*🍃 Ocurrió Un Error Inesperado*'
}

}
handler.command = ['bard']
handler.help = ['bard']
handler.tags = ['ai']

handler.premium = false

export default handler*/