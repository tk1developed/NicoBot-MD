
> <b>  🚀 SakuraBot (Desarrollo) </b>

> <b> ✨️Hola, Soy SakuraBot Como Estas?❤️

<img src="https://telegra.ph/file/962f544291ef3fb46752e.jpg" alt="GataBot-MD" width="900"/>
</p>
<p align="center">
<a href="#"><img title="SakuraBot-MD" src="https://img.shields.io/badge/SI TE AGRADA EL REPOSITORIO APOYAME CON UNA 🌟 ¡GRACIAS! -red?colorA=%255ff0000&colorB=%23017e40&style=for-the-badge"></a> 
<a href="#"><img title="SakuraBot-MD" src="https://img.shields.io/badge/COMPATIBLE CON LA VERSIÓN MULTI DISPOSITIVOS DE WHATSAPP-red?colorA=%F77F48FF&colorB=%F77F48FF&style=for-the-badge">
<div align="center">
<a href="https://www.facebook.com/diegoadsarmiento?mibextid=9R9pXO/">
<img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook">
</a>
<a href="https://www.youtube.com/@diegobot02">
<img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube">
</a>
<a href="https://www.tiktok.com/@diegobot09_?_t=8ge2zeRZ04r&_r=1" target="_blank"> <img src="https://img.shields.io/badge/-TikTok-%23E4405F?style=for-the-badge&logo=tiktok&logoColor=black" target="_blank"></a> <img src="https://github.com/siegrin/siegrin/blob/main/Assets/Handshake.gif" height="30px">
</a>

### `👑 DUDAS SOBRE EL BOT?, CONTACTAME 👑`
<p align="center">
<a href="https://github.com/diegojadibot"><img src="http://readme-typing-svg.herokuapp.com?font=mono&size=14&duration=3000&color=ABF7BB&center=verdadero&vCenter=verdadero&lines=Solo+escr%C3%ADba+si+tiene+dudas." height="40px"
</p>

<a href="wa.me/573013114854" target="blank"><img src="https://img.shields.io/badge/Creador-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" /></a>

------------------ 

### `🟢 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙽 𝚁𝙴𝙿𝙻𝙸𝚃`

[![blog](https://img.shields.io/badge/Replit-Tutorial-FF0000?style=for-the-badge&logo=youtube&logoColor=white)
](https://youtu.be/SMjCcfuyWQE)

[![Run on Repl.it](https://repl.it/badge/github/diegojadibot/SakuraBot-MD)](https://repl.it/github/diegojadibot/SakuraBot-MD) 

------------------ 

## 𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝚃𝙴𝚁𝙼𝚄𝚇
👇 Pasos para instalar el bot via termux 👇

[![blog](https://img.shields.io/badge/Video-Tutorial-FF0000?style=for-the-badge&logo=youtube&logoColor=white)
](https://youtu.be/OhbJjp0L2QA?si=LUTw6tIkQmP7XOhp)

[`💫 Instalar termux clic aqui`](https://www.mediafire.com/file/3hsvi3xkpq3a64o/termux_118.apk/file)

```bash
termux-setup-storage
```
```bash
apt update && apt upgrade && pkg update && pkg upgrade && pkg install bash && pkg install libwebp && pkg install git -y && pkg install nodejs -y && pkg install ffmpeg -y && pkg install wget && pkg install imagemagick -y && pkg install yarn
```
```bash
git clone https://github.com/diegojadibot/SakuraBot-MD
```
```bash
cd SakuraBot-MD
```
```bash
yarn isntall
```
```bash
npm start
```

### `🟢 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙽 𝙲𝙰𝚂𝙾 𝙳𝙴 𝙳𝙴𝚃𝙴𝙽𝙴𝚁𝚂𝙴 𝙴𝙽 𝚃𝙴𝚁𝙼𝚄𝚇`
Si despues que ya instalastes tu bot y termux te salta en blanco, se fue tu internet o reiniciaste tu celular, solo realizaras estos pasos
```bash
> cd SakuraBot-MD
> npm start
```
### `🟢 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙾𝚃𝚁𝙾 𝙲𝙾𝙳𝙸𝙶𝙾 𝚀𝚁 𝙴𝙽 𝚃𝙴𝚁𝙼𝚄𝚇`
Detener el bot apretado CTRL y aplastas Z en tu teclado, darle enter y escribe:
```bash
> cd 
> cd SakuraBot-MD
> rm -rf SakuraBotSession
> npm start
```
----
### 🚀 USAR SAKURABOY 24/7 EN TERMUX 
> Ejecutar estos comandos dentro de la carpeta SakuraBot-MD
```bash
termux-wake-lock && npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs 
``` 
#### ⬇️ Opciones Disponibles
> **Warning** Esto eliminará todo el historial que hayas establecido con PM2:
```bash 
pm2 delete index
``` 
> Si tienes cerrado Termux y quiere ver de nuevo la ejecución use:
```bash 
pm2 logs 
``` 
> Si desea detener la ejecución de Termux use:
```bash 
pm2 stop index
``` 
> Si desea iniciar de nuevo la ejecución de Termux use:
```bash 
pm2 start index
``` 
----
### 🥷🏻 ACTUALIZAR SAKURABOT
> **Note** Comandos para actualizar SakuraBot-MD de forma automática
```bash
grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget && wget -O - https://raw.githubusercontent.com/diegojadibot/SakuraBot-MD/master/update.sh | bash 
```
#### Para que no pierda su progreso en SakuraBot, estos comandos realizarán un respaldo de su `database.json` y se agregará a la versión más reciente.
> **Warning** Estos comandos solo funcionan para TERMUX, REPLIT, LINUX                           

## `𝙴𝙳𝙸𝚃𝙾𝚁 𝚈 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃`

<a href="https://github.com/diegojadibot"><img src="https://github.com/diegojadibot.png" width="250" height="250" alt="diegojadibot"/></a>
