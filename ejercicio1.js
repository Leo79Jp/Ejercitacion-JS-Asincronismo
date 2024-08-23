// Ejercicio 1: Uso de `setTimeout` y `setInterval`
// Escribe un programa en el que se imprima un mensaje en la consola después de 3 segundos usando `setTimeout`.
// Luego, implementa un contador que aumente en 1 cada segundo usando `setInterval`, y muestra el valor del contador en la consola.
// Asegúrate de detener el contador después de que llegue a 5, utilizando `clearInterval`.

let x = 0

setTimeout(() => {
  console.log('Esto se ejecuto despues de 3 segundos')
  const contador = setInterval(() =>{
    console.log(`Paso ${++x} segundo/s.`);
    if (x === 5){
        clearInterval(contador)
        console.log('Contador detenido.');
    }
},1000)

}, 3000)

