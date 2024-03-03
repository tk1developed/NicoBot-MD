//comando de https://github.com/diegojadibot/SakuraBotLite-MD

import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");

          m.reply(`_[Mini Curso]_\n\n*Hola user quieres aprender de los idiomas de programación? escribe al numero: +54 9 2266 46-6080 por favor no agas spam*\n\n*Tambien puedes contactar a: +52 729 488 8993*\n\n_Mini programación de bots_ 📍`);
            });
}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['aprender']
handler.register = true
export default handler