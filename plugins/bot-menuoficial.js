let listSections = []    
listSections.push({
title: '',
rows: [{ header: "Menu Completo", title: "", id: `.allmenu`, description: `Para ver todos los comandos\n` }, { header: "Estado", title: "", id: `.estado`, description: `Para ver el status del Bot\n` },
{ header: "Velocidad", title: "", id: `.ping`, description: `Ver velocidad del bot\n` },
{ header: "Play", title: "", id: `.play`, description: `Nose\n` },
{ header: "Nose", title: "", id: `a`, description: `Nose` }
]})
await conn.sendList(m.chat, 'Hola', null, `Menu`, listSections, { mentions: [m.sender]}, {quoted: m})
handler.command = /^menu|menú$/i
handler.exp = 80
export default handler