import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';
import { es } from "./lib/idiomas/total-idiomas.js"


global.botnumber = "17726177069"

global.owner = [ 
   ['17754685176', '👑 Sakura - Creador 👑', true],
  ['573218138672', '💫 Sakura - Collaborator 1 💫', true],
  ['573207200376', '💫 Sakura - Collaborator 2 💫', true],
  ['573246822621', '💫 Sakura - Collaborator 3 💫', true],
  ['573106909511', '💫 Sakura - Collaborator 4 💫', true],
  ['51935499065', '💫 Sakura - Collaborator 5 💫', true],
  ['526366923240', '💫 Sakura - Collaborator 6 💫', true],
  ['51944167935', '💫 Sakura - Kiara 💫', false],
  ['573001452386', '💫 Sakura - Collaborator 8 💫', true],
  ['573003014644','💫 Sakura - Milena💫', true]
];

global.suittag = ['573013114854'];
global.prems = ['573218138672'];

global.lenguajeSK = es //idioma de sakurabot

global.packname = '𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩-𝙈𝘿✨️';
global.author = '𝘿𝙞𝙚𝙜𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡';
global.wm = '𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩-𝙈𝘿';
global.titulowm = '𝙎𝙖𝙠𝙪𝙧𝙞𝙩𝙖-𝙈𝘿';
global.titulowm2 = `𝘋𝘪𝘦𝘨𝘰 𝘖𝘧𝘪𝘤𝘪𝘢𝘭`
global.igfg = '𝘋𝘪𝘦𝘨𝘰 𝘖𝘧𝘪𝘤𝘪𝘢𝘭';
global.wait = '*⏳️ Cargando Espere Un Momento...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

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
global.md = 'https://github.com/diegojadibot/SakuraBot-MD';
global.mysticbot = 'https://github.com/diegojadibot/SakuraBot-MD';
global.waitt = '*⏳ Cargando Espere Un Momento...*';
global.waittt = '*⏳ Cargando Espere Un Momento...*';
global.waitttt = '*⏳ Cargando Espere Un Momento...*';
global.nomorown = '573013114854';
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
