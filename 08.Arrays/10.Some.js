/*
  @========================= Método some() =========================@
  El método some() comprueba si al menos un elemento de un Array
  cumple con la condición implementada por la función proporcionada.

  - Sintaxis:
    some((element, index, array) => {...})
*/

const array = [1, 2, 3, 4, 5]

const nPares = array.some(numero => numero % 2 === 0)
console.log(nPares)




// Comprobando si un elemento existe en un Array de Objetos
const mascotas = [
  { nombre: 'Teddy', edad: 1, tipo: 'perro' },
  { nombre: 'Benji', edad: 2, tipo: 'gato' },
  { nombre: 'Pelusa', edad: 4, tipo: 'perro' },
  { nombre: 'Chiy', edad: 3, tipo: 'loro' }
]

const existeTeddy = mascotas.some(mascota => mascota.nombre === 'Teddy')
console.log(existeTeddy)
