const handler = async (m, {conn}) => {
    const _muptime = process.uptime() * 1000
    const muptime = clockString(_muptime)
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const sbot = (conn.user.jid == global.conn.user.jid ? 'Bot Oficial' : 'Sub-Bot');
m.react('⚙️') 
    const str = `☘️ *ESTADO DE:* ${global.botname}
🕒 *Activa:* ${muptime}
💭 *Tipo:* ${sbot}
🥷 *Bot Uso:* Publico
👑 *Owner:* Ofc.Diego`;
      conn.reply(m.chat, str, m, fake, )
};

handler.help = ['estado'];
handler.tags = ['info'];
handler.command = ['status', 'estado'];
handler.register = true;

export default handler;

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}