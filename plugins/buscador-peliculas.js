/* Creado por Bruno Sobrino (https://github.com/BrunoSobrino) */
import fetch from 'node-fetch';
import axios from 'axios';

const handler = async (m, {text, usedPrefix, command, conn}) => {
 try {
  if (!text) throw `*💖 𝖨𝗇𝗀𝗋𝖾𝗌𝖾 𝖠𝗅𝗀𝗎𝗇 𝖭𝗈𝗆𝖻𝗋𝖾 𝖣𝖾 𝖫𝖺 𝖯𝖾𝗅𝗂𝖼𝗎𝗅𝖺 𝖰𝗎𝖾 𝖣𝖾𝗌𝖾𝖺𝗌 𝖡𝗎𝗌𝖼𝖺𝗋 🐱*`;
  let aaaa;
  let img;
    aaaa = await searchC(text);
    const randomIndex = Math.floor(Math.random() * aaaa.length);
    try {
        img = 'https://wwv.cuevana8.com' + aaaa[randomIndex].image;
    } catch {
        img = 'https://www.poresto.net/u/fotografias/m/2023/7/5/f1280x720-305066_436741_5050.png';
    }    
  if (aaaa == '') throw `*✨𝘕𝘰 𝘏𝘢𝘺 𝘙𝘦𝘴𝘶𝘭𝘵𝘢𝘥𝘰𝘴 🐈*`;                                        /* https://wwv.cuevana8.com */
  const res = await aaaa.map((v) => `*🎬 • 𝐍𝐚𝐦𝐞:* ${v.title}\n*🍿 • Url:* ${v.link}`).join`\n\n───────────────\n\n`;
  const ads = '*💫 • 𝐁𝐥𝐨𝐪𝐮𝐞𝐚𝐝𝐨𝐫 𝐃𝐞 𝐀𝐧𝐮𝐧𝐜𝐢𝐨𝐬 𝐑𝐞𝐜𝐨𝐦𝐞𝐧𝐝𝐚𝐝𝐨𝐬:* Block This\n*⛨ • 𝐄𝐧𝐥𝐚𝐜𝐞:* https://block-this.com/block-this-latest.apk\n\n≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣\n\n`;
  conn.sendMessage(m.chat, {image: {url: img}, caption: ads + res}, {quoted: m});
 } catch {
   return conn.sendMessage(m.chat, {text: '*❗ Error, no se obtuvieron resultados.'}, {quoted: m});   
 }    
};   
handler.command = ['cuevana', 'pelisplus']

export default handler

const safeLoad = async (url, options = {}) => {
  try {
    const { data: pageData } = await axios.get(url, options)
    const $ = load(pageData)
    return $
  } catch (err) {
    if (err.response)
      throw new Error(err.response.statusText)
    throw err
  }
}

async function searchContent(query, numberPage = 1) {
  const $ = await safeLoad(`https://cuevana3.info/page/${numberPage}/`, {
    params: { s: query }
  })

