/*
  *======================== Método every() ========================*
  Él método every() determina si todos los elementos de un Array
  satisfacen una condición.
  Devuelve true si cumple la condición, caso contrario false.

  - Sintaxis:
    every((element, index, array) => {...})
*/

const array = [1, 30, 39, 29, 10, 13]

const sonMayoresA20 = array.every((elemento, indice, array) => {
  if (elemento > 20) {
    return true
  } else {
    /*
      Retorna false porque todos los elementos tienen que
      cumplir con la condición.
    */
    return false
  }
})

console.log(sonMayoresA20)




// También se puede simplificar de la siguiente manera:
const sonMayoresA1 = array.every(n => n >= 1)
console.log(sonMayoresA1)




// Comprobando si todos los números son pares
const array2 = [56, 92, 18, 88, 12]
const sonMultiplosDe2 = array2.every(n => n % 2 === 0)
console.log(sonMultiplosDe2)
