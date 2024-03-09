import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw '*⚠️ INGRESE SU NÚMERO DE SÉRIE, SI NO SABE CUAL ES USE #myns*';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw '*⚠️ VERIFIQUE QUE SU NÚMERO DE SÉRIE SEA CORRECTO*';
  user.registered = false;
  m.reply(`*📖 USTED YA NO ESTÁ REGISTRADO*`);
};
handler.help = ['', 'ister'].map((v) => 'unreg' + v + ' <numero de serie>');
handler.tags = ['xp'];
handler.command = /^unreg(ister)?$/i;
handler.register = true;
export default handler;

