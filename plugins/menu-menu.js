import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
  const { key } = await conn.sendMessage(m.chat, {text: `${wait}`}, {quoted: m})
await conn.sendMessage(m.chat, {text: `.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑊𝐼𝐿𝑆𝑀𝐴𝐶:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰²⁵ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
  await conn.sendMessage(m.chat, {text: `.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑊𝐼𝐿𝑆𝑀𝐴𝐶:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰▰²⁰ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
await conn.sendMessage(m.chat, {text: `╭̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑊𝐼𝐿𝑆𝑀𝐴𝐶:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰▰▰▰ ⁴⁰ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})                                               
await conn.sendMessage(m.chat, {text: `╭̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑊𝐼𝐿𝑆𝑀𝐴𝐶:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰▰▰▰▰▰▰▰ ⁸⁰ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
await conn.sendMessage(m.chat, {text: `╭̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑊𝑖𝑙𝑠𝑚𝑎𝑐:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰▰▰▰▰▰▰▰▰ ¹⁰⁰ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
await conn.sendMessage(m.chat, {text: `╭̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑊𝐼𝐿𝑆𝑀𝐴𝐶:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
『𖤍𝐄𝐱𝐢𝐭𝐨 𝐩𝐫𝐨𝐧𝐭𝐨 𝐭𝐞𝐧𝐝𝐫𝐚 𝐞𝐥 𝐦𝐞𝐧𝐮́𖤍』
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
    const str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    
✧✈︎ ✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙. ║
✧: ➪ *𝑯𝑶𝑳𝑨,  ${taguser}* gracias por su preferencia😊
╰──────────────✧ 🌹 •°•°

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬*Creador de Fenix:* Wilsmac*
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬*Numero de mi creador: wa.me/+50258115623
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۬ *Bot ofc:* wa.me/++50250101139
╰ׄ┄ׅׄ─ׅׄ┄ׅׄ─ׂׅ┄ׅׄ─ׂׅ┄ׅׄ─ׅׄ┄ׅׄ─ׂׅ┄ׅׄ─ׂׅ┄ׅׄ─ׅׄ─ׂׅ┄ׅׄ─ׂ╯

╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃ *< *pareja />*
├┈・─・﹕₊˚ ✦・୨୧・
┣ 
╰ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╯

╭┈ ↷ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎 
• ✐; Ajeite seu relógio.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: *Data:* ${date} 
✧: *Atividade:* ${uptime}
✧: *usuarios reg:* ${rtotalreg}
✧: *Usuarios:* 9${rtotal}
╰──────────────✧ 🌹 •°•°

╭─╮︹︹︹⊹︹︹︹⊹︹︹︹
│   *「 Info Usuario.*
*︶︶♡꒷꒦︶꒦꒷♡꒷꒦︶꒦꒷♡︶︶*
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
╭──╮ - ̗̀ °︹︹︹⊹︹︹︹° 
┊🕸️┊ꦿ⿻ ❜ೃ ¡ Tu nivel:
╰──╯ ░ - ̗̀↳🗝: -- ꕤ*:︽ ${level}
╰───────────────────
╰──── +˚🧰 Experiencia:.
˙·.˙··.˙·.┊ *°*+↷❯  ${exp}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚⚓ Rango:.
˙·.˙··.˙·.┊ *°*+↷❯ ${role}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚💎 Diamantes:.
˙·.˙··.˙·.┊ *°*+↷❯ ${limit}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚👾 *FenixCoins* :.
˙·.˙··.˙·.┊ *°*+↷❯ ${money}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚🪙 Tokens:.
˙·.˙··.˙·.┊ *°*+↷❯ ${joincount}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚🎟️ Premium:.
┊ *°*+↷❯ ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
˙·.˙˙·.˙·.╰──────〰─◠─〰
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃ *< *Bot ofc* />*
├┈・─・﹕₊˚ ✦・୨୧・
┣ 𖤍 ${packname}${conn.user.jid == global.conn.user.jid ? '' : `\n║˚₊·˚₊· ͟͟͞͞➳* 𝐹𝐸𝑁𝐼𝑋-𝐵𝑂𝑇-𝐶𝐷 𝑆𝑈𝐵 𝐵𝑂𝑇 ⇢ *@${global.conn.user.jid.split`@`[0]}`}
 𖤍
╰ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╯

╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃ *< Sᴏʟᴜᴄɪᴏɴ Eʀʀᴏʀᴇs />*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣➤ Mensajes en espera
┣ ඬ⃟ 𖤍 _${usedPrefix}fixmsgespera_
┣➤ Mensajes en espera (creador)
┣ ඬ⃟ 𖤍 _${usedPrefix}dsowner_
╰ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╯

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷   ɪɴғᴏ
├• ✐; ₊˚✦୧︰ Bᴏᴛ .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}terminosycondiciones_
┣ ඬ⃟ 🌺 _${usedPrefix}grupos_
┣ ඬ⃟ 🌺 _${usedPrefix}estado_
┣ ඬ⃟ 🌺 _${usedPrefix}infobot_
┣ ඬ⃟ 🌺 _${usedPrefix}speedtest_
┣ ඬ⃟ 🌺 _${usedPrefix}donar_
┣ ඬ⃟ 🌺 _${usedPrefix}owner_
┣ ඬ⃟ 🌺 _${usedPrefix}script_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Uɴᴇ ᴜɴ ʙᴏᴛ
├• ✐; ₊˚✦୧︰A ᴛᴜ ɢʀᴜᴘᴏ  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌹 _${usedPrefix}join *<enlace>
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷   Sᴇʀʙᴏᴛ
├• ✐; ₊˚✦୧︰ Jᴀᴅɪʙᴏᴛ .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}serbot --code_
┣ ඬ⃟ 🌺 _${usedPrefix}serbot_
┣ ඬ⃟ 🌺 _${usedPrefix}deletebot_
┣ ඬ⃟ 🌺 _${usedPrefix}token
┣ ඬ⃟ 🌺 _${usedPrefix}stop_
┣ ඬ⃟ 🌺 _${usedPrefix}bots_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷   Jᴜᴇɢᴏs
├• ✐; ₊˚✦୧︰ᴊsᴊsᴊsᴊs  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣ ඬ⃟ 🌺 _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
┣ ඬ⃟ 🌺 _${usedPrefix}ppt *<papel / tijera /piedra>*_
┣ ඬ⃟ 🌺 _${usedPrefix}prostituto *<nombre / @tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}prostituta *<nombre / @tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}gay2 *<nombre / @tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}lesbiana *<nombre / @tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}pajero *<nombre / @tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}pajera *<nombre / @tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}puto *<nombre / @tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}puta *<nombre / @tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}manco *<nombre / @tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}manca *<nombre / @tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}rata *<nombre / @tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}love *<nombre / @tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}doxear *<nombre / @tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}pregunta *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}suitpvp *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}slot *<apuesta>*_
┣ ඬ⃟ 🌺 _${usedPrefix}ttt *<nombre sala>*_
┣ ඬ⃟ 🌺 _${usedPrefix}delttt_
┣ ඬ⃟ 🌺 _${usedPrefix}acertijo_
┣ ඬ⃟ 🌺 _${usedPrefix}simi *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}top *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}topgays_
┣ ඬ⃟ 🌺 _${usedPrefix}topotakus_
┣ ඬ⃟ 🌺 _${usedPrefix}formarpareja_
┣ ඬ⃟ 🌺 _${usedPrefix}verdad_
┣ ඬ⃟ 🌺 _${usedPrefix}reto_
┣ ඬ⃟ 🌺 _${usedPrefix}cancion_
┣ ඬ⃟ 🌺 _${usedPrefix}pista_
┣ ඬ⃟ 🌺 _${usedPrefix}akinator_
┣ ඬ⃟ 👑 _${usedPrefix}wordfind_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Aᴄᴛɪᴠᴀʀ ᴏ
├• ✐; ₊˚✦୧︰Dᴇsᴀᴄᴛɪᴠᴀʀ  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ ☑️ _${usedPrefix}enable *welcome*_
┣ ඬ⃟ ❎ _${usedPrefix}disable *welcome*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antilink*_
┣ ඬ⃟ ❎ _${usedPrefix}disable *antilink*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antilink2*_
┣ ඬ⃟ ❎ _${usedPrefix}disable *antilink2*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *detect*_
┣ ඬ⃟ ❎ _${usedPrefix}disable *detect*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *autosticker*_
┣ ඬ⃟ ❎ _${usedPrefix}disable *autosticker*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antiviewonce*_
┣ ඬ⃟ ❎ _${usedPrefix}disable *antiviewonce*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antitoxic*_
┣ ඬ⃟ ❎ _${usedPrefix}disable *antitoxic*_
┣ ඬ⃟ ☑️ _.${usedPrefix}nable *antitraba*_
┣ ඬ⃟ ❎ _${usedPrefix}disable *antitraba*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antiarabes*_
┣ ඬ⃟ ❎ _${usedPrefix}disable *antiarabes*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *modoadmin*_
┣ ඬ⃟ ❎ _${usedPrefix}disable *modoadmin*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antidelete*_
┣ ඬ⃟ ❎ _${usedPrefix}disable *antidelete*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Rᴇᴘᴏʀᴛᴀʀ
├• ✐; ₊˚✦୧︰ Eʀʀᴏʀᴇs .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 ${usedPrefix}reporte *<texto>*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  
├• ✐; ₊˚✦୧︰Dᴇsᴄᴀʀɢᴀs .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🔮 _${usedPrefix}instagram *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}mediafire *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}gitclone *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}gdrive *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}tiktok *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}tiktokimg *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}twitter *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}fb *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}ytshort *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}videodoc *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}dapk2 *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}stickerpack *<enlace / link / url>*_
┣ ඬ⃟ 🔮 _${usedPrefix}play *<texto>*_
┣ ඬ⃟ 🔮 _${usedPrefix}play2 *<texto>*_
┣ ඬ⃟ 🔮 _${usedPrefix}playdoc *<texto>*_
┣ ඬ⃟ 🔮 _${usedPrefix}playdoc2 *<texto>*_
┣ ඬ⃟ 🔮 _${usedPrefix}playlist *<texto>*_
┣ ඬ⃟ 🔮 _${usedPrefix}spotify *<texto>*_
┣ ඬ⃟ 🔮 _${usedPrefix}pinterest *<texto>*_
┣ ඬ⃟ 🔮 _${usedPrefix}wallpaper *<texto>*_
┣ ඬ⃟ 🔮 _${usedPrefix}pptiktok *<nombre de usuario>*_
┣ ඬ⃟ 🔮 _${usedPrefix}tiktokstalk *<username>*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Bᴜsᴄᴀᴅᴏʀᴇs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}githubsearch *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}pelisplus *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}modapk *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}stickersearch *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}stickersearch2 *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}animeinfo *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}google *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}letra *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}wikipedia *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}ytsearch *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}playstore *<texto>*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Gʀᴜᴘᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌹 _${usedPrefix}kick *<@tag>*_
┣ ඬ⃟ 🌹 _${usedPrefix}kick2 *<@tag>*_
┣ ඬ⃟ 🌹 _${usedPrefix}listanum *<texto>*_
┣ ඬ⃟ 🌹 _${usedPrefix}kicknum *<texto>*_
┣ ඬ⃟ 🌹 _${usedPrefix}grupo *<abrir / cerrar>*_
┣ ඬ⃟ 🌹 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣ ඬ⃟ 🌹 _${usedPrefix}promote *<@tag>*_
┣ ඬ⃟ 🌹 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟ 🌹 _${usedPrefix}admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟ 🌹 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟ 🌹 _${usedPrefix}infogroup_
┣ ඬ⃟ 🌹 _${usedPrefix}resetlink_
┣ ඬ⃟ 🌹 _${usedPrefix}link_
┣ ඬ⃟ 🌹 _${usedPrefix}setname *<texto>*_
┣ ඬ⃟ 🌹 _${usedPrefix}setdesc *<texto>*_
┣ ඬ⃟ 🌹 _${usedPrefix}invocar *<texto>*_
┣ ඬ⃟ 🌹 _${usedPrefix}hidetag *<texto>*_
┣ ඬ⃟ 🌹 _${usedPrefix}warn *<@tag>*_
┣ ඬ⃟ 🌹 _${usedPrefix}unwarn *<@tag>*_
┣ ඬ⃟ 🌹 _${usedPrefix}listwarn_
┣ ඬ⃟ 🌹 _${usedPrefix}fantasmas_
┣ ඬ⃟ 🌹 _${usedPrefix}destraba_
┣ ඬ⃟ 🌹 _${usedPrefix}setpp *<imagen>*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Cᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ ♻️ _${usedPrefix}toanime *<imagen>*_
┣ ඬ⃟ ♻️ _${usedPrefix}togifaud *<video>*_
┣ ඬ⃟ ♻️ _${usedPrefix}toimg *<sticker>*_
┣ ඬ⃟ ♻️ _${usedPrefix}tomp3 *<video>*_
┣ ඬ⃟ ♻️ _${usedPrefix}tomp3 *<nota de voz>*_
┣ ඬ⃟ ♻️ _${usedPrefix}toptt *<video / audio>*_
┣ ඬ⃟ ♻️ _${usedPrefix}tovideo *<sticker>*_
┣ ඬ⃟ ♻️ _${usedPrefix}tourl *<video / imagen / audio>*_
┣ ඬ⃟ ♻️ _${usedPrefix}tts *<idioma> <texto>*_
┣ ඬ⃟ ♻️ _${usedPrefix}tts *<efecto> <texto>*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
┃ *< 𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊 />*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🖤 _${usedPrefix}piropo_
┣ ඬ⃟ 🖤 _${usedPrefix}consejo_
┣ ඬ⃟ 🖤 _${usedPrefix}fraseromantica_
┣ ඬ⃟ 🖤 _${usedPrefix}historiaromantica_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
┃ *< ℝ𝔸ℕ𝔻-𝔸ℕ𝕀𝕄𝔼𝕊 />*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 😆 _${usedPrefix}menuanimes_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
┃ *< ℝ𝔸ℕ𝔻𝕆𝕄 />*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🕹️ _${usedPrefix}kpop *<blackpink _
┣ ඬ⃟ 🕹️ _${usedPrefix}cat_
┣ ඬ⃟ 🕹️ _${usedPrefix}dog_
┣ ඬ⃟ 🕹️ _${usedPrefix}meme_
┣ ඬ⃟ 🕹️ _${usedPrefix}itzy_
┣ ඬ⃟ 🕹️ _${usedPrefix}blackpink_
┣ ඬ⃟ 🕹️ _${usedPrefix}navidad_
┣ ඬ⃟ 🕹️ _${usedPrefix}wpmontaña_
┣ ඬ⃟ 🕹️ _${usedPrefix}pubg_
┣ ඬ⃟ 🕹️ _${usedPrefix}wpgaming_
┣ ඬ⃟ 🕹️ _${usedPrefix}wpaesthetic_
┣ ඬ⃟ 🕹️ _${usedPrefix}wpaesthetic2_
┣ ඬ⃟ 🕹️ _${usedPrefix}wprandom_
┣ ඬ⃟ 🕹️ _${usedPrefix}wallhp_
┣ ඬ⃟ 🕹️ _${usedPrefix}wpvehiculo_
┣ ඬ⃟ 🕹️ _${usedPrefix}wpmoto_
┣ ඬ⃟ 🕹️ _${usedPrefix}coffee_
┣ ඬ⃟ 🕹️ _${usedPrefix}pentol_
┣ ඬ⃟ 🕹️ _${usedPrefix}caricatura_
┣ ඬ⃟ 🕹️ _${usedPrefix}ciberespacio_
┣ ඬ⃟ 🕹️ _${usedPrefix}technology_
┣ ඬ⃟ 🕹️ _${usedPrefix}doraemon_
┣ ඬ⃟ 🕹️ _${usedPrefix}hacker_
┣ ඬ⃟ 🕹️ _${usedPrefix}planeta_
┣ ඬ⃟ 🕹️ _${usedPrefix}randomprofile_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ la biblia😇
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ _${usedPrefix}labiblia_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Eғᴇᴄᴛᴏsᴅ ᴅᴇ 
├• ✐; ₊˚✦୧︰ Aᴜᴅɪᴏs .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ ඬ⃟ 🌺 _${usedPrefix}bass_
┣ ඬ⃟ 🌺 _${usedPrefix}blown_
┣ ඬ⃟ 🌺 _${usedPrefix}deep_
┣ ඬ⃟ 🌺 _${usedPrefix}earrape_
┣ ඬ⃟ 🌺 _${usedPrefix}fast_
┣ ඬ⃟ 🌺 _${usedPrefix}fat_
┣ ඬ⃟ 🌺 _${usedPrefix}nightcore_
┣ ඬ⃟ 🌺 _${usedPrefix}reverse_
┣ ඬ⃟ 🌺 _${usedPrefix}robot_
┣ ඬ⃟ 🌺 _${usedPrefix}slow_
┣ ඬ⃟ 🌺 _${usedPrefix}smooth_
┣ ඬ⃟ 🌺 _${usedPrefix}tupai_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷   Cʜᴀᴛ
├• ✐; ₊˚✦୧︰Aɴᴏɴɪᴍᴏ.
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}start_
┣ ඬ⃟ 🌺 _${usedPrefix}next_
┣ ඬ⃟ 🌺 _${usedPrefix}leave_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Aᴜᴅɪᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🎧 _${usedPrefix}menuaudios_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Hᴇʀʀᴀᴍɪᴇɴᴛᴀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ ⚙️ _${usedPrefix}inspect *<link wa_gc>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}chatgpt *<texto>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}delchatgpt
┣ ඬ⃟ ⚙️ _${usedPrefix}gptvoz *<texto>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}dall-e *<texto>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}readviewonce *<imagen / video>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}clima *<país> <ciudad>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}afk *<motivo>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}ocr *<responde a imagen>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}hd *<responde a imagen>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}acortar *<enlace / link / url>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}calc *<operacion math>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}del *<mensaje>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}whatmusic *<audio>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}readqr *<imagen (QR)>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}qrcode *<texto>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}readmore *<texto1| texto2>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}styletext *<texto>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}traducir *<texto>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}nowa *<numero>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}covid *<pais>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}horario_
┣ ඬ⃟ ⚙️ _${usedPrefix}dropmail_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Rᴘɢ - Lɪᴍɪᴛᴇs
├• ✐; ₊˚✦୧︰ Eᴄᴏɴᴏᴍɪᴀ.
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}adventure_
┣ ඬ⃟ 🌺 _${usedPrefix}cazar_
┣ ඬ⃟ 🌺 _${usedPrefix}cofre_
┣ ඬ⃟ 🌺 _${usedPrefix}balance_
┣ ඬ⃟ 🌺 _${usedPrefix}claim_
┣ ඬ⃟ 🌺 _${usedPrefix}heal_
┣ ඬ⃟ 🌺 _${usedPrefix}lb_
┣ ඬ⃟ 🌺 _${usedPrefix}levelup_
┣ ඬ⃟ 🌺 _${usedPrefix}myns_
┣ ඬ⃟ 🌺 _${usedPrefix}perfil_
┣ ඬ⃟ 🌺 _${usedPrefix}work_
┣ ඬ⃟ 🌺_${usedPrefix}minar_
┣ ඬ⃟ 🌺_${usedPrefix}minar2_
┣ ඬ⃟ 🌺_${usedPrefix}buy_
┣ ඬ⃟ 🌺 _${usedPrefix}buyall_
┣ ඬ⃟ 🌺 _${usedPrefix}verificar_
┣ ඬ⃟ 🌺 _${usedPrefix}robar *<cantidad> <@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┣ ඬ⃟ 🌺_${usedPrefix}unreg *<numero de serie>*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Sᴛɪᴄᴋᴇʀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}sticker *<responder a imagen o video>*_
┣ ඬ⃟ 🌺 _${usedPrefix}sticker *<enlace / link / url>*_
┣ ඬ⃟ 🌺 _${usedPrefix}s *<responder a imagen o video>*_
┣ ඬ⃟ 🌺 _${usedPrefix}s *<enlace / link / url>*_
┣ ඬ⃟ 🌺 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ ඬ⃟ 🌺 _${usedPrefix}scircle *<imagen>*_
┣ ඬ⃟ 🌺 _${usedPrefix}sremovebg *<imagen>*_
┣ ඬ⃟ 🌺 _${usedPrefix}semoji *<tipo> <emoji>*_
┣ ඬ⃟ 🌺 _${usedPrefix}qc *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}attp *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}attp2 *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}attp3 *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}ttp *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}ttp2 *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}ttp3 *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}ttp4 *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}ttp5 *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}pat *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}slap *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}kiss *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}dado_
┣ ඬ⃟ 🌺 _${usedPrefix}wm *<packname> <author>*_
┣ ඬ⃟ 🌺 _${usedPrefix}stickermarker *<efecto> <imagen>*_
┣ ඬ⃟ 🌺 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ *Para mi creador(a) y*
├• ✐; ₊˚✦୧︰*Mᴏᴅᴇʀᴀᴅᴏʀᴇs.*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}autoadmin_
┣ ඬ⃟ 🌺 _${usedPrefix}grouplist_
┣ ඬ⃟ 🌺 _${usedPrefix}chetar_
┣ ඬ⃟ 🌺 _${usedPrefix}leavegc_
┣ ඬ⃟ 🌺 _${usedPrefix}cajafuerte_
┣ ඬ⃟ 🌺 _${usedPrefix}blocklist_
┣ ඬ⃟ 🌺 _${usedPrefix}addowner *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}delowner *<@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}block *<@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}unblock *<@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}msg *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}banchat_
┣ ඬ⃟ 🌺 _${usedPrefix}unbanchat_
┣ ඬ⃟ 🌺 _${usedPrefix}resetuser *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}unbanuser *_@tag_*
┣ ඬ⃟ 🌺 _${usedPrefix}dardiamantes *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}añadirxp *<@tag> 
┣ ඬ⃟ 🌺 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}bc *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}bcchats *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}bcgc *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}bcgc2 *<audio>*_
┣ ඬ⃟ 🌺 _${usedPrefix}bcgc2 *<video>*_
┣ ඬ⃟ 🌺 _${usedPrefix}bcgc2 *<imagen>*_
┣ ඬ⃟ 🌺 _${usedPrefix}bcbot *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}cleartpm_
┣ ඬ⃟ 🌺 _${usedPrefix}restart_
┣ ඬ⃟ 🌺 _${usedPrefix}update_
┣ ඬ⃟ 🌺 _${usedPrefix}banlist_
┣ ඬ⃟ 🌺 _${usedPrefix}addprem *<@tag> 
┣ ඬ⃟ 🌺 _${usedPrefix}addprem2 *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}addprem3 *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}addprem4 *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}delprem *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}listcmd_
┣ ඬ⃟ 🌺 _*${usedPrefix}setppbot*_
┣ ඬ⃟ 🌺 _${usedPrefix}addcmd *<texto> 
┣ ඬ⃟ 🌺 _${usedPrefix}delcmd
┣ ඬ⃟ 🌺 _${usedPrefix}saveimage
┣ ඬ⃟ 🌺 _${usedPrefix}viewimage
╰┉ͦ━ᷫ━ⷭ┈ ⃘⵿݂۪۪۪࣭࣭፝۬۬۬͞💙ꫂ❀ᰰ᷒|²⁰|²|²³ ♡┈⊷ꫂ፝۬۬۬͞ᜓ⃘݂۪۪۪࣭࣭.─❤️⃟ᬽ፝֟━❥ᰰຼ᭢╯`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
/*╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃ *< *pareja />*
├┈・─・﹕₊˚ ✦・୨୧・
┣'pareja' ${pareja ? `\n*»* ${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeGB['smsResultPareja']()}`}
╰ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╯*/

handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}