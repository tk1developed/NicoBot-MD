//Total funciones

/*let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `🦋 𝘛𝘰𝘵𝘢𝘭 𝘍𝘶𝘯𝘤𝘪𝘰𝘯𝘦𝘴: ${totalf}`,m)
}

handler.help = ['totalf']
handler.tags = ['info']
handler.command = ['totalf']
handler.register = true
export default handler*/

import { execSync } from 'child_process'

var handler = async (m, { conn, text }) => {

try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('Already up to date.')) messager = '✅ *No hay actualizaciones pendientes*'
if (messager.includes('Updating')) messager = '✅ *Actualización finalizada exitosamente*\n\n' + stdout.toString()
conn.reply(m.chat, messager, m, fake, )
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
const errorMessage = `🚩 *Se han hecho cambios locales en archivos del bot que entran en conflicto con las actualizaciones del repositorio. Para actualizar, reinstala el bot o realiza las actualizaciones manualmente*\n\nArchivos en conflicto:\n\n${conflictedFiles.join('\n')}`
await conn.reply(m.chat, errorMessage, m, fake, )
}
}
} catch (error) {
console.error(error)
let errorMessage2 = '🚩 *Ocurrió un fallo. Por favor, inténtalo de nuevo más tarde*'
if (error.message) {
errorMessage2 += '\n*- Mensaje de error:* ' + error.message;
}
await conn.reply(m.chat, errorMessage2, )
}
}

}
handler.help = ['update', 'actualizar']
handler.tags = ['own']
handler.command = /^(rw)$/i
handler.rowner = true

export default handler