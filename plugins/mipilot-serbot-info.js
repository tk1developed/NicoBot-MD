import ws from 'ws';
async function handler(m, { conn: _envio, usedPrefix }) {
  const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
  function convertirMsADiasHorasMinutosSegundos(ms) {
  var segundos = Math.floor(ms / 1000);
  var minutos = Math.floor(segundos / 60);
  var horas = Math.floor(minutos / 60);
  var días = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  var resultado = "";
  if (días !== 0) {
    resultado += días + " días, ";
  }
  if (horas !== 0) {
    resultado += horas + " horas, ";
  }
  if (minutos !== 0) {
    resultado += minutos + " minutos, ";
  }
  if (segundos !== 0) {
    resultado += segundos + " segundos";
  }

  return resultado;
}

  const message = users.map((v, index) => `*${index + 1} ➺* @${v.user.jid.replace(/[^0-9]/g, '')}\n✨️ Wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}creador\n*Nombre:* ${v.user.name || '-'}\n*Activa:* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n\n');
  const replyMessage = message.length === 0 ? '*✨️ No Hay Subbots Disponible Por El Momento.*\n- 🍭Verifique Mas Tarde.' : message;
  const totalUsers = users.length;
  const responseMessage = `${replyMessage.trim()}`.trim();
await m.reply(`*🚀 Aqui Tiene La Lista De Los Subbots Activós En Estos Momentos.*\n\nJadibots Conectados: ${totalUsers || '0'}`)
await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m});
}
handler.command = handler.help = ['listjadibot', 'bots', 'subsbots'];
handler.tags = ['jadibot'];
export default handler;
//handler.register = true
//handler.private = true