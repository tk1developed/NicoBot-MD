let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./media/bot.mp3`

conn.sendButton(m.chat, `Hola *${name}* \n \nNecesitas ayuda? \n`, yotsuba, null, [
      ['🇦🇲 Colombia', '/allmenu'],
      ['🍁 Audios', '/menu2'],
      ['📎 Culones', '/grupos']
    ], m)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(bot|dylux)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}