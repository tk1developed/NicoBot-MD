const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*♡︎ 𝘕𝘶𝘮𝘦𝘳𝘰 𝘋𝘦 𝘔𝘪 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 Wa.me/573013114854*

*❦︎ 𝘕𝘶𝘮𝘦𝘳𝘰 𝘋𝘦𝘭 𝘊𝘰𝘭𝘢𝘣𝘰𝘳𝘢𝘥𝘰𝘳: Wa.me/51935499065*`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`},
    'mimetype': `application/${document}`,
    'fileName': `「 𝙎𝙖𝙠𝙪𝙧𝙖𝙇𝙞𝙩𝙚-𝙈𝘿 」`,
    'fileLength': 99999999999999,
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
        'sourceUrl': 'https://atom.bio/sakurabot'}},
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