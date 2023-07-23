/*
  @====================== Método find() ======================@
  El método find() devuelve el primer elemento de un Array que
  cumple la condición de la función proporcionada.

  Éste método recibe una función cómo argumento, y dicha
  función recibe el elemento, índice y el array.

  - Sintaxis:
    find((element, index, array) => {...} )

  !NOTA: Si no encuentra ningún elemento devuelve undefined.
*/


const frutas = ['Manzana', 'Pera', 'Banana', 'Uva']

const frutaEncontrada = frutas.find(elemento => {
  if (elemento === 'Uva') {
    return true
  }
})

// console.log(frutaEncontrada)



//# Éste método se utiliza mucho con Arrays de Objetos, ejemplo:
const estudiantes = [
  { id: 1, nombre: 'Leire', edad: 35 },
  { id: 2, nombre: 'Gorka', edad: 34 },
  { id: 3, nombre: 'José', edad: 22 },
  { id: 4, nombre: 'Amaia', edad: 20 }
]

const estudianteEncontrado = estudiantes.find(estudiante => {
  if (estudiante.id === 3) {
    return true
  }
})

// console.log(estudianteEncontrado)



//- Se puede simplificar de la siguiente manera:
const estudianteEncontrado2 = estudiantes.find(estudiante => estudiante.id === 4)

console.log(estudianteEncontrado2)
