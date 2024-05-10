var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) throw `🍃 *Ingres Una Petición*\n- Ejemplo: !bard conoces a yotsuba?`

try {

await m.reply('🌺 *C A R G A N D O*\n- 🍃 Cargando Información')
conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://aemt.me/gemini?text=${text}`)
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

export default handler