import fg from 'api-dylux' 
import axios from "axios"
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `🚩 Ingresa el enlace del vídeo de TikTok.`
if (!args[0].match(/tiktok/gi)) return conn.reply(m.chat, `Verifica que el link sea de TikTok`,  m).then(_ => m.react('✖️'))
await m.react('🕓')
try {
let tiktokData = await tryServer1(args[0])
if (!tiktokData) { return m.react('✖️')}
let videoURL = tiktokData.video.noWatermark
let videoURLWatermark = tiktokData.video.watermark
let txt = `*乂  T I K T O K  -  D O W N L O A D*\n\n`
    txt += `	✩  *Título* : ${tiktokData.title}\n`
    txt += `	✩  *Publicado* : ${tiktokData.created_at}\n`
    txt += `	✩  *Calidad* : ${tiktokData.video.ratio}\n`
    txt += `	✩  *Likes* : ${tiktokData.stats.likeCount}\n`
    txt += `	✩  *Comentarios* : ${tiktokData.stats.commentCount}\n`
    txt += `	✩  *Share* : ${tiktokData.stats.shareCount}\n`
    txt += `	✩  *Visitas* : ${tiktokData.stats.playCount}\n\n`
    txt += `🚩 *${textbot}*`
await conn.sendMessage(m.chat, { video: { url: videoURL }, caption: txt }, { quoted: m})
await m.react('✅')
} catch {
try {
let tiktokData3 = await tryServer3(args[0])
let { data  } = tiktokData3
let { title, play, size, wm_size, hd_size, play_count, comment_count, share_count, download_count, collect_count, create_time } = data
let sizeInMB = (sizeInBytes) => (sizeInBytes / (1024 * 1024)).toFixed(2)
let sizeInMB_size = sizeInMB(size)
let sizeInMB_wm_size = sizeInMB(wm_size)
let sizeInMB_hd_size = sizeInMB(hd_size)
let txt = `*乂  T I K T O K  -  D O W N L O A D*\n\n`
    txt += `	✩  *Título* : ${title}\n`
    //txt += `	✩  *Publicado* : ${create_time}\n`
    txt += `	✩  *Descargas* : ${download_count}\n`
    txt += `	✩  *Comentarios* : ${comment_count}\n`
    txt += `	✩  *Share* : ${share_count}\n`
    txt += `	✩  *Visitas* : ${play_count}\n`
    txt += `	✩  *Tamaño* : ${sizeInMB_size} MB\n\n`
    txt += `🚩 *${textbot}*`
await conn.sendMessage(m.chat, { video: { url: play }, caption: txt }, { quoted: m})
await m.react('✅')
} catch {
try {
let p = await fg.tiktok(args[0])
await conn.sendFile(m.chat, p.play, "out.png", listo, m)
await m.react('✅')
} catch {
try {
const { video } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) return m.react('✖️')
await conn.sendFile(m.chat, url, "out.png", listo, m)
await m.react('✅')
} catch {
await m.react('✖️')
}}}}}
handler.help = ['tiktok *<url tt>*']
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
//handler.limit = 1
handler.register = true 

export default handler

async function tryServer3(url) {
  try {
    let skizoTechAPI = 'https://skizo.tech/api/tiktok';
    let response = await axios.post(skizoTechAPI, {
      'url': `${url}`
    }, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
        'Accept': '*/*',
        'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        'Referer': 'https://tiktok.vihangayt.me/',
        'Content-Type': 'application/json',
        'Authorization': 'https://skizo.tech',
        'Origin': 'https://tiktok.vihangayt.me',
        'Connection': 'keep-alive',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'TE': 'trailers'
      }
    });
    return response.data;
  } catch {
    return null
  }
}

async function tryServer1(url) {
  try {
    let tiklydownAPI = `https://api.tiklydown.eu.org/api/download?url=${url}`;
    let response = await axios.get(tiklydownAPI, {
      headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Cookie': 'cf_clearance=IDhpJ2RO8UDI40tXLI4g45ZZGDiET0lnWy6bO.4oLqQ-1706368220-1-ASlDi8PXO3c7Jk/wNqrgxTj4gCrY4qr6QonEpMmvW1EKPYICk//uDMJ+wFCv2LXuv7t26eyFoSyVEGbdV8dV2gQ=',
    'Upgrade-Insecure-Requests': '1',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'If-None-Match': 'W/faa-OLjMXtR3QSf5fGpXMh35fxB63x0'
      }
    });
    return response.data;
  } catch {
    return null
  }
}