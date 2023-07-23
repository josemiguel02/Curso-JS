/*
  *========================== Funciones ==========================*
  Las Funciones en JavaScript son un conjunto de instrucciones que
  realiza una tarea, procedimiento o calcula un valor.

  Además se puede pasar valores (parámetros) a una función, y la
  función puede devolver (retornar) un valor, para devolver un valor
  en una función debe tener una sentencia return, que especifique
  el valor a devolver.

  Para usar una función, debes declararla en algún lugar del ámbito
  desde el que deseas llamarla.

  @ Sintaxis
    function name(param1, param2) {
      statements
    }
*/


/*
  - Declarando una Función
  Para declarar una función hay que utilizar la palabra
  reservada function, seguida de:
    # El nombre de la función.
    # Una lista de parámetros de la función, entre paréntesis y separados por comas.
    # Las declaraciones de JavaScript que definen la función, encerradas entre llaves {}.
*/

function saludar() {
  console.log('Hola!')
}

// Llamando a la función declarada
saludar()




/*
  ! Declarando una función con parámetros
  La función saludarPorNombre() toma un parámetro llamado nombre.
*/
function saludarPorNombre(nombre) {
  console.log(`Hola ${nombre}!`)
}

// Llamando a la función
saludarPorNombre('José Miguel')

// Pasando los parámetros de la función con variables
let nombre = 'Jeffrey'
saludarPorNombre(nombre)




/*
  * Retornando (Devolver) un valor de una función
  La función sumar() toma dos parámetros que son (n1, n2) y
  devuelve la suma de estos con la palabra clave return.
*/
function sumar(n1, n2) {
  return n1 + n2
}


/*
  Ahora el valor retornado por la función lo asignamos a la variable resultado
*/
let resultado = sumar(10, 20)
console.log(resultado)



/*
  Parámetros predeterminados en una función
  Permiten que los parámetros se inicien con valores predeterminados si no se pasa
  ningún valor o si se pasa undefined.
*/
function multiplicar(n1 = 5, n2 = 3) {
  return n1 * n2
}

// Como no se le pasa ningún valor toma los valores predeterminados
let resultado2 = multiplicar()
console.log(resultado2)




/*
  Pasando objetos cómo parámetros a una función
*/
function saludarPersona(objPersona) {
  console.log(`Hola, ${objPersona.nombre} ${objPersona.apellido}!`)
}

const persona = {
  nombre: 'Kurt',
  apellido: 'Cobain'
}

saludarPersona(persona)




/*
  Usando Desestructuración en los parámetros de una función
*/
function despedirPersona({ nombre, apellido }) {
  console.log(`Adiós ${nombre} ${apellido} :c`)
}

const persona2 = {
  nombre: 'Chris',
  apellido: 'Cornell'
}

despedirPersona(persona2)




/*
  Parámetros Rest en una función
  La sintaxis de los parámetros rest nos permiten representar un número
  indefinido de argumentos como un array.
*/
function restar(...restoParametros) {
  return restoParametros.reduce((a, b) => a - b)
}

let resultado3 = restar(100, 20, 10, 5)
console.log(resultado3)
