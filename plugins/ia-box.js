//By: Alba070503

import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw "Hola Amig@ como estas?\n- Soy una herramienta (Asistente) Ia Box, en que puedo ayudarte?";

  try {

    var apii = await fetch(`https://zoro-apis2-0a5bc82f5275.herokuapp.com/api/ai/blackbox?text=${text}&apikey=Zoro3mk`);
    var res = await apii.json();

    if (res.result && text.trim().length > 0) {
      await conn.sendFile(m.chat, 'https://telegra.ph/file/3f27de97707ddc69971ec.jpg', 'image.png', res.result, fkontak, { caption: text });
    } else if (res.result) {
      await conn.sendFile(m.chat, 'https://telegra.ph/file/3f27de97707ddc69971ec.jpg', res.result, fkontak);
    } else {
      throw '🍃 Ocurrió un error inesperado';
    }

  } catch (error) {
    console.error(error);
    throw '🚩 Esta api está caida, reglesa mas tarde';
  }
};

handler.command = ['bb', 'blackbox', 'iabox'];
handler.help = ['blackbox'];
handler.tags = ['herramientas'];
export default handler;