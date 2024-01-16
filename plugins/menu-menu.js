let media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `Hola👋 Buenas Como Estas?

🌥Soy _*SakuraBotLite-MD*_ Un Bot Con Simples Comandos Pero Divertido🪁

✨️El Menu Cambió Ahora Puedes Escribir .allmenu Para Ver El Menu Completo Del Bot🧭

😺Puedes Contactar A Mi Creador Si Es Necesario @573013114854 🌻

🌥Usa El Bot Y No Agas Spam A Los Comandos, Eso Causa Que El Numero Del Bot Se Valla Al Soporte🧑‍💻

💻 No Olvides Registrarte, Deves Estar En Mi Base De Datos, Ejemplo #verificar Diego.20 🗃`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n\n\n` + wm, media, 'https://github.com/diegojadibot/SakuraBotLite-MD', 'SakuraBotLite-MD', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentassb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^linkgc|menu|botmenu|menubot|sakuramenu|menusakura|sakuritamenu|menudencia|grpsb$/i
handler.exp = 33

export default handler