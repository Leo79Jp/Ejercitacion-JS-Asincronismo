// Ejercicio 4: Estructuras de control de ejecución: `try`, `catch`, `finally`
// Crea una función que intente dividir dos números proporcionados por el usuario.
// Usa `try` para intentar realizar la operación, y si el divisor es cero, lanza un error manualmente utilizando `throw`.
// Captura el error en un bloque `catch` y muestra un mensaje de error en la consola.
// Independientemente del resultado, muestra "Operación finalizada" en la consola dentro de un bloque `finally`.

const prompt = require('prompt-sync')({ siging: true})
primerNumero = parseInt(prompt('Ingrese el primer numero: '))
segundoNumero = parseInt(prompt('Ingrese el segundo numero: '))

const dividirNumeros = (a, b) => {
    try {
      if (b === 0) {
        throw new Error('No se puede dividir por cero')
      }
      const resultado = a / b
      console.log(`El resultado de la división es: ${resultado}`)
    } catch (error) {
      console.log('Error : ' + error.message)
    } finally {
      console.log('Operación finalizada')
    }
  }
  
  dividirNumeros(primerNumero, segundoNumero)
//   dividirNumeros(10, 0)
  