import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';
import { es } from "./lib/idiomas/total-idiomas.js"

global.botnumber = "+5930960176846"
global.confirmCode = "2"

//• ↳𝑷𝑶𝑵 𝑳𝑶𝑺 𝑵𝑼𝑴𝑬𝑹𝑶𝑺 𝑸𝑼𝑬 𝑸𝑼𝑰𝑬𝑹𝑨𝑺
global.owner = [
['573012482597', '👑 Cʀᴇᴀᴅᴏʀ 🪐', true],
['573012482694', 'Oᴡɴᴇʀ 👑', true],
['5217294888993'],
['50558124470'],
['5492266613038'],
['51935499065'],
['573218138672']]

//• ↳𝑨𝑮𝑹𝑬𝑮𝑨𝑻𝑬 𝑺𝑰 𝑬𝑹𝑬𝑺 𝑶𝑾𝑵𝑬𝑹
global.contactos = [
["573012482597", '💚 Dɪᴇɢᴏ Oғᴄ 💋', 1],
["5217294888993", 'Zᴀᴍ Oᴡɴᴇʀ 🍧', 1],
["447700168473", 'Dᴇsᴀʀʀᴏʟʟᴀᴅᴏʀ 🐈', 1],
['50558124470', 'Cᴏʟᴀʙ Sᴜᴘᴘᴏʀᴛ 💻', 1]]

global.suittag = ['573012482597'];
global.prems = ['573218138672'];

global.lenguajeYL = es //idioma de yoshiko

//• ↳ ◜𝑴𝑨𝑹𝑪𝑨𝑺 𝑫𝑬 𝑨𝑮𝑼𝑨◞ • 🍁
global.packname = '𝗬𝗼𝘀𝗵𝗶𝗸𝗼 𝗕𝗼𝘁 - 𝗠𝗗 🍃';
global.author = 'Dɪᴇɢᴏ 🍂';
global.wm = '𝚈𝙾𝚂𝙷𝙸𝙺𝙾 𝙱𝙾𝚃 - 𝙼𝙳 🌺';
global.titulowm = '𝗬𝗈𝗌𝗁𝗂𝗄𝗈 : 𝗕𝗈𝗍';
global.titulowm2 = `𝐃𝐢𝐞𝐠𝐨 𝐎𝐟𝐜`
global.igfg = 'Diego Oficial';
global.sk = 'Yᴏsʜɪᴋᴏ Bᴏᴛ - MD';
global.team = 'Bʏ: Dɪᴇɢᴏ.Oғᴄ';
global.vs = '1.0.7';

//• ↳ ◜𝑴𝑺𝑮 𝑫𝑬 𝑬𝑺𝑷𝑬𝑹𝑨◞ • 🈸
global.wait = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';
global.waitt = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';
global.waittt = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';
global.waitttt = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';

//• ↳ ◜𝑰𝑴𝑨́𝑮𝑬𝑵𝑬𝑺◞ • 🌇
global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu3.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu.png');
global.imagen7 = fs.readFileSync('./AhoraQue.png');
global.imagen8 = fs.readFileSync('./Que.jpg');

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺◞ • 🌿
global.gp1 = 'https://chat.whatsapp.com/Eaa9JFA53ps7WHMv2VHbO9' //Grupo Oficial De Yoshiko1

global.gp2 = 'https://chat.whatsapp.com/BvHfQUBNAAFF1k1F9bTL0G' //Grupo Oficial Yoshiko2

global.gp3 = 'https://chat.whatsapp.com/JNdlCEUKLqHAw87sOqfKmO' //Curiosity Y Yoshiko

global.gp4 = 'https://chat.whatsapp.com/IstOAq2RnBx687WhQpOYK8' //Nova Y Yoshiko

global.gp5 = 'https://chat.whatsapp.com/KjR8NTfdWwU1a66uDOOGLZ' //Multibots

global.channel = 'https://whatsapp.com/channel/0029VaQD7LAJP216tu9liI2A' //Canal Oficial

global.yt = 'https://www.youtube.com/@Yoshiko_team' //Canal De Youtube

global.md = 'https://github.com/Diego-YL-177/YoshikoBot-MD' //Github Oficial

global.fb = 'https://www.facebook.com/diegosaroficial?mibextid=ZbWKwL' //Facebook Del Propietario

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = "" + hour;

global.mods = [];


//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶◞ • 🕒
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nYoshiko`;
global.gt = 'Yoshiko';
global.yoshiko = 'Yoshiko';
global.yoshiko = 'https://github.com/Diego-YL-177/YoshikoBot-MD';
global.nomorown = '573012482597';
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
global.botdate = `${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
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
