//comando de https://github.com/diegojadibot/SakuraBotLite-MD

/*import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");

          m.reply(`_${saludo}_ *_Usuario_*`);
            });
}
handler.help = ['infobot']
handler.tags = ['main']
handler.command = ['saludo']
handler.register = true
export default handler*/

let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
//const pp = './Menu.png'

let love = `\t\t*➺ ${name} ${saludo}`

conn.sendMessage(m.chat,{image: {url: pp}, caption: love, mentions: [m.sender]}, {quoted: m}) 
}

handler.help = ['love  @user']
handler.tags = ['fun']
handler.command = /^(saludo)$/i
handler.register = true
export default handler

