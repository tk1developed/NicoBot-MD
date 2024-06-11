import os from 'os';
import { execSync } from 'child_process';

const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const getDiskSpace = () => {
    try {
        const stdout = execSync('df -h | grep -E "^/dev/root|^/dev/sda1"').toString();
        const [ , size, used, available, usePercent ] = stdout.split(/\s+/);
        return { size, used, available, usePercent };
    } catch (error) {
        console.error('✧ Error al obtener el espacio en disco:', error);
        return null;
    }
};

const handler = async (m, { conn }) => {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const uptime = os.uptime();
    const hostname = os.hostname();
    const platform = os.platform();
    const arch = os.arch();
    const nodeUsage = process.memoryUsage();
    const diskSpace = getDiskSpace();

    const formatUptime = (seconds) => {
        const d = Math.floor(seconds / (3600*24));
        const h = Math.floor(seconds % (3600*24) / 3600);
        const m = Math.floor(seconds % 3600 / 60);
        const s = Math.floor(seconds % 60);

        return `${d}d ${h}h ${m}m ${s}s`;
    };

    const message = `✅️ *ESTADO DEL SISTEMA*

💭 *Host ⪼* ${hostname}
🏆 *Plataforma ⪼* ${platform}
💫 *Arquitectura ⪼* ${arch}
🥷 *RAM Total ⪼* ${formatBytes(totalMem)}
🚀 *RAM Libre ⪼* ${formatBytes(freeMem)}
⌛️ *RAM Usada ⪼* ${formatBytes(usedMem)}
🕒 *Tiempo Activo ⪼* ${formatUptime(uptime)}

🪴 *Uso de Memoria Nodejs:* 
→ RSS: ${formatBytes(nodeUsage.rss)}
→ Heap Total: ${formatBytes(nodeUsage.heapTotal)}
→ Heap Usado: ${formatBytes(nodeUsage.heapUsed)}
→ Externa: ${formatBytes(nodeUsage.external)}
→ Arreglos: ${formatBytes(nodeUsage.arrayBuffers)}
${diskSpace ? `

☁️ *Espacio en Disco:*
→ Tamaño Total: ${diskSpace.size}
→ Usado: ${diskSpace.used}
→ Disponible: ${diskSpace.available}
→ Porcentaje de Uso: ${diskSpace.usePercent}` : 'Error.'}
`;

    await conn.reply(m.chat, message.trim(), m, fake, );
};

handler.help = ['sistema'];
handler.tags = ['info'];
handler.command = ['system', 'sistema'];
handler.registrado = true;

export default handler;