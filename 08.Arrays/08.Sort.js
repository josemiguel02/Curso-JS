/*
  #========================= Método sort() =========================#
  El método sort() ordena los elementos de un Array mediante una
  función de comparación que recibe cómo argumento y devuelve el
  Array ordenado.

  El método sort() puede ordenar valores negativos, cero y positivos
  en el orden correcto. Cuando compara dos valores, los envía a
  nuestra función de comparación y luego ordena los valores de
  acuerdo al resultado devuelto.

    Si el resultado es negativo, a se ordena antes que b. => -1
    Si el resultado es positivo, b se ordena antes de a. => 1
    Si el resultado es 0, nada cambia. => 0

  - Sintaxis
    sort((firstElement, secondElement) => {...})

  !NOTA: Éste método muta el Array Original.
*/


const estudiantes = [
  { id: 1, nombre: 'Leire', edad: 35 },
  { id: 2, nombre: 'Gorka', edad: 34 },
  { id: 3, nombre: 'José', edad: 22 },
  { id: 4, nombre: 'Amaia', edad: 20 }
]


// Ordenar las edades de los estudiantes de manera ascendente
estudiantes.sort((primerEst, segundoEst) => {
  /*
    La edad del 1er estudiante equivale a 35,
    entonces es mayor que la del 2do estudiante.
    Por lo tanto retorna un número (+) y el
    2do estudiante se ordena antes que el 1ero.
  */

  if (primerEst.edad > segundoEst.edad) {
    return 1
  } else {
    return -1
  }
})

console.log(estudiantes)


// Ordenar las edades de los estudiantes de manera descendente
estudiantes.sort((primerEst, segundoEst) => {
  if (primerEst.edad < segundoEst.edad) {
    return 1
  } else {
    return -1
  }
})

console.log(estudiantes)





// También se puede ordenar restando los valores de los elementos.
const numeros = [1, 30, 4, 21, 1000]

/*
  Indica que la resta da cómo resultado un número (+), numero2
  se ordena antes del numero1, o sea de manera descendente.
*/
numeros.sort((numero1, numero2) => numero2 - numero1)
console.log(numeros)



/*
  Indica que la resta da cómo resultado un número (-), numero1
  se ordena antes del numero2, o sea de manera ascendente.
*/
numeros.sort((n1, n2) => n1 - n2)
console.log(numeros)
