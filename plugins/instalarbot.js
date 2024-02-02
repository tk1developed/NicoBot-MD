import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args }) => {
   const res = await fetch('https://api.github.com/repos/Ender-GB-Isis777/LOBO-BOT-MD');
   const json = await res.json();
   let txt = `🌱𝐼𝑛𝑠𝑡𝑎𝑙𝑎𝑐𝑖𝑜𝑛 𝑇𝑒𝑟𝑚𝑢𝑥 𝐴𝑢𝑡𝑜𝑚𝑎𝑡𝑖𝑐𝑎⚓
 ❀ termux-setup-storage
❀ apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/diegojadibot/SakuraBotLite-MD/master/sakura.sh | bash

🌱 𝐼𝑛𝑠𝑡𝑎𝑙𝑎𝑐𝑖𝑜𝑛 𝑀𝑎𝑛𝑢𝑎𝑙 𝑇𝑒𝑟𝑚𝑢𝑥 ⚓
    ❀ cd && termux-setup-storage
    ❀ apt-get update -y && apt-get upgrade -y
    ❀ pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
    ❀ git clone https://github.com/diegojadibot/SakuraBotLite-MD.git && cd SakuraBotLite-MD
    ❀ yarn install
    ❀ npm install
    ❀ npm update
    ❀ npm start

⚓𝑆𝑒 𝐴𝑝𝑎𝑔𝑜 𝐸𝑙 𝐵𝑜𝑡? 𝐶𝑜𝑚𝑎𝑛𝑑𝑜 𝑃𝑎𝑟𝑎 𝐸𝑛𝑐𝑒𝑛𝑑𝑒𝑟𝑙𝑜🌱
❀ cd
❀ cd SakuraBotLite-MD
❀ npm start

⚓𝑃𝑒𝑑𝑖𝑟 𝑂𝑡𝑟𝑜 𝑄𝑟 𝑉𝑖𝑎 𝑇𝑒𝑟𝑚𝑢𝑥🌱
❀ cd SakuraBotLite-MD
❀ rm -rf SakuraBotSession
❀ npm start

✨ 𝘓𝘰𝘴 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘚𝘰𝘯 1 𝘗𝘰𝘳 1 𝘝𝘪𝘢 𝘛𝘦𝘳𝘮𝘶𝘹 🌻
    
    🌱 𝑻𝒊𝒆𝒏𝒆𝒔 𝑫𝒖𝒅𝒂 𝑺𝒐𝒃𝒓𝒆 𝑬𝒍 𝑩𝒐𝒕 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒂 𝑨𝒍 𝑪𝒓𝒆𝒂𝒅𝒐𝒓 𝑪𝒐𝒏 𝑬𝒍 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 𝑪𝒐𝒎𝒂𝒏𝒅𝒐: #𝑐𝑟𝑒𝑎𝑑𝑜𝑟 ⚓  `;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": global.md, "sourceUrl": global.md}}}, {quoted: m});
};
handler.help = ['scbot'];
handler.tags = ['info'];
handler.command = /^(instalarbot|descargarbot)$/i;
export default handler;