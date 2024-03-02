/*import fs from "fs"
async function handler(m, {usedPrefix}) {
    const user = m.sender.split("@")[0]
    if (fs.existsSync("./jadibts/" + user + "/creds.json")) {
        let token = Buffer.from(fs.readFileSync("./jadibts/" + user + "/creds.json"), "utf-8").toString("base64")
        await m.reply(`El token te permite iniciar sesion en otros bots, recomendamos no compartirlo con nadie.\n\n*Tu token es:*`)
        await m.reply(token)
    } else {
        await m.reply(`*𝐍𝐨 𝐓𝐢𝐞𝐧𝐞𝐬 𝐍𝐢𝐧𝐠𝐮𝐧 𝐓𝐨𝐤𝐞𝐧 𝐀𝐜𝐭𝐢𝐯𝐨 𝐔𝐬𝐚: ${usedPrefix}jadibot 𝐏𝐚𝐫𝐚 𝐂𝐫𝐞𝐚𝐫 𝐔𝐧 𝐓𝐨𝐤𝐞𝐧 🍓.*`)
    }
  }
  handler.command = handler.help = ['token', 'gettoken', 'serbottoken'];
  handler.tags = ['jadibot'];
  handler.register = true
  handler.private = true
  export default handler;*/
