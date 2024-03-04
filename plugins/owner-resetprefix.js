const handler = async (m, {conn}) => {
  global.prefix = new RegExp('^[' + (opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
  await m.reply(`✅️ *Prefijo Restablecido Con Éxito!*`);
  // conn.fakeReply(m.chat, '🦋 𝑃𝑟𝑒𝑓𝑖𝑗𝑜 𝑅𝑒𝑠𝑡𝑎𝑏𝑙𝑒𝑐𝑖𝑑𝑜 𝐶𝑜𝑚 𝐸𝑥𝑖𝑡𝑜 🍓', '0@s.whatsapp.net', 'Reset Prefix')
};
handler.help = ['resetprefix'];
handler.tags = ['owner'];
handler.command = /^(resetprefix)$/i;
handler.rowner = true;


export default handler;
