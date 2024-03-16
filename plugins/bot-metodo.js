//comando de https://github.com/diegojadibot/SakuraBotLite-MD

import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");

          m.reply(`${saludo}\n\n*🧸 El Bot Tiene 2 Metodos Para Vincularse A Tu WhatsApp.*\n\nSon:\n\n- Texto De 8 Digitos.\n- Codigo Qr.\n\n*📍 Espero Y Instales El Bot Y Uses El Metodo Que Puedas.*`);
            });
}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['metodo']
handler.register = true
export default handler