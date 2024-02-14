/* Codigo copiado de GataBot-MD */

import { sticker } from '../lib/sticker.js';
import axios from 'axios';
const handler = async (m, {conn, args, usedPrefix, command}) => {
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else throw "*😻 𝑈𝑠𝑜 𝐼𝑛𝑐𝑜𝑟𝑟𝑒𝑐𝑡𝑜 𝐷𝑒𝑙 𝐶𝑜𝑚𝑎𝑛𝑑𝑜, 𝐼𝑛𝑔𝑟𝑒𝑠𝑒 𝑈𝑛𝑎 𝑃𝑎𝑙𝑎𝑏𝑟𝑎*";
   if (!text) return m.reply('*😻 𝐼𝑛𝑔𝑟𝑒𝑠𝑒 𝑈𝑛 𝑇𝑒𝑥𝑡𝑜!*');
    const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender; 
    const mentionRegex = new RegExp(`@${who.split('@')[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*`, 'g');
    const mishi = text.replace(mentionRegex, '');
   if (mishi.length > 30) return m.reply('*🦋 𝑇𝑒𝑥𝑡𝑜 𝑀𝑢𝑦 𝐿𝑎𝑟𝑔𝑜, 𝑁𝑜 𝑆𝑒 𝑃𝑢𝑒𝑑𝑒 𝑂𝑏𝑡𝑒𝑛𝑒𝑟 𝑀𝑎𝑠 𝐷𝑒 30 𝐶𝑎𝑟𝑎𝑐𝑡𝑒𝑟𝑒𝑠*');
    const pp = await conn.profilePictureUrl(who).catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    const nombre = await conn.getName(who)
    const obj = {"type": "quote", "format": "png", "backgroundColor": "#000000", "width": 512, "height": 768, "scale": 2, "messages": [{"entities": [], "avatar": true, "from": {"id": 1, "name": `${who?.name || nombre}`, "photo": {url: `${pp}`}}, "text": mishi, "replyMessage": {}}]};
    const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {headers: {'Content-Type': 'application/json'}});
    const buffer = Buffer.from(json.data.result.image, 'base64');
   let stiker = await sticker(buffer, false, global.packname, global.author);
   if (stiker) return conn.sendFile(m.chat, stiker, 'error.webp', '', m);
}
handler.help = ['qc'];
handler.tags = ['sticker'];
handler.command = /^(qc)$/i;
export default handler;
