import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['573013114854', 'SakuraBot-MD ♨️', true], ['573207200376'], ['573106909511'], ['573218138672'], ['51935499065'], ['51944167935'], ['573217297116'], ['573235215844'], ['50258115623']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['573013114854']
global.suittag = ['573013114854']
global.mods = []
global.prems = []

global.packname = 'Ⓢ︎ 𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩'
global.author = 'Created By Diego'
global.wm = 'Ⓢ︎ 𝖲𝖺𝗄𝗎𝗋𝖺𝖡𝗈𝗍-𝖬𝖣'
global.wm2 = '𝗦akura : 𝗕𝗈𝗍'
global.diego = 'Diego'
global.cb = 'SakuraBot-MD'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© Diego ~ Zam'
global.devnum = '+57 301 3114854'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})