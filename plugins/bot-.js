/*const handler = async (m, {conn, command}) => {
  console.log(XDDDDDDDDD);
  new Error('This is an error');
};
handler.command = /^(handerror)$/i;
handler.owner = true;
export default handler;

var handler = async (m, { conn }) => {

if (!text) throw `Prueba de tag`

conn.reply(m.chat, `prueba`)
}

handler.command = /^(Fr)/i

export default handler*/

let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `• Total de Funciones: ${totalf}`,m)
}

handler.help = ['totalfunciones']
handler.tags = ['info']
handler.command = ['totalfunciones']
handler.register = true
export default handler 