// Ejercicio 3: Comportamiento del motor JavaScript asincrónico
// Escribe un código que simule la llegada de tres mensajes en tiempos distintos.
// Utiliza `setTimeout` para que los mensajes aparezcan en la consola después de 2, 4 y 6 segundos, respectivamente.
// Antes de iniciar, muestra en la consola "Iniciando proceso...".
// Una vez que todos los mensajes se hayan mostrado, imprime "Proceso completado" en la consola.
// Observa cómo se comporta JavaScript al ejecutar estas tareas de manera asincrónica.

let x = 0 
console.log(`Iniciando proceso...`);
const mensajes = setInterval(() => {
    ++x
    if ( x === 2){
        console.log(`El primer mensaje a los ${x} segundos!`);
    }else if (x === 4){
        console.log(`El segundo mensaje a los ${x} segundos!`);
    }else if (x === 6){
        console.log(`El tercer mensaje a los ${x} segundos!`);
        clearInterval(mensajes)
        console.log(`Proceso completado`);
    }
}, 1000);
