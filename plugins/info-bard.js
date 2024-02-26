import fetch from 'node-fetch'

let handler = async (m, { text,  usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `📍 *Ingrese una Petición*\n\nEjemplo, !bard Conoces SakuraBotLite-MD?` )

try {

conn.sendPresenceUpdate('composing', m.chat)
let apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)

} catch (error) {
console.error(error)
return conn.reply(m.chat, `*🚩 Ocurrió un fallo*`)

}
handler.command = ['bard']
handler.help = ['bard']
handler.tags = ['ai']

handler.premium = false

export default handler