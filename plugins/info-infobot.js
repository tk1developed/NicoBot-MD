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
    await conn.sendMessage(m.chat, { react: { text: '🥀', key: m.key } })
  const info = `

╭━〔  𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 🍄  〕⬣
│ *⏰️Actividad*
│ *${uptime}*
│
│•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•
│
│ *🧸Chats*
│ 𝘊𝘩𝘢𝘵𝘴 𝘗𝘳𝘪𝘷𝘢𝘥𝘰𝘴: *${chats.length - groups.length}*
│ 𝘊𝘩𝘢𝘵𝘴 𝘋𝘦 𝘎𝘳𝘶𝘱𝘰𝘴: *${groups.length}* 
│ 𝘊𝘩𝘢𝘵𝘴 𝘛𝘰𝘵𝘢𝘭𝘦𝘴: *${chats.length}* 
│
│•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•
│
│ 𝗬𝗼𝘀𝗵𝗶𝗸𝗼𝗕𝗼𝘁 - 𝗠𝗗 🪐
╰━━━━━━━━━━━━⬣`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://github.com/Diego-YL-177/YoshikoBot-MD` },
    mimetype: `application/${document}`,
    fileName: `𝐘𝐨𝐬𝐡𝐢𝐤𝐨 𝐁𝐨𝐭 - 𝐌𝐃 🌺`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com/Diego-YL-177/YoshikoNot-MD",
        mediaType: 2,
        previewType: "pdf",
        title: "𝐁𝐲: Dɪᴇɢᴏ.Oғᴄ",
        body: wm,
        thumbnail: imagen6,
        sourceUrl: "https://github.com/Diego-YL-177/YoshikoBot-MD",
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
handler.register = true
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
