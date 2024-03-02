import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const img = await (await fetch(pp)).buffer();
  const chat = global.db.data.chats[m.chat];
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, m.messageStubParameters[0]];
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  if (chat.detect2 && m.messageStubType == 29) {
    let txt1 = `_Recientemente Se Ha Promovido Un Nuevo Administrador._\n\n`;
    txt1 += `*Grupo:* ${groupName}\n`;
    txt1 += `*Nuevo Admin:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt1 += `*Le Dió Admin:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 30) {
    let txt2 = `_Recientemente Se Ha Desgradado Ha Un Administrador._\n\n`;
    txt2 += `*Grupo:* ${groupName}\n`;
    txt2 += `*Se Quito A:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt2 += `*Ejecutado Por:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 27) {
    let txt3 = `_Recientemente Se Ha Incorporado Al Grupo Un Nuevo Miembro._\n\n`;
    txt3 += `*Grupo:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt3 += `*Se Añadio A:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt3 += `*Ejecutado Por:* @${m.sender.split`@`[0]}`;
    } else {
      txt3 += `*Se Añadio A:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt3, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt4 = `_Recientemente Se Ha Eliminado A Un Miembro Del Grupo._\n\n`;
    txt4 += `*Grupo:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt4 += `*Participante Eliminado:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt4 += `*Ejecutado Por:* @${m.sender.split`@`[0]}`;
    } else {
      txt4 += `*Se Eliminó A:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt4, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = 'Salido';
    } else {
      ax = 'Eliminado';
    }
    let txt5 = `_Recientemente Se Ha ${ax} Un  Miembro Del Grupo._\n\n`;
    txt5 += `*Grupo:* ${groupName}\n`;
    if (ax === 'Eliminado') {
      txt5 += `*Se Eliminó A:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt5 += `*Ejecutado Por:* @${m.sender.split`@`[0]}`;
    } else {
      txt5 += `*Se Salio:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt5, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 26) {
    let accion;
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = 'Cerrado';
    } else {
      accion = 'Abierto';
    }
    let txt6 = `_Se Ha Realizado Una Nueva Configuracion Al Grupo._\n\n`;
    txt6 += `*Grupo:* ${groupName}\n`;
    txt6 += `*El Grupo Se A:* ${'```' + accion + '```'}\n`;
    txt6 += `*Ejecutado Por:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt6, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 21) {
    let txt7 = `_Se Ha Cambiado El Nombre Del Grupo._\n\n`;
    txt7 += `*Nuevo Nombre:* ${'```' + groupName + '```'}\n`;
    txt7 += `*Realizado Por:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt7, mentions: mentionsContentM}, {quoted: fkontak2});
  }
}
