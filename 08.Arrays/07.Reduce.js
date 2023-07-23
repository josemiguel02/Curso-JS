/*
  -=================== Método reduce() ===================-
  El método reduce() ejecuta una función reductora sobre
  cada elemento de un Array, devolviendo como resultado
  un único valor.

  La función reductora recibe cuatro argumentos:
    1.Valor Anterior o Acumulador (acc)
    2.Valor Actual (cur)
    3.Índice Actual (idx)
    4.Array (src)

  * Sintaxis:
    reduce((previousValue, currentValue, currentIndex, array) => {...})


  @ También se puede proporcionar un 2do argumento a reduce(), que es el valor inicial
  el cual será el Valor Anterior o Acumulador.

    reduce((previousValue, currentValue, currentIndex, array) => {...}, initialValue)
*/


const numeros = [1, 2, 3, 4]

const sumaTotal = numeros.reduce((valorAnterior, valorActual, indice, array) => {
  /*
    1era llamada:
          1       +     2
    valorAnterior + valorActual = 3
  */

  /*
    2da llamada:
          3       +      3
    valorAnterior + valorActual = 6
  */

  /*
    3era llamada:
          6       +     4
    valorAnterior + valorActual = 10 => Valor Final
  */

 return valorAnterior + valorActual
})

console.log(sumaTotal)




const numeros2 = [1, 2, 3, 4]

//# Y si proporcionas un valorInicial, el resultado sería como este:
const sumaTotal2 = numeros2.reduce((valorAnterior, valorActual, indiceActual, array) => {

  /*
    1era llamada

          8       +     1
    valorAnterior + valorActual = 9
  */

  /*
    2da llamada

          9       +     2
    valorAnterior + valorActual = 11
  */

  /*
    3era llamada

          11      +     3
    valorAnterior + valorActual = 14
  */


  /*
    4ta llamada

          14      +     4
    valorAnterior + valorActual = 18 => Valor Final
  */

  return valorAnterior + valorActual
}, 8)

console.log(sumaTotal2)




//! Ejemplo con Array de Objetos:
const mascotas = [
  { nombre: 'Teddy', edad: 1, tipo: 'perro' },
  { nombre: 'Benji', edad: 2, tipo: 'gato' },
  { nombre: 'Pelusa', edad: 4, tipo: 'perro' },
  { nombre: 'Chiy', edad: 3, tipo: 'loro' }
]


const mascotasIndexadas = mascotas.reduce((valorAnterior, valorActual) => {
  return {
    ...valorAnterior, // => {}
    [valorActual.nombre]: valorActual
  }
}, {})

console.log(mascotasIndexadas)
console.log(mascotasIndexadas['Teddy'])




//* Ejemplo con Array anidados
const arrayAnidado = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const arrayPlano = arrayAnidado.reduce((valorAnterior, valorActual) => {
  return valorAnterior.concat(valorActual)
}, [])

console.log(arrayPlano)
