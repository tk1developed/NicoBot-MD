const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*꧁༺ Grupos del Bot ༻꧂:*
𝘎𝘳𝘶𝘱𝘰𝘴 𝘖𝘧𝘪𝘤𝘪𝘢𝘭𝘦𝘴 𝘋𝘦𝘭 𝘉𝘰𝘵 𝘚𝘢𝘬𝘶𝘳𝘢𝘓𝘪𝘵𝘦𓆉︎

 https://chat.whatsapp.com/Gf0jUCgZTdU5pbcKPZPtWk

 https://chat.whatsapp.com/L69Ok8LTIJNCTNsJydkXaE

 https://chat.whatsapp.com/EHbHSYyZ1ZeCgtl1iO208h

𝘎𝘳𝘶𝘱𝘰 𝘋𝘦 𝘊𝘰𝘭𝘢𝘣𝘰𝘳𝘢𝘤𝘪𝘰́𝘯 𝘋𝘦𝘭 𝘉𝘰𝘵ꨄ︎

https://chat.whatsapp.com/IpkR0weg38U8Q0hFZbG3IV

𝘊𝘢𝘯𝘢𝘭𝘦𝘴 𝘖𝘧𝘪𝘤𝘪𝘢𝘭𝘦𝘴 𝘋𝘦𝘭 𝘉𝘰𝘵 𝘚𝘢𝘬𝘶𝘳𝘢𝘓𝘪𝘵𝘦☏︎

 https://whatsapp.com/channel/0029VaIg4lxInlqUNkN7A53w


https://whatsapp.com/channel/0029VaHYnwaKQuJIlTFuS22l`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/diegojadibot/SakuraBotLite-MD`},
    'mimetype': `application/${document}`,
    'fileName': `𝘚𝘢𝘬𝘶𝘳𝘢𝘓𝘪𝘵𝘦`,
    'fileLength': 109,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/diegojadibot/SakuraBotLite-MD',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '𝐆𝐫𝐮𝐩𝐨𝐬 𝐎𝐟𝐢𝐜𝐢𝐚𝐥𝐞𝐬',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://chat.whatsapp.com/KXjS9CBRF680GBf8fiXDeu'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
