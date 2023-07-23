/*
  @=================== Métodos de Set o Conjunto ===================@
*/

const miSet = new Set()


/*
  add() => añade un nuevo elemento con un valor específico al final
  del objeto Set.
*/
miSet.add(1)
miSet.add(2)
miSet.add(3)
miSet.add('Hola')

/*
  !NOTA: no se añadirá un valor repetido, ya que Set es un objeto
  de valores únicos.
*/
miSet.add(2)
console.log('add() ->', miSet)




/*
  delete() => elimina el elemento especificado del objeto Set.
*/
miSet.delete('Hola')
console.log('delete() ->', miSet)




/*
  clear() => remueve todos los elementos del objeto Set.
*/
miSet.clear()
console.log('clear() ->', miSet)




/*
  has() => retorna un booleano indicando si un elemento existe
  en el objeto Set o no.
*/
const miSet2 = new Set(['manzana', 'pera', 'uva'])
console.log('has() ->', miSet2.has('uva'))




/*
  values() => retorna un objeto de tipo Iterator, que contiene los
  valores de los elementos del objeto Set.
*/
console.log('values() ->', miSet2.values())




/*
  size => la propiedad size devuelve el número de elementos que
  hay en el objeto Set.
*/
console.log('size =>', miSet2.size)




// Iterando un objeto Set con el método forEach().
miSet2.forEach(valor => {
  console.log('forEach() ->', valor)
})
