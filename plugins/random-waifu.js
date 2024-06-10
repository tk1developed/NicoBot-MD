import fs from 'fs';
import path from 'path';


const charactersPath = './anime/characters.json';
const loadDB = (path) => {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
};

let characters = loadDB(charactersPath);

const getRandomCharacter = () => {
    return characters[Math.floor(Math.random() * characters.length)];
};

const handler = async (m, { conn }) => {
    const character = getRandomCharacter();

    const message = `
Nombre: ${character.name}
Fuente: ${character.source}
Valor: ${character.value}
Estado: ${character.claimed ? 'Reclamado' : 'Libre'}
Último voto: ${new Date(character.vote).toLocaleString()}
    `;

    await conn.reply(m.chat, message, m, {
        contextInfo: { mentionedJid: [m.sender], quotedMessage: m.message },
    });

    m.characterId = character.id; // Guardar el ID del personaje en el contexto del mensaje
};

handler.help = ['test'];
handler.tags = ['anime'];
handler.command = ['test'];
handler.rowner = true;

export default handler;