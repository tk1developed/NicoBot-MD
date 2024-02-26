const handler = async (m, {text}) => {
  const user = global.db.data.users[m.sender];
  user.afk = + new Date;
  user.afkReason = text;
  m.reply(`*📍 El Usuario ${conn.getName(m.sender)} Estará Inactivo (Afk), Por Favor No Lo Etiqueten*\n\n*Motivo Del (Afk)${text ? ': ' + text : ''}*
`);
};
handler.help = ['afk [alasan]'];
handler.tags = ['main'];
handler.command = /^afk$/i;
export default handler;
