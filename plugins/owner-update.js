import { execSync } from 'child_process';

const handler = async (m, { conn, text }) => {
  try {
          const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
          let messager = stdout.toString()
          if (messager.includes('Already up to date.')) messager = '*✨Hᴇʏ Aᴍᴏʀ Nᴏ Hᴀʏ Nᴀᴅᴀ Pᴏʀ Aᴄᴛᴜᴀʟɪᴢᴀʀ Eɴ Eʟ Rᴇᴘᴏsɪᴛᴏʀɪᴏ Oғɪᴄɪᴀʟ⚠️*'
          if (messager.includes('Updating')) messager = '*✨𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵-𝘔𝘋 Sᴇ Aᴄᴛᴜᴀʟɪᴢᴏ́ Exɪᴛᴏsᴀᴍᴇɴᴛᴇ, Eʟ Rᴇᴘᴏsɪᴛᴏʀɪᴏ🌵:*\n\n' + stdout.toString()
          conn.reply(m.chat, messager, m);
  } catch {      
 try {    
      const status = execSync('git status --porcelain');
      if (status.length > 0) {
        const conflictedFiles = status
          .toString()
          .split('\n')
          .filter(line => line.trim() !== '')
          .map(line => {
            if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('SakuraBotSession/') || line.includes('npm-debug.log')) {
              return null;
            }
            return '*◉ ' + line.slice(3) + '*';
          })
          .filter(Boolean);
        if (conflictedFiles.length > 0) {
          const errorMessage = `*✨𝘚𝘦 𝘏𝘢 𝘏𝘦𝘤𝘩𝘰 𝘊𝘢𝘮𝘣𝘪𝘰𝘴 𝘌𝘯 𝘓𝘰𝘴 𝘈𝘳𝘤𝘩𝘪𝘷𝘰𝘴 𝘋𝘦𝘭 𝘉𝘰𝘵, 𝘓𝘰𝘤𝘢𝘭 𝘺 𝘊𝘢𝘶𝘴𝘢 𝘊𝘰𝘯𝘧𝘭𝘪𝘤𝘵𝘰𝘴 𝘈𝘭 𝘈𝘤𝘵𝘶𝘢𝘭𝘪𝘻𝘢𝘳 𝘠𝘢 𝘘𝘶𝘦 𝘐𝘨𝘶𝘢𝘭 𝘚𝘦 𝘏𝘢𝘯 𝘔𝘰𝘥𝘪𝘧𝘪𝘤𝘢𝘥𝘰 𝘌𝘯 𝘌𝘭 𝘙𝘦𝘱𝘰𝘴𝘪𝘵𝘰𝘳𝘪𝘰 𝘖𝘧𝘪𝘤𝘪𝘢𝘭.*\n\n*—◉ 𝘈𝘳𝘤𝘩𝘪𝘷𝘰𝘴 𝘊𝘰𝘯 𝘊𝘰𝘯𝘧𝘭𝘪𝘤𝘵𝘰:*\n${conflictedFiles.join('\n')}\n\n*—◉ 𝘚𝘪 𝘋𝘦𝘴𝘦𝘢𝘴 𝘈𝘤𝘵𝘶𝘢𝘭𝘪𝘻𝘢𝘳 𝘌𝘭 𝘉𝘰𝘵, 𝘋𝘦𝘣𝘦𝘳𝘢́ 𝘐𝘯𝘴𝘵𝘢𝘭𝘢𝘳 𝘌𝘭 𝘉𝘰𝘵 𝘖 𝘏𝘢𝘤𝘦𝘳 𝘓𝘢𝘴  𝘈𝘤𝘵𝘶𝘢𝘭𝘪𝘻𝘢𝘴𝘪𝘰𝘯𝘦𝘴 𝘔𝘢𝘯𝘶𝘢𝘭𝘮𝘦𝘯𝘵𝘦✨.*`;
          await conn.reply(m.chat, errorMessage, m);  
        }
      }
  } catch (error) {
    console.error(error);
    let errorMessage2 = '*[❗] Ha ocurrido un error al ejecutar el comando.*';
    if (error.message) {
      errorMessage2 += '\n*- Mensaje de error:* ' + error.message;
    }
    await conn.reply(m.chat, errorMessage2, m);
  }
 }
};
handler.help = ['update'];
handler.tags = ['owner'];
handler.command = /^(update|actualizar)$/i;
handler.rowner = true;
export default handler;
