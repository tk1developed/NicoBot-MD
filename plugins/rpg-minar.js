const handler = async (m, {conn, isPrems}) => {
  const hasil = Math.floor(Math.random() * 1000);
  const time = global.db.data.users[m.sender].lastmiming + 600000;
  if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `*⚓ 𝑬𝒔𝒑𝒆𝒓𝒂𝒕𝒆 ${msToTime(time - new Date())} 𝑷𝒂𝒓𝒂 𝑽𝒐𝒍𝒗𝒆𝒓 𝑨 𝑴𝒊𝒏𝒂𝒓*`;
  m.reply(`*🌱 𝑂ℎℎ 𝑀𝑖𝑛𝑎𝑠𝑡𝑒𝑠: ${hasil} 𝚇𝙿*`);
  global.db.data.users[m.sender].lastmiming = new Date * 1;
};
handler.help = ['minar'];
handler.tags = ['xp'];
handler.command = ['minar', 'miming', 'mine'];
handler.fail = null;
handler.exp = 0;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m y ' + seconds + ' s ';
}
