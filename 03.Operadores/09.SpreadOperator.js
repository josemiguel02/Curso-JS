/*
  #================== Spread Operator (Operador de Propagación) ==================#
  Sirve para agrupar los elementos de un Array dento de otro Array.

  - Ejemplo:
    [...Array]

  Lo que hace es extraer los items de un Array u Objeto para
  agregarlo a otro, es una alternativa al método concat().
*/

let ciudades = ['Madrid', 'Barcelona', 'Valencia']
let numeros = [1, 2, 3]

let agrupar = ['Test', 2021, ...ciudades, ...numeros]
console.log(agrupar)




//- Sin Spread Operator
let agrupar2 = ['Sin spread', 2021, ciudades, numeros]
console.log(agrupar2)




//! También se puede usar con Objetos
const libro = {
  titulo: 'El señor de los anillos',
  autor: 'J.R.R. Tolkien',
  anio: 1954
}

let agruparObj = { id: 1, ...libro, editorial: 'Minotauro' }
console.log(agruparObj)
