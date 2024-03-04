import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `🚩 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙐𝙣 𝙉𝙤𝙢𝙗𝙧𝙚 𝘿𝙚 𝙐𝙣𝙖 𝘼𝙥𝙠 𝙋𝙖𝙧𝙖 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧𝙡𝙤 🎌`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `🦋 *𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘥𝘰𝘳 𝘋𝘦 𝘈𝘱𝘵𝘰𝘪𝘥𝘦* 📲\n\n🐱 *𝖭𝗈𝗆𝖻𝗋𝖾:* ${data5.name}\n🚩 *𝖯𝖺𝖼𝗄𝖺𝗀𝖾:* ${data5.package}\n🎌 *𝖴𝗅𝗍𝗂𝗆𝖺 𝖠𝖼𝗍𝗎𝖺𝗅𝗂𝗓𝖺𝖼𝗂𝗈𝗇:* ${data5.lastup}\n💝 *𝖳𝖺𝗆𝖺𝗇̃𝗈:* ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*🚩 𝖫𝖺 𝖠𝗉𝗉 𝖤𝗌 𝖬𝗎𝗒 𝖯𝖾𝗌𝖺𝖽𝖺 𝖭𝗈 𝖲𝖾 𝖯𝗎𝖽𝗈 𝖤𝗇𝗏𝗂𝖺𝗋 𝖤𝗅 𝖠𝗋𝖼𝗁𝗂𝗏𝗈 🎌.*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*🍭 Error No Se Pudo Enviar El Archivo.*`;
  }    
};
handler.command = /^(apk|modapk|dapk2|aptoide|aptoidedl)$/i;
handler.register = true
handler.limit = true
export default handler;
