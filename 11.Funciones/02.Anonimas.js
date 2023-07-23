/*
  !===================== Funciones Anónimas =====================!
  Las Funciones Anónimas son funciones que no tiene ningún nombre
  asociado.

  Normalmente usamos la palabra clave function antes del nombre de
  la función para definir una función, sin embargo, en funciones
  anónimas usamos solo la palabra clave function sin el nombre
  de la función.
*/


/*
  Para declarar una funcion anónima y llamarla a la vez usamos
  dos paréntesis seguidos, donde el 1er paréntesis va la
  funcion anónima y el 2do la ejecuta.

  - Sintaxis:
    (
      function() {
        statements
      }
    )();
*/

;(
  function () {
    console.log('Hola desde una función anónima')
  }
)()



// Función Anónima con parámetros
;(  // punto y coma para que no interfiera con la función anterior.
  function (nombre) {
    console.log(`Hola ${nombre}!`)
  }
)('José Miguel')



/*
  También se puede asignar una funcion anónima a una variable
  para luego llamarla.
*/
let mensaje = function () {
  console.log('Hola Mundo!')
}

mensaje()
