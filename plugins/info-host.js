let handler = async (m, { conn, command, usedPrefix }) => {
            const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
let txt = `*\`💫 Te presentamos un nuevo hosting: "Infinity-Wa Host"\`*

*¿Muy lento tu nokia y necesitas tener activo tu bot 24/7?*

> *Te tenemos la mejor opción para mantener activo tu bot 24/7, a precios muy accesibles. Es muy barato y todos pueden comprar.*

*🚩Precios :*
* 1GB, 100 CPU = 1Dolar
* 2GB, 120 CPU = 2Dolar
* 3GB, 140 CPU = 3Dolar
* 4GB, 175 CPU = 4Dolar
* 5GB, 200 CPU = 5 Dólar. 

🟢 \`\`\`Información del Host\`\`\`

💻 *Página:*
https://live.panel-infinitywa.store

*🟢 Dashboard:*
https://dashboard.infinitywa.xyz

*⚙️ Bot de Support: exclusivo para host*
https://wa.me/543513610400

🧡 *Canal de WhatsApp:*
https://chat.whatsapp.com/IJbHNHbpoma1Dp7LZwG4U0

💚 *Grupo:*
https://chat.whatsapp.com/IJbHNHbpoma1Dp7LZwG4U0

🛍️ *Método de pago:*
*• PayPal :* +543513610400
*• Mercado pago, alías:* nicoticoo.mp
*• Naranja x, alías:* nicoticoo.nx
*• Yape (Perú) :* +543513610400
*• DolarApp:* wa.me/543513610400
*• Pago con tarjeta:* wa.me/543513610400

*\`💙 Contactanos para más información o alquidir los servicios:\`*
• https://www.instagram.com/nike.ontivero
• wa.me/543513610400
• wa.me/543513610400` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘𝐖𝐀-𝐇𝐎𝐒𝐓 🤖`,
body: `✅ Hosting de Calidad`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/EQTd.jpg', 
sourceUrl: 'https://chat.whatsapp.com/IJbHNHbpoma1Dp7LZwG4U0'}}},
{ quoted: fkontak2})
}
handler.tags =['info'] 
handler.help = ['infinity', 'host', 'hosting'] 
handler.command = /^(infinity|infinityWa|host|hosting)$/i
export default handler
