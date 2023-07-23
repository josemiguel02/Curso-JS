/*
  -================== Métodos de Objetos ==================-
*/

const sistemaO = {
  nombre: 'Ubuntu',
  version: 22.04,
  licencia: 'Open Source'
}


/*
  Object.keys() => devuelve un Array de los nombres de las propiedades
  (claves) de un objeto.
*/
console.log('Object.keys() ->', Object.keys(sistemaO))

/*
  Este método puede usarse para generar repeticiones a través de
  las claves y los valores de un objeto.
*/
Object.keys(sistemaO).forEach(clave => {
  let valor = sistemaO[clave]
  console.log(`Object.keys() + forEach() -> ${clave}: ${valor}`)
})




/*
  Object.values() => devuelve un Array que contiene los valores
  de un objeto.
*/
const sesion = {
  id: 1,
  tiempo: '10 horas',
  dispositivo: 'movil',
  navegador: 'Chrome'
}

console.log('Object.values() ->', Object.values(sesion))




/*
  Object.entries() => devuelve un Array anidado con los
  pares propios [clave, valor] de un objeto.
*/
const empleado = {
	nombre: 'Jim',
  puesto: 'Desarrollador',
  salario: 1200
}

console.log('Object.entries() ->', Object.entries(empleado))


//- Este método también puede usar con forEach()
Object.entries(empleado).forEach(pares => {
  const [clave, valor] = pares
  console.log(`Object.entries() + forEach() -> ${clave}: ${valor}`)
})




/*
  Object.hasOwn() => devuelve un booleano indicando si un objeto tiene
  la propiedad indicada como propiedad propia.
*/
console.log('Object.hasOwn() ->', Object.hasOwn(empleado, 'salario'))




/*
  hasOwnProperty() => devuelve un booleano indicando si un objeto tiene
  la propiedad indicada como propiedad propia (en lugar de heredarla).

  !NOTA: Solo comprueban las propiedades que pertenecen a propiedades
  propias, ignorando las propiedades heredadas, cómo la propiedad
  constructor que hereda.
*/
console.log('hasOwnProperty() ->', empleado.hasOwnProperty('prop'))




/*
  Objeto.freeze() => congela un objeto, un objeto congelado impide
  la modificación de propiedades, valores y evita que se agreguen
  nuevas propiedades o que se eliminen.
*/
const admin = { nombre: 'Mike' }
const objCongelado = Object.freeze(admin)

// No cambia el valor porque está congelado
objCongelado.nombre = 'Steven'
objCongelado.nuevaProp = true

console.log(objCongelado)
