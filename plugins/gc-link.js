import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
       title: '𝐿𝑖𝑛𝑘 𝐺𝑟𝑜𝑢𝑝',
      body: '𝕾𝖆𝖐𝖚𝖗𝖆-𝕭𝖔𝖙-𝕷𝖎𝖙𝖊-𝕸𝕯🍁🌱',    
      previewType: 0, thumbnail: fs.readFileSync('./Menu.png'),
 sourceUrl: `https://atom.bio/sakuralite`}}});
};     
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
