const handler = async (m, {usedPrefix}) => {
  try {
    delete global.chatgpt.data.users[m.sender];
    m.reply(`*📍 Exito..*`);
  } catch (error1) {
    console.log(error1);
    throw `*📍 Ocurrió Un Error*`;
  }
};
handler.command = ['delchatgpt'];
export default handler;
