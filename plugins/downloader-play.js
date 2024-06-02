import fetch from 'node-fetch';
import axios from 'axios';
import yts from 'yt-search';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import ytdl from 'ytdl-core';
import {bestFormat, getUrlDl} from '../lib/y2dl.js';
import YTDL from "../lib/ytdll.js";
import fs from "fs";
let limit1 = 100;
let limit2 = 400;
let limit_a1 = 50;
let limit_a2 = 400;
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
 if (!text) return conn.reply(m.chat, `☄️ *Ingrese el nombre de un video de YouTube*\n\nEjemplo, !${command} Huellas - Maiye Torrex`,  m, fake, )
  try {
    const yt_play = await search(args.join(' '));
    let additionalText = '';
    if (command === 'play') {
      additionalText = 'audio';
    } else if (command === 'play2') {
      additionalText = 'video';
    }
    m.react('🕒') 
    const texto1 = `・₊✧★。..・✫・🎸🎧°⋆♡₊˚ 🔮
> 🌩 τιτυℓο:
> • ${yt_play[0].title}
> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸
> 🌦 ρυϐℓιϲα∂ο єи: 
> • ${yt_play[0].ago}
> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸
> 🍭 єиℓαϲє:
> • ${yt_play[0].url}
> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸
> 🍒 αմԵօɾ:
> • ${yt_play[0].author.name}
> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪──ׅ──ׅ──ׅ─ׅ┈ ─๋︩︪─◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸
> 🧃 cαɳαℓ:
> • ${yt_play[0].author.url}
> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸
> 🍇 ժմɾαcíօ́ղ:
> • ${secondString(yt_play[0].duration.seconds)}
・₊✧。..・★🎸🎧°⋆♡₊˚ 🔮

> _*🍬 εɳѵเαɳ∂σ  ${additionalText}, รµ αµ∂เσ αɠµαɾ∂ε µɳ ɱσɱεɳƭσ 🍓...*_`.trim();
await conn.sendMessage(m.chat, { text: texto1, contextInfo: { externalAdReply: { title: yt_play[0].title, body: team, thumbnailUrl: yt_play[0].thumbnail, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: fkontak })
  if (command == 'play') {
    try {    
    // m.react('✅️')
    const q = '128kbps';
    const v = yt_play[0].url;
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.audio[q].download();
    const ttl = await yt.title;
    const size_Api = await yt?.size;
    const sizeApi = size_Api?.replace('MB', '')?.replace('GB', '')?.replace('KB', '')   
    const sex = await getBuffer(dl_url)
    const fileSizeInBytes = sex.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const size = fileSizeInMB.toFixed(2);    
    if (size >= limit_a2) {  
    await conn.sendMessage(m.chat, {text: `✔ Descargue su audio en ${dl_url}`}, {quoted: m});
    return;    
    }     
    if (size >= limit_a1 && size <= limit_a2) {  
    await conn.sendMessage(m.chat, {document: sex, mimetype: 'audio/mpeg', fileName: ttl + `.mp3`}, {quoted: fkontak});   
    return;
    } else {
    await conn.sendMessage(m.chat, {audio: sex, mimetype: 'audio/mpeg', fileName: ttl + `.mp3`}, {quoted: fkontak});   
  m.react('✅️')
    return    
    }} catch {
    try {      
    let info = await ytdl.getInfo(yt_play[0].videoId);
    let format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });
    let buff = ytdl.downloadFromInfo(info, { format: format });
    let bufs = []
        buff.on('data', chunk => { bufs.push(chunk) })
        buff.on('end', async () => {
    let buff = Buffer.concat(bufs)
    conn.sendMessage(m.chat, {audio: buff, fileName: yt_play[0].title + '.mp3', mimetype: 'audio/mpeg'}, {quoted: fkontak});
    m.react('✅️')
    })} catch {
    await YTDL.mp3(yt_play[0].url).then(async (s) => {
    await conn.sendMessage(m.chat, {audio: fs.readFileSync(s.path), mimetype: "audio/mpeg", fileName: `${s.meta.title || "-"}.mp3`,}, {quoted: fkontak});
    m.react('✅️')
    await fs.unlinkSync(s.path)});
    }
  }
}
    if (command == 'play2') {
    try {  
   // m.react('✅️')
    const qu = '360';
    const q = qu + 'p';
    const v = yt_play[0].url;
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.video[q].download();
    const ttl = await yt.title;
    const size_Api = await yt?.size;
    const sizeApi = size_Api?.replace('MB', '')?.replace('GB', '')?.replace('KB', '')   
    const sex = await getBuffer(dl_url)
    const fileSizeInBytes = sex.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const size = fileSizeInMB.toFixed(2);    
    if (size >= limit2) {  
    await conn.sendMessage(m.chat, {text: `✔ Descargue su video en ${dl_url}`}, {quoted: fkontak});
    return;    
    }     
    if (size >= limit1 && size <= limit2) {  
    await conn.sendMessage(m.chat, {document: sex, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: fkontak});
    m.react('✅️')   
    return;
    } else {
    await conn.sendMessage(m.chat, {video: sex, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: fkontak});   
   m.react('✅️')
    return;    
    }} catch {
    const formats = await bestFormat(yt_play[0].url, 'video');
    const buff = await getBuffer(formats.url);
    const ttl_1 = `${yt_play[0].title ? yt_play[0].title : 'Tu_video_descargado'}`;
    const fileSizeInBytes = buff.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const roundedFileSizeInMB = fileSizeInMB.toFixed(2);
    await conn.sendMessage(m.chat, {video: buff, fileName: ttl_1 + '.mp4', mimetype: 'video/mp4'}, {quoted: fkontak});
   m.react('✅️')
    }      
  }
} catch (error) {
    console.log(error)
    throw '*🍭 Error, por favor vuelva a intentarlo.*';
  }
};
handler.help = ['play', 'play2'].map((v) => v + ' < busqueda >');
handler.tags = ['downloader'];
handler.command = /^(play|play2)$/i;

handler.register = true


export default handler;

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

const getBuffer = async (url, options) => {
    options ? options : {};
    const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1,}, ...options, responseType: 'arraybuffer'});
    return res.data;
};