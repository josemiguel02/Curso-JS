/*
  *================== Métodos de Arrays 2 ==================*
*/

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']


/*
  concat() => se utiliza para combinar dos o más Arrays.
  Este método no cambia los Arrays, sino que devuelve uno nuevo.
*/
const array3 = array1.concat(array2)
console.log('concat() ->', array3)




/*
  slice() => obtiene partes de un Array, acepta 2 valores:
    1ero valor del indice donde va a empezar.
    2do valor del indice donde termina, en el 2do valor
    solo llega un indice antes del indicado.
  Y devuelve una copia superficial del Array original.

  !NOTA: NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
*/
console.log('slice() ->', array3.slice(1, 4))

//- slice() con índices negativos
console.log('Índice negativo con slice() ->', array3.slice(-5, -3))




/*
  forEach => éste método ejecuta una función indicada una vez
  para cada elemento de un Array.
*/
array3.forEach(elemento => {
  console.log('forEach() ->', elemento)
})




/*
  indexOf() => devuelve el primer índice en el que se puede
  encontrar un elemento dado en el Array.

  !NOTA: Si no ecuentra el índice del elemento devuelve -1
*/
const array4 = ['a', 'b', 'c', 'd']
console.log('indexOf ->', array4.indexOf('c'))




/*
  findIndex() => retorna el índice del primer elemento de un Array
  que cumpla con la función de prueba proporcionada.
  En caso contrario devuelve -1.

  - Sintaxis:
    findIndex((element, index, array) => {...})
*/

const productos = [
  { id: 1, nombre: 'latop' },
  { id: 2, nombre: 'mouse' },
  { id: 3, nombre: 'teclado' },
  { id: 4, nombre: 'audifonos' },
]

const indiceProd = productos.findIndex(producto => {
  return producto.nombre === 'audifonos'
})

console.log('findIndex() ->', indiceProd)




/*
  includes() => determina si un Array incluye un determinado elemento,
  devuelve true o false según corresponda.
*/
const frutas = ['manzana', 'uva', 'frutilla']
console.log('includes() ->', frutas.includes('uva'))



/*
  join() => une todos los elementos de un Array en una cadena de string,
  acepta un separador cómo argumento y devuelve esa cadena.
*/
const elementos = ['Agua', 'Aire', 'Tierra', 'Fuego']
console.log('join() ->', elementos.join(' - '))
