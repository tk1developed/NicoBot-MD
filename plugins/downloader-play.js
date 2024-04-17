import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = ["mp3", "yta", "audio", "ytv", "video", "vídeo", "mp4", "mp3doc", "ytadoc", "audiodoc", "mp4doc", "ytvdoc", "videodoc", "vídeodoc"]
    
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
    if (!lister.includes(feature)) return conn.reply(m.chat, `🍭 Ingresa el formato en que deseas descargar más el titulo de un video o musica de YouTube.\n*ej. /play mp3  |  /play mp4*`, m)
    if (lister.includes(feature)) {
        if (feature == "mp3" || feature == "yta" || feature == "audio") {
            if (!inputs) return conn.reply(m.chat, `🍭 Ingresa el título de un video o canción de YouTube.\n\n*Ejemplo:*\n*${usedPrefix + command}* YOASOBI「アイドル」 Official Music Video`, m)
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '128kbps'
    let txt = `\t\t*三玖 YᴏᴜTᴜʙᴇ Aᴜᴅɪᴏ 玖三*\n\n`
	   txt += `*✥ Tɪᴛᴜʟᴏ* : ${vid.title}\n`
       txt += `*✥ Dᴜʀᴀᴄɪᴏɴ* : ${vid.timestamp}\n`
       txt += `*✥ Vɪsᴛᴀs* : ${vid.views}\n`
       txt += `*✥ Aᴜᴛᴏʀ* : ${vid.author.name}\n`
       txt += `*✥ Pᴜʙʟɪᴄᴀᴅᴏ* : ${vid.ago}\n`
       txt += `*✥ Uʀʟ* : ${'https://youtu.be/' + vid.videoId}\n\n`
       txt += `*- ↻ El audio se esta enviando espera un momento, soy lenta. . .*`
       await conn.sendFile(m.chat, vid.thumbnail, 'thumbnail.jpg', txt, m)
       try {
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
       if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m)
       
       await conn.sendMessage(m.chat, { audio: { url: dl_url }, fileName: title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })
       } catch {
       try {
       let yt = await fg.ytmp3(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m)
       await conn.sendMessage(m.chat, { audio: { url: dl_url }, fileName: title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })
       } catch (error) {
    }}}
        
        if (feature == "mp4" || feature == "ytv" || feature == "video" || feature == "video") {
            if (!inputs) return conn.reply(m.chat, `🍭 Ingresa el titulo de un video o musica de YouTube.`, m)
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '480p'
	let txt = `\t\t*三玖 YᴏᴜTᴜʙᴇ Vɪᴅᴇᴏ 玖三*\n\n`
	   txt += `*✥ Tɪᴛᴜʟᴏ* : ${vid.title}\n`
       txt += `*✥ Dᴜʀᴀᴄɪᴏɴ* : ${vid.timestamp}\n`
       txt += `*✥ Vɪsᴛᴀs* : ${vid.views}\n`
       txt += `*✥ Aᴜᴛᴏʀ* : ${vid.author.name}\n`
       txt += `*✥ Pᴜʙʟɪᴄᴀᴅᴏ* : ${vid.ago}\n`
       txt += `*✥ Uʀʟ* : ${'https://youtu.be/' + vid.videoId}\n\n`
       txt += `*- ↻ El video se esta enviando espera un momento, soy lenta. . .*`
       await conn.sendFile(m.chat, vid.thumbnail, 'thumbnail.jpg', txt, m)
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
        if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m)
       await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: title + '.mp4', mimetype: 'video/mp4', caption: `*✥ Tɪᴛᴜʟᴏ* : ${title}\n*✥ Cᴀʟɪᴅᴀᴅ* : ${q}`, thumbnail: await fetch(vid.thumbnail) }, { quoted: m })
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
       if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m)
       
       await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: title + '.mp4', mimetype: 'video/mp4', caption: `*✥ Tɪᴛᴜʟᴏ* : ${title}\n*✥ Cᴀʟɪᴅᴀᴅ* : ${q}`, thumbnail: await fetch(vid.thumbnail) }, { quoted: m })
       } catch (error) {
    }}}
    
    if (feature == "mp3doc" || feature == "ytadoc" || feature == "audiodoc") {
            if (!inputs) return conn.reply(m.chat, `🍭 Ingresa el titulo de un video o musica de YouTube.`, m)
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '128kbps'
	let txt = `\t\t*三玖 YᴏᴜTᴜʙᴇ Aᴜᴅɪᴏ 玖三*\n\n`
	   txt += `*✥ Tɪᴛᴜʟᴏ* : ${vid.title}\n`
       txt += `*✥ Dᴜʀᴀᴄɪᴏɴ* : ${vid.timestamp}\n`
       txt += `*✥ Vɪsᴛᴀs* : ${vid.views}\n`
       txt += `*✥ Aᴜᴛᴏʀ* : ${vid.author.name}\n`
       txt += `*✥ Pᴜʙʟɪᴄᴀᴅᴏ* : ${vid.ago}\n`
       txt += `*✥ Uʀʟ* : ${'https://youtu.be/' + vid.videoId}\n\n`
       txt += `*- ↻ El audio se esta enviando espera un momento, soy lenta. . .*`
       await conn.sendFile(m.chat, vid.thumbnail, 'thumbnail.jpg', txt, m)
       try {
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m)
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `*✥ Tɪᴛᴜʟᴏ* : ${title}\n*✥ Cᴀʟɪᴅᴀᴅ* : ${q}`, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m })
       } catch {
       try {
       let yt = await fg.ytmp3(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m)
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `*✥ Tɪᴛᴜʟᴏ* : ${title}\n*✥ Cᴀʟɪᴅᴀᴅ* : ${q}`, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m })
       } catch (error) {
    }}}
    
    if (feature == "mp4doc" || feature == "ytvdoc" || feature == "videodoc" || feature == "videodoc") {
            if (!inputs) return conn.reply(m.chat, `🍭 Ingresa el titulo de un video o musica de YouTube.`, m)
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '480p'
	let txt = `\t\t*三玖 YᴏᴜTᴜʙᴇ Vɪᴅᴇᴏ 玖三*\n\n`
	   txt += `*✥ Tɪᴛᴜʟᴏ* : ${vid.title}\n`
       txt += `*✥ Dᴜʀᴀᴄɪᴏɴ* : ${vid.timestamp}\n`
       txt += `*✥ Vɪsᴛᴀs* : ${vid.views}\n`
       txt += `*✥ Aᴜᴛᴏʀ* : ${vid.author.name}\n`
       txt += `*✥ Pᴜʙʟɪᴄᴀᴅᴏ* : ${vid.ago}\n`
       txt += `*✥ Uʀʟ* : ${'https://youtu.be/' + vid.videoId}\n\n`
       txt += `*- ↻ El video se esta enviando espera un momento, soy lenta. . .*`
       await conn.sendFile(m.chat, vid.thumbnail, 'thumbnail.jpg', txt, m)
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 300
       
       if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m)
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `*✥ Tɪᴛᴜʟᴏ* : ${title}\n*✥ Cᴀʟɪᴅᴀᴅ* : ${q}`, mimetype: 'video/mp4', fileName: `${title}` + `.mp4`}, {quoted: m })
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 300
       
       if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m)
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `*✥ Tɪᴛᴜʟᴏ* : ${title}\n*✥ Cᴀʟɪᴅᴀᴅ* : ${q}`, mimetype: 'video/mp4', fileName: `${title}` + `.mp4`}, {quoted: m })
       } catch (error) {
}}}}}
handler.help = ['play'].map(v => v + " <formato> <búsqueda>")
handler.tags = ['downloader']
handler.command = ['play', 'play2']
handler.register = true 
//handler.limit = 1
export default handler