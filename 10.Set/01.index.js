/*
  !============================= Set o Conjunto =============================!
  El objeto Set permite almacenar valores únicos (no se repiten) de cualquier
  tipo, ya sea de tipo primitivos o referencias a objetos.

  Los objetos Set son colecciones (conjunto) de valores únicos.
  Puede iterar a través de los elementos de un conjunto, un valor en un Set
  solo puede ocurrir una vez; es único en la colección del Set.
*/

// Declarando un Set
const miSet = new Set()


// Declarando un Set con sus valores
const miSet2 = new Set([1, 2, 3, 4, 5])
console.log(miSet2)


/*
  Almacenando valores de un array a un Set
  No se almacena los valores repetidos del array, porque Set es un objeto
  de valores únicos.
*/
const array = [1, 1, 2, 2, 3, 3]
const miSet3 = new Set(array)
console.log(miSet3)
