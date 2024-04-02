let handler = async(m, { conn, command }) => {

let text = `*🌹 𝖬𝗂 𝗉𝗋𝗈𝗉𝗂𝖾𝗍𝖺𝗋𝗂𝗈 @${m.sender.split`@`[0]} 𝖺𝗁 𝗌𝗈𝗅𝗂𝖼𝗂𝗍𝖺𝖽𝗈 𝗌𝗎 𝗉𝗋𝖾𝗌𝖾𝗇𝖼𝗂𝖺 𝖾𝗇 𝖾𝗅 𝗌𝗍𝖺𝖿𝖿, 𝗉𝗈𝗋 𝖿𝖺𝗏𝗈𝗋 𝖽𝖾 𝖽𝗂𝗋𝗂𝗀𝗂𝗋𝗌𝖾 𝗅𝗈 𝖺𝗇𝗍𝖾𝗌 𝗉𝗈𝗌𝗂𝖻𝗅𝖾 𝖺𝗅 𝗀𝗋𝗎𝗉𝗈 𝖽𝖾 𝗌𝗍𝖺𝖿𝖿 💖*

*🌸 𝗦𝗮𝗸𝘂𝗿𝗮-𝗕𝗼𝘁-𝗟𝗶𝘁𝗲-𝗠𝗗 🌸*`
m.reply('🚀 ᗴᑎᐯIᗩᑎᗪO ᗴᒪ ᗰᗴᑎՏᗩᒍᗴ')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '999999999', text, m)

                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })
                    }

}
handler.tags = ['owner']
handler.command = handler.help =['reunion']
handler.rowner = true

export default handler