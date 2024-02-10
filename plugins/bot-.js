/*const handler = async (m, {conn, command}) => {
  console.log(XDDDDDDDDD);
  new Error('This is an error');
};
handler.command = /^(handerror)$/i;
handler.owner = true;
export default handler;*/

var handler = async (m, { conn }) => {

if (!text) throw `Prueba de tag`

conn.reply(m.chat, `prueba`)
}

handler.command = /^(Fr)/i

export default handler