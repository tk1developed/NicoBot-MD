import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  if (!text) throw `*🍓 𝗜𝗻𝗴𝗿𝗲𝘀𝗲 𝗨𝗻 𝗡𝗼𝗺𝗯𝗿𝗲 𝗗𝗲 𝗔𝗹𝗴𝘂𝗻𝗮 𝗠𝘂𝘀𝗶𝗰𝗮*`;
  try {
    const res = await fetch(`https://api-v2.soundcloud.com/search/tracks?q=${text}&client_id=iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX`);
    const json2 = await res.json();
    let permalinkUrl;
    if (json2.collection.length > 0) {
      const randomIndex = Math.floor(Math.random() * json2.collection.length);
      const randomObject = json2.collection[randomIndex];
      permalinkUrl = randomObject.permalink_url;
    } else {
      permalinkUrl = await json2.collection[0].permalink_url;
    }
    const res2 = await fetch(`https://api.akuari.my.id/downloader/scdl?link=${permalinkUrl}`);
    const json = await res2.json();
    const shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.link}`)).text();
    const soundcloudt = `❒═══❬ 𝐒𝐎𝐔𝐍𝐃𝐂𝐋𝐎𝐔𝐃 ❭═══╾❒\n┬\n├‣✨ *𝘕𝘰𝘮𝘣𝘳𝘦:* ${json.title}\n┴\n┬\n├‣💚 *𝘓𝘪𝘯𝘬 𝘋𝘪𝘳𝘦𝘤𝘵𝘰:* ${shortUrl}\n┴\n┬\n├‣ *- 𝖤𝗇𝗏𝗂𝖺𝖽𝗈 𝖬𝗎𝗌𝗂𝖼𝖺...*\n├‣ _𝑆𝑎𝑘𝑢𝑟𝑎𝐵𝑜𝑡𝐿𝑖𝑡𝑒-𝑀𝐷 😻_\n┴`;
    await conn.sendFile(m.chat, json.thumb, '', soundcloudt, m);
    await conn.sendMessage(m.chat, {audio: {url: json.link}, fileName: `${json.title}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch {
    throw '*💖 Nᴏ Sᴇ Eɴᴄᴏɴᴛʀᴏ Lᴀ Mᴜsɪᴄᴀ!*';
  }
};
handler.command = /^(soundcloud|cover)$/i;
export default handler;
