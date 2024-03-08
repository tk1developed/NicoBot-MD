var handler = async (m) => {

let tqto = `🚩 *Desarrollador*
🎌 *Colaboradores*
⬡ *Mario* 
⬡ *Wilmer*

_Envie "colaboradores" para obtener el enlace del perfil de GitHub de los colaboradores_`

conn.reply(m.chat, tqto, )

handler.before = async m => {

if (/^colaboradores|Colaboradores$/i.test(m.text) ) {
let texto = `🚩 *GitHub - Colaboradores*

⬡ https://github.com/WorkCwp
⬡ https://github.com/diegojadibot
⬡ https://github.com/Edwardofc

_Envie "cc" Para Obtener El Contacto De Los Colaboradores_`

conn.reply(m.chat, texto, )
}

if (/^cc$/i.test(m.text) ) {
let contacto = `🎌 *Contacto - Colaboradores* 

⬡ *Gata Dios*
@593968263524

⬡ *ReyEndymion*
@5215517489568

⬡ *Wotchito*
@573027866596

⬡ *HJ*
@524437863111

⬡ *Ender*
@50558124470

⬡ *Jxjxn17*
@51929972576

⬡ *Wilmer*
@50258115623

⬡ *Jose*
@573173090446

⬡ *Katashi Fukushima*
@51948705559

⬡ *Daniel*
@33760536110

⬡ *X_Arumiii*
@5215610314499

⬡ *Wilson*
@5492964650915

⬡ *Cpw*
@573003025991

⬡ *Diego*
@573013482814

⬡ *Edwardofc*
@51935531943`

m.reply(contacto, m.chat, { mentions: conn.parseMention(contacto)})}
}

}
handler.help = ['tqto', 'creditos', 'credits', 'thanks', 'thanksto']
handler.tags = ['info']
handler.command = /^(credits|creditos|credit|thanks|thanksto|tqto)$/i

handler.register = true

export default handler