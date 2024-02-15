const handler = async (m, { conn, text }) => {
    const numberPattern = /\d+/g;
    let user = '';
    const numberMatches = text.match(numberPattern);
    if (numberMatches) {
        const number = numberMatches.join('');
        user = number + '@s.whatsapp.net';
    } else if (m.quoted && m.quoted.sender) {
        const quotedNumberMatches = m.quoted.sender.match(numberPattern);
        if (quotedNumberMatches) {
            const number = quotedNumberMatches.join('');
            user = number + '@s.whatsapp.net';
        } else {
        return conn.sendMessage(m.chat, {text: `*⚠️ Formato de usuario no reconocido. Responda a un mensaje, etiquete a un usuario o escriba su número de usuario.*`}, {quoted: m});
    }
    } else {
        return conn.sendMessage(m.chat, {text: `*🌻 Formato de usuario no reconocido. Responda a un mensaje, etiquete a un usuario o escriba su número de usuario.*`}, {quoted: m});
    }        
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {};
        const participants = m.isGroup ? groupMetadata.participants : [];
        const users = m.isGroup ? participants.find(u => u.jid == user) : {};
        const userNumber = user.split('@')[0];
        if (!global.global.db.data.users[user] || global.global.db.data.users[user] == '') {
            return conn.sendMessage(m.chat, {text: `*🌹 El usuario @${userNumber} no se encuentra en mi base de datos.*`, mentions: [user]}, {quoted: m});
         }
        delete global.global.db.data.users[user];
        conn.sendMessage(m.chat, {text: `*🍁 𝑇𝑜𝑑𝑜𝑠 𝐿𝑜 𝐷𝑎𝑡𝑜𝑠 𝐷𝑒𝑙 𝑈𝑠𝑒𝑟: @${userNumber} 𝑌𝑎 𝑁𝑜 𝑆𝑒 𝐸𝑛𝑐𝑢𝑒𝑛𝑡𝑟𝑎 𝐸𝑛 𝑀𝑖 𝐵𝑎𝑠𝑒 𝐷𝑒 𝐷𝑎𝑡𝑜𝑠 🌱.*`, mentions: [user]}, {quoted: m});
};
handler.tags = ['owner'];
handler.command = /(restablecerdatos|deletedatauser|resetuser)$/i;
handler.rowner = true;
export default handler;
