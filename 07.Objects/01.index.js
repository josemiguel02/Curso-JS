/*
  #============================ Objects (Objetos) ============================#
  Se utiliza para almacenar varias colecciones con claves y valores.
  Los objetos se pueden crear utilizando el constructor Object() o el
  inicializador de objetos / sintaxis literal.
*/

/*
  - 1era Forma para declarar un Objeto literal.
  Los objetos se forman por: clave => valor
*/
const usuario = {
  nombre: 'José Miguel',
  apellidos: 'Domínguez Pérez',
  edad: 22,
  esDesarrollador: true
}

console.log(usuario)


// Anidando Objetos
const movil = {
  altura: 6.3,
  anchura: 3.2,
  marca: 'Xiaomi',
  modelo: 'Redmi Note 8',
  contactos: ['Gorka', 'Anonimo', 'Desconocido'],
  tarjeta: {
    marca: 'Kingston',
    almacenamiento: 16
  }
}

console.log(movil)



/*
  ~ 2da Forma para declarar un Objeto literal.
  Se puede usar comillas para la clave.
*/
const obj = {
  'name-brand': 'foo',
  'Content-Type': 'application/json'
}

console.log(obj)



// Para acceder a valores de un Objeto se utiliza la clave.
console.log(usuario['nombre'])


// O también con la Nomenclatura del punto
console.log(movil.marca)


// Se puede obtener el valor de una propiedad con una variable
let prop = 'altura'
console.log(movil[prop])
