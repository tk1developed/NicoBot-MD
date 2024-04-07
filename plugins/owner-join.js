let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

var handler = async (m, { conn, text, isMods, isOwner }) => {

let users = '500'
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (!code) return conn.reply(m.chat, `🚩 *Ingrese el enlace de un grupo*\n\nEjemplo, !unete`, m)

let gpData = await conn.groupGetInviteInfo(code).catch(e => {})

if ( isMods || isOwner || m.fromMe) {
conn.reply(m.chat, `✅ ${wm} *Se unió al grupo*`, m)
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
      const data = global.owner.filter(([id]) => id)[0];
      const dataArray = Array.isArray(data) ? data : [data];
      for (const entry of dataArray) await conn.sendMessage(entry + '@s.whatsapp.net', {text: '*🦋 NUEVA SOLICITUD DE UN BOT PARA UN GRUPO 🍓*\n\n*Solicitante:* ' + '@' + m.sender.split('@')[0] + '\n*Link del grupo:* ' + link, mentions: [m.sender], contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `${link}`, "sourceUrl": `${link}`}}}, {quoted: m});
      enviando = false 
    }

conn.reply(m.chat, `*✅ Su enlace se envió a Mí Propietario(a)*`, m)
}

}
handler.help = ['join']
handler.tags = ['own']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
