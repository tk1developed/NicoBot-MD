const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const optionsFull =`✦>𝗧𝗥𝗨𝗘,𝗙𝗔𝗟𝗦𝗘<✦
┣☆ ඬ⃟🌹.𝗧𝗿𝘂𝗲 𝘄𝗲𝗹𝗰𝗼𝗺𝗲:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🌹.𝗙𝗮𝗹𝘀𝗲 𝘄𝗲𝗹𝗰𝗼𝗺𝗲:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🌐.𝘁𝗿𝘂𝗲 𝗽𝘂𝗯𝗹𝗶𝗰:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟🌐.𝗳𝗮𝗹𝘀𝗲 𝗽𝘂𝗯𝗹𝗶𝗰:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟💧.𝘁𝗿𝘂𝗲 𝗺𝗼𝗱𝗼𝗵𝗼𝗿𝗻𝘆:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟💧.𝗳𝗮𝗹𝘀𝗲 𝗺𝗼𝗱𝗼𝗵𝗼𝗿𝗻𝘆:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🖇️.𝘁𝗿𝘂𝗲 𝗮𝗻𝘁𝗶𝗹𝗶𝗻𝗸:(ᴀᴅᴍɪsɴ)
┣☆ ඬ⃟🖇️.𝗳𝗮𝗹𝘀𝗲 𝗮𝗻𝘁𝗶𝗹𝗶𝗻𝗸:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟📎.𝘁𝗿𝘂𝗲 𝗮𝗻𝘁𝗶𝗹𝗶𝗻𝗸2:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟📎.𝗳𝗮𝗹𝘀𝗲 𝗮𝗻𝘁𝗶𝗹𝗶𝗻𝗸2:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🖋️.𝘁𝗿𝘂𝗲 𝗱𝗲𝘁𝗲𝗰𝘁:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🖋️.𝗳𝗮𝗹𝘀𝗲 𝗱𝗲𝘁𝗲𝗰𝘁:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🖊️.𝘁𝗿𝘂𝗲 𝗱𝗲𝗰𝘁𝗲𝗰𝘁2:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🖊️.𝗳𝗮𝗹𝘀𝗲 𝗱𝗲𝘁𝗲𝗰𝘁2:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🛡️.𝘁𝗿𝘂𝗲 𝗿𝗲𝘀𝘁𝗿𝗶𝗰𝘁:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟🛡️.𝗳𝗮𝗹𝘀𝗲 𝗿𝗲𝘀𝘁𝗿𝗶𝗰𝘁:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟👤.𝘁𝗿𝘂𝗲 𝗽𝗰𝗼𝗻𝗹𝘆:(ᴏᴡɴᴇʀs
┣☆ ඬ⃟👤.𝗳𝗮𝗹𝘀𝗲 𝗽𝗰𝗼𝗻𝗹𝘆:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟👥.𝘁𝗿𝘂𝗲 𝗴𝗰𝗼𝗻𝗹𝘆:(ᴏᴡɴᴇʀs
┣☆ ඬ⃟👥.𝗳𝗮𝗹𝘀𝗲 𝗴𝗰𝗼𝗻𝗹𝘆:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟🔮.𝘁𝗿𝘂𝗲 𝗮𝘂𝘁𝗼𝗿𝗲𝗮𝗱:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟🔮.𝗳𝗮𝗹𝘀𝗲 𝗮𝘂𝘁𝗼𝗿𝗲𝗮𝗱:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟🧸.𝘁𝗿𝘂𝗲 𝗮𝘂𝗱𝗶𝗼𝘀:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🧸.𝗳𝗮𝗹𝘀𝗲 𝗮𝘂𝗱𝗶𝗼𝘀:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟📡.𝘁𝗿𝘂𝗲 𝗮𝗻𝘁𝗶𝘃𝗶𝗲𝘄𝗼𝗻𝗰𝗲:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟📡.𝗳𝗮𝗹𝘀𝗲 𝗮𝗻𝘁𝗶𝘃𝗶𝗲𝘄𝗼𝗻𝗰𝗲:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🎭.𝘁𝗿𝘂𝗲 𝗮𝘂𝘁𝗼𝘀𝘁𝗶𝗰𝗸𝗲𝗿:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🎭.𝗳𝗮𝗹𝘀𝗲 𝗮𝘂𝘁𝗼𝘀𝘁𝗶𝗰𝗸𝗲𝗿:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟📵.𝘁𝗿𝘂𝗲 𝗮𝗻𝘁𝗶𝗰𝗮𝗹𝗹:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟📵.𝗳𝗮𝗹𝘀𝗲 𝗮𝗻𝘁𝗶𝗰𝗮𝗹𝗹:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟🚷.𝘁𝗿𝘂𝗲 𝗮𝗻𝘁𝗶𝗽𝗿𝗶𝘃𝗮𝗱𝗼:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟🚷.𝗳𝗮𝗹𝘀𝗲 𝗮𝗻𝘁𝗶𝗽𝗿𝗶𝘃𝗮𝗱𝗼:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟☢️.𝘁𝗿𝘂𝗲 𝗮𝗻𝘁𝗶𝘁𝗼𝘅𝗶𝗰:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟☢️.𝗳𝗮𝗹𝘀𝗲 𝗮𝗻𝘁𝗶𝘁𝗼𝘅𝗶𝗰:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🔁.𝘁𝗿𝘂𝗲 𝗮𝗻𝘁𝗶𝗮𝗿𝗮𝗯𝗲𝘀:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🔁.𝗳𝗮𝗹𝘀𝗲 𝗮𝗻𝘁𝗶𝗮𝗿𝗮𝗯𝗲𝘀:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟‼️.𝘁𝗿𝘂𝗲 𝗺𝗼𝗱𝗲𝗷𝗮𝗱𝗶𝗯𝗼𝘁:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟‼️.𝗳𝗮𝗹𝘀𝗲 𝗺𝗼𝗱𝗲𝗷𝗮𝗱𝗶𝗯𝗼𝘁:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟💻.𝘁𝗿𝘂𝗲 𝗺𝗼𝗱𝗼𝗮𝗱𝗺𝗶𝗻:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟💻.𝗳𝗮𝗹𝘀𝗲 𝗺𝗼𝗱𝗼𝗮𝗱𝗺𝗶𝗻:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟📼.𝘁𝗿𝘂𝗲 𝘀𝗶𝗺𝘀𝗶𝗺𝗶:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟📼.𝗳𝗮𝗹𝘀𝗲 𝘀𝗶𝗺𝘀𝗶𝗺𝗶:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟⚙️.𝘁𝗿𝘂𝗲 𝗮𝘂𝗱𝗶𝗼𝘀_𝗯𝗼𝘁:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟⚙️.𝗳𝗮𝗹𝘀𝗲 𝗮𝘂𝗱𝗶𝗼𝘀_𝗯𝗼𝘁:(ᴏᴡɴᴇʀs)
 ☆> ( 𝐋𝐎𝐁𝐎-𝐁𝐎𝐓-𝐌𝐃 1.5) <☆`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `       ☆𝕷𝖔𝖇𝖔-𝕭𝖔𝖙-𝕸𝕯☆\n[💖] 𝗢𝗣𝗖𝗜𝗢̃𝗡: ${type}✔️\n[🌟] 𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? '𝑶𝒏✔️' : '𝑶𝒇𝒇✔️'}\n[🧸] 𝐏𝐀𝐑𝐀: ${isAll ? '𝑳𝒐𝒃𝒐-𝒃𝒐𝒕-𝒎𝒅✔️' : isUser ? '' : '𝑬𝒔𝒕𝒆 𝒄𝒉𝒂𝒕✔️'}`}, {quoted: m});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((true|false)|(tru|fals)e|(turn)?[01])$/i;
export default handler;