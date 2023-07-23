/*
  *================== Método map() ==================*
  El método map() permite iterar (recorrer) un Array y
  modificar cada uno de sus elementos, retornando un
  nuevo Array con los elementos modificados y la misma
  longitud que el original.

  Éste método recibe una función que se llama para
  cada elemenento.
  El 1er argumento de esa función es el elemento, el 2do
  es el index (índice) y el 3ero el array mismo.

  - Sintaxis:
    map((element, index, array) => {...})

  ? Diferencias entre map() y forEach() ?
  La diferencia principal es que el método map() devuelve
  un nuevo Array modificado, mientras que el método
  forEach() no devuelve nada.
*/

const numeros = [1, 3, 5, 7]

const numerosPares = numeros.map((elemento, index, array) => {
  return elemento * 2 // Cada elemento se multiplica por 2
})

console.log(numerosPares)



/*
  El método map() se utiliza mucho con Arrays de Objetos
  Ejemplo:
*/

const mascotas = [
  { nombre: 'Teddy', edad: 1, tipo: 'perro' },
  { nombre: 'Benji', edad: 2, tipo: 'gato' },
  { nombre: 'Pelusa', edad: 4, tipo: 'perro' },
  { nombre: 'Chiy', edad: 3, tipo: 'loro' }
]


// Obteniendo un Array de las edades de las mascotas
const edadesMascotas = mascotas.map(mascota => mascota.edad)
console.log(edadesMascotas)


// Obteniendo el nombre de todas las mascotas
const nombresMascotas = mascotas.map(mascota => mascota.nombre)
console.log(nombresMascotas)


// Obteniendo las mascotas con su respectivo índice
const indiceMascota = mascotas.map((mascota, index) => {
  return `${index + 1} - ${mascota.nombre}`
})

console.log(indiceMascota)
