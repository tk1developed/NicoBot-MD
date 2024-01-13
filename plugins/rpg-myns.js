import {createHash} from 'crypto';
const handler = async function(m, {conn, text, usedPrefix}) {
  const sn = createHash('md5').update(m.sender).digest('hex');
  m.reply(`❣️𝘌𝘴𝘵𝘦 𝘌𝘴 𝘛𝘶 𝘕𝘶𝘮𝘦𝘳𝘰 𝘋𝘦 𝘚𝘦𝘳𝘪𝘦: ${sn}`.trim());
};
handler.help = ['myns'];
handler.tags = ['xp'];
handler.command = /^(myns|ceksn)$/i;
handler.register = true;
export default handler;
