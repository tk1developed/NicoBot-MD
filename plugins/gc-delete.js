/* Creditos a https://github.com/FG98F */

const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `🛑 *Responda al mensaje que quieras eliminarlo*`;
  try {
    const delet = m.message.extendedTextMessage.contextInfo.participant;
    const bang = m.message.extendedTextMessage.contextInfo.stanzaId;
    return conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
  } catch {
    return conn.sendMessage(m.chat, {delete: m.quoted.vM.key});
  }
};
handler.help = ['del', 'delete'];
handler.tags = ['group'];
handler.command = /^del(ete)?$/i;
//handler.group = true;
//handler.admin = true;
//handler.botAdmin = true;
export default handler;

/* let handler = function (m) {
if (!m.quoted) throw false
let { chat, fromMe, isBaileys } = m.quoted
if (!fromMe) throw false
if (!isBaileys) throw '🛑 *Ocurrió Un Error*'
conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['del', 'delete']
handler.tags = ['tools']
handler.command = /^del(ete)?$/i
handler.group = true
handler.admin = true
export default handler*/
