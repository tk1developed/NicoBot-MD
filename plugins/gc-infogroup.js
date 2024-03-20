const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const {antiToxic, reaction, antiTraba, antidelete, antiviewonce, isBanned, welcome, detect, detect2, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `*「 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」*\n
*Identificación Del Grupo:* 
${groupMetadata.id}

*Nombre:* 
${groupMetadata.subject}

*Imformación:* 
${groupMetadata.desc?.toString() || '𝚂𝙸𝙽 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽'}

*Miembros:*
${participants.length} Participantes

*Creador Del Grupo:* 
@${owner.split('@')[0]}

*Administradores:*
${listAdmin}

*Opciones:*

*Welcome:* ${welcome ? '✅' : '❌'}
*Detect:* ${detect ? '✅' : '❌'} 
*Detect 2:* ${detect2 ? '✅' : '❌'} 
*Antilink:* ${antiLink ? '✅' : '❌'} 
*Antilink 𝟸:* ${antiLink2 ? '✅' : '❌'} 
*Modohorny:* ${modohorny ? '✅' : '❌'} 
*Autosticker:* ${autosticker ? '✅' : '❌'} 
*Audios:* ${audios ? '✅' : '❌'} 
*Antiviewonce:* ${antiviewonce ? '✅' : '❌'} 
*Reacción* ${reaction ? "✅️" : "❌️"}
*Antidelete:* ${antidelete ? '✅' : '❌'} 
*Antitoxic:* ${antiToxic ? '✅' : '❌'} 
*Antitraba:* ${antiTraba ? '✅' : '❌'} 
*Modoadmin:* ${modoadmin ? '✅' : '❌'} 
`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrup'];
handler.tags = ['group'];
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i;
handler.register = true
handler.group = true;
export default handler;
