const lenguaje = () => { return 'es' } //Español, idioma predeterminado de yotsuba

//jadibots
const smsIniJadi = () => { return `𝗦𝗲𝗿 𝗝𝗮𝗱𝗶𝗯𝗼𝘁 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 💫\n\n🚀 *Escanea Este Codigo QR Para Convertirte En Un Sub Bot Temporal.*\n\n🎌 *Pasos Para Escanear:*\n\n1. Diríjase a los tres puntos ubicado en la esquina superior derecha.\n\n2. Ir a la opción dispositivos vinculados.\n\n3. Da Click En Vincular Dispositivo & escanea este codigo qr.\n\n📢 *Aviso:* Este Código QR Expira En 45 Segundos.\n\n𝗕𝘆: 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 - 𝗠𝗗 🍄`}

const smsIniJadi2 = () => { return `𝗦𝗲𝗿 𝗝𝗮𝗱𝗶𝗯𝗼𝘁 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 💫\n\n🚀 *Utilice Este Codigo Para Convertirte En Un Sub Bot Temporal.*\n\n🎌 *Pasos Para Vincular:*\n\n1. Diríjase a los tres punto en la esquina superior derecha.\n\n2. Ir a la opción dispositivos vinculados.\n\n3. Da click en vincular con codigo de telefono & pega el código a continuación.\n\n𝗕𝘆: 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 - 𝗠𝗗 🍄`}

const smsreenvia = () => { return `*🟢 REENVIA EL COMANDO...*`}
const smsSoloOwnerJB = () => { return `${lenguajeYL['smsAvisoMG']()}*ESTE COMANDO ESTÁ DESACTIVADO POR MÍ PROPIETARIO(A)*`}
const smsJBPrincipal = () => { return `${lenguajeYL['smsAvisoMG']()}🔵 *PARA SER SUB BOT DIRÍJASE AL NÚMERO PRINCIPAL*\n*ღ Ingrese al siguiente enlace:*\n`}
const smsJBConexion = () => { return `${lenguajeYL['smsAvisoMG']()}🟡 *LA CONEXIÓN SE HA CERRADO DE MANERA INESPERADA, INTENTAREMOS RECONECTAR...*`}
const smsJBConexionClose = () => { return `${lenguajeYL['smsAvisoMG']()}🔴 *LA CONEXIÓN SE HA CERRADO, DEBERÁ DE CONECTARSE MANUALMENTE USANDO EL COMANDO #serbot Y REESCANEAR EL NUEVO CÓDIGO QR *QUE FUE ENVIADA LA PRIMERA VEZ QUE SE HIZO SUB BOT*`}
const smsJBConexionClose2 = () => { return `${lenguajeYL['smsAvisoMG']()}🔴 *TU DISPOSITIVO SE DESCONECTADO*\n\n*TENDRAS QUE VOLVER A CONECTARTE USAR:\n#deletesesion (Para borrar datos y poder volver a solita el QR o el code)`}
const smsJBConexionTrue = () => { return `${lenguajeYL['smsAvisoMG']()}🟢 *CONEXIÓN CON ÉXITO!!!*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *CONEXIÓN CON ÉXITO!!! PUEDE CONECTARSE USANDO:*`}

const smsJBCargando = (usedPrefix) => { return `${lenguajeYL['smsAvisoMG']()}⚪ *ESTÁ CONECTADO(A)!! POR FAVOR ESPERE SE ESTÁ CARGANDO LOS MENSAJES...*\n\n♻️ *OPCIONES DISPONIBLES:*\n*» ${usedPrefix}pausarsb _(Detener la función Sub Bot)_*\n*» ${usedPrefix}eliminarsesion _(Borrar todo rastro de Sub Bot)_*\n*» ${usedPrefix}serbot _(Nuevo código QR o Conectarse si ya es Sub Bot)_*`}

//main.js
const smsWelcome = () => { return `⪨────[ ＷＥＬＣＯＭＥ ]────⪩\n\n👋🏻 Hola @user ${saludo}\n\n🍃 *Bienvenido a:*\n- @subject\n\n📅 *Fecha*\n- ${botdate}\n\n🔮 *Biografia*\n- @bio\n\n🕝 *Hora*\n- ${bottime}\n\n- 🍃 *Lea la descripción del grupo*`}
const smsBye = () => { return `⪨────[ A D I O S ]────⪩\n\n*👋 Hasta pronto, no te extrañaremos XD!!*
- @user\n\n📅 *Fecha*\n- ${botdate}\n\n🕝 *Hora*\n- ${bottime}\n\n- 🪷 *Saludame a maradona bro*`}

const smsPromote = () => { return `*⎡ •🔮 Nuevo Admin detectado 🔮• ⎦*\n*━━━━━━━━━━━━━━━━*\n🏷 *• Nombre:* @user\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n*━━━━━━━━━━━━━━━━*`}

const smsDemote = () => { return `*⎡ •🔮 Waoz Un Admin Meno 🔮• ⎦*\n*━━━━━━━━━━━━━━━━*\n🏷 *• Nombre:* @user\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n*━━━━━━━━━━━━━━━━*`}

const smsDesc = () => { return `❏ 🍂 *Se ha modificado la descripción del grupo.*\n\nNueva Descripción: @desc`}

const smsSubject = () => { return `❏ 🍂 *Se ha modificado el nombre del grupo.*\nNuevo Nombre: @subject`}

const smsIcon = () => { return `❏ 🍂 *Se ha cambiado la foto del grupo.*`}

const smsRevoke = () => { return `❏ 🍂 *Se ha actualizado el link del grupo.*\nLink Nuevo: @revoke`}

const smsJoin1 = (usedPrefix, command) => { return lenguajeYL['smsAvisoMG']() + `🍂 *Iɴɢʀᴇsᴇ Uɴ Lɪɴᴋ*\n- *Eᴊᴇᴍᴘʟᴏ:*\n*${usedPrefix + command}* ${gp2}`}

const smsJoin2 = () => { return lenguajeYL['smsAvisoEG']() + `${packname}\n- *Yᴀ Sᴇ Hᴀ Uɴɪᴅᴏ Aʟ Gʀᴜᴘᴏ 🍃*`}

const smsJoin = (user) => { return `${packname}\n_🌺 Sᴇ Hᴀ Uɴɪᴅᴏ Aʟ Gʀᴜᴘᴏ_\n\n- 🍃 *Fᴜᴇ Aɢʀᴇɢᴀᴅᴀ Pᴏʀ: @${user}*`}

const smsAvisoEG = () => { return `╰⊱🌺⊱ 𝗥𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗼 ⊱🌺⊱╮\n\n` }

const smsAvisoMG = () => { return `╰⊱🍃⊱ 𝗘𝗿𝗿𝗼𝗿 ⊱🍃⊱╮\n\n` }

export default { lenguaje, smsIniJadi, smsIniJadi2, smsreenvia, smsSoloOwnerJB, smsJBPrincipal, smsJBConexion, smsJBConexionClose, smsJBConexionClose2, smsJBConexionTrue, smsJBCargando, smsWelcome, smsBye, smsPromote, smsDemote, smsDesc, smsSubject, smsIcon, smsRevoke, smsJoin1, smsJoin2, smsJoin, smsAvisoEG, smsAvisoMG}