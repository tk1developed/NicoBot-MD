/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*😆Tɪᴇɴᴇs Qᴜᴇ Usᴀʀʟᴏ Eɴ Eʟ Nᴜᴍᴇʀᴏ Pʀɪɴᴄɪᴘᴀʟ Dᴇʟ Bᴏᴛ.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: '*🌿 Iɴɪᴄɪᴀɴᴅᴏ Eʟ Pʀᴏᴄᴇsᴏ Dᴇ Eʟɪᴍɪɴᴀᴄɪᴏ́ɴ Dᴇ Tᴏᴅᴏs Lᴏs Aʀᴄʜɪᴠᴏs Dᴇ Sᴇssɪᴏɴ, Exᴇᴄᴛᴏ Eʟ Aʀᴄʜɪᴠᴏ creds.json...*'}, {quoted: m});
  const sessionPath = './SakuraBotSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(m.chat, {text: '*👊 Lᴀ Cᴀʀᴘᴇᴛᴀ SakuraBotSession no existe o está vacía.*'}, {quoted: m});
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*🍁 Nᴏ Sᴇ Eɴᴄᴏɴᴛʀᴏ Eʟ Cᴀʀᴄʜɪᴠᴏ Pᴀʀᴀ Eʟɪᴍɪɴᴀʀ Lᴀ Cᴀʀᴘᴇᴛᴀ SakuraBotSession.*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*🌸 Sᴇ Eʟɪᴍɪɴᴀʀᴏɴ ${filesDeleted} Aʀᴄʜɪᴠᴏᴢ Dᴇ Sᴇssɪᴏɴ, Esxᴇᴘᴛᴏ Eʟ Aʀᴄʜɪᴠᴏ creds.json.*`}, {quoted: m});
    }
  } catch (err) {
    console.error('Error al leer la carpeta o los archivos de sesión:', err);
    await conn.sendMessage(m.chat, {text: '*🔰 Oᴄᴜʀʀɪᴏ Uɴ Pʀᴏʙʟᴇᴍᴀ Aʟ Eʟɪᴍɪɴᴀʀ Lᴏs Aʀᴄʜɪᴠᴏᴢ Dᴇ Sᴇssɪᴏɴ.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `*👋 ¡Hola! Ahora me ves?*\n\n*🔔 Si el Bot no le responde a sus comandos por favor haga un pequeño spam*\n\n*—◉ Ejemplo:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|dsowner|clearallsession)$/i;
handler.rowner = true
export default handler;
