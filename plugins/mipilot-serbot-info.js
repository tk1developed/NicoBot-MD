import { Low, JSONFile } from 'lowdb'

const adapter = new JSONFile('./jadibts/connections/stop.json')
const db = new Low(adapter)

db.data = db.data === undefined || db.data === null ? { stop: {} } : db.data;
let handler = async (m, { usedPrefix, conn, args, participants })=> {
  let users = [...new Set([...global.conns.filter(conn => conn.isInit && conn.state !== 'close').map(conn => conn.user)])];

  //let stop = db.data.stop;

  //users = users.filter(user => !stop[user]); // filtra los usuarios que han usado el comando 'stop'

  let int = '';
  let count = 0;
  let resp = `*🤖 Aquí tienes la lista de algunos sub bots (jadibot/serbot) 🤖️*\n\n*👉🏻 Puedes contactarlos para ver si se unen a tu grupo*\n\n*Te pedimos de favor que:*\n*1.- Seas amable ✅*\n*2.- No insistas ni discutas ✅*\n\n*✳ ️Si le aparece el siguiente texto en blanco es que no hay ningún Sub-Bot disponible en este momento inténtelo mas tarde*\n\n*_⚠ NOTA: ️ELLOS SON PERSONAS QUE NO CONOCEMOS.. POR LO QUE EL EQUIPO DE ${wm} NO SE HACE RESPONSABLE DE LO QUE PUEDA OCURRIR AHI.._*\n\n`
  let uniqueUsers = users.filter((v, i, a) => a.findIndex(t => (t.jid === v.jid)) === i)

  let SB = uniqueUsers.map((v, i) => `${i + 1}.  👉🏻 ${'@'}${v.jid.split`@`[0]}`).join`\n`

for (const c of resp) {
      await new Promise(resolve => setTimeout(resolve, 15));
      int += c;
      count++;

      if (count % 10 === 0) {
          conn.sendPresenceUpdate('composing' , m.chat);
      }
  }
  await conn.sendMessage(m.chat, { text: int, mentions: conn.parseMention(resp) }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100} )
  for (const c of SB) {
    await new Promise(resolve => setTimeout(resolve, 50));
    int += c;
    count++;

    if (count % 10 === 0) {
        conn.sendPresenceUpdate('composing' , m.chat);
    }
}
  await conn.sendMessage(m.chat, { text: SB, mentions: conn.parseMention(SB) }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100} )
}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler                                