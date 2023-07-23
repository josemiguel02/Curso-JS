/*
  ~============================ Nullish Coalescing Operator ============================~
  El Operador Coalescente Nulo o Fusión Nula (??) es un operador lógico que devuelve
  su operando del lado derecho cuando su operando del lado izquierdo es null o undefined,
  y de lo contrario devuelve su operando del lado izquierdo.

  - Sintaxis:
    leftExpr ?? rightExpr;

  !Diferencias con el Operador OR (||)
  El operador OR realiza algo similar, pero el operador OR actúa de forma diferente,
  ya que selecciona el primer valor no "falsy".
  En Javascript existen varios valores "falsy", cómo: 0, NaN, false, "", null y undefined.

  La diferencia es que el Operador de Fusión Nula realmente evalúa sólo los valores
  null y undefined.
*/

let mensaje = null ?? 'Mensaje por defecto'
console.log(mensaje)    // → 'Mensaje por defecto'


let usuario = undefined ?? 'Amaia'
console.log(usuario)    // → 'Amaia'


let edad = 0 ?? 20
console.log(edad)       // → 0

let apellido = '' ?? 'Cobain'
console.log(apellido)   // → ''
