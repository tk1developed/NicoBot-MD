import { execSync } from 'child_process'

var handler = async (m, { conn, text }) => {
await conn.sendMessage(m.chat, { react: { text: '🔮', key: m.key } })
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('Already up to date.')) messager = '╰⊱🧿⊱ *𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡* ⊱🧿⊱╮\n\n*𝖸𝖠 𝖤𝖲𝖳𝖮𝖸 𝖠𝖢𝖳𝖴𝖠𝖫𝖨𝖹𝖠𝖣𝖠 𝖠 𝖫𝖠 𝖵𝖤𝖱𝖲𝖨𝖮́𝖭 𝖬𝖠𝖲 𝖱𝖤𝖢𝖨𝖤𝖭𝖳𝖤.*'
if (messager.includes('Updating')) messager = '✅️ *Actualizacion Exitosa.*\n\n' + stdout.toString()
conn.reply(m.chat, m, fake, messager,)
} catch { 
try {
const status = execSync('git status --porcelain')
if (status.length > 0) {
const conflictedFiles = status.toString().split('\n').filter(line => line.trim() !== '').map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('sessions/') || line.includes('npm-debug.log')) {
return null
}
return '*→ ' + line.slice(3) + '*'}).filter(Boolean)
if (conflictedFiles.length > 0) {
const errorMessage = `🚩 *Se Han Hecho Cambios Locales En Archivos Del Bot Que Entran En Conflicto Con Las Actualizaciones Del Repositorio. Para Actualizar, Reinstala El Bot o Realiza Las Actualizaciones Manualmente*\n\nArchivos En Conflicto:\n\n${conflictedFiles.join('\n')}`
await conn.reply(m.chat, m, fake, errorMessage,)
}
}
} catch (error) {
console.error(error)
let errorMessage2 = '📍 *Ocurrió Un Error.*'
if (error.message) {
errorMessage2 += '\n*- Mensaje de error:* ' + error.message;
}
await conn.reply(m.chat, m, fake, errorMessage2,)
}
}

}
handler.help = ['update', 'actualizar']
handler.tags = ['owner']
handler.command = /^(update|actualizar|gitpull)$/i
handler.rowner = true

export default handler