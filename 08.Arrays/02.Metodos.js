/*
  ?=================== Métodos de Arrays o Listas ===================?
*/

let array = ['laptop', 'mouse', 'teclado']


//- Métodos para agregar elementos a un Array
/*
  push() => agrega uno o más elementos al final de un Array y devuelve
  la nueva longitud del Array.
*/
productos.push('monitor')

// Agregando más de un elemento
productos.push('auriculares', 'SSD')
console.log('push() ->', productos)



/*
  unshift() => agrega uno o más elementos al inicio de un Array y
  devuelve la nueva longitud del Array.
*/
productos.unshift('webcam', 'pendrive')
console.log('unshift() ->', productos)



//! Métodos para eliminar elementos de un Array
/*
  pop() => elimina el último elemento de un Array y devuelve ese
  elemento eliminado.
*/
let array2 = [1, 2, 3, 4, 5, 6]
array2.pop()
console.log('pop() ->', array2)


/*
  shift() => elimina el primer elemento de un Array y devuelve ese
  elemento eliminado.
*/
array2.shift()
console.log('shift() ->', array2)




//@ Método para eliminar, modificar o agregar elementos de un Array
/*
  splice() => cambia el contenido de un Array eliminando, reemplazando o
  agregando nuevos elementos en su lugar.
*/

//- Eliminando elementos con splice(index, numeroElementosAEliminar)
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril']

meses.splice(2, 1) // Se elimina el elemento con el indice 2
console.log('Eliminando con splice() ->', meses)


//@ Añadiendo elementos con splice(index, 0, valores)
meses.splice(3, 0, 'Nuevo mes') // Agrega nuevo elemento en el indice 3
console.log('Agregando con splice() ->', meses)


//! Modificando elementos con splice(index, 1, valores)
meses.splice(3, 1, 'Mes modificado') // Modifica el elemento del indice 3
console.log('Modificando con splice() ->', meses)
