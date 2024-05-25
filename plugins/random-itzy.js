import axios from 'axios';
const handler = async (m, {conn, args, usedPrefix, command}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/Diego-YL-177/YoshikoBot-MD/master/src/JSON/itzy.json`)).data;
  const yoshiko = await res[Math.floor(res.length * Math.random())];
  conn.sendFile(m.chat, yoshiko, 'error.jpg', `_${command}_`, m);
};

handler.help = ['itzy', 'kpopitzy'];
handler.tags = ['internet'];
handler.command = /^(itzy|kpopitzy)$/i;
export default handler;
