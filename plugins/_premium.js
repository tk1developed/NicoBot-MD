const handler = (m) => m;

export async function all(m) {
  for (const user of Object.values(global.db.data.users)) {
    if (user.premiumTime != 0 && user.premium) {
      if (new Date() * 1 >= user.premiumTime) {
        user.premiumTime = 0;
        user.premium = false;
        const JID = Object.keys(global.db.data.users).find((key) => global.db.data.users[key] === user);
        const usuarioJid = JID.split`@`[0];
        const textoo = `☄️ @${usuarioJid} Se agotó tu tiempo como usuario premium`;
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

    await m.reply(`[❗] @${m.sender.split`@`[0]} 𝐒𝐞 𝐚𝐜𝐚𝐛𝐨 𝐭𝐮 𝐭𝐢𝐞𝐦𝐩𝐨, 𝐲𝐚 𝐧𝐨 𝐞𝐫𝐞𝐬 𝐩𝐫𝐞𝐦𝐢𝐮𝐦`, m.sender, { mentions: [m.sender] })
  }
}*/