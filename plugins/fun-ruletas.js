const handler = async (m, {conn, text, isPrems}) =>  {
let kick = ['ban1', 'ban2']; 
let rulekick = kick[Math.floor(Math.random() * 6)]
if (rulekick === 'ban1') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'addowner').catch(m.reply(`💭 *JAJJAJA WAOZ TE GANAS OWNER ASTA QUE ME REINICIE.* 🎁`)) 

if (rulekick === 'ban2') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'kick').catch(m.reply(`😹 *QUE MALA SUERTE TIENES JAJAJ, ADIOS.* 😹😹😹`)) 
}
handler.command = ['rulekick', 'kickrule']
handler.botAdmin = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}