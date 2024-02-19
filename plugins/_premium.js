const handler = (m) => m;

export async function all(m) {
  for (const user of Object.values(global.db.data.users)) {
    if (user.premiumTime != 0 && user.premium) {
      if (new Date() * 1 >= user.premiumTime) {
        user.premiumTime = 0;
        user.premium = false;
        const JID = Object.keys(global.db.data.users).find((key) => global.db.data.users[key] === user);
        const usuarioJid = JID.split`@`[0];
        const textoo = `*🐈 @${usuarioJid} 𝐇𝐞𝐲 𝐒𝐞 𝐀 𝐈𝐧𝐬𝐩𝐢𝐫𝐚𝐝𝐨 𝐓𝐮 𝐏𝐫𝐞𝐦𝐢𝐮𝐦, 𝐃𝐞𝐣𝐚𝐬 𝐃𝐞 𝐒𝐞𝐫 𝐔𝐧 𝐔𝐬𝐮𝐚𝐫𝐢𝐨 𝐏𝐫𝐞𝐦𝐢𝐮𝐦.*`;
        await this.sendMessage(JID, {text: textoo, mentions: [JID]}, {quoted: ''});
      }
    }
  }
}

/* let handler = m => m

export async function all(m) {
  let user = global.db.data.users[m.sender]
  if (m.chat.endsWith('broadcast')) return

  if (user.premiumTime != 0 && user.premium && new Date() * 1 >= user.premiumTime) {
    user.premiumTime = 0
    user.premium = false

    await m.reply(`*🐈 @${m.sender.split`@`[0]} 𝐇𝐫𝐲 𝐓𝐮 𝐓𝐢𝐞𝐦𝐩𝐨 𝐃𝐞 𝐔𝐬𝐮𝐚𝐫𝐢𝐨 𝐏𝐭𝐞𝐦𝐢𝐮𝐦 𝐀 𝐈𝐧𝐝𝐩𝐢𝐫𝐚𝐝𝐨, 𝐃𝐞𝐣𝐚𝐬 𝐃𝐞 𝐒𝐞𝐫 𝐔𝐬𝐮𝐚𝐫𝐢𝐨 𝐏𝐫𝐞𝐦𝐢𝐮𝐦.*`, m.sender, { mentions: [m.sender] })
  }
}*/
