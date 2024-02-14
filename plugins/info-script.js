let { generateWAMessageFromContent } = (await import(global.baileys)).default 
import { performance } from 'perf_hooks'
import fs from 'fs'
import moment from 'moment-timezone';
import fetch from 'node-fetch';
let handler  = async (m, { conn, usedPrefix: _p }) => {
const res = await fetch('https://api.github.com/repos/diegojadibot/SakuraBotLite-MD');
const json = await res.json();
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var days = Math.floor(seconds / (24 * 60 * 60 * 1000));
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `😻  𝗕𝗢𝗧 - 𝗦𝗖𝗥𝗜𝗣𝗧  🍓\n\n*🦋 𝑅𝑒𝑝𝑜𝑠𝑖𝑡𝑜𝑟𝑖𝑜:* ${json?.name || 'SakuraBotLite-MD'}\n*💖 𝑉𝑖𝑠𝑖𝑡𝑎𝑛𝑡𝑒𝑠:* ${json?.watchers_count || '-'}\n*✨ 𝐴𝑐𝑡𝑢𝑎𝑙𝑖𝑧𝑎𝑐𝑖𝑜𝑛:* ${moment(json?.updated_at).format('DD/MM/YY - HH:mm:ss') || '-'}\n*🕊️ 𝐿𝑖𝑛𝑘/𝐸𝑛𝑙𝑎𝑐𝑒:* ${json?.html_url || 'https://github.com/diegojadibot/SakuraBotLite-MD'}\n\n${json?.forks_count || '-'} Forks · ${json?.stargazers_count || '-'} Stars · ${json?.open_issues_count || '-'} Issues\n\n*⏰ 𝑇𝑖𝑒𝑚𝑝𝑜 𝐴𝑐𝑡𝑖𝑣𝑎:*\n \t${pad(days)} Dias\t ${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segudos \t\n`
}
                                        const runtime = process.uptime()
                            const teks = `${kyun(runtime)}`
                                        const itsme = `0@s.whatsapp.net`
                                        const split = `uwu >//<`
                                        const rtimebro = {
                                        contextInfo: {
                                        participant: itsme,
                                        quotedMessage: {
                                        extendedTextMessage: {
                                    text: split
                                                                        }
                                                                }
                                                        }
                                        }

                                                  let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: -10062007, status: 500,
surface: 999,
message: teks,
description: '^^',
orderTitle: 'Hi Sis',
token: '9',
curreyCode: 'IDR',
totalCurrencyCode: '>〰<',
totalAmount1000: '1000000',
sellerJid: 'https://github.com/diegojadibot/SakuraBotLite-MD',
thumbnail: fs.readFileSync('./src/avatar_contact.png')
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)
//conn.sendMessage(m.chat, `${teks}`, MessageType.text, rtimebro)
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(runtime|sc|activo)$/i
handler.fail = null 
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
export default handler

/*import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args }) => {
   const res = await fetch('https://api.github.com/repos/diegojadibot/SakuraBotLite-MD');
   const json = await res.json();
   let txt = `           *乂  B O T S C R I P T  乂*\n\n`;
      txt += `◦  *Nombre:* ${json?.name || '❥ᰰຼ ⃟ᬽ៸𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿༒★»'}\n`;
      txt += `◦  *Visitantes:* ${json?.watchers_count || '-'}\n`;
      txt += `◦  *Tamaño:* ${(json?.size / 1024).toFixed(2) || '-'} MB\n`;
      txt += `◦  *Actualización:* ${moment(json?.updated_at).format('DD/MM/YY - HH:mm:ss') || '-'}\n`;
      txt += `◦  *Url:* ${json?.html_url || 'https://github.com/diegojadibot/SakuraBotLite-MD'}\n\n`;
      txt += `         ${json?.forks_count || '-'} Forks · ${json?.stargazers_count || '-'} Stars · ${json?.open_issues_count || '-'} Issues`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `https://atom.bio/sakuralite`, "sourceUrl": `https://atom.bio/sakuralite`}}}, {quoted: m});
};
handler.help = ['scbot'];
handler.tags = ['info'];
handler.command = /^(sc|scbot|scrip|script)$/i;
handler.register = true
export default handler;*/