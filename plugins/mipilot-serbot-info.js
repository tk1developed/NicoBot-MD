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
const message = users.map((v, index) => `(${index + 1})\n🔌 Wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}ping\n*🚩 Nombre:* *${v.user.name || '-'}*\n*⏰ Tiempo Activa:* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n\n••••••••••••••••••••••••••••••••••••\n\n');
  const replyMessage = message.length === 0 ? '_🌸 ACTUALMENTE NO HAY BOTS CONECTADOS, VERIFIQUE MAS TARDE._' : message;
const totalUsers = users.length;
const responseMessage = `*🌹LISTA DE SUB-BOTS ACTIVOS*\n\n*💫 PUEDES CONTACTAR CON LOS SUB-BOTS ACTIVOS PARA INVITARLOS A QUE SE UNAN A TU GRUPO*\n\n*✨ SI EL TEXTO APARECE DE COLOR BLANCO SIN NUMERO O CONECTADOS SIGNIFICA QUE NO HAY BOTS ACTIVOS POR EL MOMENTO*\n\n🌟 DATO: CADA USUARIO QUE ES SUB-BOT MANEJA LA FUNCION A SU GUSTO. EL EQUIPO DE SAKURABOT Y EL NUMERO DEL BOT PRINCIPAL NO SE HACE CARGO DE SU MAL USO.\n\n* _🌹SUB-BOTS CONECTADOS: ${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();
await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m})}
handler.command = handler.help = ['listjadibot', 'bots', 'subsbots'];
handler.tags = ['jadibot'];
export default handler;