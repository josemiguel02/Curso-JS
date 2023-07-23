/*
  ?====================== Estructuras de repetición ======================?
  Las más utilizadas son: for, while, do while.
*/


/*
  - for => La instrucción for crea un bucle que consta de 3
  expresiones opcionales, entre paréntesis y separadas por punto y coma,
  seguidas de una instrucción bloque que se ejecutará en el bucle.

  Ejemplo:
    for (inicialización; condición; incremento o decremento) {
      ...
    }
*/

for (let i = 0; i < 10; i++) {
  console.log(i)
}


//* Recorriendo un Array
const paises = ['Ecuador', 'Chile', 'Colombia', 'Perú', 'Mexico']

for (let index = 0; index < paises.length; index++) {
  console.log(paises[index])
}




/*
  # for of => Crea un bucle que itera sobre objetos iterables, que
  incluyen: String, Array, objetos similares a matrices
*/

const numeros = [1, 2, 3, 4, 5]

for (let elemento of numeros) {
  console.log(elemento)
}




/*
  ! for in => Itera sobre todas las propiedades enumerables de un objeto.
*/
const object = { a: 1, b: 2, c: 3, d: 4 }

for (clave in object) {
  console.log(clave)
  console.log(object[clave])
}
