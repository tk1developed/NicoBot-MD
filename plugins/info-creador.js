let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;♡᭄ 𝐷 𝐼 𝐸 𝐺 𝑂 ╰‿╯;;\nFN:♡᭄ 𝐷 𝐼 𝐸 𝐺 𝑂 ╰‿╯\nORG:♡᭄ 𝐷 𝐼 𝐸 𝐺 𝑂 ╰‿╯\nTITLE:\nitem1.TEL;waid=573107133321:+57 310 7133321\nitem1.X-ABLabel:ALS⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:♡᭄ 𝐷 𝐼 𝐸 𝐺 𝑂 ╰‿╯\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '♡᭄ 𝐷 𝐼 𝐸 𝐺 𝑂 ╰‿╯', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'diego', 'creador', 'dueño'] 
handler.register = true
export default handler