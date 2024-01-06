import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
  const info = `
*CREADOR/PREFIJO*
𝘊𝘳𝘦𝘢𝘥𝘰𝘳: 𝘿𝙞𝙚𝙜𝙤
 𝘗𝘳𝘦𝘧𝘪𝘫𝘰: *${usedPrefix}*

*🚀VELOCIDAD*
𝘝𝘦𝘭𝘰𝘤𝘪𝘥𝘢𝘥: 
 *${speed} ms*

*⏰️ACTIVIDAD*
𝘈𝘤𝘵𝘪𝘷𝘰: *${uptime}*

*🌻CHATS*
 𝘊𝘩𝘢𝘵𝘴 𝘗𝘳𝘪𝘷𝘢𝘥𝘰𝘴: *${chats.length - groups.length}*
 𝘊𝘩𝘢𝘵𝘴 𝘋𝘦 𝘎𝘳𝘶𝘱𝘰𝘴: *${groups.length}* 
 𝘊𝘩𝘢𝘵𝘴 𝘛𝘰𝘵𝘢𝘭𝘦𝘴: *${chats.length}* 

*💻SERVIDORES*
 𝘜𝘴𝘦𝘳: *${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜*
 𝘈𝘶𝘵𝘰𝘳𝘦𝘢𝘥: ${autoread ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
 𝘙𝘦𝘴𝘵𝘳𝘪𝘤𝘵: ${restrict ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"} 
 𝘗𝘤𝘰𝘯𝘭𝘺: ${pconly ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
 𝘎𝘤𝘰𝘯𝘭𝘺: ${gconly ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
 𝘔𝘰𝘥𝘰: ${self ? "*𝚙𝚛𝚒𝚟𝚊𝚍𝚘*" : "*𝚙𝚞𝚋𝚕𝚒𝚌𝚘*"}
 𝘈𝘯𝘵𝘪𝘱𝘳𝘪𝘷𝘢𝘥𝘰: ${antiprivado ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
 𝘔𝘰𝘥𝘦𝘫𝘢𝘥𝘪𝘣𝘰𝘵: ${modejadibot ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
 𝘈𝘯𝘵𝘪𝘭𝘭𝘢𝘮𝘢𝘥𝘢: ${antiCall ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
 ⃟ᬽ៸𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿༒★»
`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
    mimetype: `application/${document}`,
    fileName: `「 𝘚𝘢𝘬𝘶𝘳𝘪𝘵𝘢𝘉𝘰𝘵🦁 」`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com/BrunoSobrino/TheMystic-Bot-MD",
        mediaType: 2,
        previewType: "pdf",
        title: "𝘛𝘶 𝘔𝘦𝘫𝘰𝘳 𝘉𝘰𝘵",
        body: wm,
        thumbnail: imagen1,
        sourceUrl: "https://atom.bio/sakurabot",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = /^(ping|speed|infobot)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
