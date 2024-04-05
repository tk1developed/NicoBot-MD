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
  const replyMessage = message.length === 0 ? '*🌸 No Hay Sub Bots Disponibles. Verifique Mas Tarde.*' : message;
const totalUsers = users.length;
const responseMessage = `*💜 LISTA DE JADIBOTS ACTIVOS*\n\n*🌩️ Puedes Contactar A Los Sub Bots Para Pedir Que Se Unan A Tu Grupo.*\n\n*🔮 Si El Texto Aparece En Blanco Significa Que No Ahi Sub Bots Activos.*\n\n*💚 Cada Usuario Sub Bot Maneja La Función Como Quiera, El Numero Principal No Se Hace Responsable Del Mal Uso De Su Bot.*\n\n🤖 *Sub Bots Conectado:* ${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();
await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m})}
handler.command = handler.help = ['listjadibot', 'bots', 'subsbots'];
handler.tags = ['jadibot'];
export default handler;