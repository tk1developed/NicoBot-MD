const lenguaje = () => { return 'es' } //Español, idioma predeterminado de yotsuba

const smsIniJadi = () => { return `𝗦𝗲𝗿 𝗝𝗮𝗱𝗶𝗯𝗼𝘁 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 💫\n\n🚀 *Escanea Este Codigo QR Para Convertirte En Un Sub Bot Temporal.*\n\n🎌 *Pasos Para Escanear:*\n\n1. Diríjase a los tres puntos ubicado en la esquina superior derecha.\n\n2. Ir a la opción dispositivos vinculados.\n\n3. Da Click En Vincular Dispositivo & escanea este codigo qr.\n\n📢 *Aviso:* Este Código QR Expira En 45 Segundos.\n\n𝗕𝘆: 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 - 𝗠𝗗 🍄`}

const smsIniJadi2 = () => { return `𝗦𝗲𝗿 𝗝𝗮𝗱𝗶𝗯𝗼𝘁 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 💫\n\n🚀 *Utilice Este Codigo Para Convertirte En Un Sub Bot Temporal.*\n\n🎌 *Pasos Para Vincular:*\n\n1. Diríjase a los tres punto en la esquina superior derecha.\n\n2. Ir a la opción dispositivos vinculados.\n\n3. Da click en vincular con codigo de telefono & pega el código a continuación.\n\n𝗕𝘆: 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 - 𝗡𝗮𝗸𝗮𝗻𝗼 - 𝗠𝗗 🍄`}

const smsWelcome = () => { return `*• Holaa :D Bienvenido/a al grupo!!*\n*━━━━━━━━━━━━━━━━*\n\n🎋 *• Nombre:* @user\n🔮 *• Bio:* ${biot}\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n\n- *recuerda leer las reglas del grupo* -`}
const smsBye = () => { return `*👋 Hasta pronto, no te extrañaremos XD!!*\n*━━━━━━━━━━━━━━━━*\n\n🎋 *• Nombre:* @user\n🔮 *• Bio:* ${biot}\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n\n- *Salúdame a Maradona bro* -`}

export default { lenguaje, smsIniJadi, smsIniJadi2, smsWelcome, smsBye}

  let bio = await conn.fetchStatus(who).catch((_) => "undefined");
  let biot = bio.status?.toString() || "Sin Bio";