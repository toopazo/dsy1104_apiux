# dsy1104_apiux
Demo de una app web basada en html, css y javascript. La idea es servir de ejemplo de como enlazar elementos Frontend con peticiones ([fetch en JS](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)) hechas a un Backend (microservicios API).

## Descarga y ejecución
El código se puede descargar directamente desde este repo
```bash
git clone https://github.com/toopazo/dsy1104_apiux.git
cd dsy1104_apiux
```
La página web se puede visualizar levatando un servidor.
```bash
 jwebserver -d $(pwd) -p 8083
```
El código de javascript se ejecuta en el cliente y puede verse en el navegador con la url
```bash
http://127.0.0.1:8083/
```
<img src="docs/Screenshot from 2025-07-18 15-14-28.png" alt="drawing" width="800"/>

## Hola mundo en JavaScript  

En un archivo ```hello_world.js``` agregar el contenido
```js
console.log("Hello, World!");
```
Ejecutar con
```bash
node hello_world.js
```
