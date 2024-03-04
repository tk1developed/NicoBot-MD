import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*🚩 Ingrese Un Nombre De Una Apk Para Descargarlo 🎌*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `🍭 _Descargador De Aptoide_ 📲\n\n🐱 *Nombre:* ${data5.name}\n🚩 *Package:* ${data5.package}\n🎌 *Ultima Actualización:* ${data5.lastup}\n💝 *Tamaño:* ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*🚩 La App Es Muy Pesada No Se Pudo Enviar El Archivo 🎌.*'}, {quoted: m});
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
