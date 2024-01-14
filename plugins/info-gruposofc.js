const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*Hola!, te invito a unirte a los grupos oficiales de del Bot para convivir con la comunidad :D*

1- 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊
▢ 
https://chat.whatsapp.com/Gf0jUCgZTdU5pbcKPZPtWk

2- 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊
▢ https://chat.whatsapp.com/L69Ok8LTIJNCTNsJydkXaE

3- 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊
▢ https://chat.whatsapp.com/EHbHSYyZ1ZeCgtl1iO208h

4- 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊
▢ https://chat.whatsapp.com/BBrNUjJXXLAAucWIM3AaXv

5- 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊
▢ https://chat.whatsapp.com/FtbbWbvriEX8D4Buw0pyNL

6- —★ 🎟]「 𝘌𝘯𝘭𝘢𝘤𝘦 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊
▢ https://chat.whatsapp.com/HUav9lEvzPO6uRPS5f6KBz

7- 😻 𝑺𝒐𝒑𝒐𝒓𝒕𝒆 𝑺𝒂𝒌𝒖𝒓𝒂𝑩𝒐𝒕 / 𝑵𝒐 𝑩𝒐𝒕 ♕︎𓅓
▢ https://chat.whatsapp.com/FUDnyZbUkkaLc1L9CgOiwH

🧭Grupos Colaboración

1- ʕ•ᴥ•ʔ 𝑺𝒂𝒌𝒖𝒓𝒂𝑩𝒐𝒕𝑳𝒊𝒕𝒆 & 𝑶𝒏𝒚𝒙𝑩𝒐𝒕 ʕ•ᴥ•ʔ
▢ https://chat.whatsapp.com/HVpXzDdlNrH738WaJIS21C

2- ᰔᩚ♕︎🅜︎🅤︎🅛︎🅣︎🅘︎.🅑︎🅞︎🅣︎🅢︎♕︎ᰔᩚ
▢ https://chat.whatsapp.com/IpkR0weg38U8Q0hFZbG3IV
─────────────
≡ Enlaces Restablecidos? Entra A Este Link!! 

Grupos : 
▢ https://atom.bio/sakuralite

Canal :
▢  https://whatsapp.com/channel/0029VaHYnwaKQuJIlTFuS22l`.trim();
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
        'sourceUrl': 'https://chat.whatsapp.com/Gf0jUCgZTdU5pbcKPZPtWk'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
