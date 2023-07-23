/*
  *=========================== Operador Condicional Ternario ===========================*
  El Operador Condicional (Ternario) es el único operador en JavaScript que tiene tres
  operandos.
  Este operador se usa con frecuencia como atajo para la instrucción if...else.

  - Sintaxis:
    condición ? valor1 : valor2;

  Si la condición es verdadera devuelve valor1, de lo contrario devuelve valor2.
*/


true ? 'Es verdadero' : 'Es falso'                // → 'Es verdadero'
(32 >= 18) ? 'Mayor de edad' : 'Menor de edad'    // → 'Mayor de edad'

let estado = false
estado ? 'Online' : 'Offline'   // → 'Offline'



// Operador Condicional Ternario Anidado
let numero = 3

numero === 1
  ? 'Uno'
  : numero === 2
  ? 'Dos'
  : numero === 3
  ? 'Tres'
  : 'Otro número';      // → 'Tres'
