/*
  -================== Variables ==================-
  Para declarar variables se usa la palabra reservada:
  var, let o const.
*/

// Declarando variable con var
var myVariable

// Asignando un valor
myVariable = 'Hola, soy una variable VAR'

// Reasignando otro valor
myVariable = true


// Declarando variable con let
let edad = 22
let numeroGrande = 100n
let simbolo = Symbol()
let nulo = null
let sinDefinir = undefined



/*
  !============== Diferencias entre: var, let, const ==============!
  La diferencia es que var y let sirve para declarar variables, por
  lo tanto sus valores se pueden volver a reasignar y con const
  solo se puede asignar su valor una sola vez.

  -Ejemplo:
*/

const myConstante = 'Hola, soy una constante'
myConstante = 'Reasignando valor dará error'

console.log(myConstante) // Error :c
