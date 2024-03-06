import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*📖 Etiqueta A Algun Usuario*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '*🚀 Ingrese La Cantidad*';
  if (isNaN(txt)) throw '*📖 Simbolo No Admitido, Solo Numeros!*';
  const xp = parseInt(txt);
  let exp = xp;
  const pjk = Math.ceil(xp * pajak);
  exp += pjk;
  if (exp < 1) throw '*📖 El Numero Minimo De Exp Es 𝟷*';
  const users = global.db.data.users;
  users[who].exp += xp;
  m.reply(`≡ *Xp Añadido*

*📖 Total:* ${xp}`);
};
handler.command = ['añadirxp', 'addexp'];
handler.rowner = true;
export default handler;
