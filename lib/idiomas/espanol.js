const lenguaje = () => { return 'es' } //Español, idioma predeterminado de yotsuba

//AVISOS DE MENSAJE  
const smsAvisoRG = () => { return `╰⊱🎌⊱ 𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 ⊱🎌⊱╮\n\n` } 
const smsAvisoAG = () => { return `╰⊱⚠️⊱ 𝗔𝗱𝘃𝗲𝗿𝘁𝗲𝗻𝗰𝗶𝗮 ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱🔥⊱ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻 ⊱🔥⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱🍃⊱ 𝗘𝗿𝗿𝗼𝗿 ⊱🍃⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱🍂⊱ 𝗔𝗰𝗰𝗶𝗼𝗻 𝗠𝗮𝗹 𝗨𝘀𝗮𝗱𝗮 ⊱🍂⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ 𝗥𝗲𝗽𝗼𝗿𝘁𝗲 ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱🌺⊱ 𝗥𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗼 ⊱🌺⊱╮\n\n` }

//jadibots
const smsIniJadi = () => { return `𝗦𝗲𝗿 𝗝𝗮𝗱𝗶𝗯𝗼𝘁 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 💫\n\n🚀 *Escanea Este Codigo QR Para Convertirte En Un Sub Bot Temporal.*\n\n🎌 *Pasos Para Escanear:*\n\n1. Diríjase a los tres puntos ubicado en la esquina superior derecha.\n\n2. Ir a la opción dispositivos vinculados.\n\n3. Da Click En Vincular Dispositivo & escanea este codigo qr.\n\n📢 *Aviso:* Este Código QR Expira En 45 Segundos.\n\n𝗕𝘆: 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 - 𝗠𝗗 🍄`}

const smsIniJadi2 = () => { return `𝗦𝗲𝗿 𝗝𝗮𝗱𝗶𝗯𝗼𝘁 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 💫\n\n🚀 *Utilice Este Codigo Para Convertirte En Un Sub Bot Temporal.*\n\n🎌 *Pasos Para Vincular:*\n\n1. Diríjase a los tres punto en la esquina superior derecha.\n\n2. Ir a la opción dispositivos vinculados.\n\n3. Da click en vincular con codigo de telefono & pega el código a continuación.\n\n𝗕𝘆: 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 - 𝗠𝗗 🍄`}

//main.js
const smsWelcome = () => { return `⪨────[ ＷＥＬＣＯＭＥ ]────⪩\n\n👋🏻 Hola @user ${saludo}\n\n🍃 *Bienvenido a:*\n- @subject\n\n📅 *Fecha*\n- ${botdate}\n\n🔮 *Biografia*\n- @bio\n\n🕝 *Hora*\n- ${bottime}\n\n- 🍃 *Lea la descripción del grupo*`}
const smsBye = () => { return `⪨────[ A D I O S ]────⪩\n\n*👋 Hasta pronto, no te extrañaremos XD!!*
- @user\n\n📅 *Fecha*\n- ${botdate}\n\n🕝 *Hora*\n- ${bottime}\n\n- 🪷 *Saludame a maradona bro*`}

const smsSpromote = () => { return `*⎡ •🔮 Nuevo Admin detectado 🔮• ⎦*\n*━━━━━━━━━━━━━━━━*\n🏷 *• Nombre:* @user\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n*━━━━━━━━━━━━━━━━*`}

const smsSdemote = () => { return `*⎡ •🔮 Waoz Un Admin Meno 🔮• ⎦*\n*━━━━━━━━━━━━━━━━*\n🏷 *• Nombre:* @user\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n*━━━━━━━━━━━━━━━━*`}

const smsSdesc = () => { return `❏ 🍂 *Se ha modificado la descripción del grupo.*\n\nNueva Descripción: @desc`}

const smsSsubject = () => { return `❏ 🍂 *Se ha modificado el nombre del grupo.*\nNuevo Nombre: @subject`}

const smsSicon = () => { return `❏ 🍂 *Se ha cambiado la foto del grupo.*`}

const smsSrevoke = () => { return `❏ 🍂 *Se ha actualizado el link del grupo.*\nLink Nuevo: @revoke`}

const smsJoin1 = (usedPrefix, command) => { return lenguajeYL['smsAvisoMG']() + `🍂 *Iɴɢʀᴇsᴇ Uɴ Lɪɴᴋ*\n- *Eᴊᴇᴍᴘʟᴏ:*\n*${usedPrefix + command}* ${gp2}`}

const smsJoin2 = () => { return lenguajeYL['smsAvisoEG']() + `${packname}\n- *Yᴀ Sᴇ Hᴀ Uɴɪᴅᴏ Aʟ Gʀᴜᴘᴏ 🍃*`}

const smsJoin = (user) => { return `${packname}\n_🌺 Sᴇ Hᴀ Uɴɪᴅᴏ Aʟ Gʀᴜᴘᴏ_\n\n- 🍃 *Fᴜᴇ Aɢʀᴇɢᴀᴅᴀ Pᴏʀ: @${user}*`}

export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG,  smsIniJadi, smsIniJadi2, smsConexionReco, smsJBConexion, smsJBConexionClose, smsJBConexionClose2, smsJBConexionTrue, smsJBConexionTrue2, smsJBCargando, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsJoin1, smsJoin2, smsJoin}