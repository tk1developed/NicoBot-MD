import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw '*⚠️ Ingrese Su Número De Série, Si No Sabe Cual Es Use #myns*';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw '*⚠️ Verifique Que Su Número De Série Sea Correcto*';
  user.registered = false;
  m.reply(`✅ *Registro eliminado*`);
};
handler.help = ['', 'ister'].map((v) => 'unreg' + v + ' <numero de serie>');
handler.tags = ['xp'];
handler.command = /^unreg(ister)?$/i;
handler.register = true;
export default handler;

