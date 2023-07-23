/*
  -=============================== Arrays ===============================-
  Una lista o array permite almacenar una colección de varios elementos
  bajo un único nombre de variable y tiene miembros para realizar
  operaciones de matriz comunes.

  @ Características
  * Las matrices de JavaScript son de tamaño variable y pueden contener
  una combinación de diferentes tipos de datos.

  * Las matrices de JavaScript están indexadas desde cero.

  * Las operaciones de copia de matriz de JavaScript crean copias
  superficiales.
*/

/*
  ! 1era Forma para declarar un Array o Lista.
*/
const lista1 = [22, true, 'Hola', null, undefined] // Puede contener diferentes tipos de datos
console.log(lista1)



/*
  # 2da Forma para declarar un Array o Lista.
*/
const lista2 = new Array(5, false, 'Hola 2', null, undefined)
console.log(lista2)



/*
 * 3da Forma para declarar un Array o Lista.
*/
const lista3 = new Array(4) // Le indicamos la longitud de los elementos

// Asignando valores a los elementos del Array.
lista3[0] = 'Primer elemento, index 0'
lista3[1] = 'Segundo elemento, index 1'
lista3[2] = 'Tercer elemento, index 2'
lista3[3] = 'Cuarto elemento, index 3'

console.log(lista3)

// O también podemos agregar elementos con el método fill()
const lista4 = new Array(10).fill('Hello')
console.log(lista4)



// - Listas Anidadas
const lista5 = [lista1, lista2, lista3]
console.log(lista5)



/*
  @ Accediendo a valores de un Array
  Para acceder a los valores de un array es a través de su posición (index).
  array[index] => elemento
*/
let array = [1, true, 'hola', { id: 1 }, undefined]

console.log(array[0]) // Elemento 1
console.log(array[1]) // Elemento 2
console.log(array[2]) // Elemento 3
