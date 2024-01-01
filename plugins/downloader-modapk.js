import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `⚠️Iɴɢʀᴇsᴀ Eʟ Nᴏᴍʙʀᴇ Dᴇ Lᴀ Aᴘʟɪᴄᴀᴄɪᴏ́ɴ Qᴜᴇ Qᴜɪᴇʀᴀs Dᴇsᴄᴀʀɢᴀʀ`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `📲 *𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑑𝑜𝑟 𝐷𝑒 𝐴𝑝𝑡𝑜𝑖𝑑𝑒* 📲\n\n📌 *𝘕𝘰𝘮𝘣𝘳𝘦:* ${data5.name}\n📦 *𝘗𝘢𝘤𝘬𝘢𝘨𝘦:* ${data5.package}\n🕒 *𝘜𝘭𝘵𝘪𝘮𝘢 𝘈𝘱𝘭𝘪𝘤𝘢𝘤𝘪𝘰́𝘯:* ${data5.lastup}\n📥 *𝘛𝘢𝘮𝘢𝘯̃𝘰:* ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*[ ⛔ ] El archivo es demasiado pesado por lo que no se enviará.*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*[❗] Error, no se encontrarón resultados para su búsqueda.*`;
  }    
};
handler.command = /^(apk|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;
