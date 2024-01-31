let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;ALS⁩;;\nFN:♡᭄ Diego ╰‿╯\nORG:♡᭄ Diego ╰‿╯\nTITLE:\nitem1.TEL;waid=573004826011:+57 300 4826011\nitem1.X-ABLabel:ALS⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:♡᭄ Diego ╰‿╯\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'ALS⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler