const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let enviando;
const handler = async (m, {conn, text, isMods, isOwner, isPrems}) => {
 if (enviando) return;
     enviando = true 
  try {
    const link = text //(m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text;
    if (!link || !link.match(linkRegex)) throw '*🍭 Te Falta El Link - Enlace De Un Grupo De WhatsApp.*\n\n*💖 Ejemplo:*\n*◉ #join https://chat.whatsapp.com/DUAS7osnQ2h3tlYT4bnbfU*';
    const [_, code] = link.match(linkRegex) || [];
    if ( isPrems || isMods || isOwner || m.fromMe) {
      const res = await conn.groupAcceptInvite(code);
      await conn.sendMessage(m.chat, {text: '*✅️ El Bot Se Unio Correctamente.*'}, {quoted: m})
      enviando = false 
    } else {
      conn.sendMessage(m.chat, {text: '*🦋 El link de su grupo fue enviado a mi creador.*\n\n*🍓 Su grupo estará en evaluación y el propietario/a del Bot decidirá si agrega o no al Bot.*\n\n*🍓 Algunas de las razones por la cual su solicitud puede ser rechazada son:*\n*1.🌹 El Bot está saturado.*\n*2.🌹 El Bot fue eliminado del grupo recientemente.*\n*3.🌹 El link del grupo ha sido restablecido.*\n*4.🌹 El Bot no se agrega a grupos por decisión del propietario/a.*\n\n*🍓 El proceso de evaluación puede tomar algo de tiempo, incluso dias, tenga paciencia.*'}, {quoted: m});
      const data = global.owner.filter(([id]) => id)[0];
      const dataArray = Array.isArray(data) ? data : [data];
      for (const entry of dataArray) await conn.sendMessage(entry + '@s.whatsapp.net', {text: '*🦋 NUEVA SOLICITUD DE UN BOT PARA UN GRUPO 🍓*\n\n*—◉ Solicitante:* ' + '@' + m.sender.split('@')[0] + '\n*—◉ Link del grupo:* ' + link, mentions: [m.sender], contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `${link}`, "sourceUrl": `${link}`}}}, {quoted: m});
      enviando = false 
    }
  } catch {
    enviando = false 
    throw '📍 *Error Al Usar El Comando*';
  }
};
handler.help = ['join [chat.whatsapp.com]'];
handler.tags = ['premium'];
handler.command = /^join|unete|unirte$/i;
export default handler;