/*
  ?============ Formas de controlar los bucles con continue y break ============?
*/


/*
  # continue => termina la ejecución de las sentencias de la iteración
  actual del bucle actual y continua la ejecución del bucle
  con la próxima iteración.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 3) {

    /*
      Se indica que termine la ejecución del bucle actual
      y continue con la proxima iteración
    */
    continue
  }

  console.log(numeros[i])
}



/*
  * break =>  termina la instrucción de bucle.
*/

let i = 0

while (i < 6) {
  if (i === 3) {
    // Con break se indica que se salga del Bucle
    break
  }

  console.log(i)
  i++
}
