let handler = async (m, { conn, text }) => {

let _idioma = '🚩 *Seleccione su idioma*\n\n> Idiomas disponibles:\nes _(Español)_\nen _(Inglés)_\nid _(Indonesio)_\nar _(Árabe)_\npt _(Portugués)_\n\n`Ejemplo:`\n.idioma es'
if (!text) {
let listSections = []    
listSections.push({
title: '',
rows: [{ header: "", title: "Español 🇪🇦", id: `.idioma es`, description: `` },
{ header: "", title: "English 🇺🇸", id: `.idioma en`, description: `` },
{ header: "", title: "Bahasa Indonesia 🇮🇩", id: `.idioma id`, description: `` },
{ header: "", title: "عرب 🇸🇦", id: `.idioma ar`, description: `` },
{ header: "", title: "Português 🇵🇹", id: `.idioma pt`, description: `` }
]})
return conn.sendList(m.chat, _idioma, null, `🌐 Idiomas`, listSections, { mentions: [m.sender]}, {quoted: m})
//return conn.sendButton(m.chat, _idioma, '🍟 Seleccione su idioma', null, [['Español 🇲🇽', `.idioma es`], ['Inglés 🇺🇸', `.idioma en`], ['Indonesio 🇮🇩', `.idioma id`]], null, null, m)
}
let choice = text.includes('es') ? 'es' : text.includes('en') ? 'en' : null
if (!choice) {
return m.reply('Por favor, seleccione uno de los idiomas disponibles: español, inglés, indonesio, árabe o portugués')
}
global.lenguajeYL = choice
switch (choice) {
case 'es':
return m.reply('Idioma configurado a Español 🇲🇽')
case 'en':
return m.reply('Language set to English 🇺🇲')
return m.reply('Idioma configurado para Português 🇵🇹')
}
}
handler.command = /^lenguage|lenguaje|idioma$/i
handler.rowner = true
export default handler