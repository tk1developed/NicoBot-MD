import fetch from 'node-fetch';
const handler = (m) => m;

handler.before = async (m) => {
  const chat = global.db.data.chats[m.chat];
  if (chat.simi) {
    if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;
    let textodem = m.text;
    try {
await conn.sendPresenceUpdate('composing', m.chat)
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/simi?text=${text}`)
let res = await gpt.json()
await m.reply(res.data.message)
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
return m.reply(`*Api simsimi caida vuelva mas tardes*`)
console.log(e)}}}