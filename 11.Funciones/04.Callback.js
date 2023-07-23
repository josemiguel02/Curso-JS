/*
  -===================== Funciones Callback =====================-
  Una Función Callback es aquella que se pasa como argumento a
  otra función para que sea "llamada de nuevo" (call back) después
  de que se haya completado una tarea.

  Una función que acepta otras funciones como argumentos es llamada
  función de orden-superior (High-Order), y contiene la lógica para
  determinar cuándo se ejecuta la función callback.
*/

const paises = ['Ecuador', 'Mexico', 'Colombia']

function modificar(array, callback) {
  // Primero hacemos algo
  array.push('Argentina')

  // Luego ejecutamos el callback
  callback()
}


//! Declarando una Función Callback
modificar(paises, function () {
  console.log('Se ha modificado el array!')
})

console.log(paises)




/*
  # Callback con Función Flecha
*/
const usuarios = [
  { id: 1, nombre: 'Leire', edad: 22 },
  { id: 2, nombre: 'Gorka', edad: 19 },
  { id: 3, nombre: 'José', edad: 17 },
  { id: 4, nombre: 'Amaia', edad: 16 }
]


const obtenerPorID = (id, callback) => {
  // Primero buscamos por el id
  let usuario = usuarios.find(u => u.id === id)

  // Luego ejecutamos y pasamos el usuario encontrado al Callback
  callback(usuario)
}


/*
  En el Callback recibimos como parámetro el usuario encontrado.
*/
obtenerPorID(4, usuario => {
  console.log('El usuario con ID 4 es:', usuario.nombre)
})




/*
  Las funciones Callback son muy utilizadas con métodos de Array
  Ejemplo:
*/
const callbackEdad = usuario => usuario.edad

// Pasando una función Callback al método map()
const edadUsuarios = usuarios.map(callbackEdad)
console.log(edadUsuarios)
