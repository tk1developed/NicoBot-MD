export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`
  *📍 Dejastes De Estar Inactivo ${user.afkReason ? ' Motivo: ' + user.afkReason : ''}*
  
  *Tiempo Inactivo: ${(new Date - user.afk).toTimeString()}*
  `.trim());
    user.afk = -1;
    user.afkReason = '';
  }
  const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (const jid of jids) {
    const user = global.db.data.users[jid];
    if (!user) {
      continue;
    }
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) {
      continue;
    }
    const reason = user.afkReason || '';
    m.reply(`*📍 No Lo Etiquetes 🥀*

*El Usuario Que Usted Etiqueto Esta Inactivo*      
*${reason ? 'Motivo: ' + reason : 'Motivo De La Inactividad: _El Usuario No Explico El Motivo_'}*
*Tiempo TransCurrido De Inactividad: ${(new Date - afkTime).toTimeString()}*
  `.trim());
  }
  return true;
}
