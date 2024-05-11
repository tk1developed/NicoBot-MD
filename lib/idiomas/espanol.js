const lenguaje = () => { return 'es' } //Español, idioma predeterminado de yotsuba

//jadibots
const smsIniJadi = () => { return `𝗦𝗲𝗿 𝗝𝗮𝗱𝗶𝗯𝗼𝘁 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 💫\n\n🚀 *Escanea Este Codigo QR Para Convertirte En Un Sub Bot Temporal.*\n\n🎌 *Pasos Para Escanear:*\n\n1. Diríjase a los tres puntos ubicado en la esquina superior derecha.\n\n2. Ir a la opción dispositivos vinculados.\n\n3. Da Click En Vincular Dispositivo & escanea este codigo qr.\n\n📢 *Aviso:* Este Código QR Expira En 45 Segundos.\n\n𝗕𝘆: 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 - 𝗠𝗗 🍄`}

const smsIniJadi2 = () => { return `𝗦𝗲𝗿 𝗝𝗮𝗱𝗶𝗯𝗼𝘁 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 💫\n\n🚀 *Utilice Este Codigo Para Convertirte En Un Sub Bot Temporal.*\n\n🎌 *Pasos Para Vincular:*\n\n1. Diríjase a los tres punto en la esquina superior derecha.\n\n2. Ir a la opción dispositivos vinculados.\n\n3. Da click en vincular con codigo de telefono & pega el código a continuación.\n\n𝗕𝘆: 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 - 𝗠𝗗 🍄`}

//main.js
const smsWelcome = () => { return `*• Holaa :D Bienvenido/a al grupo!!*\n*━━━━━━━━━━━━━━━━*\n\n🎋 *• Nombre:* @user\n🔮 *• Bio:* @bio\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n\n- *recuerda leer las reglas del grupo* -`}
const smsBye = () => { return `*👋 Hasta pronto, no te extrañaremos XD!!*\n*━━━━━━━━━━━━━━━━*\n\n🎋 *• Nombre:* @user\n🔮 *• Bio:* @bio\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n\n- *Salúdame a Maradona bro* -`}

const smsPromote = () => { return `*⎡ •🔮 Nuevo Admin detectado 🔮• ⎦*\n*━━━━━━━━━━━━━━━━*\n🏷 *• Nombre:* @user\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n*━━━━━━━━━━━━━━━━*`}

const smsDemote = () => { return `*⎡ •🔮 Waoz Un Admin Meno 🔮• ⎦*\n*━━━━━━━━━━━━━━━━*\n🏷 *• Nombre:* @user\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n*━━━━━━━━━━━━━━━━*`}

const smsDesc = () => { return `❏ 🍂 *Se ha modificado la descripción del grupo.*\n\nNueva Descripción: @desc`}

const smsSubject = () => { return `❏ 🍂 *Se ha modificado el nombre del grupo.*\nNuevo Nombre: @subject`}

const smsIcon = () => { return `❏ 🍂 *Se ha cambiado la foto del grupo.*`}

const smsRevoke = () => { return `❏ 🍂 *Se ha actualizado el link del grupo.*\nLink Nuevo: @revoke`}

const smsJoin1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*INGRESE EL ENLACE DE UN GRUPO*\n*EJEMPLO:*\n*${usedPrefix + command}* ${gp2}`}

const smsJoin2 = () => { return lenguajeGB['smsAvisoEG']() + `${packname}\n*SE HA UNIDO AL GRUPO ✅*`}

const smsJoin = (user) => { return `${packname}\n_😻 SE HA UNIDO AL GRUPO_\n\n🫶 *FUE AGREGADA POR: @${user}*`}

const smsAvisoEG = () => { return `*INFORMACIÓN*`}

const smsAvisoMG = () => { return `*INFORMACIÓN*`}

export default { lenguaje, smsIniJadi, smsIniJadi2, smsWelcome, smsBye, smsPromote, smsDemote, smsDesc, smsSubject, smsIcon, smsRevoke, smsJoin1, smsJoin2, smsJoin, smsAvisoEG, smsAvisoMG}