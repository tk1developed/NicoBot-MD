export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`
  _📍 Dejastes De Estar Inactivo_\n${user.afkReason ? 'Motivo De La Inactividad: ' + user.afkReason : ''}
  
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
    m.reply(`*📍 El Usuario Esta Inactivo No Lo Etiquetes 🥀*`.trim());
  }
  return true;
}
