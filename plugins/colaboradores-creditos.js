var handler = async (m) => {

let tqto = `🍓 *𝑫𝒆𝒔𝒂𝒓𝒓𝒐𝒍𝒍𝒂𝒅𝒐𝒓*
❀ *Diego*
https://github.com/AzamiJs

🕊️🦎 *𝐶𝑜𝑙𝑎𝑏𝑜𝑟𝑎𝑑𝑜𝑟𝑒𝑠*
❀ *Azami* 
❀ *Mario*
❀ *Ender*
❀ *Enzito*
❀ *Wilmer*

𝐄𝐧𝐯𝐢𝐞 "colaboradores" 𝐏𝐚𝐫𝐚 𝐎𝐛𝐭𝐞𝐧𝐞𝐫 𝐋𝐨𝐬 𝐆𝐢𝐭𝐇𝐮𝐛 𝐃𝐞 𝐋𝐨𝐬 𝐂𝐨𝐥𝐚𝐛𝐨𝐫𝐚𝐝𝐨𝐫𝐞𝐬 🍓`

conn.reply(m.chat, tqto, m, fake, )

handler.before = async m => {

if (/^colaboradores|Colaboradores$/i.test(m.text) ) {
let texto = `🍓 *𝑮𝒊𝒕𝑯𝒖𝒃 - 𝑪𝒐𝒍𝒂𝒃𝒐𝒓𝒂𝒅𝒐𝒓𝒆𝒔*

❀ https://github.com/AzamiJs
❀ https://github.com/elrebelde21
❀ https://github.com/Ender-GB-Isis777
❀ https://github.com/Enzito-Vase
❀ https://github.com/Wilsmac

𝐸𝑛𝑣𝑖𝑒 "cc" 𝑃𝑎𝑟𝑎 𝑂𝑏𝑡𝑒𝑛𝑒𝑟 𝐿𝑜𝑠 𝐶𝑜𝑛𝑡𝑎𝑐𝑡𝑜𝑠 𝐷𝑒 𝐿𝑜𝑠 𝐶𝑜𝑙𝑎𝑏𝑜𝑟𝑎𝑑𝑜𝑟𝑒𝑠 🍓`

conn.reply(m.chat, texto, m, fake, )
}

if (/^cc$/i.test(m.text) ) {
let contacto = `🍓 *𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒐 𝑫𝒆 𝑳𝒐𝒔 𝑪𝒐𝒍𝒂𝒃𝒐𝒓𝒂𝒅𝒐𝒓𝒆𝒔* 

❀ *Azami*
@527294888993

❀ *Ender*
@50558124470

❀ *Wilmer*
@50258115623

❀ *Mario*
@527441298510

❀ *Enzito*
@5491168758497`

m.reply(contacto, m.chat, { mentions: conn.parseMention(contacto)})}
}

}
handler.help = ['tqto', 'creditos', 'credits', 'thanks', 'thanksto']
handler.tags = ['info']
handler.command = /^(credits|creditos|credit|thanks|thanksto|tqto)$/i

handler.register = true

export default handler