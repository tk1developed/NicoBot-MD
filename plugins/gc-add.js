const {generateWAMessageFromContent, prepareWAMessageMedia, proto} = (await import('@whiskeysockets/baileys')).default;
import fetch from 'node-fetch';
const {getBinaryNodeChild, getBinaryNodeChildren} = (await import('@whiskeysockets/baileys')).default;
const handler = async (m, {conn, text, participants, args}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '*¡Este Comando Esta Desabilitado Por El Propietario Del Bot!*';
  if (!args[0]) throw '🛑 *Ingrese el numero de alguna persona que quieras añadir*';
  try {
    const _participants = participants.map((user) => user.id);
    const users = (await Promise.all(
        text.split(',')
            .map((v) => v.replace(/[^0-9]/g, ''))
            .filter((v) => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
            .map(async (v) => [v, await conn.onWhatsApp(v + '@s.whatsapp.net')]))).filter((v) => v[1][0]?.exists).map((v) => v[0] + '@c.us');
    const response = await conn.query({tag: 'iq', attrs: {type: 'set', xmlns: 'w:g2', to: m.chat}, content: users.map((jid) => ({tag: 'add', attrs: {}, content: [{tag: 'participant', attrs: {jid}}]}))});
    const pp = await conn.profilePictureUrl(m.chat).catch((_) => null);
    const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0);
    const add = getBinaryNodeChild(response, 'add');
    const participant = getBinaryNodeChildren(add, 'participant');
    for (const user of participant.filter((item) => item.attrs.error == 403)) {
      const jid = user.attrs.jid;
      const content = getBinaryNodeChild(user, 'add_request');
      const invite_code = content.attrs.code;
      const invite_code_exp = content.attrs.expiration;
      const teks = `*❗ 𝗡𝗼 𝗳𝘂𝗲 𝗽𝗼𝘀𝗶𝗯𝗹𝗲 𝗮𝗻̃𝗮𝗱𝗶𝗿 𝗮: @${jid.split('@')[0]}, 𝘀𝗲 𝗹𝗲 𝗲𝗻𝘃𝗶𝗮𝗿𝗮 𝘂𝗻𝗮 𝗶𝗻𝘃𝗶𝘁𝗮𝗰𝗶𝗼𝗻 𝗮𝗹 𝗴𝗿𝘂𝗽𝗼 😊💫`;
      m.reply(teks, null, {mentions: conn.parseMention(teks)});
      const captionn = `😊 𝗛𝗲𝘆 𝗔𝗺𝗶𝗴𝗼(𝗮) 𝗦𝗼𝘆 𝗟𝗮 𝗕𝗼𝘁 𝗬𝗼𝘀𝗵𝗶𝗸𝗼𝗕𝗼𝘁-𝗠𝗗 𝗨𝗻 𝗕𝗼𝘁 𝗗𝗶𝘀𝗲𝗻̃𝗮𝗱𝗼 𝗣𝗮𝗿𝗮 𝗔𝘆𝘂𝗱𝗮𝗿𝘁𝗲, 𝗨𝗻 𝗔𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗱𝗼𝗿 𝗛𝗮 𝗨𝘀𝗮𝗱𝗼 𝗘𝗹 𝗖𝗼𝗺𝗮𝗻𝗱𝗼 𝗣𝗮𝗿𝗮 𝗔𝗴𝗿𝗲𝗴𝗮𝗿𝘁𝗲 𝗛𝗮 𝗨𝗻 𝗚𝗿𝘂𝗽𝗼 𝗣𝗲𝗿𝗼 𝗡𝗼 𝗣𝘂𝗲𝗱𝗼 𝗔𝗻̃𝗮𝗱𝗶𝗿𝘁𝗲 𝗔𝘀𝗶 𝗤𝘂𝗲 𝗧𝗲 𝗘𝗻𝘃𝗶𝗼 𝗘𝗻 𝗘𝗻𝗹𝗮𝗰𝗲 𝗣𝗮𝗿𝗮 𝗤𝘂𝗲 𝗧𝗲 𝗨𝗻𝗮𝘀, 𝗧𝗲 𝗘𝘀𝗽𝗲𝗿𝗮𝗺𝗼𝘀 💫🌟`;
      const messaa = await prepareWAMessageMedia({image: jpegThumbnail}, {upload: conn.waUploadToServer});
      const groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({groupInviteMessage: {groupJid: m.chat, inviteCode: invite_code, inviteExpiration: invite_code_exp, groupName: await conn.getName(m.chat), caption: captionn, jpegThumbnail: jpegThumbnail}}), {userJid: jid});
      await conn.relayMessage(jid, groupInvite.message, {messageId: groupInvite.key.id});
    }
  } catch {
    throw '🛑 *Ocurrió un error*';
  }
};
handler.help = ['add', '+'].map((v) => v + ' número');
handler.tags = ['group'];
handler.command = /^(add|agregar|añadir|\+)$/i;
handler.admin = handler.group = handler.botAdmin = true;
export default handler;
