//codigo de curiositybot

var activeGroups = [];

var handler = async (m, { conn, isOwner }) => {
    if (!isOwner) return; // Solo el owner puede ejecutar esta acción

    try {
        const groupId = m.chat;
        if (activeGroups.includes(groupId)) {
            const index = activeGroups.indexOf(groupId);
            activeGroups.splice(index, 1); // Elimina el grupo de la lista de grupos activos
            await conn.reply(m.chat, '⚡️ *Este grupo ya me puede usar* ', m);
        } else {
            activeGroups.push(groupId); // Agrega el grupo a la lista de grupos activos
            await conn.reply(m.chat, '👏🏻 *Este grupo a sido bloqueado por el cual estaré inactivo!*', m);
        }
    } catch (e) {
        console.error(e);
        await conn.reply(m.chat, '⚡️ Error!', m);
    }
}

handler.help = ['bloqueargrupo'];
handler.tags = ['owner'];
handler.command = /^bloqueargrupo$/i;

handler.rowner = true;
handler.group = true;
handler.botAdmin = true;

export default handler;