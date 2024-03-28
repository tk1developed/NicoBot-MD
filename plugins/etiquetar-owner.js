let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);

conn.reply(m.chat, `*🌩 ️𝗡𝗼 𝗘𝘁𝗶𝗾𝘂𝗲𝘁𝗲𝘀 𝗔 𝗠𝗶 𝗖𝗿𝗲𝗮𝗱𝗼𝗿, si es algo urgente contacta con el a su chat privado para mas informacion*` ,m, { contextInfo:{ externalAdReply: {title: '𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯', body: '𝖭𝗈 𝖤𝗍𝗂𝗊𝗎𝖾𝗍𝖾𝗌 𝖠 𝖬𝗂 𝖢𝗋𝖾𝖺𝖽𝗈𝗋', sourceUrl: 'https://github.com/diegojadibot/SakuraBotLite-MD'}}})
}
handler.customPrefix = /@573012482597/i;
handler.command = new RegExp();

export default handler;

//conn.reply(m.chat, `hhh`, m, { contextInfo:{ externalAdReply: {title: 'titulo', body: 'cuero', sourceUrl: global.md}}})