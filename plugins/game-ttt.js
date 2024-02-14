import TicTacToe from '../lib/tictactoe.js';
const handler = async (m, {conn, usedPrefix, command, text}) => {
  conn.game = conn.game ? conn.game : {};
  if (Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*🌱 𝐴𝑢𝑛 𝐸𝑠𝑡𝑎𝑠 𝐽𝑢𝑔𝑎𝑛𝑑𝑜 𝑇𝑜𝑑𝑎𝑏𝑖𝑎.*';
  if (!text) throw `*🍁 𝑆𝑒 𝑅𝑒𝑞𝑢𝑖𝑒𝑟𝑒 𝑈𝑛 𝑁𝑜𝑚𝑏𝑟𝑒 𝐴 𝐿𝑎 𝑆𝑎𝑙𝑎 𝐷𝑒𝑙 𝐽𝑢𝑒𝑔𝑜.*\n\n*—◉ 𝑬𝒋𝒆𝒎𝒑𝒍𝒐*\n*◉ ${usedPrefix + command} sala de diego*`;
  let room = Object.values(conn.game).find((room) => room.state === 'WAITING' && (text ? room.name === text : true));
  if (room) {
    await m.reply('*🕹️ 𝐼𝑛𝑖𝑐𝑖𝑎 𝐸𝑙 𝐽𝑢𝑒𝑔𝑜, 𝑈𝑛 𝐽𝑢𝑔𝑎𝑑𝑜𝑟 𝑆𝑒 𝑈𝑛𝑖𝑜.*');
    room.o = m.chat;
    room.game.playerO = m.sender;
    room.state = 'PLAYING';
    const arr = room.game.render().map((v) => {
      return {
        X: '✖️',
        O: '⭕',
        1: '1️⃣',
        2: '2️⃣',
        3: '3️⃣',
        4: '4️⃣',
        5: '5️⃣',
        6: '6️⃣',
        7: '7️⃣',
        8: '8️⃣',
        9: '9️⃣',
      }[v];
    });
    const str = `
🎮 𝐓𝐫𝐞𝐬 𝐄𝐧 𝐑𝐚𝐥𝐥𝐚 🎮

✖️ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}

        ${arr.slice(0, 3).join('')}
        ${arr.slice(3, 6).join('')}
        ${arr.slice(6).join('')}

𝚃𝚄𝚁𝙽𝙾 𝙳𝙴 @${room.game.currentTurn.split('@')[0]}
`.trim();
    if (room.x !== room.o) await conn.sendMessage(room.x, {text: str, mentions: this.parseMention(str)}, {quoted: m});
    await conn.sendMessage(room.o, {text: str, mentions: conn.parseMention(str)}, {quoted: m});
  } else {
    room = {
      id: 'tictactoe-' + (+new Date),
      x: m.chat,
      o: '',
      game: new TicTacToe(m.sender, 'o'),
      state: 'WAITING'};
    if (text) room.name = text;
    const imgplay = `https://cope-cdnmed.agilecontent.com/resources/jpg/8/9/1590140413198.jpg`;
    conn.reply(m.chat, `*🕹 𝘛𝘳𝘦𝘴 𝘌𝘯 𝘙𝘢𝘭𝘭𝘢 🎮*\n\n*◉ 𝐸𝑠𝑝𝑒𝑟𝑎𝑛𝑑𝑜 𝐴𝑙 𝑆𝑒𝑔𝑢𝑛𝑑𝑜 𝐽𝑢𝑔𝑎𝑑𝑜𝑟*\n*◉ 𝑃𝑎𝑟𝑎 𝐵𝑜𝑟𝑟𝑎𝑟 𝑂 𝑆𝑎𝑙𝑖𝑟𝑡𝑒 𝐷𝑒 𝐿𝑎 𝑃𝑎𝑟𝑡𝑖𝑑𝑎 𝑈𝑠𝑎 𝐸𝑙 𝐶𝑜𝑚𝑎𝑛𝑑𝑜 ${usedPrefix}delttt*\n\n◉ 𝑃𝑎𝑟𝑎 𝑈𝑛𝑖𝑟𝑡𝑒 𝐴 𝐿𝑎 𝑃𝑎𝑟𝑡𝑖𝑑𝑎 𝑈𝑠𝑒 𝐸𝑙 𝐶𝑜𝑚𝑎𝑛𝑑𝑜: (${usedPrefix + command} ${text})`, m);
    // conn.sendButton(m.chat, `*🕹 𝘛𝘳𝘦𝘴 𝘌𝘯 𝘙𝘢𝘭𝘭𝘢 🎮*\n\n*◉ 𝐸𝑠𝑝𝑒𝑟𝑎𝑛𝑑𝑜 𝐴𝑙 𝑆𝑒𝑔𝑢𝑛𝑑𝑜 𝐽𝑢𝑔𝑎𝑑𝑜𝑟\n*◉ 𝑃𝑎𝑟𝑎 𝐵𝑜𝑟𝑟𝑎𝑟 𝑂 𝑆𝑎𝑙𝑖𝑟𝑠𝑒 𝐷𝑒 𝐿𝑎 𝑃𝑎𝑟𝑡𝑖𝑑𝑎 𝑈𝑠𝑒 𝐸𝑙 𝐶𝑜𝑚𝑎𝑛𝑑𝑜 ${usedPrefix}delttt*`, wm, imgplay, [['𝑈𝑛𝑖𝑟𝑠𝑒 𝐴 𝐿𝑎 𝑃𝑎𝑟𝑡𝑖𝑑𝑎', `${usedPrefix + command} ${text}`]], m, { mentions: conn.parseMention(text) })
    conn.game[room.id] = room;
  }
};
handler.command = /^(tictactoe|ttc|ttt|xo)$/i;
handler.register = true
export default handler;