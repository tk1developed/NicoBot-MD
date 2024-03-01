const comandos = /piedra|papel|tijera|términos|bots|deletebot|serbot|botclone|deletesesion|jadibot/i
export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner, usedPrefix, command }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
const regex = new RegExp(`^${comandos.source}$`, 'i')
if (regex.test(m.text.toLowerCase().trim())) return !0

let chat, user, bot, mensaje
chat = global.db.data.chats[m.chat]
user = global.db.data.users[m.sender]
bot = global.db.data.settings[this.user.jid] || {}

if (bot.antiPrivate && !isOwner && !isROwner) {
if (user.counterPrivate === 0) {
mensaje = `Hola *@${m.sender.split`@`[0]}*, *Está Prohibido Escribirle Al Bot Al Privado*\n\n🥀 *Puedes Unirte Al Grupo Oficial Del Bot!*\n${gp1}\n\n🧸 \`\`\`INFORMACIÓN 1/3\`\`\` 🧩`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] })  

} else if (user.counterPrivate === 1) {
let grupos = [ gp1, gp2, ].getRandom()
mensaje = `*Otra Vez, Ya Que Dije No Escriba Al Privado 📍*\n\n*Usa El Bot Uniendote Al Grupo Oficial👇*\n${grupos}\n\n*Esta Es La Ultima Advertencia, Si Escribes Algun Otro Comando Serás Bloqueado(A)*\n🧸 \`\`\`INFPOMACIÓN 2/3\`\`\` 🧩`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] }) 

} else if (user.counterPrivate === 2) {
mensaje = `*@${m.sender.split`@`[0]} No Entiendes, Te Advertí Ahora Serás Bloqueado(A)*\n\n⚠️ \`\`\`INFORMACIÓN 3/3 \`\`\` ⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] }) 

user.counterPrivate = -1
await this.updateBlockStatus(m.sender, 'block')
}
user.counterPrivate++
}
return !1
}

//Codigo GataBot!