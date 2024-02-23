import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';
import { es } from "./lib/idiomas/total-idiomas.js"


global.botnumber = ""
global.confirmCode = ""

//No quitar los numeros de los creadores!
global.owner = [
 ['573013482814', '👑 𝙲𝚁𝙴𝙰𝚃𝙾𝚁 ✨', true],
 ['5491130182250', '𝙾𝚆𝙼𝙴𝚁 𝙾𝙵𝙲 ✨', true],
 ['5492355505090'],
 ['51935499065'],
 ['5491130182250'],
 ['5215610314499']]

//Numeros De !contactos. agregate si eres owner.
global.official = [
["573013482814", '👑 𝙲𝚁𝙴𝙰𝚃𝙾𝚁 ✨', 1],
["573106909511", '𝚂𝙰𝙺𝚄𝚁𝙰-𝙾𝙵𝙲 🐱', 1], 
["5492355505090", '𝙰𝚂𝙸𝚂𝚃𝚃 𝚂𝙺 🐈', 1], 
["51944167935", '𝙳𝙴𝚂𝙰𝚁𝚁𝙾𝙻𝙻𝙰𝙳𝙾𝚁𝙰 🦋', 1], 
["5491130182250", '𝙴𝙳𝙸𝚃𝙾𝚁 𝙾𝙵𝙲 ✨', 1],
["5492266466080", '𝙲𝙾𝙻𝙰𝙱𝙾𝚁𝙰𝙳𝙾𝚁 🌿', 1],
["5217294888993", '𝙳𝙴𝚂𝙰𝚁𝚁𝙾𝙻𝙻𝙰𝙳𝙾𝚁 🎌', 1]]


global.suittag = ['573013482814'];
global.prems = ['573218138672'];

global.lenguajeSK = es //idioma de sakurabot

global.packname = '𝑆𝑎𝑘𝑢𝑟𝑎𝐵𝑜𝑡𝐿𝑖𝑡𝑒-𝑀𝐷🦋';
global.author = '𝙳𝙸𝙴𝙶𝙾 💖';
global.wm = '𝐒𝐚𝐤𝐮𝐫𝐚-𝐁𝐨𝐭 😻';
global.sk = '𝗦𝖺𝗄𝗎𝗋𝖺 : 𝗕𝗈𝗍 - 𝗟𝗂𝗍𝖾';
global.titulowm = '𝗦𝖺𝗄𝗎𝗋𝖺 : 𝗕𝗈𝗍';
global.titulowm2 = `𝘋𝘪𝘦𝘨𝘰𝘖𝘧𝘪𝘤𝘪𝘢𝘭`
global.igfg = '𝖣𝗂𝖾𝗀𝗈𝖮𝖿𝗂𝖼𝗂𝖺𝗅';
global.wait = '*🦋 𝑈𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜 ʕ •́؈•̀ ₎...*';
global.vs = '1.0.6 (beta)';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

//Grupos Ofc
global.gp1 = 'https://chat.whatsapp.com/DV7fEXPjgTtAIQXFZSIJhP' //Grupo Oficial De SakuraBot

global.gp2 = 'https://chat.whatsapp.com/DN0Qcj8Mbpg7HaHn6l35ts' //Grupo SakuraBot Global

global.gp3 = 'https://chat.whatsapp.com/JNdlCEUKLqHAw87sOqfKmO' //CuriosityBot Y SakuraBot

global.gp4 = 'https://chat.whatsapp.com/IstOAq2RnBx687WhQpOYK8' //NovaBot Y SakuraBot

global.gp5 = 'https://chat.whatsapp.com/HXOGzELFOVXFM1KrSoKdqH' //Grupo MultiBots

global.channel = 'https://whatsapp.com/channel/0029VaHdt8oJENxtNExL8z2n' //Canal Oficial

//Canal de Yt
global.yt = 'https://www.youtube.com/@SakuraBotLite' //Canal De Youtube

global.mods = [];


//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nSakuritaBot`;
global.gt = 'SakuraBot';
global.mysticbot = 'SakuraBot';
global.md = 'https://github.com/diegojadibot/SakuraBotLite-MD';
global.mysticbot = 'https://github.com/diegojadibot/SakuraBotLite-MD';
global.waitt = '*🦋 𝑈𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜 ʕ •́؈•̀ ₎...*';
global.waittt = '*🦋 𝑈𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜 ʕ •́؈•̀ ₎...*';
global.waitttt = '*🦋 𝑈𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜 ʕ •́؈•̀ ₎...*';
global.nomorown = '573004826011';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
