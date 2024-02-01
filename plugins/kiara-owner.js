let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;♡᭄ 𝐾 𝐼 𝐴 𝑅 𝐴 ╰‿╯;;\nFN:♡᭄ 𝐾 𝐼 𝐴 𝑅 𝐴 ╰‿╯\nORG:♡᭄ 𝐾 𝐼 𝐴 𝑅 𝐴 ╰‿╯\nTITLE:\nitem1.TEL;waid=51944167935:+51 944 167 935\nitem1.X-ABLabel:ALS⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:♡᭄ 𝐾 𝐼 𝐴 𝑅 𝐴 ╰‿╯\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '♡᭄ 𝐾 𝐼 𝐴 𝑅 𝐴 ╰‿╯', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['creadora', 'kiara', 'propietaria', 'dueña'] 

export default handler