import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) throw 'Por favor, proporciona el nombre de un Pokémon para buscar.';

    const url = `https://some-random-api.com/pokemon/pokedex?pokemon=${encodeURIComponent(text)}`;

    const response = await fetch(url);
    const json = await response.json();

    if (!response.ok) {
        throw `*No se encontro el pokemon por favor intente mas tarde*`;
    }

    const message = `
*Pokedex - Información de ${json.name}*

_*🥀 Name:*_ 
${json.name}

_*⚘️ ID:*_ 
${json.id}

_*🌿 Tipo:*_ 
${json.type}

_*⚡️ Habilidades:*_ 
${json.abilities}

_*🚩 Tamaño:*_ 
${json.height}

_*🚀 Peso:*_ 
${json.weight}

🪄 _Descripción:_
${json.description}

👏🏻 *Encuentra Mas Informacion De Este Pokemón Usando !pokedex* ⚘️

⏰️ [Pokedex](https://www.pokemon.com/es/pokedex/${json.name.toLowerCase()})
    `;

    conn.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m });
};

handler.help = ['pokedex <pokemon>'];
handler.tags = ['anime', 'pokemon'];
handler.command = /^pokedex/i;

export default handler;