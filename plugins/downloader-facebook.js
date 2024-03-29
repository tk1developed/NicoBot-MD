import fetch from 'node-fetch';

const handler = async (m, { conn, args }) => {
    if (!args[0]) throw `⚠️ _Ingrese Un Enlace De Facebook_\n\n*Ejemplo:*\n*!fb* https://fb.watch/fOTpgn6UFQ/`;

    try {
        const apiUrl = `https://api.lolhuman.xyz/api/facebook?apikey=Gatadios&url=${encodeURIComponent(args[0])}`;
        const response = await fetch(apiUrl);

        if (response.ok) {
            m.reply('*⏳️ Descargando El Video, Por Favor Espere...*');

            const data = await response.json();
            const videoUrl = data.result[0];

            const fileName = "fb.mp4";

            const videoResponse = await fetch(videoUrl);
            const fileBuffer = await videoResponse.buffer();

            conn.sendFile(m.chat, fileBuffer, fileName, "", m);

            m.reply('*🔮 Video De Facebook Descargado Correctamente.*');
        } else {
            throw `error

No se pudo obtener el contenido de Facebook.`;
        }
    } catch (error) {
        console.error(error);
        throw `error

Ocurrió un error al descargar el video de Facebook: ${error.message}`;
    }
};

handler.help = ['fb'];
handler.tags = ['dl'];
handler.command = ['fb', 'face'];

handler.register = true;
export default handler;