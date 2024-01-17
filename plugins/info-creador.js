const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `┏━━━━━━━━━━━━━━━━⋄
┃⍣🌻🪁 𝐂𝐑𝐄𝐀𝐃𝐎𝐑: 
┃⍣ Wa.me/573013114854
┃
┃⍣🍃🩷𝐂𝐑𝐄𝐀𝐃𝐎𝐑 2
┃⍣ Wa.me/573218138672
┃
┃⍣✨🌴 𝐂𝐎𝐋𝐀𝐁𝐎𝐑𝐀𝐃𝐎𝐑:
┃⍣ Wa.me/51935499065
╰━━━━━━━━━━━━━━━━⋄`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`},
    'mimetype': `application/${document}`,
    
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'Tu Mejor Bot Para Uso Personal',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://atom.bio/sakuralite'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|propietario)$/i;
export default handler;