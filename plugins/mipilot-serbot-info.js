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

  const message = users.map((v, index) => `*${index + 1}.-* @${v.user.jid.replace(/[^0-9]/g, '')}\n*⚓️Enlace:* wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado\n*🌹 Nombre:* ${v.user.name || '-'}\n*🌻 Activo:* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n\n');
  const replyMessage = message.length === 0 ? '*🌹🌻 𝘕𝘰 𝘏𝘢𝘺 𝘚𝘶𝘣𝘣𝘰𝘵𝘴 𝘋𝘪𝘴𝘱𝘰𝘯𝘪𝘣𝘭𝘦 𝘌𝘯 𝘌𝘴𝘵𝘰𝘴 𝘔𝘰𝘮𝘦𝘯𝘵𝘰𝘴 𝘙𝘦𝘨𝘭𝘦𝘴𝘢 𝘔𝘢𝘴 𝘛𝘢𝘳𝘥𝘦👋🏻*' : message;
  const totalUsers = users.length;
  const responseMessage = `
*🚀Aǫᴜɪ Tɪᴇɴᴇs Lᴀs Lɪsᴛᴀs Dᴇ Sᴜʙʙᴏᴛs Aᴄᴛɪᴠᴏs🚀*

*🌻 𝑷𝒖𝒆𝒅𝒆𝒔 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒂𝒓 𝑷𝒂𝒓𝒂 𝑸𝒖𝒆 𝑼𝒏 𝑩𝒐𝒕 𝑺𝒆 𝑼𝒏𝒂 𝑨𝒍 𝑮𝒓𝒖𝒑𝒐 𝑸𝒖𝒆 𝑼𝒔𝒕𝒆𝒅 𝑫𝒆𝒔𝒆𝒂 𝑼𝒔𝒂𝒓 𝑬𝒍 𝑩𝒐𝒕 🌼*

*🚀🌻  𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯 𝐍𝐨 𝐒𝐞 𝐇𝐚𝐜𝐞 𝐂𝐚𝐫𝐠𝐨 𝐃𝐞 𝐌𝐚𝐥 𝐔𝐬𝐨 𝐃𝐞𝐥 𝐁𝐨𝐭 𝐀 𝐒𝐮 𝐍𝐮𝐦𝐞𝐫𝐨»!!*

*🌻 𝙇𝙖𝙨 𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙨 𝙌𝙪𝙚 𝙎𝙚 𝘾𝙤𝙣𝙚𝙘𝙩𝙖𝙣 𝘼𝙡 𝘽𝙤𝙩 𝙉𝙤 𝘾𝙤𝙣𝙤𝙘𝙚𝙢𝙤𝙨 𝘼 𝙀𝙨𝙖𝙨 𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙨, 𝘼𝙨𝙞 𝙌𝙪𝙚 𝖣𝗂𝖾𝗀𝗈𝖮𝖿𝗂𝖼𝗂𝖺𝗅 𝙉𝙤 𝙎𝙚 𝙃𝙖𝙘𝙚 𝘾𝙖𝙧𝙜𝙤 𝘿𝙚 𝙇𝙤 𝙌𝙪𝙚 𝙋𝙪𝙚𝙙𝙖 𝙋𝙖𝙨𝙖𝙧 𝙀𝙣 𝙇𝙤𝙨 𝘽𝙤𝙩𝙨 𝘿𝙚 𝙉𝙪𝙢𝙚𝙧𝙤𝙨 𝙉𝙤 𝘾𝙤𝙣𝙤𝙘𝙞𝙙𝙤𝙨. 🌼*

*🌻⏰𝖢𝖮𝖭𝖤𝖢𝖳𝖠𝖣𝖮𝖲:* ${totalUsers || '0'}

${replyMessage.trim()}`.trim();

  await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m});
}
handler.command = handler.help = ['listjadibot', 'bots', 'subsbots'];
handler.tags = ['jadibot'];
export default handler;