const xpperlimit = 350;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^buy/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count;
    global.db.data.users[m.sender].limit += count;
    conn.reply(m.chat, `
┌◈ ━━━━━━━ ⸙ ━━━━━━━ ◈
╏✤➻ *🍁 𝖢𝗈𝗆𝗉𝗋𝖺 𝖭𝗈𝗆𝗂𝗇𝖺𝗅* : + ${count}💎 
╏✤➻ *🍁 𝖦𝖺𝗌𝗍𝖺𝖽𝗈* : -${xpperlimit * count} XP
└◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`, m);
  } else conn.reply(m.chat, `😔 𝐿𝑜 𝑆𝑖𝑒𝑛𝑡𝑜, 𝑁𝑜 𝑇𝑖𝑒𝑛𝑒𝑠 𝑆𝑢𝑓𝑢𝑐𝑖𝑒𝑛𝑡𝑒 *𝑋𝑃* 𝑃𝑎𝑟𝑎 𝐶𝑜𝑚𝑝𝑟𝑎𝑟 *${count}* 𝐷𝑖𝑎𝑚𝑎𝑛𝑡𝑒𝑠💎`, m);
};
handler.help = ['Buy', 'Buyall'];
handler.tags = ['xp'];
handler.command = ['buy', 'buyall'];

handler.disabled = false;

export default handler;
