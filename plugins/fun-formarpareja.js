const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(`╭━〔  𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 💖  〕⬣
┃ ${toM(a)}
┃ Deberias Casarte 💍 Con 
┃ ${toM(b)}
┃ Hacen Una Bonita Pareja 💓
╰━━━━━━━━━━━━⬣`, null, {
    mentions: [a, b],
  });
}
handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
export default handler;
