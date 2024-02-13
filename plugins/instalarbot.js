import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args }) => {
   const res = await fetch('https://api.github.com/repos/diegojadibot/SakuraBotLite-MD');
   const json = await res.json();
   let txt = `🍓 𝙄𝙣𝙨𝙩𝙖𝙡𝙖𝙘𝙞𝙤𝙣 𝘼𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙖 (𝚃𝙴𝚁𝙼𝚄𝚇)
   
➪ termux-setup-storage

➪ apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/diegojadibot/SakuraBotLite-MD/master/sakura.sh | bash

🦋 𝙄𝙣𝙨𝙩𝙖𝙡𝙖𝙘𝙞𝙤𝙣 𝙈𝙖𝙣𝙪𝙖𝙡 (𝚃𝙴𝚁𝙼𝚄𝚇) 🍓

➪ cd && termux-setup-storage

➪ apt-get update -y && apt-get upgrade -y

➪ pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 

➪ git clone https://github.com/diegojadibot/SakuraBotLite-MD.git && cd SakuraBotLite-MD

➪ yarn install

➪ npm install

➪ npm update

➪ npm start

🟢 𝐀𝐜𝐭𝐢𝐯𝐚𝐫 𝐄𝐥 𝐁𝐨𝐭 🟢

➪ cd

➪ cd SakuraBotLite-MD

➪ npm start

💖 𝙊𝙗𝙩𝙚𝙣𝙚𝙧 𝙊𝙩𝙧𝙤 𝙌𝙧 😻

➪ cd SakuraBotLite-MD

➪ rm -rf SakuraBotSession

➪ npm start

🟢 (𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 1 𝙿𝙾𝚁 1) 🦋
    
    🍓 𝑆𝑖 𝑇𝑖𝑒𝑛𝑒𝑠 𝐷𝑢𝑑𝑎 𝑆𝑜𝑏𝑟𝑒 𝑀𝑖 𝐶𝑟𝑒𝑎𝑑𝑜𝑟 𝑂 𝐷𝑒𝑙 𝐵𝑜𝑡 𝐶𝑜𝑛𝑡𝑎𝑐𝑡𝑎𝑙𝑜 𝐸𝑠𝑐𝑟𝑖𝑏𝑒: #𝑐𝑟𝑒𝑎𝑑𝑜𝑟 ⚓  `;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen1, "mediaUrl": global.md, "sourceUrl": global.md}}}, {quoted: m});
};
handler.help = ['scbot'];
handler.tags = ['info'];
handler.command = /^(instalarbot|descargarbot)$/i;
export default handler;