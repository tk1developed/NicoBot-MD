import axios from 'axios';

async function handler(m, { conn, usedPrefix }) {
  try {
    const connectedUsers = new Set();
    const addedNumbers = new Set();
    global.conns
      .filter(conn => conn.user && conn.state !== "close")
      .forEach(user => {
        const userJid = user.user.jid.replace(/[^0-9]/g, "");
        if (!addedNumbers.has(userJid)) {
          addedNumbers.add(userJid);
          const userName = user.user.name || "𝚂𝚄𝙱-𝙱𝙾𝚃";
          connectedUsers.add(`Wa.me/${userJid}?text=!allmenu (${userName})`);
        }
      });

    const connectedUserCount = connectedUsers.size;
    if (connectedUserCount > 0) {
      const imageBuffer = await axios.get("https://telegra.ph/file/520c4e777fdf878004005.jpg", { responseType: "arraybuffer" });
      //await conn.sendFile(m.chat, imageBuffer.data, 'image.jpg', '🕒 𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙻𝙰𝚂 𝚂𝚄𝙱𝙱𝙾𝚃𝚂 𝙰𝙲𝚃𝙸𝚅𝙰𝚂 ⚙️');

      const userList = [...connectedUsers].join(`\n`);
      await m.reply(`╭─⬣「 *LISTA DE JADIBTS* 」⬣\n┃ 🕒 𝚂𝚄𝙱𝙱𝙾𝚃𝚂 𝙰𝙲𝚃𝙸𝚅𝙰𝚂\n╰─⬣\n╭─⬣「 ${packname} 」⬣\n┃ ${userList}\n╰─⬣`);
    } else {
      await m.reply("🍄 𝙽𝙾 𝙷𝙰𝚈 𝙽𝙸𝙽𝙶𝚄𝙽𝙰 𝚂𝚄𝙱𝙱𝙾𝚃 𝙰𝙲𝚃𝙸𝚅𝙰, 𝚁𝙴𝙶𝙻𝙴𝚂𝙰 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴 ✏️");
    }
  } catch (error) {
    console.error("Error:", error);
    await m.reply("Ocurrió un error al procesar la solicitud.");
  }
}

handler.command = ["listjadibot", "bots"];
handler.help = ["bots"];
handler.tags = ["serbot", "jadibot"];

export default handler;