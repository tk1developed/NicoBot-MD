var handler = async (m, { conn, text, usedPrefix, command}) => {

let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img

try {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)
if(isNaN(text)) {
number = text.split`@`[1]
} else if(!isNaN(text)) {
number = text
}
user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
bot = conn.user.jid.split`@`[0] 
bant = `🧸 *Etiqueta A Algun Usuario*`
if (!text && !m.quoted) return conn.reply(m.chat, bant, m, { mentions: [user] })               
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
number = user.split('@')[0]
if(user === conn.user.jid) return conn.reply(m.chat, `📍 *Yo Como Bot No Puedo Banearme Yo Mismo!*`, m, { mentions: [user] })   
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, `🧸 *No Se Puede Banear El Propietario* @${ownerNumber} Del Bot : ${sk}`, m, { mentions: [aa] })
return
}}
users = global.db.data.users
if (users[user].banned === true) conn.reply(m.chat, `📍 *Este Usuario* @${number} *Ya Fue Baneado Del Bot No Es Necesario Banearlo De Nuevo* 🧸`, m, { mentions: [user] }) 
users[user].banned = true
usr = m.sender.split('@')[0]     
await conn.reply(m.chat, '🧸 *Perfecto El Usuario Ya Esta Baneado, Ya No Puede Usarme*', m, { mentions: [user] })   

}} catch (e) {
await conn.reply(m.chat, '*Ocurrió un fallo*', m, fake, )
console.log(e) 
}

}
handler.tags = ['owner']
handler.commnad = ['banuser']
handler.command = /^banuser$/i

handler.rowner = true

export default handler


/*const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const BANtext = `🍓 𝐏𝐨𝐫 𝐅𝐚𝐯𝐨𝐫 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚 𝐀 𝐔𝐧 𝐔𝐬𝐚𝐫𝐢𝐨 𝐏𝐚𝐫𝐚 𝐁𝐚𝐧𝐞𝐚𝐫𝐥𝐨 𝐃𝐞𝐥 𝐁𝐨𝐭!`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat,. {mentions: conn.parseMention(BANtext)});
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].banned = true;
  m.reply('🦋 𝖯𝖾𝗋𝖿𝖾𝖼𝗍𝗈, 𝖤𝗅 𝖴𝗌𝗎𝖺𝗋𝗂𝗈 𝖸𝖺 𝖤𝗌𝗍𝖺 𝖡𝖺𝗇𝖾𝖺𝖽𝗈, 𝖭𝗈 𝖯𝗈𝖽𝗋𝖺 𝖴𝗌𝖺𝗋 𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭𝐋𝐢𝐭𝐞-𝐌𝐃 😻');
};
handler.command = /^banuser$/i;
handler.rowner = true;
export default handler;*/