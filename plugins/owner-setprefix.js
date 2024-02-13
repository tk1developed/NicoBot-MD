const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*🦋 𝑁𝑜 𝑆𝑒 𝐸𝑛𝑐𝑜𝑛𝑡𝑟𝑜 𝑁𝑖𝑛𝑔𝑢𝑛 𝑃𝑟𝑒𝑓𝑖𝑗𝑜 𝑃𝑜𝑟 𝐹𝑎𝑣𝑜𝑟 𝐸𝑠𝑐𝑟𝑖𝑏𝑎 𝐸𝑙 𝑃𝑟𝑒𝑓𝑖𝑗𝑜. 𝐄𝐣𝐞𝐦𝐩𝐥𝐨:* ${usedPrefix + command} /`;
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
  await m.reply(`*🦋 𝑷𝒓𝒆𝒇𝒊𝒋𝒐 𝑨𝒄𝒕𝒖𝒂𝒍𝒊𝒛𝒂𝒅𝒐, 𝑷𝒓𝒆𝒇𝒊𝒋𝒐: ${text}*`);
};
handler.help = ['setprefix'].map((v) => v + ' [prefix]');
handler.tags = ['owner'];
handler.command = /^(setprefix)$/i;
handler.rowner = true;
export default handler;
