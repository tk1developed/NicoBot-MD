/*let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://telegra.ph/file/ec539ab0fee550fcaf3b2.png'
let dia = Math.floor(Math.random() * 30)
let tok = Math.floor(Math.random() * 10)
let hadesb = Math.floor(Math.random() * 4000)
let expp = Math.floor(Math.random() * 5000)

  global.db.data.users[m.sender].limit += dia
  global.db.data.users[m.sender].money += hadesb
  global.db.data.users[m.sender].joincount += tok
  global.db.data.users[m.sender].exp += expp

let texto = `*𝑹𝒆𝒂𝒍 𝑨𝒔𝒕𝒂 𝑳𝒂 𝑴𝒖𝒆𝒓𝒕𝒆 𝑩𝒆𝒃𝒆 🍓*`

const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'hades.jpg', texto, fkontak)
//await conn.sendButton(m.chat, texto, wm, img, [['🔰 𝙼𝙴𝙽𝚄', '/menu'] ], fkontak, m)  
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['anuel', 'realastalamuerte', 'noviokarol'] 
handler.register = true
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}*/

    /** By @MoonContentCreator || https://github.com/MoonContentCreator/BixbyBot-Md **/ 
const _0x58352b=_0x2c6e;(function(_0x2b2bc5,_0x2258b3){const _0x15a21b=_0x2c6e,_0x42169b=_0x2b2bc5();while(!![]){try{const _0x40756e=-parseInt(_0x15a21b(0x171))/0x1*(-parseInt(_0x15a21b(0x179))/0x2)+parseInt(_0x15a21b(0x165))/0x3+parseInt(_0x15a21b(0x162))/0x4*(-parseInt(_0x15a21b(0x16b))/0x5)+-parseInt(_0x15a21b(0x17c))/0x6*(parseInt(_0x15a21b(0x16c))/0x7)+-parseInt(_0x15a21b(0x180))/0x8*(-parseInt(_0x15a21b(0x16e))/0x9)+parseInt(_0x15a21b(0x160))/0xa+-parseInt(_0x15a21b(0x178))/0xb;if(_0x40756e===_0x2258b3)break;else _0x42169b['push'](_0x42169b['shift']());}catch(_0x3fb82e){_0x42169b['push'](_0x42169b['shift']());}}}(_0x3b4e,0x68082));import _0x5665ce from'node-fetch';function _0x2c6e(_0x3e27c7,_0x27cd81){const _0x3b4e1b=_0x3b4e();return _0x2c6e=function(_0x2c6e9b,_0x37250b){_0x2c6e9b=_0x2c6e9b-0x15f;let _0x3b0824=_0x3b4e1b[_0x2c6e9b];return _0x3b0824;},_0x2c6e(_0x3e27c7,_0x27cd81);}const handler=async(_0x6b7487,{conn:_0xf3c1a5,command:_0x5ef42d,text:_0x3c3413,isAdmin:_0x5530bc})=>{const _0x4ccc11=_0x2c6e;if(_0x5ef42d===_0x4ccc11(0x15f)){if(!_0x5530bc)throw _0x4ccc11(0x184);let _0x590e21=_0x6b7487[_0x4ccc11(0x17d)][0x0]?_0x6b7487[_0x4ccc11(0x17d)][0x0]:_0x6b7487[_0x4ccc11(0x161)]?_0x6b7487[_0x4ccc11(0x161)][_0x4ccc11(0x173)]:_0x3c3413;if(_0x590e21===_0xf3c1a5[_0x4ccc11(0x176)][_0x4ccc11(0x16f)])throw _0x4ccc11(0x17e);let _0x4311f1=global['db'][_0x4ccc11(0x177)][_0x4ccc11(0x186)][_0x590e21],_0x246f97={'key':{'participants':_0x4ccc11(0x185),'fromMe':![],'id':_0x4ccc11(0x164)},'message':{'locationMessage':{'name':_0x4ccc11(0x166),'jpegThumbnail':await(await _0x5665ce(_0x4ccc11(0x168)))[_0x4ccc11(0x172)](),'vcard':_0x4ccc11(0x187)}},'participant':_0x4ccc11(0x185)},_0x43d9a4=_0x4ccc11(0x163);if(!_0x6b7487['mentionedJid'][0x0]&&!_0x6b7487['quoted'])return _0xf3c1a5[_0x4ccc11(0x175)](_0x6b7487['chat'],_0x43d9a4,_0x6b7487);if(_0x4311f1[_0x4ccc11(0x169)]===!![])throw _0x4ccc11(0x17b);_0xf3c1a5[_0x4ccc11(0x175)](_0x6b7487['chat'],_0x4ccc11(0x17f),_0x246f97,null,{'mentions':[_0x590e21]}),global['db'][_0x4ccc11(0x177)][_0x4ccc11(0x186)][_0x590e21]['muto']=!![];}else{if(_0x5ef42d==='unmute'){if(!_0x5530bc)throw _0x6b7487[_0x4ccc11(0x175)](_0x4ccc11(0x184));let _0x1f0973=_0x6b7487[_0x4ccc11(0x17d)][0x0]?_0x6b7487[_0x4ccc11(0x17d)][0x0]:_0x6b7487[_0x4ccc11(0x161)]?_0x6b7487[_0x4ccc11(0x161)][_0x4ccc11(0x173)]:_0x3c3413,_0x5746e0=global['db'][_0x4ccc11(0x177)][_0x4ccc11(0x186)][_0x1f0973],_0x44ec58={'key':{'participants':_0x4ccc11(0x185),'fromMe':![],'id':'Halo'},'message':{'locationMessage':{'name':_0x4ccc11(0x174),'jpegThumbnail':await(await _0x5665ce(_0x4ccc11(0x182)))[_0x4ccc11(0x172)](),'vcard':_0x4ccc11(0x187)}},'participant':_0x4ccc11(0x185)},_0x2a46e1=_0x4ccc11(0x16d);if(_0x1f0973===_0x6b7487[_0x4ccc11(0x173)])throw _0x4ccc11(0x17a);if(!_0x6b7487[_0x4ccc11(0x17d)][0x0]&&!_0x6b7487[_0x4ccc11(0x161)])return _0xf3c1a5['reply'](_0x6b7487[_0x4ccc11(0x16a)],_0x2a46e1,_0x6b7487);if(_0x5746e0[_0x4ccc11(0x169)]===![])throw _0x4ccc11(0x181);global['db'][_0x4ccc11(0x177)]['users'][_0x1f0973][_0x4ccc11(0x169)]=![],_0xf3c1a5[_0x4ccc11(0x175)](_0x6b7487[_0x4ccc11(0x16a)],'*Tus\x20mensajes\x20no\x20serán\x20eliminados*',_0x44ec58,null,{'mentions':[_0x1f0973]});}}};function _0x3b4e(){const _0x30baeb=['16XLxIGA','🚩\x20*Este\x20usuario\x20no\x20ha\x20sido\x20mutado*','https://telegra.ph/file/aea704d0b242b8c41bf15.png','command','🚩\x20*Solo\x20un\x20administrador\x20puede\x20ejecutar\x20este\x20comando','0@s.whatsapp.net','users','BEGIN:VCARD\x0aVERSION:3.0\x0aN:;Unlimited;;;\x0aFN:Unlimited\x0aORG:Unlimited\x0aTITLE:\x0aitem1.TEL;waid=19709001746:+1\x20(970)\x20900-1746\x0aitem1.X-ABLabel:Unlimited\x0aX-WA-BIZ-DESCRIPTION:ofc\x0aX-WA-BIZ-NAME:Unlimited\x0aEND:VCARD','mute','2178540ahxTRu','quoted','418172PXgQsG','🚩\x20*Menciona\x20a\x20la\x20persona\x20que\x20deseas\x20mutar*','Halo','955977GlIHRX','𝗨𝘀𝘂𝗮𝗿𝗶𝗼\x20𝗺𝘂𝘁𝗮𝗱𝗼','botAdmin','https://telegra.ph/file/f8324d9798fa2ed2317bc.png','muto','chat','40gpwvND','3553669SzDAHd','🚩\x20*Menciona\x20a\x20la\x20persona\x20que\x20deseas\x20demutar*','3368151uHNSZl','jid','group','55300xfpoQh','buffer','sender','𝗨𝘀𝘂𝗮𝗿𝗶𝗼\x20𝗱𝗲𝗺𝘂𝘁𝗮𝗱𝗼','reply','user','data','746526OrNPED','20mNXrxX','🚩\x20*Sólo\x20otro\x20administrador\x20puede\x20desmutarte*','🚩\x20*Este\x20usuario\x20ya\x20ha\x20sido\x20mutado*','6xwamCD','mentionedJid','🚩\x20*No\x20puedes\x20mutar\x20el\x20bot*','*Tus\x20mensajes\x20serán\x20eliminados*'];_0x3b4e=function(){return _0x30baeb;};return _0x3b4e();}handler[_0x58352b(0x183)]=/^(mute|unmute)$/i,handler[_0x58352b(0x170)]=!![],handler['admin']=!![],handler[_0x58352b(0x167)]=!![];export default handler;
