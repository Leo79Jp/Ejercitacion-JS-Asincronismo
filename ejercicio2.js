// Ejercicio 2: Uso de `clearTimeout` y `clearInterval`
// Crea un temporizador que muestre "¡Tiempo de descanso!" en la consola después de 10 segundos.
// Si el usuario realiza una acción (como presionar una tecla), el temporizador debe ser cancelado usando `clearTimeout`.
// Luego, escribe un programa que muestre "Cargando..." en la consola cada 2 segundos, pero que detenga este mensaje después de que se haya mostrado 3 veces, utilizando `setInterval` y `clearInterval`.


const temporizador = setInterval(() => {
    
    console.log('Tiempo de descanso!');
    clearInterval(temporizador)
}, 10000)

const restablecerTemporizador = ()=>{
    clearTimeout(temporizador)
    console.log(`El temporizador fue cancelado por una accion del usuario! `);
}

window.onload = function (){
    document.addEventListener('mousemove', restablecerTemporizador)
    document.addEventListener('keydown', restablecerTemporizador)
}

let x = 0 
const mensaje = setInterval(() => {
    ++x
    console.log(`Cargando...`);
    if ( x === 3){
        clearInterval(mensaje)
        console.log(`El mensaje se detuvo!`);
    }
}, 2000);
