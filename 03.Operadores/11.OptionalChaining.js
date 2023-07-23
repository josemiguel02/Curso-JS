/*
  *============ Optional Chaining Operator (Operador de Encadenamiento Opcional) ============*
  El Operador de Encadenamiento Opcional (?.) es una forma segura y concisa de acceder a las
  propiedades anidadas de los objetos, sin tener que validar explícitamente cada referencia
  en las propiedades anidadas sea válida.

  Funciona de manera similar a el operador de encadenamiento (.), excepto que en lugar de
  causar un error si una referencia es null o undefined, la expresión hace una evaluación
  de corto circuito con un valor de retorno de undefined.
*/

const usuario = {
  nombre: 'Dayan',
  email: 'dayan@gmail.com'
}

// console.log(usuario.direccion.calle) // → TypeError

/*
  Detiene la evaluación y devuelve undefined si el valor antes del ?. es undefined o null.
*/
console.log(usuario.direccion?.calle)

const mascota = { nombre: 'Teddy' }
console.log(mascota.raza?.tipo)



/*
  - Evaluación de Corto Circuito
  Como se dijo antes, el ?. detiene inmediatamente (“cortocircuito”) la evaluación si la
  parte izquierda es null o undefined.

  Entonces, si a la derecha de ?. hay funciones u operaciones adicionales, estas no
  se ejecutarán.
*/
const factura = {}
console.log(factura.compra?.detalle?.precio?.total)



/*
  !Uso con Arrays
*/
const array = [1, 2]
console.log(array[2]?.[5]?.[3])

const array2 = null
console.log(array2?.[1])



/*
  ~ Uso con Funciones
*/
const gato = {}
const persona = {}

gato.meow?.()
persona.saludar?.()



/*
  # Combinando con el Operador de Fusión Nula
  Se puede usar después del Encadenamiento Opcional para generar un valor predeterminado
  cuando no se encuentre ninguno.
*/
const cliente = { nombre: 'Carl' }
let ciudad = cliente.pais?.ciudad ?? 'No tiene asignada una ciudad'
let detalle = cliente.detalle?.articulo?.mostrar?.() ?? 'No tiene detalles'

console.log(ciudad)
console.log(detalle)
