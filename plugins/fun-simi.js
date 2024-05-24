import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {text, command, args, usedPrefix}) => {
if (!text) throw `✏️ Ingresa un texto para empezar a hablar con la Bot.`
m.react('🗣️')
try {
await conn.sendPresenceUpdate('composing', m.chat)
const api = await fetch('https://api.simsimi.net/v2/?text=' + text + '&lc=es');
const resSimi = await api.json();
m.reply(resSimi.success);
} catch {
try {
if (text.includes('Hola')) text = text.replace('Hola', 'Hello');
if (text.includes('hola')) text = text.replace('hola', 'Hello');
if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO');
const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
const resu = await reis.json();
const nama = m.pushName || '1';
const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
const res = await api.json();
const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
const resu2 = await reis2.json();
m.reply(resu2[0][0][0]);
} catch (e) {
await m.reply(`⚙️ Ocurrió Un Error`)
console.log(e)
}}}
handler.help = ['simi']
handler.tags = ['fun'];
handler.command = /^((sim)?simi|bot|alexa|cortana)$/i;
export default handler;