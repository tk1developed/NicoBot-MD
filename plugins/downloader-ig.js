import fetch from 'node-fetch';

const handler = async (m, { conn, args }) => {
    
    if (!args[0]) {
        throw `Por favor, ingresa un enlace de Instagram para descargar el archivo.`;
    }

    try {
        const apiUrl = `https://aemt.me/download/igdl?url=${encodeURIComponent(args[0])}`;
        const response = await fetch(apiUrl);
        const responseData = await response.json();

        m.react(rwait);

        if (responseData.status && responseData.result.length > 0) {
            for (const media of responseData.result) {
                m.react(done);
                await conn.sendFile(m.chat, media.url, media.url.includes('.mp4') ? 'video.mp4' : 'imagen.jpg', '', m);
            }
        } else {
            throw `error

No se pudo obtener el contenido de Instagram.`;
        }
    } catch (error) {
        console.error(error);
        throw `error

Ocurrió un error al procesar la solicitud: ${error.message}`;
    }
};

handler.help = ['instagram'];
handler.tags = ['dl'];
handler.command = /^(instagramdl|instagram|igdl|ig)$/i;

handler.register = true;
export default handler;