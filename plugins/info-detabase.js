var handler = async (m) => {

let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

conn.reply(m.chat, `${saludo}

*✨️ Segun Las Historia De La Detabase, Tengo ${rtotalreg} Usuarios Registrado*

*🪁 ${totalreg} No Estan En La Base De Datos*`, fkontak, m)

}
handler.help = ['database', 'user']
handler.tags = ['info']
handler.command = /^(database|jumlahdatabase|user)$/i

export default handler