//comando de https://github.com/diegojadibot/SakuraBotLite-MD

import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");

          m.reply(`${saludo}\n*🥀 Tenemos 2 Metodos De Vinculacion!*\n*Tenemos:*\nTexto De 8 Digitos.\nCodigo Qr.\n*📍 Espero Y Lo Instales*`);
            });
}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['metodo']
handler.register = true
export default handler